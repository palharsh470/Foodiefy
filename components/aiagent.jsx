import React, { useState } from "react";
import { View, TextInput, Button, Text, ScrollView, Alert } from "react-native";

export default function ChatBot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = input;
    setInput(""); // Clear input immediately
    setLoading(true);

    // Add user message
    setMessages(prev => [...prev, { sender: "user", text: userMessage }]);

    try {
      const response = await fetch("https://harsh470.app.n8n.cloud/webhook/cc2c687e-f71c-4f96-aea8-3ba064a1be9c", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
          sessionId: "user123",   
          message: userMessage 
        }),
      });

      // Check if response is ok
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
     
      

      // Robust response handling
      let aiReply = "Sorry, I couldn't understand the response.";
      
      if (Array.isArray(data) && data.length > 0) {
        // Handle array response: [{"reply": "Hello!"}]
        if (data[0] && typeof data[0] === 'object' && data[0].reply) {
          aiReply = data[0].reply;
        }
      } else if (data && typeof data === 'object') {
        // Handle direct object response: {"reply": "Hello!"}
        if (data.reply) {
          aiReply = data.reply;
        } else if (data.message) {
          aiReply = data.message;
        } else if (data.response) {
          aiReply = data.response;
        } else if (data.text) {
          aiReply = data.text;
        } else {
          // If it's an object but no expected properties, try to extract any text value
          const values = Object.values(data);
          if (values.length > 0 && typeof values[0] === 'string') {
            aiReply = values[0];
          }
        }
      } else if (typeof data === 'string') {
        // Handle string response
        aiReply = data;
      }
      
      

      // Add AI response
      setMessages(prev => [...prev, { sender: "ai", text: aiReply }]);

    } catch (err) {
      
      
      // Add error message to chat
      setMessages(prev => [...prev, { 
        sender: "ai", 
        text: "Sorry, I'm having trouble connecting right now. Please try again." 
      }]);
      
      // Optional: Show alert for debugging
      // Alert.alert("Error", err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={{ width:"100%",flex: 1, padding: 20 }}>
      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
        {messages.map((msg, index) => (
          <Text
            key={index}
            style={{
              alignSelf: msg.sender === "user" ? "flex-end" : "flex-start",
              backgroundColor: msg.sender === "user" ? "#DCF8C6" : "#E5E5EA",
              marginVertical: 4,
              padding: 8,
              borderRadius: 10,
              maxWidth: '80%',
            }}
          >
            {msg.text}
          </Text>
        ))}
        
        {loading && (
          <Text style={{
            alignSelf: "flex-start",
            backgroundColor: "#E5E5EA",
            marginVertical: 4,
            padding: 8,
            borderRadius: 10,
            fontStyle: 'italic'
          }}>
            Thinking...
          </Text>
        )}
      </ScrollView>

      <View style={{ paddingTop: 10 }}>
        <TextInput
          value={input}
          onChangeText={setInput}
          placeholder="Type your message..."
          style={{ 
            borderWidth: 1, 
            borderColor: '#ccc',
            padding: 10, 
            marginVertical: 10,
            borderRadius: 5
          }}
          multiline
          editable={!loading}
        />

        <Button 
          title={loading ? "Sending..." : "Send"} 
          onPress={sendMessage}
          disabled={loading || !input.trim()}
        />
      </View>
    </View>
  );
}
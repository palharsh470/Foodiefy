import { Text } from "react-native";
import { View } from "react-native";
import ChatBot from "../../components/aiagent";
export default function Support(){
    return(
        <View style={{
            height:"100%",
            justifyContent:"center",
            alignItems:"center"
        }}>
           <ChatBot></ChatBot>
        </View>
    )
}
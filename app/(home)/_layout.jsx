// File: app/(tabs)/_layout.js
import { router, Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { View, StyleSheet, TouchableOpacity, Pressable } from 'react-native';
import { Text } from 'react-native';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserCircle } from 'phosphor-react-native';

export default function TabLayout() {
  
  
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          borderTopWidth: 0,
          height: 80,
          paddingTop: 20,
          paddingBottom: 20,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500',
          marginTop: 4,
        },
        tabBarActiveTintColor: '#D61355',
        tabBarInactiveTintColor: '#C8C8C8',
        tabBarIcon: ({ focused, color, size }) => {
         
          let iconName
          let tittlename = ''
          if (route.name === 'index') { iconName = 'home'; tittlename = "Home" }
          else if (route.name === 'profile') { iconName = 'person'; tittlename = "Profile"; }
          else if (route.name === 'cart') { iconName = 'bag'; tittlename = "Cart"; }
          else if (route.name === 'support') { iconName = 'chatbox-ellipses'; tittlename = "Support"; }

          return (
            <View
              style={{
                backgroundColor: focused ? '#FFE8ED' : 'transparent',
                borderRadius: 15,
                height:"50",
                flexDirection: focused ? 'row' : "column",
                alignItems: 'center',
                justifyContent: 'center',
                paddingHorizontal: focused ? 16 : 0,
                minWidth: 90
              }}
            >
              <Ionicons name={iconName} size={size} color={color} />
              <Text style={{
                color,
                marginLeft: 6,
                fontSize: 12,
                fontWeight: '500',
              }}>{tittlename}</Text>
            </View>
          );
        },
      })}
    >
      <Tabs.Screen name="index" options={{ tabBarShowLabel: false, 
        
      }} />
      <Tabs.Screen name="profile" options={{ tabBarShowLabel: false }} />
      <Tabs.Screen name="cart" options={{ tabBarShowLabel: false, tabBarBadge: 2 }} />
      <Tabs.Screen name="support" options={{ tabBarShowLabel: false, tabBarBadge: 1 }} />
    </Tabs>

  );
}


import AsyncStorage from "@react-native-async-storage/async-storage";
import { use, useEffect, useState } from "react";
import { Text } from "react-native";
import { View } from "react-native";
import { setSourceMapRange } from "typescript";

export default function Profile(){
    const [user,setuser]=useState("")
    useEffect(()=>{
        AsyncStorage.getItem("user").then(function(response){
       setuser(JSON.parse(response))
        }
    )},[])
    return(
        <View style={{
            height:"100%",
            justifyContent:"center",
            alignItems:"center"
        }}>
            <Text style={{
                fontWeight:"bold",
                fontSize:25,
                color:"#D61355"    
            }}>Hello! {user}</Text>
        </View>
    )
}
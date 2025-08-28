import AsyncStorage from "@react-native-async-storage/async-storage";

import { router } from "expo-router";

import { useState } from "react";
import { Image } from "react-native";
import { Text, TextInput, TouchableOpacity, View } from "react-native";



const usersdata = [
    {
        "username": "Harsh",
        "password": "12345"
    },
    {
        "username": "Golu",
        "password": "12345"
    },
    {
        "username": "Aman",
        "password": "12345"
    },
    {
        "username": "Mukesh",
        "password": "1245"
    },
    {
        "username": "Ram",
        "password": "12345"
    },
]

export default function Login() {

    const [user, setuser] = useState("");
    const [pass, setpass] = useState("");
    const [err, seterr] = useState("");




    function handlelogin() {

        if (!user?.trim() || !pass?.trim()) return;

        const userget = usersdata.find(function (item) {
            if ((item.username == user) && (item.password == pass))
                return true;

        })


        
        if (userget) {
            AsyncStorage.setItem("user", JSON.stringify(userget.username)).
                then(function () {
                    router.replace("/")
                })
        }

        else {

            seterr("Invalid username or password")
        }

    }
    return (
        <View>
            <View>
                <Image source={require("../assets/images/loginbg.png")}></Image>
            </View>
            <View style={{
                top: -130,
                backgroundColor: "white",
                padding: 15,
                height: "100%"
            }}>

                <Text style={{
                     color: "#D61355",
                    fontSize: 25,
                    fontWeight: "bold",
                    textAlign: "center",
                    marginVertical: 40
                }}>Login</Text>

                <View style={{
                    gap: 5
                }}>
                    <Text style={{
                        fontSize: 20,
                        fontWeight: "500",
                        textAlign: "left", marginLeft: 15

                    }}>Username</Text>
                    <TextInput style={{
                        margin: 10
                    }} placeholder="Enter Username" value={user} onChangeText={setuser} ></TextInput>
                    <Text style={{
                        fontSize: 20,
                        fontWeight: "500",
                        marginTop: 20,
                        textAlign: "left", marginLeft: 15

                    }}>Password</Text>
                    <TextInput style={{
                        margin: 10,
                    }} secureTextEntry={true} placeholder="Enter Password" value={pass} onChangeText={setpass}></TextInput>


                    <View style={{
                        alignItems:"flex-end"
                    }}>

                    <TouchableOpacity style={{
                        margin: 10,
                        padding: "5",
                        
                        alignItems: "right"
                    }} >

                        <Text style={{
                            fontWeight: "bold",
                            textAlign: "center",
                            color: "#D61355"
                        }}>Forget Password?</Text></TouchableOpacity>
                        </View>

                    <View style={{
                        marginVertical: "10",
                        alignItems: "center",

                    }}>

                        <TouchableOpacity style={{

                            borderRadius: 10,
                            margin: 10,
                            padding: "12",
                            width: "60%",

                            backgroundColor: "#D61355"
                        }} onPress={handlelogin} ><Text style={{
                            color: "white",
                            textAlign: "center",
                            fontSize: 20
                        }}>Login</Text></TouchableOpacity>
                        {
                            err && <Text style={{
                                color: "red"
                            }}>{err}</Text>
                        }


                        <TouchableOpacity style={{

                            gap: 20,
                            flexDirection: "row",
                            margin: 10,
                            padding: "5",
                            width: "80%",
                            top: 25,
                            justifyContent: "center",
                            alignItems: "center"
                        }} onPress={handlelogin} >
                            <Image source={require("../assets/images/google_logo.png")}></Image>
                            <Text style={{
                                fontWeight: "bold",
                                textAlign: "center",
                                fontSize: 18
                            }}>Login with Google</Text></TouchableOpacity>
                    </View>



                </View>
            </View>
        </View>
    )
}


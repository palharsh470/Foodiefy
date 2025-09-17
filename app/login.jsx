import AsyncStorage from "@react-native-async-storage/async-storage";

import { router } from "expo-router";

import { useEffect, useState } from "react";
import { Image } from "react-native";
import { Text, TextInput, TouchableOpacity, View } from "react-native";



export default function Login() {
    
    const [usersdata,setusersdata] = useState([])
    const [user, setuser] = useState("");
    const [pass, setpass] = useState("");
    const [err, seterr] = useState("");
    const [newuser, setnewuser] = useState("");
    const [newpass, setnewpass] = useState("");
    const [newmail,setnewmail]=useState("");

    const [onlogin,setonlogin]=useState(true)

    useEffect(()=>{
        AsyncStorage.getItem("allusersdata").then((response)=>{
            const data=JSON.parse(response)
            if(data)
            setusersdata(data);
        else
            setusersdata([])
        })
        },[])


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

    function handlenewuser(){
        seterr("")
        let olduser=false
        usersdata.forEach((item)=>{
            if(item.username==newuser)
                olduser=true
        })
        if(!olduser){
        const newdata=[...usersdata,{username:newuser,password:newpass,mail:newmail}]
        setusersdata(newdata);
        AsyncStorage.setItem("allusersdata",JSON.stringify(newdata));
        }
        else{
            seterr("User Already Exist")
        }
        setnewuser("");
        setnewpass("");
        setnewmail("");


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

                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-evenly",

                }}>
                    <TouchableOpacity
                    onPress={()=>{seterr(""),setonlogin(true)}}
                    ><Text style={{
                        color: onlogin?"#D61355":"lightgrey",
                        fontSize: 25,
                        fontWeight: "bold",
                        textAlign: "center",
                        marginVertical: 40
                    }}>Login</Text></TouchableOpacity>
                    <TouchableOpacity
                    onPress={()=>{seterr(""),setonlogin(false)}}
                    ><Text style={{
                        color: !onlogin?"#D61355":"lightgrey",
                        fontSize: 25,
                        fontWeight: "bold",
                        textAlign: "center",
                        marginVertical: 40
                    }}>Sign up</Text></TouchableOpacity>


                </View>

                <View>

                    {onlogin && <View style={{
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
                            alignItems: "flex-end"
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
                        </View>
                    </View>}
                    {!onlogin && <View style={{
                        gap: 5
                    }}>

                        <Text style={{
                            fontSize: 20,
                            fontWeight: "500",
                            textAlign: "left", marginLeft: 15

                        }}>Username</Text>
                        <TextInput style={{
                            margin: 10
                        }} placeholder="Create Username" value={newuser} onChangeText={setnewuser} ></TextInput>
                        <Text style={{
                            fontSize: 20,
                            fontWeight: "500",
                            textAlign: "left", marginLeft: 15

                        }}>Email Address</Text>
                        <TextInput style={{
                            margin: 10
                        }} placeholder="Enter Email" value={newmail} onChangeText={setnewmail} ></TextInput>
                        <Text style={{
                            fontSize: 20,
                            fontWeight: "500",
                            marginTop:10,
                            textAlign: "left", marginLeft: 15

                        }}>Password</Text>
                        <TextInput style={{
                            margin: 10,
                        }} secureTextEntry={true} placeholder="Create Password" value={newpass} onChangeText={setnewpass}></TextInput>




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
                            }} onPress={handlenewuser} ><Text style={{
                                color: "white",
                                textAlign: "center",
                                fontSize: 20
                            }}>Create Account</Text></TouchableOpacity>
                        </View>
                        <View style={{
                            
                            height:20
                        }}>
                         {
                             err && <Text style={{
                                 color: "red"
                                }}>{err}</Text>
                            }
                            </View>
                    </View>
                    }
                    <View style={{ alignItems: "center" }}>

                        <TouchableOpacity style={{

                            gap: 20,
                            flexDirection: "row",
                            margin: 10,
                            padding: "5",
                            width: "80%",
                          
                            justifyContent: "center",
                            alignItems: "center"
                        }} onPress={handlelogin} >
                            <Image source={require("../assets/images/google_logo.png")}></Image>
                            <Text style={{
                                fontWeight: "bold",
                                textAlign: "center",
                                fontSize: 18
                            }}>{onlogin?"Login with Google":"Continue with Google"}</Text></TouchableOpacity>
                    </View>



                </View>
            </View>
        </View>
    )
}


import { useFocusEffect, useLocalSearchParams } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { Image } from "react-native";
import menuItems from "../../components/foodcollection";
import React, { useCallback, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
export default function Details() {

    const fooddetail = useLocalSearchParams()
    const allfooditems = [
        ...menuItems.burger,
        ...menuItems.pizza,
        ...menuItems.sandwich
    ]

    const itemdetail = allfooditems.filter((item) => {
        return (item.name === fooddetail?.detail)

    })
    const [cartitems, setcartitems] = useState([])
    useFocusEffect(
        React.useCallback(function () {

            AsyncStorage.getItem("cart").then(function (response) {
                if (response) {
                    const data = JSON.parse(response);
                    setcartitems(data);
                } else {
                    setcartitems([]);
                }
            })
        },[]
        ))




    let itemincart = false
    cartitems.forEach((data) => {
        if (itemdetail[0].name == data.name)
            itemincart = true
    })



    function addtocart() {

        if (itemincart) {
            const updateditems = cartitems.filter(function (element) {
                return element.name != itemdetail[0].name
            })
            setcartitems(updateditems)
            AsyncStorage.setItem("cart", JSON.stringify(updateditems))
            itemincart = false

        }
        else {
            const updateditems = [...cartitems, { ...itemdetail[0], quantity: 1 }]
            setcartitems(updateditems);
            AsyncStorage.setItem("cart", JSON.stringify(updateditems))
            itemincart = true


        }
    }
   
    return (
        <View style={{
            height: "100%"
        }}>
            <Image style={{
                height: "57%",
                aspectRatio: 1
            }} source={itemdetail[0].detailsimage}></Image>

            <View style={{
                padding: 20,
                height: "100%"
            }}>
                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-between",

                }}>
                    <View style={{
                        justifyContent: "center",
                        alignContent: "center",

                    }}>
                        <Text style={{
                            color: "#D61355",
                            fontWeight: "500", alignSelf: "flex-start",
                            backgroundColor: "#ffcccc",
                            padding: 5,
                            paddingHorizontal: 10,
                            borderRadius: 5
                        }}>Popular</Text></View>

                    <View>
                        <View style={{
                            flexDirection: "row",
                            gap: 15
                        }}>

                            <View style={{
                                backgroundColor: "#ffcccc",
                                alignSelf: "flex-start",
                                padding: 8,
                                borderRadius: 50
                            }}>
                                <Image style={{
                                    backgroundColor: "#ffcccc",
                                }} source={require("../../assets/images/locationlogo.png")}></Image></View>
                            <View style={{
                                backgroundColor: "#ffcccc",
                                alignSelf: "flex-start",
                                padding: 8,
                                borderRadius: 50
                            }}>
                                <Image style={{
                                    backgroundColor: "#ffcccc",
                                    width: 18, height: 18
                                }} source={require("../../assets/images/heart.png")}></Image></View>


                        </View>

                    </View>
                </View>

                <View style={{
                    height: "100%"
                }}>
                    <View>
                        <Text style={{
                            fontWeight: "700",
                            fontSize: 30,
                            paddingVertical: 10
                        }}>{itemdetail[0]?.name}</Text>
                    </View>

                    <View style={{
                        flexDirection: "row",
                        gap: 20
                    }}>
                        <View style={{
                            flexDirection: "row",
                            gap: 7,
                            alignItems: "center"
                        }}>
                            <Image style={{
                                width: 20,
                                aspectRatio: 1
                            }} source={require("../../assets/images/favorite.png")}></Image>
                            <Text style={{
                                fontWeight: "700",
                                fontSize: 14,
                                color: "#cec6c6"
                            }}>4.8 Rating</Text>
                        </View>
                        <View style={{
                            flexDirection: "row",
                            gap: 7,
                            alignItems: "center"
                        }}>
                            <Image style={{
                                width: 20,
                                aspectRatio: 1
                            }} source={require("../../assets/images/shopping-bag.png")}></Image>
                            <Text style={{
                                fontWeight: "700",
                                fontSize: 14,
                                color: "#cec6c6"
                            }}>7000+ Order</Text>
                        </View>
                    </View>

                    <View>
                        <Text style={{
                            fontWeight: "500",
                            fontSize: 14,
                            paddingVertical: 20
                        }}>{itemdetail[0].details}</Text>
                    </View>



                    <TouchableOpacity onPress={addtocart} style={{
                        backgroundColor: itemincart ? "lightgrey" : "#D61355",
                        padding: 15,
                        borderRadius: 7
                    }}>
                        <Text style={{

                            textAlign: "center",
                            color: itemincart ? "white" : "black",
                            fontWeight: "700",
                            fontSize: 18,

                        }}>{itemincart ? "Added to Chart" : "Add to Chart"}</Text>

                    </TouchableOpacity>

                </View>
            </View>
        </View>
    )
}
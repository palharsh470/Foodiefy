import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "expo-router";
import { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import { Image, Text, View } from "react-native";

export default function Addeditem({ item, cartitems, setcartitems, quantity }) {

    function increasequantity() {
        const updateditems = cartitems.map((cart) => {
            if (item.name == cart.name)
                return { ...cart, quantity: cart.quantity + 1 }
            else
                return cart
        })
        AsyncStorage.setItem("cart", JSON.stringify(updateditems))
        setcartitems(updateditems)
    }



    function decreasequantity() {
        if (quantity == 1) {
            const updateditems = cartitems.filter(function (element) {
                return element.name != item.name
            })
            AsyncStorage.setItem("cart", JSON.stringify(updateditems))
            setcartitems(updateditems)
        }
        else {
            const updateditems = cartitems.map((cart) => {
                if (item.name == cart.name)
                    return { ...cart, quantity: cart.quantity - 1 }
                else
                    return cart
            })
            AsyncStorage.setItem("cart", JSON.stringify(updateditems))
            setcartitems(updateditems)
        }
    }



    return (
        <View style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: 25,
            marginVertical: 10,
            padding: 10,
            borderRadius: 10,
            borderWidth: 2,
            borderColor: "#0000001F"

        }}>
            <View style={{
                width: "20%"
            }}>
                <Image style={{
                    height: 62,
                    aspectRatio: 1
                }} source={item?.image}></Image>
            </View>
            <View style={{ width: "40%" }}>
                <Text style={{
                    fontWeight: "500",
                    fontSize: 17
                }}>{item?.name}</Text>
                <Text style={{
                    fontWeight: "500",
                    fontSize: 16,
                    opacity: 0.3
                }}>{item.shopName}</Text>
                <Text style={{
                    fontWeight: "700",
                    fontSize: 21,
                    color: "#D61355"
                }}>${item.price}</Text>
            </View>
            <View style={{ width: "25%" }}>
                <View style={{
                    flexDirection: "row",
                }}>
                    <TouchableOpacity onPress={decreasequantity}>
                        <Text style={{
                            paddingHorizontal: 10,
                            backgroundColor: "#ffcccc",
                            fontSize: 25,
                            borderRadius: 8
                        }}>-</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        justifyContent: "center"
                    }}>
                        <Text style={{
                            paddingHorizontal: 10,
                            fontSize: 20,
                            borderRadius: 8
                        }}>{quantity}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={increasequantity}>
                        <Text style={{
                            paddingHorizontal: 7,
                            backgroundColor: "#D61355",
                            fontSize: 25,
                            borderRadius: 8
                        }}>+</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </View>
    )
}
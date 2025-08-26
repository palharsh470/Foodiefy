import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Text, TouchableOpacity } from "react-native";
import { Image, View } from "react-native";
import { Link, useFocusEffect } from "expo-router";

export default function Food({ cartitems, setcartitems, item }) {

    let itemincart = false
    cartitems.forEach((data) => {
        if (item.name == data.name)
            itemincart = true
    })



    function addtocart(item) {

        if (itemincart) {
            const updateditems = cartitems.filter(function (element) {
                return element.name != item.name
            })
            setcartitems(updateditems)
            AsyncStorage.setItem("cart", JSON.stringify(updateditems))
            itemincart = false

        }
        else {
            const updateditems = [...cartitems, { ...item, quantity: 1 }]
            setcartitems(updateditems);
            AsyncStorage.setItem("cart", JSON.stringify(updateditems))
            itemincart = true


        }
    }



    return (
        <View style={{
            padding: 15,
            flex: 1, margin: 8,
            borderRadius: 10,
            borderWidth: 2,
            borderColor: "#0000001F"
        }} >
            <View style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 4
            }}>
                <Image style={{ height: 16 }} source={item.star} />
                <Text style={{ fontWeight: "700" }}>3.8</Text>
            </View >
            <View style={{
                alignItems: "center",
                margin:8
            }}>
            <Link href={`/details/${item.name}`}>

                <Image style={{
                    marginVertical: 5,
                }} source={item.image}></Image>

                </Link>
            </View>
            <View>

                <View>
                    <Text style={{ fontSize: 18, color: "#0D0D0D", fontWeight: "500" }}>{item.name}</Text>
                    <Text style={{ fontSize: 12, fontWeight: "900", opacity: 0.4 }}>{item.description}</Text>
                </View>

                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                }}>

                    <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
                        <Text style={{ fontSize: 18, color: "#D61355" }}>${item.price}.</Text>
                        <Text style={{ fontSize: 13, color: "#D61355" }}>00</Text>
                    </View>

                    <TouchableOpacity onPress={function () {
                        addtocart(item)
                    }} style={{ backgroundColor: itemincart ? "white" : "#D61355", height: 35, width: 35, borderRadius: 20, borderWidth: 2, borderColor: "#D61355", justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ color: itemincart ? "black" : "white", fontSize: 25 }}>{itemincart ? "-" : "+"}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
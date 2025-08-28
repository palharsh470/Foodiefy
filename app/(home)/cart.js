import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Image, View } from "react-native";
import { FlatList } from "react-native";
import Addeditem from "../../components/cartaddeditem";
import { ScrollView } from "react-native";
import { router, useFocusEffect } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
export default function Cart() {
    const [cartitems, setcartitems] = useState([])
    const deliverycharge = 10;
    const discount = 20;
    const [subtotal, setsubtotal] = useState(0)
    const [total, settotal] = useState(0)
    useFocusEffect(
        React.useCallback(() => {
            AsyncStorage.getItem("cart").then((response) => {
                if (response) {
                    setcartitems(JSON.parse(response));
                } else {
                    setcartitems([]);
                }
            });
        }, [])
    );

    useEffect(() => {
        let sum = 0;
        cartitems.forEach((item) => {
            sum += (item.price) * (item.quantity)
        })
        setsubtotal(sum)
        settotal(sum + deliverycharge - discount)
    }, [cartitems])




    return (
        <View style={{
            padding: 20,

            flex: 1
        }}>
           { subtotal ? <View style={{
                marginVertical: 20,

            }}>
                <Text style={{
                    fontWeight: "700",
                    fontSize: 28,
                }}>Order details</Text>
            </View>:<View></View>}

            <View style={{
                height: "65%"
            }}>

                <FlatList
                    data={cartitems}
                    renderItem={({ item }) => {

                        return <Addeditem cartitems={cartitems} setcartitems={setcartitems} quantity={item.quantity} item={item}></Addeditem>

                    }}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item) => {
                        return item.name
                    }}
                />

            </View>
            {subtotal ? <View>
                <View style={{
                    backgroundColor: "#D61355",
                    padding: 20,
                    borderRadius: 7,
                }}>
                    <View>
                        <View style={styles.row}>
                            <Text style={styles.pricetext}>Sub-Total</Text>
                            <Text style={styles.pricetext}>{subtotal} $</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.pricetext}>Delivery Charge</Text>
                            <Text style={styles.pricetext}>{deliverycharge} $</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.pricetext}>Discount</Text>
                            <Text style={styles.pricetext}>- {discount} $</Text>
                        </View>
                    </View>
                    <View style={{ ...styles.row, marginVertical: 10 }}>
                        <Text style={styles.totalpricetext}>Total</Text>
                        <Text style={styles.totalpricetext}>{total} $</Text>
                    </View>
                    <TouchableOpacity onPress={()=>{ router.replace("/orderdone")}}>
                        <Text style={{ ...styles.buttonText, textAlign: "center", padding: 10, borderRadius: 7 }}>Place My Order</Text>
                    </TouchableOpacity>

                </View>
            </View> : <View style={{
                position: "absolute",
                top: "50%",
                left: "13%",
            }}>
                <Text style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    opacity:0.5
                }}>“Oops! Your cart is feeling lonely 😔'</Text>
                <Text style={{
                    opacity:0.5,
                    fontSize: 20,
                    fontWeight: "bold"
                }}>Let’s fill it with some tasty treats 😋!”</Text>
            </View>}
        </View>
    )
}
const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    pricetext: {
        fontSize: 16,
        color: "white",
        fontWeight: "500",
    },
    totalpricetext: {
        fontSize: 20,
        color: "white",
        fontWeight: "900"
    },
    buttonText: {
        fontSize: 16,
        fontWeight: "700",
        color: "#D61355",
        backgroundColor: "white"
    }
})
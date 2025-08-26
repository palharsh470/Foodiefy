import { Image, TextInput, View, ScrollView, Text, TouchableOpacity, FlatList } from "react-native";
import Food from "../../components/listed_item";
import { Dimensions } from "react-native";
import React, { useEffect, useState } from "react";
import menuItems from "../../components/foodcollection";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router, useFocusEffect } from "expo-router";
import { MapPin, SignOut, UserCircle } from "phosphor-react-native";
const { width } = Dimensions.get("window");

export default function Home() {
  const trending = [{ id: "1", image: require('../../assets/images/trend.png') }, { id: "2", image: require('../../assets/images/trend.png') }, { id: "3", image: require('../../assets/images/trend.png') }]
  const logos = [
    { name: "Burger", image: require("../../assets/images/burger.png") },
    { name: "Pizza", image: require("../../assets/images/pizza-slice.png") },
    { name: "Sandwich", image: require("../../assets/images/sandwich.png") },
  ]


  const [cartitems, setcartitems] = useState([])
  useFocusEffect(
    React.useCallback(() => {
      AsyncStorage.getItem("cart").then(function (response) {
        if (response) {
          const data = JSON.parse(response);
          setcartitems(data);
        } else {
          setcartitems([]);
        }
      });
    }, [])
  );

  const [user, setuser] = useState("")
  useEffect(function () {

    AsyncStorage.getItem("user")
      .then(function (response) {
        if (response) {
          setuser(JSON.parse(response))
        }
        else {
          router.replace("/")
        }
      })
  }, [])


  const [categorychoice, setcategorychoice] = useState("Burger")
  const [choice, setchoice] = useState(menuItems.burger);

  function userchoice(item) {
    setcategorychoice(item)
    setchoice(menuItems[item.toLowerCase()])
  }

  function handleLogout() {
    console.log("logout")
    AsyncStorage.removeItem("user")
      .then(function () {
        router.replace("/login")
      })
  }

  return (

    <View style={{
      padding: 20
    }}>
      
      <View style={{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
      }}>
       <TouchableOpacity onPress={handleLogout}>
  <SignOut size={32} />
</TouchableOpacity>

        <TouchableOpacity style={{flexDirection:"row",alignItems:"center"}} ><MapPin size={32} color="#D61355" weight="fill"/><Text>Your Location</Text></TouchableOpacity>
        <TouchableOpacity style={{
          margin: 10
        }} ><UserCircle size={40} color="#D61355" weight="fill" />
        </TouchableOpacity>


      </View>

      <View>

        <TextInput style={{
          backgroundColor: "#ffe8e8",
          margin: 16,
          padding: 15
        }} placeholder="Search" >

        </TextInput>

        <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false} contentContainerStyle={{
          marginVertical: 20,

        }}>
          {
            trending.map(function (item, index) {
              return <TouchableOpacity key={item.id}>
                <Image style={{
                  width: width - 60,
                  marginHorizontal: 4,
                  height: 150,

                  borderRadius: 15,
                  resizeMode: "cover",
                }}
                  source={item.image}></Image>
              </TouchableOpacity>

            })
          }
        </ScrollView>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{
          gap: 10,

        }}>
          {
            logos.map((item, indx) => {
              return <TouchableOpacity key={item.name} onPress={function () {
                userchoice(item.name)
              }} style={{
                flexDirection: "row",
                borderWidth: 2,
                backgroundColor: item.name == categorychoice ? "#D61355" : "white",
                borderColor: "#D61355",
                gap: 10,
                alignItems: "center",
                marginVertical: 20,
                paddingHorizontal: 10,
                paddingRight: 20,
                paddingVertical: 7,
                borderRadius: 7


              }}>
                <Image style={{
                  width: 35,
                  aspectRatio: 1
                }} source={item.image}></Image>
                <Text style={{
                  fontSize: 18,
                  fontWeight: "500",
                  color: "black"
                }}>{item.name}</Text>
              </TouchableOpacity>
            })
          }

        </ScrollView>
      </View>

      <FlatList
        data={choice}
        showsVerticalScrollIndicator={false}

        numColumns={2}
        contentContainerStyle={{
          paddingBottom: 350,

        }}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        keyExtractor={function (item, indx) {
          return item.name
        }}
        renderItem={function ({ item }) {
          return <Food cartitems={cartitems} setcartitems={setcartitems} item={item}></Food>

        }}>

      </FlatList>
    </View>


  )
}
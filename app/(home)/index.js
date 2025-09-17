import { Image, TextInput, View, ScrollView, Text, TouchableOpacity, FlatList, Modal, StyleSheet } from "react-native";
import Food from "../../components/listed_item";
import { Dimensions } from "react-native";
import React, { useEffect, useState } from "react";
import menuItems from "../../components/foodcollection";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router, useFocusEffect } from "expo-router";
import { MapPin, SignOut, UserCircle } from "phosphor-react-native";
import { ImageBackground } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { getCurrentPositionAsync, requestForegroundPermissionsAsync } from 'expo-location';
const { width } = Dimensions.get("window");

export default function Home() {
  const trending = [{ id: "1", image: require('../../assets/images/trend.png') }, { id: "2", image: require('../../assets/images/trend.png') }, { id: "3", image: require('../../assets/images/trend.png') }]
  const logos = [
    { name: "Burger", image: require("../../assets/images/burger.png") },
    { name: "Pizza", image: require("../../assets/images/pizza-slice.png") },
    { name: "Sandwich", image: require("../../assets/images/sandwich.png") },
  ]
  const [markerlocation, setmarkerlocation] = useState(null)
  const [cartitems, setcartitems] = useState([])
  const [showmap, setshowmap] = useState(false)
  const [user, setuser] = useState("")

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

  function handledevicelocation() {
    requestForegroundPermissionsAsync().then(function (permission) {
      if (permission?.status == "granted") {
        getCurrentPositionAsync().then(function (response) {
          const location = {
            latitude: response?.coords?.latitude,
            longitude: response?.coords?.longitude
          }
          setmarkerlocation(location)

        })
      }
      else {
        Alert.alert("Perimssion not granted allow the permissin from settings")
      }
    })
  }


  function getmaplocation(maplocation) {
    const location = {
      longitude: maplocation?.nativeEvent?.coordinate?.longitude,
      latitude: maplocation?.nativeEvent?.coordinate?.latitude
    }
    setmarkerlocation(location)
  }
  function confirmlocation() {
    setshowmap(false)

  }
  useEffect(function () {

    AsyncStorage.getItem("user")
      .then(function (response) {
        if (response) {
          setuser(JSON.parse(response))
        }
        else {
          router.replace("/login")
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

    AsyncStorage.removeItem("user")
      .then(function () {
        router.replace("/login")
      })
  }

  return (

    <View style={{
      paddingHorizontal: 20,
      marginBottom: 50

    }}>

      <ImageBackground source={require("../../assets/images/Pattern (2).png")} style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: 50
      }}>
        <TouchableOpacity onPress={handleLogout}>
          <SignOut size={32} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { handledevicelocation, setshowmap(true) }} style={{ flexDirection: "row", alignItems: "center" }} ><MapPin size={32} color="#D61355" weight="fill" /><Text>Your Location</Text></TouchableOpacity>
        <TouchableOpacity style={{
          margin: 10
        }} ><UserCircle size={40} color="#D61355" weight="fill" />
        </TouchableOpacity>


      </ImageBackground>

      <View>

        <TextInput style={{
          backgroundColor: "#ffe8e8",
          margin: 10,
          padding: 15
          }} placeholder="Search" >
          
          </TextInput>

        <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false} contentContainerStyle={{
          marginVertical: 15,

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
                marginVertical: 10,
                paddingHorizontal: 10,
                paddingRight: 20,
                paddingVertical: 4,
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

      <Modal visible={showmap} transparent={true} >
        <View style={style.map}>
          <MapView onPress={getmaplocation} style={{
            height: 400,
            
          }} >
            {markerlocation && <Marker coordinate={{
              longitude: markerlocation?.longitude,
              latitude: markerlocation?.latitude
            }} />
            }
          </MapView>
          <TouchableOpacity style={{
            backgroundColor: "white",
            height: 30,
            borderWidth: 2,
            justifyContent: "center"
          }} onPress={confirmlocation}><Text>Confirm Location</Text></TouchableOpacity>
        </View>
      </Modal>

    </View>


  )
}

const style = StyleSheet.create({
  map: {
    width: "90%",
    position: "absolute",
    marginHorizontal: 22,
    marginVertical: 200,
    // boxShadow : " 0 , 0 , 10px , 10px , white "
  }
})
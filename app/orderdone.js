import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { Route } from "expo-router/build/Route";
import { NotePencil, Star } from "phosphor-react-native";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Ordered(){
    function gotohome(){
         AsyncStorage.removeItem("cart")
      .then(function () {
        router.replace("/")
      })
    }
return(
    <View style={{
        padding:20
    }}>

    <View style={{
        justifyContent:"center",
            alignItems:"center",
            height:"87%"
    }}>
        <View>
            <Image source={require("../assets/images/orderdone.png")}></Image>
        </View>
        <View style={style.textview}>
            <Text style={style.ordertext}>
                Thank You!
            </Text>
            <Text  style={style.ordertext}>
                Order Completed
            </Text>
        </View>
        <Text style={style.orderratetext}>
            Please rate your last Driver
        </Text>
        <View style={style.rateview}>
        <Star size={32} color="#fff70f" weight="fill" />
        <Star size={32} color="#fff70f" weight="fill" />
        <Star size={32} color="#fff70f" weight="fill" />
        <Star size={32} color="#a29e3f" weight="fill" />
        <Star size={32} color="#a29e3f" weight="fill" />
        </View>
        </View>

        <View style={{...style.rateview, alignItems:'flex-end',marginBottom:10}}>
            <NotePencil size={32} color="#d61355" weight="fill" />
            <Text style={{...style.orderratetext,marginVertical:0}}>Leave Feedback</Text>

        </View>

        <View style={{
            flexDirection:"row"
        }}>
            <TouchableOpacity style={{
                paddingHorizontal:"70",
                paddingVertical:20,
                backgroundColor:"#d61355",
                borderRadius:7
            }} onPress={gotohome}>
                <Text style={{color:"white",
                    fontWeight:"bold"
                }}>Submit</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{
                paddingHorizontal:"80",
                paddingVertical:20,
                
                borderRadius:7
            }}  onPress={gotohome} >
                <Text style={{color:"#d61355",
                    fontWeight:"bold"
                }}>Skip</Text>
            </TouchableOpacity>
        </View>

    </View>
)
}
const style=StyleSheet.create({

    ordertext:{
        fontSize:25,
        fontWeight:"bold",

    },
    orderratetext:{
        fontSize:13,
        opacity:0.2,
        marginVertical:"20",
        fontWeight:"bold"
    },

    rateview:{
        flexDirection:"row"
    },
    textview:{
        alignItems:"center"
    }
})
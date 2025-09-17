import { Image, ImageBackground, Text } from "react-native";
import { View } from "react-native";

export default function HomePage() {
    return (
        <ImageBackground source={require("../assets/images/Pattern (1).png")}
            style={{
                width: "100%",
                height: "100%",
                alignItems: "center"
            }}>

            <Image
                source={require("../assets/images/logobg.png")}
                style={{
                    position: "absolute",
                    top: "28%"
                }}></Image>
            <Image source={require("../assets/images/logo.png")}
                style={{
                    top: "30%",
                }}></Image>

                <View style={{
                  top:"31%"
                }}>
                    <Text style={{
                        fontWeight:"900",
                        fontSize:45,
                        color:"#D61355"
                    }}>Foodiefy</Text>

                </View>
          
        </ImageBackground>
    )
}
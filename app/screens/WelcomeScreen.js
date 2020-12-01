import React from 'react';
import {Image, ImageBackground ,StyleSheet, View,Text} from 'react-native';
import AppButton from '../components/AppButton.js';


function WelcomeScreen(props) {
    return (
        <ImageBackground 
        blurRadius={10}
        style={styles.background}
        source={require("../assets/background.jpg")}
        >
            <View style={styles.logocontainer}>
            <Image style={styles.logo} source={require("../assets/icon.png")} ></Image>
            <Text style={styles.tagline}>We are a cool app</Text>
            </View>
            <View style={styles.buttonsContainer}>
            <AppButton title="not login"/>
            <AppButton title="not register"color="secondary"/>
            </View>


        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background:{
        flex:1,
        justifyContent:"flex-end",
        alignItems:"center"
    },
    logo:{

        width:100,
        height:100

     
    },
    buttonsContainer:{
        padding: 20,
        width:"100%"
     
    },
    logocontainer:{
        position:'absolute',
        top:70,
        alignItems:"center"
     
    },
    tagline:{
        fontSize:25,
        fontWeight:"600",
        paddingVertical:20

     
    }
})

export default WelcomeScreen;
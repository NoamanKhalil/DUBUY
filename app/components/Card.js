import React from 'react';
import {StyleSheet, View ,Image} from 'react-native';
import colors from '../config/colors';
import AppText from './AppText.txt';

function Card({title,subTitle,image}) {
    return (
        <View style = {styles.card}>
            <Image style = {styles.imageS} source={require(image)} ></Image>
            <View style = {styles.detailsContainer}>
             <AppText style = {styles.title}>{title}</AppText>
             <AppText style = {styles.subTitle}>{subTitle}</AppText>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({

    card:{
        borderRadius:15,
        backgroundColor: colors.white,
        marginBottom:20,
        overflow:"hidden"
    },
    imageS:
    {
        width :"100%",
        height: 100
    },
    detailsContainer:
    {
        padding:20

    },
    title:
    {
       marginBottom:7
    },
    subTitle:
    {
       color:colors.secondary,
       fontWeight:"bold"
    }


})

export default Card;


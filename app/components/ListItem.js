import React from 'react';
import {StyleSheet,Text, Image,View, TouchableHighlight} from 'react-native';
import AppText from './AppText';
import colors from '../config/colors';

function ListItem({title,subTitle,image,onpress}) {
    return (
        <TouchableHighlight underlayColor={colors.light} onPress={onpress}>
        <View style={styles.container}>
            <Image style={styles.image} source={image}/>
            <View >
            <AppText style={styles.title}>{title}</AppText>
            <AppText style={styles.subTitle}>{subTitle}</AppText>
            </View>
        </View>
        </TouchableHighlight>

    );
}
const styles = StyleSheet.create({
    container:
    {
        flexDirection:"row",
        padding:15,
    },
    image:
    {
        width:70,
        height:70,
        borderRadius:35,
        marginRight:10
    },
    title:
    {
        fontWeight:"500",
    },
    subTitle:{
        color:colors.medium,
    }
    

})

export default ListItem;
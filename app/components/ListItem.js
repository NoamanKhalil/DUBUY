import React from 'react';
import {StyleSheet,Text, Image,View, TouchableHighlight} from 'react-native';
import AppText from './AppText';
import colors from '../config/colors';
import Swipeable from 'react-native-gesture-handler/Swipeable';

function ListItem({title,subTitle,image,onpress,renderRightActions,ImageComponent}) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight underlayColor={colors.light} onPress={onpress}>
        <View style={styles.container}>
            {ImageComponent}
            {image && <Image style={styles.image} source={image}/>}
            <View styles={styles.detailsContainer}>
            <AppText style={styles.title}>{title}</AppText>
            {subTitle &&<AppText style={styles.subTitle}>{subTitle}</AppText>}
            </View>
        </View>
        </TouchableHighlight>
        </Swipeable>

    );
}
const styles = StyleSheet.create({
    container:
    {
        flexDirection:"row",
        padding:15,
    },
    detailsContainer:
    {
       marginLeft:10,
       justifyContent:"center",
       
    },
    image:
    {
        width:70,
        height:70,
        borderRadius:35
        
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
import React from 'react';
import { View,StyleSheet } from 'react-native';
import AppText from './AppText';
import Icon from "./icon";

function CategoryPickerItem({item,onPress}) {
    return (
        <View style={styles.container}>
            <Icon backgroundColor={item.backgroundColor} name={item.icon} size={80}/>
            <AppText style={styles.label}>{item.label}</AppText>
        </View>
    );
}

const styles = StyleSheet.create({
    container :
    {
        padding:30,
        marginVertical:20,
        alignItems:"center",

    },
    label :
    {
        marginTop:5,
        textAlign:"center",

    },
})

export default CategoryPickerItem;
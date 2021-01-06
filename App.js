import { StatusBar } from 'expo-status-bar';
import React, { Fragment,useState } from 'react';
import {Dimensions ,SafeAreaView, StyleSheet,TouchableWithoutFeedback,Alert, Text, View ,Image, Button,Platform, BackHandler, TextInput, Switch, ImagePickerIOS} from 'react-native';
import{ useDimensions,useDeviceOrientation } from '@react-native-community/hooks';
import AccountScreen from './app/screens/AccountScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import Screen from "./app/components/Screen";
import AppTextInput from './app/components/AppTextInput';
import AppPicker from './app/components/AppPicker';
import LoginScreen from './app/screens/LoginScreen';
import ListingEditScreen from './app/screens/ListingEditScreen';
import ImageInput from './app/components/ImageInput';
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";



export default function App()
{
const requestPermission = async () =>
{
  const {granted} = await ImagePicker.requestCameraRollPermissionsAsync();
  if (!granted) alert ("You need to enable permission to access the camera roll")
};

const [imageUri, setImageUri]= useState();

const selectImage = async()=>{
  try
  {
    const result = await ImagePicker.launchImageLibraryAsync();
    if (!result.cancelled)
    setImageUri(result.uri)

  }
  catch(error)
  {
    console.log ('Error reading an image',error)
    
  }
}

  return (
      <Screen>
      <ImageInput
       imageUri={imageUri}
       onChangeImage={(uri)=> setImageUri(uri)}
       />

      </Screen>
    );

    
}
const styles = StyleSheet.create({

  image:
  {
      height:200,
      width:200,
  },  
  btn:
  {
    marginVertical: 10,
  }

  
  })
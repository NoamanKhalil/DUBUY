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
import ImageInputList from './app/components/ImageInputList';



export default function App()
{

const [imageUris, setImageUris]= useState([]);

const handleAdd= uri=>
{
  setImageUris([...imageUris,uri])
}

const handleRemove= uri=>
{
  setImageUris(imageUris.filter(imageUri => imageUri !==uri));
}
  return (
      <Screen>
      <ImageInputList
       imageUris={imageUris}
       onAddImage={handleAdd}
       onRemoveImage={handleRemove}
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
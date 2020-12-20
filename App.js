import { StatusBar } from 'expo-status-bar';
import React, { Fragment,useState } from 'react';
import {Dimensions ,SafeAreaView, StyleSheet,TouchableWithoutFeedback,Alert, Text, View ,Image, Button,Platform, BackHandler, TextInput, Switch} from 'react-native';
import{ useDimensions,useDeviceOrientation } from '@react-native-community/hooks';
import AccountScreen from './app/screens/AccountScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import Screen from "./app/components/Screen";
import AppTextInput from './app/components/AppTextInput';
import AppPicker from './app/components/AppPicker';


const categories = [
  {label:"Furniture",value:1},
  {label:"Clothing",value:2},
  {label:"Cameras",value:3},
];

export default function App() {

const [category,setCategory]=useState();


  return (
      <Screen>
      <AppPicker selectedItem={category} onSelectedItem={item=>setCategory(item)} items={categories} icon="apps" placeholder="Category"/>
      <AppTextInput icon="email" placeholder = "Email"/>
      </Screen>
    );
}
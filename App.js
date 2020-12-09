import { StatusBar } from 'expo-status-bar';
import React, { Fragment,useState } from 'react';
import {Dimensions ,SafeAreaView, StyleSheet,TouchableWithoutFeedback,Alert, Text, View ,Image, Button,Platform, BackHandler, TextInput} from 'react-native';
import{ useDimensions,useDeviceOrientation } from '@react-native-community/hooks';
import AccountScreen from './app/screens/AccountScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import Screen from "./app/components/Screen";
import AppTextInput from './app/components/AppTextInput';


export default function App() {

const [firstName,setFirstName]=useState('');


  return (
      <Screen>
      <AppTextInput placeholder="Username" icon="email"/>
      </Screen>
    );
}
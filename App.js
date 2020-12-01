import { StatusBar } from 'expo-status-bar';
import React, { Fragment } from 'react';
import {Dimensions ,SafeAreaView, StyleSheet,TouchableWithoutFeedback,Alert, Text, View ,Image, Button,Platform, BackHandler} from 'react-native';
import{ useDimensions,useDeviceOrientation } from '@react-native-community/hooks';
import  ViewImageScreen from './app/screens/ViewImageScreen';
import MessagesScreen from './app/screens/MessagesScreen';


export default function App() {
  return (
  <MessagesScreen/>
    );
}
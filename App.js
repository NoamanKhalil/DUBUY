import { StatusBar } from 'expo-status-bar';
import React, { Fragment } from 'react';
import {Dimensions ,SafeAreaView, StyleSheet,TouchableWithoutFeedback,Alert, Text, View ,Image, Button,Platform, BackHandler} from 'react-native';
import{ useDimensions,useDeviceOrientation } from '@react-native-community/hooks';
import AccountScreen from './app/screens/AccountScreen';
import ListingsScreen from './app/screens/ListingsScreen';


export default function App() {
  return (
      <ListingsScreen/>
    );
}
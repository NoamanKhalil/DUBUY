import { StatusBar } from 'expo-status-bar';
import React, { Fragment } from 'react';
import {Dimensions ,SafeAreaView, StyleSheet,TouchableWithoutFeedback,Alert, Text, View ,Image, Button,Platform, BackHandler} from 'react-native';
import{ useDimensions,useDeviceOrientation } from '@react-native-community/hooks';
import  ViewImageScreen from './app/screens/ViewImageScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import Screen from './app/components/Screen';
import Icon from './app/components/icon';
import ListItem from './app/components/ListItem';


export default function App() {
  return (
   <Screen>
     <ListItem 
     title = "my title" 
     
     ImageComponent={<Icon name="email"/>}
     />
     </Screen>
    );
}
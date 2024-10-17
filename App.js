import React from "react";
import {StyleSheet,Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ButonNav from './ButonNav';


//import Navigation from "./Index";



const Stack = createStackNavigator();

const App = () => {
    return (
      <NavigationContainer>
        <ButonNav/> 
      </NavigationContainer>

      
      
      );
  };



export default App;
import React,{useState} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CustomInput from './CustomInput';
import CustomBoton from './CustomBoton';

L
import CustomLabel from './CustomLable';


import ScreenInspector from './scr/ScreenInspector';
import CreateInforme from './scr/CreateInforme'; 
import ListadoContribuyentes from './scr/ListadoContribuyentes';
import istadoTarifas from './scr/ListadoTarifas';

import Icon from "react-native-vector-icons/MaterialCommunityIcons";



const ButonNav = () => {
  color: 'F8380B';
  const Tab = createBottomTabNavigator();
  return (
                 
       <Tab.Navigator 
      
        >
        <Tab.Screen name="Inicio" 
        component={ScreenInspector} 
        options={{
          tabBarLabel: "Inicio",
          tabBarIcon: ({ color }) => (
            <Icon name="home-circle" color={color} size={26} />
          ),
        }} />
        <Tab.Screen name="Nuevo" 
        component={CreateInforme} 
        options={{
          tabBarLabel: "Nuevo",
          tabBarIcon: ({ color }) => (
            <Icon name="clipboard-plus-outline" color={color} size={26} />
          ),
        }} />
        
        <Tab.Screen name="Contribuyente"
         component={ListadoContribuyentes} 
         options={{
          tabBarLabel: "Contribuyentes",
          tabBarIcon: ({ color }) => (
            <Icon name="account-box" color={color} size={26} />
          ),
        }}
         />
        <Tab.Screen name="tarifas" 
        component={ListadoTarifas} 
        options={{
          tabBarLabel: "Tarifas",
          tabBarIcon: ({ color }) => (
            <Icon name="cash-check" color={color} size={26} />
          ),
        }}
        />
        <Tab.Screen name="notificaciones" component={ListadoTarifas} />
    
      </Tab.Navigator>
      
  
);
}
  
const styles = StyleSheet.create ({
  root: {
    alignItems: 'left',
    padding: 0,
    
  },
  
});

export default ButonNav;
import React from "react";
import {Vi,Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';



import ScreenInspector  from "./scr/ScreenInspector.js";
import SingInScreen  from "./scr/SingInScreen";
import CreateInforme  from "./scr/CreateInforme";
import ListadoContribuyentes from "./scr/ListadoContribuyentes.js";

const Stack = createStackNavigator();

const Navigation = () => {
  return(
      <NavigationContainer>
        <Stack.Navigator >
            <Stack.Screen name="Ingresar" component={SingInScreen} />
            <Stack.Screen name="SigIn" component={ListadoContribuyentes} />
            <Stack.Screen name="Nuevo" component={CreateInforme} />
            
        </Stack.Navigator>
       </NavigationContainer>
      )
 };
 

export default Navigation;


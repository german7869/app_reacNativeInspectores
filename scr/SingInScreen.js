import React,{useState} from 'react';
import {View, Text,Label, Image, StyleSheet, useWindowDimensions} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { useNavigation } from '@react-navigation/core';
import { GestureHandlerRootView} from 'react-native-gesture-handler'


import Logo from '../assets/logob.png';

import CustomInput from '../CustomInput';
import CustomBoton from '../CustomBoton';
import CustomLabel from '../CustomLable';


const SingInScreen = () => {
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');
  const {height} = useWindowDimensions();
  const navigation = useNavigation();
  
  
  const onSigninpressed = ()  => {
    
    navigation.navigate('SigIn');
  };
   return ( 
   <View style={styles.root}>
      <Image source={Logo}
      style={[styles.logo,{height: height * 0.30}]} resizeMode="contain" />
      <Text>"Ingres su Identificacion"</Text>   
      <CustomInput 
        placeholder="Ingrese su cedula" 
        value={username} setValue={setUsername} 
        esclave={false} />
      <CustomInput 
        placeholder="clave de acceso" 
        value={password} setValue={setPassword} 
        esclave={true}/>

        <CustomBoton text="Sing in" onPress={onSigninpressed}/>
    </View>
  );
};


const styles = StyleSheet.create ({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    
    width: '80%',
    maxWidth: 300,
    maxHeight: 140,
   },
});

export default SingInScreen;
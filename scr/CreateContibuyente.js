import React,{useState} from 'react';
import {View, Text, Image, StyleSheet, useWindowDimensions} from 'react-native';

import CustomInput from '../CustomInput';
import CustomBoton from '../CustomBoton';
const CreateConstribuyente = () => {
    

  return (
    <View style={styles.root}>
      <Text>si aqui post formulario</Text>
    </View>
  );
}


const styles = StyleSheet.create ({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    
    width: '80%',
    maxWitdth: 300,
    maxHeight: 140,
   },
});

export default CreateConstribuyente;
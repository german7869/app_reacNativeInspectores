import React,{useState} from 'react';
import {View, Text, Image, StyleSheet, useWindowDimensions} from 'react-native';


const TextTitulo = (text, logo) => {
   return (
       <View style={styles.container}>
          <Image source={Logo}
            style={[styles.logo,{height: height * 0.1}]} resizeMode="contain" />
        
            <Text style={styles.userStyle}>       
               {text}
            </Text>
         </View>                 
  );
}

const styles = StyleSheet.create ({
    logo: {
      
      width: '10%',
      height: 100,
      maxWitdth: 100,
      maxHeight: 100,
      padding: 20,
      opacity: 0.77,
      
     },
     container:  {
       flexDirection: 'row',
        },
      
      userStyle:{
        fontSize:15,
        color:'black',
        fontWeight:'bold',
        textAlign: 'center',
        margin: 4,
    },
  });
  
  export default TextTitulo;

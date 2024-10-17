import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';


const CustomLabel = ({text}) => {
    return(
       <Text style={styles.text}> {text} </Text>
      
    );
};

const styles = StyleSheet.create ({
    container: {
        backgroundcolor: 'while',
        width: '1000%',
        
    },

     text: {  
        color: "#000",
        fontSize: 11,
        textAlign: 'left',
        
     },
});

export default CustomLabel;

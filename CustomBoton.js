import React from "react";
import { View,Text,StyleSheet,Pressable,Image,useWindowDimensions } from "react-native";
import Logo from './assets/logob.png';

const CustomBoton = ({onPress,text, type}) => {
    const {height} = useWindowDimensions();
    return (
        <Pressable onPress={onPress} style={styles.container}>
           <Text style={styles.text}>
           <Image  style={styles.logo}
             source={{uri: 'http://s3.hilariousgifs.com/displeased-cat.jpg'}} />
             {text}
            
           </Text>
        </Pressable>
    );
};

const   styles = StyleSheet.create(
    {
        container:{
            backgroundColor: '#FF0000',
            with: '10%',
            padding: 15,
            marginVertical: 5,
            alignItems: 'left',
            borderRadius: 5,  
            

        },
        text: {
            fontWeight: 'bold',
            color: 'white',
 
        },
        logo: {
    
            width: '20',
            height: 20,
            borderRadius: 10,
            
           },

    }
);

export default CustomBoton;


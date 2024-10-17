import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';


const CustomInput = ({value, setValue, placeholder,esclave}) => {
    return(
        <View style={styles.container}>
            <TextInput
                Value={value}
                onChangeText={setValue}
                placeholder={placeholder}
                style={styles.input}
                secureTextEntry={esclave}
             />
        </View>
    );
};

const styles = StyleSheet.create ({
    container: {
        backgroundcolor: 'while',
        width: '80%',
        borderColor: '#e8e88e8',
        borderWidth: 1,
        borderRadius: 5,
        
        paddingHorizontal: 10,
        marginVertical: 5,
    },

     input: {  },
});

export default CustomInput;
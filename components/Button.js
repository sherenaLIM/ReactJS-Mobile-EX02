import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';


const CustomButton = ({ text, onClick }) => {
    return (
        <TouchableOpacity style={styles.rectangle} onPress={onClick}>
            <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    rectangle: {
        backgroundColor: '#b3f0ff', 
        paddingVertical: 10,
        paddingHorizontal: 20,
        height: 50,
        width: 300,
        borderRadius: 10, 
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: '#000000',
    },
    buttonText: {
        color: '#000000',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default CustomButton;

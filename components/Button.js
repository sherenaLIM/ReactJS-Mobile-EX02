import React from 'react';
import { Button, StyleSheet } from 'react-native';


const CustomButton = ({text, onClick}) => {

    function onClick() {
        // specify routes / endpoints to different pages
        // route to edit page
        // route to home page
    }

    return (
        <Button style={styles.rectangle}>{text}
        </Button>
    )
};

const styles = StyleSheet.create({
    rectangle: {
        
    },
    edit: {
  
    },
    home: {

    }
})

export default CustomButton;

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import CheckBox from './CheckBox';

// onDelete functional prop is duplicated - to remove if you don't want it to come with every single task component
// preferable to leave it in - supplement Task.js with onDelete() function
const Task = ({ text, onDelete}) => {

    return (
        <View style={styles.item}>
            <View style={styles.itemBox} onPress={onDelete}>
                <TouchableOpacity style={styles.square}></TouchableOpacity>
                <Text style={styles.itemText}>{text}</Text>
                <CheckBox></CheckBox>
            </View> 
        </View>

    )
}

const styles = StyleSheet.create({
    item:{
        backgroundColor: "#fff",
        padding: 15,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 20,
    },
    itemBox:{
        flexDirection: "row" , 
        alignItems: "center",
        flexWrap: "wrap",
        flex: 1,
    },
    square:{
        width: 19,
        height: 19,
        backgroundColor: "#55BCF6",
        opacity: 0.4,
    },
    itemText:{
        flex: 1,
    }
});

export default Task;
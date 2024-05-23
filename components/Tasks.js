import React from 'react';
import { Button, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
 
const Task = ({ text, onDelete }) => {

    return (
        <View style={styles.item}>
            <View style={styles.itemBox}>
                <TouchableOpacity style={styles.square}></TouchableOpacity>
                <Text style={styles.itemText}>{text}</Text>
                <Button style={styles.itemDelete} title="Delete" onPress={onDelete} />
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
        width: 24,
        height: 24,
        backgroundColor: "#55BCF6",
        opacity: 0.4,
    },
    itemText:{
        flex: 1,
    },
    itemDelete:{
        marginLeft: 10
    }
});

export default Task;
// 1. import necessary libraries
import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

// 2. define functional component
const CheckBox = ({onCheck}) => {

    // initialize the state to keep track of whether the checkbox is checked or not
    const [checked, setChecked] = useState(false); // boolean data state, by default the checkbox is unchecked

    function handlePress() {
        const newCheckedState = !checked;
        setChecked(newCheckedState); // toggle the checked state
        if (onCheck) {
            onCheck(newCheckedState); // propagate the new state to the parent component or handler
        }
    }

    return (
        <TouchableOpacity style={styles.circular} onPress={handlePress}>
            {checked && <View style={styles.innerCircle} />}
        </TouchableOpacity>
    )
}

// 3. customize style
const styles = StyleSheet.create({
    circular: {
        width: 12,
        height: 12,
        borderColor: '#55BCF6',
        borderWidth: 2 , 
        borderRadius: 5,
    },
    innerCircle: {
        width: 8,
        height: 8,
        backgroundColor: '#55BCF6',
        borderRadius: 5,
    },
});

// 4. make component exportable
export default CheckBox;
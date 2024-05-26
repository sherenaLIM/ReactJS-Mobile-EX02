import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import CustomButton from '../components/Button';

const HomeScreen = ({ navigation }) => {
    return (
      <View style={styles.container}>
        <Image
          source={require('../assets/logo.png')}
          style={styles.image}
        />
        <Text style={styles.title}>Get things done with TODO</Text>
        <View style={styles.buttonContainer}>
          <CustomButton text="Get Started" onClick={() => navigation.navigate('Tasks')} />
        </View>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#E8EAED',
    },
    image: {
      width: 200,
      height: 200,
      marginBottom: 20,
    },
    title: {
      fontSize: 22,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 40,
    },
    buttonContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%', // ensure the button container takes up full width
    },
  });
  
  export default HomeScreen;
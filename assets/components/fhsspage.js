import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image source={require('./assets/images/logo.png')}/> 
      </View>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>FACULTY OF HUMANITIES AND SOCIAL SCIENCES</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => console.log('Get Started pressed')}>
        <Text style={styles.buttonText}>GET STARTED</Text>
      </TouchableOpacity>
    <View style={styles.footer}>
      <Text style={styles.text0}>©Copyright 2024, DESIGNED BY</Text>
      <Text style={styles.text1}>YATHURSAN</Text>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C2272D',
    marginTop: 33,
  },
  header: {
    marginBottom: 20,
  },
  image:{
    marginTop: 0,
  },
  headerTitle: {
    fontSize: 20,
    color: '#FFF500',
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
    marginTop: 30,
    marginRight: 30,
    marginBottom: 30,
    marginLeft: 10,
    letterSpacing: 7,
  },
  button: {
    backgroundColor: 'rgba(235, 226, 0, 0.9)',
    padding: 10,
    borderRadius: 5,
    margin: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    borderTopLeftRadius: 25, 
    borderTopRightRadius: 25, 
    backgroundColor: 'rgba(235, 226, 0, 0.74)', 
    padding: 10,
    width: 400,
    position: 'absolute',
    bottom:-1,
  },
  text1: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  text0:{
    textAlign: 'center',
  }
});

export default App;
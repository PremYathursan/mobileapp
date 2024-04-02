import { registerRootComponent } from 'expo';
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, TouchableOpacity, Image } from 'react-native'; // Import Text component

const registerform = () => {
  const [formState, setFormState] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleInputChange = (name, value) => {
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = () => {
    console.log(formState);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text0}></Text>
        <Text style={styles.text1}></Text>
      </View>
      <View> 
        <Text style={styles.title}>REGISTER FORM</Text>
      </View>
      <Text style={styles.text3}>Full Name : </Text>
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        onChangeText={(text) => handleInputChange('fullName', text)}
      />
      <Text style={styles.text4}>E-Mail Address : </Text>
      <TextInput
        style={styles.input}
        placeholder="E-Mail Address"
        onChangeText={(text) => handleInputChange('email', text)}
      />
      <Text style={styles.text5}>Password : </Text>
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={(text) => handleInputChange('password', text)}
      />
      <Text style={styles.text6}>ConfirmPassword : </Text>
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry
        onChangeText={(text) => handleInputChange('confirmPassword', text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>SUBMIT</Text>
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
    padding: 30,
    backgroundColor: '#C2272D',
    marginTop: 30,
  },
  input: {
    height: 40,
    borderColor: '#fff',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
  },
  header: {
    borderBottomLeftRadius: 25, 
    borderBottomRightRadius: 25, 
    backgroundColor: 'rgba(235, 226, 0, 0.74)', 
    padding: 10,
    width: 400,
    position: 'absolute',
    bottom: 768,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#fff',
    textDecorationLine: 'underline',
    letterSpacing: 5,
    textAlign: 'center',
  },
  text3: {
    color:'#fff',
    fontSize: 25,
    padding: 10,
  },
  text4: {
    color:'#fff',
    fontSize: 25,
    padding: 10,
  },
  text5: {
    color:'#fff',
    fontSize: 25,
    padding: 10,
  },
  text6: {
    color:'#fff',
    fontSize: 25,
    padding: 10,
  },
  button: {
    padding: 5,
    marginTop: 25,
    borderTopLeftRadius: 50, 
    borderTopRightRadius: 50, 
    backgroundColor: 'rgba(235, 226, 0, 0.7)', 
    width: 350,
    borderBottomLeftRadius: 50, 
    borderBottomRightRadius: 50,
  },
  buttonText: {
    padding: 8,
    color: 'black',
    fontSize: 15,
    textAlign: 'center',
    fontWeight:'bold',
  },
  submit:{
    color: 'black',
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
  },
});

export default registerform;

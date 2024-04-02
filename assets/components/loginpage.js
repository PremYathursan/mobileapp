import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet,Image } from 'react-native';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Email:', email, 'Password:', password);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text0}></Text>
        <Text style={styles.text1}></Text>
      </View>
      <Text style={styles.title}>LOGIN FORM</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.text3}>E-Mail Address :</Text>
        <TextInput
          placeholder="E-Mail Address"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
        />
        <Text style={styles.text4}>Password :</Text>
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.input}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>LOGIN NOW</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log('Forgot Password')}>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log('Create New Account')}>
        <Text style={styles.createAccount}>Create New Account</Text>
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
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#C2272D',
  },
  header: {
    borderBottomLeftRadius: 25, 
    borderBottomRightRadius: 25, 
    backgroundColor: 'rgba(235, 226, 0, 0.74)', 
    padding: 10,
    width: 400,
    position: 'absolute',
    bottom: 800,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff',
    textDecorationLine: 'underline',
    letterSpacing: 5,
  },
  inputContainer: {
    width: '80%',
  },
  input: {
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    marginBottom: 10,
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
    padding: 10,
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
    fontWeight:'bold',
  },
  forgotPassword: {
    color: '#fff',
    marginTop: 10,
    textDecorationLine: 'underline',
    fontSize: 18,
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
  createAccount:{
    color:'#C2272D',
    padding: 10,
    marginTop: 30,
    borderTopLeftRadius: 50, 
    borderTopRightRadius: 50, 
    backgroundColor: '#D9D9D9', 
    width: 350,
    borderBottomLeftRadius: 50, 
    borderBottomRightRadius: 50,
    textAlign: 'center',
    borderColor: '#E7B126',
    borderWidth: 3,
    bottom: -127,
    fontSize: 20,
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;

import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image } from 'react-native';

const complain = () => {
  const handleSubmit = () => {
    console.log('Submit button pressed');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/images/logo.png')}
         style={styles.image1}
      />
      <Image
        source={require('./assets/images/menu.png')}
        style={styles.image2}
      />
      <Text style={styles.title}>FHSS</Text>
      <View style={styles.rectangle}>
        <View style={styles.content}>
          <Image
            source={require('./assets/images/R (1).png')}
            style={styles.image}
          />
          <Text style={styles.text}>Complain</Text>
        </View>
        <Text style={styles.complain}> Write your complain here :      </Text>
      </View>
      <View style={styles.rectangle1}>

      </View>
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
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
    backgroundColor: 'rgba(19,66,115, 0.95)',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:32,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
    color: '#fff',
    letterSpacing: 5,
    position:'absolute',
    top: 70,
    left: 155,
  },
  complain:{
    color:'#fff',
    fontSize:26,
    margin:1,
    top:50,
  },
  image1: {
    width: 75,
    height: 75,
    resizeMode: 'contain',
    position:'absolute',
    top: 45,
    left: 20,
  },
  image2: {
    width: 75,
    height: 75,
    resizeMode: 'contain',
    position:'absolute',
    top: 45,
    right: 20,
    opacity:0.6,
  },
  rectangle: {
    width: '80%',
    height: 60,
    backgroundColor: '#D9D9D9',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 25, 
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 250, 
    borderBottomRightRadius: 50,
    position:'absolute',
    bottom:600,
  },
  rectangle1: {
    width: '85%',
    height: '40%',
    backgroundColor: '#D9D9D9',
    justifyContent: 'center',
    alignItems: 'center',
    position:'absolute',
    bottom:170,
  },
  content: {
    flexDirection: 'row',
    alignItems:'baseline',
  },
  image: {
    width: 50,
    height: 35,
    resizeMode: 'contain',
    marginRight: 10,
    top:20,
  },
  text: {
    fontSize: 35,
    fontWeight: 'bold',
    marginTop: 1,
    top:15,
  },
  button: {
    backgroundColor: '#D9D9D9',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    margin:20,
    top:300,
    width:'40%',
  },
  buttonText: {
    color: '#000',
    fontSize: 25,
    fontWeight:'bold',
    color: 'rgba(0,10,0,0.64)',
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

export default complain;

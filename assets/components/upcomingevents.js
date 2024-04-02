import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image } from 'react-native';

const upcoming_events = () => {
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
          <Text style={styles.text}>Upcoming Events</Text>
        </View>
      </View>
      <View style={styles.events}>
        <Text style={styles.subtitle}>● Upcoming Assignments</Text>
        <View style={styles.box}></View>
        <View style={styles.box}></View>
        <View style={styles.box}></View>
        <Text style={styles.subtitle}>● Upcoming Exams</Text>
        <View style={styles.box}></View>
        <View style={styles.box}></View>
        <View style={styles.box}></View>
      </View>
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
    width: '95%',
    height: 80,
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
  content: {
    flexDirection: 'row',
    alignItems:'baseline',
  },
  image: {
    width: 50,
    height: 35,
    resizeMode: 'contain',
    marginRight: 10,
  },
  text: {
    fontSize: 35,
    fontWeight: 'bold',
    marginTop: 1,
  },
  button: {
    backgroundColor: '#D9D9D9',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    margin:20,
  },
  buttonText: {
    color: '#000',
    fontSize: 20,
    fontWeight:'bold',
  },
  subtitle:{
    color:'#fff',
    fontSize: 28,
    top: 10,
  },
  box: {
    width: 325,
    height: 40,
    backgroundColor: '#fff',
    marginTop:20,
    alignItems: 'center',
  },
  events:{
    top:80,
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

export default upcoming_events;

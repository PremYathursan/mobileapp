import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const Dashboard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>FHSS</Text>
      <Image
          source={require('./assets/images/logo.png')}
          style={styles.image1}
        />
        <Image
          source={require('./assets/images/menu.png')}
          style={styles.image2}
        />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Degree</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Exam Results</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Upcoming Events</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Complain</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Course Review</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnTxt}>Log Out</Text>
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
  button: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 5,
    marginVertical: 5,
    width: '80%',
    borderTopLeftRadius: 50, 
    borderBottomLeftRadius: 50,
    left: 45,
    marginTop:20,
  },
  buttonText: {
    textAlign: 'center',
    color: '#000080',
    fontSize: 20,
    fontWeight:'500',
    opacity:0.7,
    letterSpacing:3,
  },
  btn:{
    backgroundColor: '#101010',
    padding: 15,
    borderRadius: 5,
    marginVertical: 5,
    width: '50%',
    borderTopLeftRadius: 50, 
    borderBottomLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    position:'absolute',
    bottom:80,
  },
  btnTxt: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 23,
    fontWeight:'900',
    textDecorationLine:'underline',
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

export default Dashboard;

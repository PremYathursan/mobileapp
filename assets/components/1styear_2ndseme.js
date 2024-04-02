import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

const oneyear_secondseme = () => {
  const handleSubmit = () => {
    // Handle the submit action
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
          <Text style={styles.text}>1st year 2nd semester</Text>
        </View>
      </View>
      <View style={styles.rectangle1}>
        <Text style={styles.txt}>ITE 1213 = A+ </Text>
      </View>
      <View style={styles.rectangle2}>
        <Text style={styles.txt}>ITE 1223 = B</Text>
      </View>
      <View style={styles.rectangle3}>
        <Text style={styles.txt}>ITE 1233 = A</Text>
      </View>
      <View style={styles.rectangle4}>
        <Text style={styles.txt}>ITE 1243 = B+</Text>
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
    height: '65%',
    backgroundColor: '#D9D9D9',
    alignItems: 'center',
    position:'absolute',
    bottom:140,
  },
  content: {
    flexDirection: 'row',
    alignItems:'baseline',
  },
  image: {
    width: 50,
    height: 40,
    resizeMode: 'contain',
    marginRight: 10,
  },
  text: {
    fontSize: 30,
    fontWeight: '700',
    marginTop: 50,
  },
  rectangle1: {
    width: '85%',
    height: 45,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    position:'absolute',
    bottom:470,
  },
  txt:{
    color:'#000',
    fontSize:25,
    fontWeight:'bold',
  },
  rectangle2: {
    width: '85%',
    height: 45,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    position:'absolute',
    bottom:400,
  },
  rectangle3: {
    width: '85%',
    height: 45,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    position:'absolute',
    bottom:330,
  },
  rectangle4: {
    width: '85%',
    height: 45,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    position:'absolute',
    bottom:260,
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

export default oneyear_secondseme;

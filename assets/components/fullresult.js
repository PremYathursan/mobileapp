import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

const fullresult = () => {

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
          <Text style={styles.text}>Select The Year</Text>
        </View>
      </View>
      <View style={styles.rectangle1}>
        <Text style={styles.in}>1st year 1st semester</Text>
        <Text style={styles.in}>1st year 2nd semester</Text>
        <Text style={styles.in}>2nd year 1st semester</Text>
        <Text style={styles.in}>2nd year 2nd semester</Text>
        <Text style={styles.in}>3rd year 1st semester</Text>
        <Text style={styles.in}>3rd year 2nd semester</Text>
        <Text style={styles.in}>4th year 1st semester</Text>
        <Text style={styles.in}>4th year 2nd semester</Text>
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
  rectangle1: {
    width: '95%',
    height: '50%',
    backgroundColor: '#D9D9D9',
    position: 'absolute',
    bottom: 160, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  in:{
    fontSize:30,
    textAlign:'right',
    marginLeft:5,
    paddingTop:5,
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

export default fullresult;

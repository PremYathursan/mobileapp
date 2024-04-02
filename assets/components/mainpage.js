import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const mainpage = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text0}></Text>
        <Text style={styles.text1}></Text>
      </View>
      
        <Image
          source={require('./assets/images/logo.png')}
          style={styles.image1}
        />
        <Image
          source={require('./assets/images/menu.png')}
          style={styles.image2}
        />
        <Image
          source={require('./assets/images/cover_photo.jpg')}
          style={styles.image3}
        />
      <Text style={styles.textStyling}>FHSS</Text>
      <View>
        <Text style={styles.welcome}>WELCOME TO FHSS</Text>
      </View>
      <View>
      <Text style={styles.sentence}>“Nobody can go back and start a new beginning, but anyone can start today and make a new ending.”
— MARIA ROBINSON</Text>
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(19,66,115, 0.95)',
    marginTop: 31,
  },
  textStyling: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 25,
    letterSpacing: 5,
    position:'absolute',
    top: 100,
    left: 150,
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
  image1: {
    width: 75,
    height: 75,
    resizeMode: 'contain',
    position:'absolute',
    top: 75,
    left: 20,
  },
  image2: {
    width: 75,
    height: 75,
    resizeMode: 'contain',
    position:'absolute',
    top: 75,
    right: 20,
    opacity:0.6,
  },
  image3: {
    width: 500,
    height: 200,
    resizeMode: 'contain',
    position:'absolute',
    top: 200,
  },
  welcome:{
    color: '#fff',
    position: 'absolute',
    fontSize: 25,
    letterSpacing: 2,
    paddingTop:40,
    marginTop:100,
    left: -140,
    fontStyle:'italic',
    letterSpacing:3,
    textDecorationLine:'underline',
  },
  sentence:{
    color:'#fff',
    textAlign:'center',
    padding:15,
    bottom:-200,
    fontSize:30,
    letterSpacing:3,
  },
});

export default mainpage;

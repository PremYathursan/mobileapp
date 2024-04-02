import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FHSSpage from 'assets\components\fhsspage.js';
import Register from 'assets\components\registerform.js';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={FHSSpage} />
        <Stack.Screen name="Details" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

import * as React from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity,Navigation,NavigatorIOS, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
import homeScreen from './components/homeScreen';
import ScreenPlay from './components/ScreenPlay';


export default function App({navigation}){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={homeScreen} />
        <Stack.Screen name="GuessGame" component={ScreenPlay} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

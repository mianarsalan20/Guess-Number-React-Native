import * as React from 'react';
import { 
  Text,
  View,
  StyleSheet, 
  Button, 
  TouchableOpacity,
  Navigation,
  NavigatorIOS,
  TextComponent} from 'react-native';
import Constants from 'expo-constants';



 export default function  StartScreen ({navigation}) {
 
  return (
    <View style={styles.container}>
     
      <Text style={styles.title}> Guess Game</Text>
      <Text style={styles.welcome}>
        Welcome to Guess Game.
      </Text>
      <View style={{paddingTop: 50}}>
        <TouchableOpacity
          style={styles.appButtonContainer} onPress={() => navigation.navigate('GuessGame')}>
           
          <Text style={styles.appButtonText} >Play Game</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  );
}
 
 const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: 'center',
  },

  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 30,
    color: 'black',
    height: 1,
    width: 300,
  },
  welcome: {
    paddingTop: 100,
    fontSize: 18,
    paddingLeft: 60,
    paddingRight: 60,
  },

  appButtonContainer: {
    backgroundColor: 'black',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  appButtonText: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  
});

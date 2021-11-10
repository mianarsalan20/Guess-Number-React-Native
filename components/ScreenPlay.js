import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  Navigation,
  NavigatorIOS,
  TextComponent,
} from 'react-native';
import Constants from 'expo-constants';
import { MaterialCommunityIcons as Icon } from 'react-native-vector-icons';

export default function GameScreen({ navigation }) {
  const [getNum, setNum] = useState('');
  const [hint, sethint] = useState('');
  const [count, setCount] = useState(0);
  const [score, setScore] = useState(null);
  const [randomNum, setRandomNum] = useState(
    Math.floor(Math.random() * 10) + 1
  );
  const numClick = (e) => {
    if (getNum === '0') {
      setNum(e);
    } else if (e === 'x') {
      setNum(getNum.slice(0, -1));
    } else if (e === 'again') {
      setNum('');
      setCount(count + 1);
      sethint('');
    }
    else if (e === 'hint') {
      sethint(`${randomNum-1} - ${randomNum+1} `);
    }
     else if (e === 'check') {
      if (getNum == randomNum) {
        e = 'Correct Guess';
        setRandomNum(Math.floor(Math.random() * 10) + 1)
        setScore(score+20)
      } 
      else {
        e = 'Try Again';
        setScore(score-5)
      }

      setNum(e);
    }
     else {
      setNum(getNum + '' + e);
    }
  };

  

  return (
    <View style={styles.container}>
      <View style={styles.textBlock}>
        <Text style={styles.rule}>Guess a number between 1-10</Text>
        <Text style={styles.rule}>{`Score:  ${score}`}</Text>
        <Text style={styles.rule}>{`Guesses Rounds:  ${count}`}</Text>
        <Text style={styles.rule}>{`Hint: ${hint}`}</Text>
      </View>
      <Text style={styles.textView}>{getNum}</Text>
      <View style={styles.buttonsRowContainer}>
        <View style={styles.buttonContainer}>
          <Button title="1" onPress={numClick.bind(this, 1)} />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="2" onPress={numClick.bind(this, 2)} />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="3" onPress={numClick.bind(this, 3)} />
        </View>
      </View>
      <View style={styles.buttonsRowContainer}>
        <View style={styles.buttonContainer}>
          <Button title="4" onPress={numClick.bind(this, 4)} />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="5" onPress={numClick.bind(this, 5)} />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="6" onPress={numClick.bind(this, 6)} />
        </View>
      </View>
      <View style={styles.buttonsRowContainer}>
        <View style={styles.buttonContainer}>
          <Button title="7" onPress={numClick.bind(this, 7)} />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="8" onPress={numClick.bind(this, 8)} />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="9" onPress={numClick.bind(this, 9)} />
        </View>
      </View>
      <View style={styles.buttonsRowContainer}>
        <View style={styles.buttonContainer}>
          <Button title="0" onPress={numClick.bind(this, 0)} />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="0" onPress={numClick.bind(this, 0)} />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="x" onPress={numClick.bind(this, 'x')} />
        </View>
      </View>
      <View style={styles.buttonframe}>
        <TouchableOpacity
          style={styles.appButtonContainer}
          onPress={numClick.bind(this, 'check')}>
          <Text style={styles.appButtonText}>Check Guess</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonframe}>
        <TouchableOpacity
          style={styles.appButtonContainer}
          onPress={numClick.bind(this, 'again')}>
          <Text style={styles.appButtonText}>Play Again</Text>
        </TouchableOpacity>
      </View>
       <View style={styles.buttonframe}>
        <TouchableOpacity
          style={styles.appButtonContainer}
          onPress={numClick.bind(this, 'hint')}>
          <Text style={styles.appButtonText}>Hint</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonframe}>
        <TouchableOpacity
          style={styles.appButtonContainer}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.appButtonText}>Exit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 10,
  },
  textView: {
    textAlign: 'center',
    fontSize: 30,
  },
  buttonsRowContainer: {
    paddingTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonContainer: {
    width: '33%',
    margin: 2,
  },

  appButtonText: {
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: 'black',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
 
  buttonframe: {
    paddingTop: 8,
  },
});

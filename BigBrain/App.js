import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import StartScreen from './screens/StartScreen';
import QuestionScreen from './screens/QuestionScreen';
import EndScreen from './screens/EndScreen';
import {styles} from './styles/MyStyles';

export default function App() {    
  const [category, setCategory]=useState('');
  const [username, setUsername]=useState('');
  const [score, setScore]=useState(0);
  const [shouldGameStop, setStopGame]=useState(false);

  //Selected-muuttujat tulee aloitusruudusta
  const startGame=(selectedCategory, selectedName)=>{
    setCategory(selectedCategory);
    setUsername(selectedName);
    setStopGame(false);
    console.log(username + " " +  category);
  }

  // Pointsit tulee kysymysruudusta 
  const stopGame=(points)=>{
    setScore(points);
    setStopGame(true);
  }

  let content=<StartScreen onStartGame={startGame}/>;
  if (category && username){
    content=<QuestionScreen category={category} username={username} stopGame={stopGame}/>;
  }
  if (shouldGameStop==true){
    content=<EndScreen score={score} newGame={startGame}/>;
  }

  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      {content}
    </View>
  );
}



import React, {useState} from 'react';
import {View, StyleSheet, Text, Button, TextInput, TouchableWithoutFeedback, TouchableOpacity, Image,
    Keyboard, //Not a component but an object which has methods
    Alert,
     //Not a component but an object which has methods
} from 'react-native';
import {styles} from '../styles/MyStyles';
import HideWithKeyboard from 'react-native-hide-with-keyboard';

const StartScreen = (props)=>{

  //const[started, setStarted]=useState(false);
  //const[category, setCategory]=useState("");
  const[username, setUsername]=useState("");

  const usernameInputHandler=(enteredText)=>{
    setUsername(enteredText);
  }

  /*
  const startGame=(category)=>{
    setCategory(category);
    setUsername(username);
    setStarted(true);
  }
  */
 
  return (
    
    <View style={styles.startscreen}>
      <Text style={styles.starttitleText}>Big Brain</Text>
      <Text style={styles.startText}>Write your username below:</Text>
      <TextInput style={styles.startinputField} 
        placeholder={'username'}
        keyboardType={'default'}
        maxLength={15}
        onChangeText={usernameInputHandler}
        value={username}
      />
      <HideWithKeyboard>
      <View style={styles.row}>
        
        <TouchableOpacity onPress={()=>props.onStartGame("Sport", username)} style={styles.startbutton}>
          <Text style={styles.startbuttonText}>SPORTS</Text>
          <Image source={require('../assets/football.png')}
          style={styles.image}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>props.onStartGame("Movie", username)} style={styles.startbutton}>
          <Text style={styles.startbuttonText}>MOVIES</Text>
          <Image source={require('../assets/movie.png')}
          style={styles.image}/>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity onPress={()=>props.onStartGame("Geography", username)} style={styles.startbutton}>
          <Text style={styles.startbuttonText}>GEOGRAPHY</Text>
          <Image source={require('../assets/geography.png')}
          style={styles.image}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>props.onStartGame("History", username)} style={styles.startbutton}>
          <Text style={styles.startbuttonText}>HISTORY</Text>
          <Image source={require('../assets/history.png')}
          style={styles.image}/>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity onPress={()=>props.onStartGame("Music", username)} style={styles.startbutton}>
          <Text style={styles.startbuttonText}>MUSIC</Text>
          <Image source={require('../assets/music.png')}
          style={styles.image}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>props.onStartGame("Animals", username)} style={styles.startbutton}>
          <Text style={styles.startbuttonText}>ANIMALS</Text>
          <Image source={require('../assets/animals.png')}
          style={styles.image}/>
        </TouchableOpacity>
      </View>
      </HideWithKeyboard>
    </View>
    
  );
}



export default StartScreen;
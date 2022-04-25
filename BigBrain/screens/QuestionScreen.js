import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, Button, TextInput, TouchableWithoutFeedback, TouchableOpacity, FlatList, ActivityIndicator,
    Keyboard, //Not a component but an object which has methods
    Alert //Not a component but an object which has methods
} from 'react-native';
import AnswerOptions from '../components/AnswerOptions';
import {styles} from '../styles/MyStyles';

const QuestionScreen = (props)=>{

  const [questionList, setQuestionList]=useState([]);
  const [isLoading, setLoading]=useState(true);
  const [hasError, setErrors] = useState(false);
  const [someError, setSomeErrors] = useState('');
  const [roundCounter, setRoundCounter] = useState(1);
  const [score, setScore]=useState(1);

  function answerQuestion(){
    setRoundCounter(roundCounter + 1);
    console.log("round:" + roundCounter)
    console.log("score:" + score);
    
    if(roundCounter >= 10){
      addData();
      props.stopGame(score);
    }
  }

  function addScore(){
    setScore(score + 1);
  }

  async function addData() {
    const response = await fetch("https://bigbrain-291006.appspot.com/rest/brainservice/addScore",
    {
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({score:score, name:props.username})
    });

    const responseData = await response.json();
    console.log(responseData);
  }

  async function fetchData() {
    let url = '';
    switch(props.category){
      case "Sport":
        url = "https://bigbrain-291006.appspot.com/rest/brainservice/get10Sport";
        break;
      case "Music":
        url = "https://bigbrain-291006.appspot.com/rest/brainservice/get10Music";
        break;
      case "Geography":
        url = "https://bigbrain-291006.appspot.com/rest/brainservice/get10Geography";
        break;
      case "History":
        url = "https://bigbrain-291006.appspot.com/rest/brainservice/get10History";
        break;
      case "Animals":
        url = "https://bigbrain-291006.appspot.com/rest/brainservice/get10Animals";      
        break;
      case "Movie":          
        url = "https://bigbrain-291006.appspot.com/rest/brainservice/get10Movie";
        break;
      default:
        console.log("Error when trying to fetch data");
    }    

    let res = null;
    try{
          res=await fetch(url);
      }
    catch(error){
        setErrors(true);
    }
    
    try{
        const responseData = await res.json();
        console.log(responseData);
        setQuestionList(responseData);
    }
    catch(err){
        setErrors(true);
        setSomeErrors("ERROR: "+hasError+ " my error "+err);
        console.log(someError);
    }    
  }

  useEffect(() => {
    if (isLoading==true){
    setLoading(false);
    fetchData();
    }
  });

  if (isLoading==true) {
    return (
    <View style={{flex: 1, padding: 20, justifyContent:'center'}}>
        <ActivityIndicator size="large" color="#00ff00" />
    </View>
    );
  }
  else if(hasError){
    return(
    <View style={{flex: 1, padding: 20, justifyContent:'center'}}>
        <Text>{hasError}</Text>
        <Text>{""+someError}</Text>
    </View>
    );
  }
  else{
    return(
      <View style={styles.questionscreen}>
        <Text style={styles.questionscreentitle}>Answer Questions {roundCounter}/10</Text>
        <View style={styles.questionlist}>
          <FlatList
            data={questionList.slice(roundCounter-1, roundCounter)}
            renderItem={({item}) => (
              <View style={styles.questionlistItems}>
                <Text style={styles.question}>{item.question}</Text>                                                                
                <AnswerOptions style={styles.questionlistItems} item = {item} answerQuestion = {answerQuestion} addScore = {addScore} />     
             </View>
            )}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
      </View>
    );
  }
}

export default QuestionScreen;
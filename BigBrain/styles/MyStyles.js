import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create ({
   //App.js
    container: {
      flex: 1,
      backgroundColor: '#00BFFF',
      alignItems: 'center',
      justifyContent: 'center',
    },
  //QuestionScreen
  questionscreentitle:{
    color: 'white',
    fontSize: 30,
  },
  question:  {
    marginBottom: 15,
    fontSize: 18,
    justifyContent: 'center',
  },
  questionscreen:{
    flex:1,
    alignItems:'center',
    marginTop: 100,
    marginBottom: 100,
},
questiontitle:{
    fontSize: 30,
    justifyContent:'center', 

},
questionlist:{
    justifyContent:'center',
    alignItems:'center', 
    marginVertical: 30,
},
questiontextStyle:{
    padding: 10,
    fontSize: 20,
},
questionlistItems:{
  alignItems: 'center',
  justifyContent: 'center',
  padding: 10,
  borderWidth: 2,
  borderColor: '#000',
  backgroundColor: '#ffe',    
  minWidth: 250,
  maxWidth: 360,
},
// Answeroptions to questionscreen
answeroptions:{
  
  
},
answeroptionbutton:{
  alignItems: 'center',
  margin: 10,
  padding: 10,
  borderWidth: 1,
  backgroundColor: '#FFD700',
  minWidth: 250,
  maxWidth: 270,
},
answeroptiontext:{
  fontSize: 18,
},
//Startscreen
startscreen: {
  flex: 1,        
  marginTop: 100,
  marginBottom: 190,
},
starttitleText: {
  fontSize: 60,
  color:'#FFD700',
  textShadowColor:'black',
  textShadowOffset:{width: 5, height: 5},
  textShadowRadius:10,
},
startText:{
fontSize:18,
color:'black',
marginHorizontal: 6,
paddingBottom:10,
},
row: {
  flexDirection: 'row',
  flex: 1,
  justifyContent: 'space-around',
  alignItems: 'flex-start',
  padding:5,
  paddingBottom:10,
  width:300,
  
},
startbutton: {
  marginHorizontal: 1,
  flex: 2,
  borderWidth: 1,
  borderColor: 'black',
  backgroundColor:'white',
  alignItems: 'center',
  alignSelf: 'stretch',
  justifyContent: 'center',
},
startbuttonText: {
  color:'black',
  fontSize:20,
},
startinputField:{
  color:'black',
  borderColor:'black',
  padding:7,
  backgroundColor:'white',
  marginBottom:10,
  marginHorizontal: 7,
},
image:{
  padding: 10,
  margin: 5,
  height: 55,
  width: 55,
  resizeMode: 'stretch',
},
//Endscreen
endscreen:{
  flex:1,
  alignItems:'center',
  marginTop: 100,
  marginBottom: 100,
},
endtitle:{
  fontSize: 30,
  justifyContent:'center', 
},
endendlist:{
  //marginTop: 10,
  justifyContent:'center',
  alignItems:'center', 
  //marginVertical: 30,
},
endscreenbutton:{
  padding: 15,
  backgroundColor: '#00FF00',
  borderWidth: 1,
},
endscreenbuttontext:{
  fontSize: 18,
},
endtextStyle:{
  padding: 10,
  fontSize: 20,
},
endscreentext:{
  marginVertical: 10,
  fontSize: 20,
},
endlistItems:{
margin: 5,
padding: 10,
borderWidth: 2,
borderColor: '#000',
backgroundColor: '#ffe',    
minWidth: 250,
},
endlistItem:{
  fontSize: 17,
}
  });
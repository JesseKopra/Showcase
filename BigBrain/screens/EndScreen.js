import React, { useState, useEffect } from 'react';
import {View, Text, StyleSheet, Animated,
Dimensions, Button, FlatList, ActivityIndicator, TouchableOpacity} from 'react-native';
import {fetchPoint} from '../db/Conn.js';
import {styles} from '../styles/MyStyles';
import Fireworks from '../screens/Fireworks';

const EndScreen=(props)=>{
    const [leaderboard, setLeaderboard]=useState([]);
    const [name, setName]=useState("");
    const [score, setScore]=useState(0);
    const [isLoading, setLoading]=useState(true);
    const [hasError, setErrors] = useState(false);
    const [someError, setSomeErrors] = useState('');
    const { height, width } = Dimensions.get('window');
    const [countItems, setCountItems] = useState(1);


    async function fetchData() {
        let res = null;
        try{
            res=await fetch("https://bigbrain-291006.appspot.com/rest/brainservice/get5");
        }
        catch(error){
            setErrors(true);
        }
        
        try{
            const responseData = await res.json();
            console.log(responseData);
            setLeaderboard(responseData);
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
            <View style={styles.endscreen}>
                           <Fireworks
            speed={2}
            density={8}
            colors={['#FF0000', '#9400D3', '#0000FF', '#00FF00', '#FFD700']}
            iterations={15}
            height={height}
            width={width}
            zIndex={1}
            circular={false}
        />
                <Text style={styles.endtitle}>Game Over!</Text>
                <Text style={styles.endtextStyle}>You got {props.score} points</Text>
                <TouchableOpacity style={styles.endscreenbutton} onPress={()=>props.newGame(0, "")}>
                    <Text style={styles.endscreenbuttontext}>
                        BACK TO START
                    </Text>
                </TouchableOpacity>                
                <Text style={styles.endscreentext}>High scores:</Text>
                <View style={styles.endendlist}>
                    <FlatList
                    data={leaderboard}
                    renderItem={({item, index}) => (
                    <View style={styles.endlistItems}>
                        <Text style={styles.endlistItem}>{index+1}. {item.name}: {item.score}</Text>
                    </View>
                    )}
                    keyExtractor={(item) => item.id.toString()}
                    />
                </View>
     
            </View>
        );
    }
}


export default EndScreen;
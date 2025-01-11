import React from 'react'
import { View, Text, Button } from 'react-native';

const FirstScreen = () => {
  return (
    <View>
     <Text>joe</Text>
    </View>
  )
}

const ChallengeScreen = () => {
  const openAlert = () => {
    alert("you popned button")
  }
  return (
    <View style={{flex:1,justifyContent:"center"}}>
    <Text style={{color:"green"}}>Lets Learn React Native Framework</Text>
    <Text>My name is michael</Text>
    <Text>Now I'm learning about <Text style={{color:"blue"}}>React Native Components</Text> to build the user interface for android apps</Text>
    <Text style={{color:"red"}}>I Love Coding</Text>
    <Button title="click me" onPress={openAlert}/>
    </View>
  )
}


export default ChallengeScreen
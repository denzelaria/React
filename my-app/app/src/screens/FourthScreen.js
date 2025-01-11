import React from 'react'
import { View, Text, ScrollView } from 'react-native';
import { Image } from 'react-native';
import { ImageBackground } from 'react-native';
import { InputComponent } from '@/components/InputComponent';

export default ChallengeScreen4 = () => {
    return (
    <View style={{ flex: 1 }}>
    <ImageBackground
    style={{
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor:'beige'
    }}
    imageStyle={{
        opacity:0.4
    }}
    source={{uri:'https://i.pinimg.com/736x/e4/28/c5/e428c5f6e045bcf567fa4267f7985076.jpg'}}
    >
    <View style={{ alignItems: 'center', justifyContent:'flex-end'}}>
    <Text
      style={{
        fontWeight: 'bold',
        fontSize: 30,
        backgroundColor: 'beige',
        padding: 10,
        margin: 10
    }}
    >
    Colosseum
    </Text>
    </View>
    <View style={{ width:"100%", margin: 8, padding: 8, boxSizing:"border-box" }}>
    <InputComponent title="Description" width="100%" height={120} placeholder="About the place" multiline={true} keyboardType="default"/>
    <InputComponent title="Phone number" width="100%" height={50} placeholder="Phonenumber" multiline={true} keyboardType="default"/>
    <InputComponent title="Location" width="100%" height={50} placeholder="Location" multiline={true} keyboardType="default"/>
    </View>
    </ImageBackground>
    </View>
    )
    };
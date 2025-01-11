import React from 'react'
import { View, Text, ScrollView } from 'react-native';
import { Image } from 'react-native';

export default ChallengeScreen3 = () => {
  return (
    <View style={{backgroundColor:"white"}}>
        <View style={{ alignItems:'center',justifyContent:'center', margin:8}}>
            <Text>Pokemon's Profile</Text>
        </View>
        <ScrollView>
            <View style={{ margin:8, padding:8, flexDirection:'row'}}>
                <Image style={{ width:150, height:150 }}/>
                <View style={{ marginLeft:5, justifyContent:'flex-start'}}>
                    <Text>
                    Name : Pikachu
                   {`\n`}
                   Category : Mouse
                   {`\n`}
                   Abilities : Static
                   {`\n`}
                   Weaknesses : Ground 
                    </Text>
                </View>
            </View>
            <View style={{ margin:8, padding:8, flexDirection:'row'}}>
                <Image style={{ width:150, height:150 }}/>
                <View style={{ marginLeft:5, justifyContent:'flex-start'}}>
                    <Text>
                    Name : Flareon
                   {`\n`}
                   Category : Flame
                   {`\n`}
                   Abilities : Flash Fire
                   {`\n`}
                   Weaknesses : Water, Ground, Rock
                    </Text>
                </View>
            </View>
            <View style={{ margin:8, padding:8, flexDirection:'row'}}>
                <Image style={{ width:150, height:150 }}/>
                <View style={{ marginLeft:5, justifyContent:'flex-start'}}>
                    <Text>
                    Name : Rapidash
                   {`\n`}
                   Category : Fire Horse
                   {`\n`}
                   Abilities : Run away, Flash Fire
                   {`\n`}
                   Weaknesses : Ground, Water, Rock
                    </Text>
                </View>
            </View>
            <View style={{ margin:8, padding:8, flexDirection:'row'}}>
                <Image style={{ width:150, height:150 }}/> 
                <View style={{ marginLeft:5, justifyContent:'flex-start'}}>
                    <Text>
                    Name : Psyduck
                   {`\n`}
                   Category : Duck
                   {`\n`}
                   Abilities : Dump, Cloud Nine
                   {`\n`}
                   Weaknesses : Grass, Electric
                    </Text>
                </View>
            </View>
            <View style={{ margin:8, padding:8, flexDirection:'row'}}>
                <Image style={{ width:150, height:150 }}/>
                <View style={{ marginLeft:5, justifyContent:'flex-start'}}>
                    <Text>
                    Name : Bulbasaur
                   {`\n`}
                   Category : Seed
                   {`\n`}
                   Abilities : Overgrow
                   {`\n`}
                   Weaknesses : Fire, psychic, flying, ice
                    </Text>
                </View>
            </View>
        </ScrollView>
    </View>
  )
}

import React from 'react'
import { useState } from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import { Alert } from 'react-native'
export const PlanetComponent = (props) => {
    const {planetImage, planetName, planetDescription} = props
    const clicked = (planet) => {
        alert('You clicked on '+planet)
    }
    return (
        <TouchableOpacity onPress={() => clicked(planetName)}>
            <View style={{flex:1, margin:16, padding:16, flexDirection:'row', backgroundColor:'wheat', borderWidth:1,borderColor:'green', borderRadius:20}}>
            <Image style={{width:100,height:100}} source={planetImage}/>
            <View style={{marginInline:8, flex:1}}>
                <Text style={{fontSize:20,fontWeight:'bold'}}>{planetName}</Text>
                <Text>{planetDescription}</Text>
            </View>
        </View>
        </TouchableOpacity>
    )
}

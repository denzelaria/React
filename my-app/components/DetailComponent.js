import { FlatList, View, Text, Button, TouchableOpacity, Image, ScrollView, StyleSheet, } from 'react-native';
import { Icon } from 'react-native-elements';
import { movieData } from './MovieData'
import React from 'react';
import { useState, useEffect } from 'react';

export const DetailComponent = (props) =>{
    const {identifier, content} = props
    return(
        <View>
            <View>
                <Text>{identifier} : </Text>
            </View>
            <View>
                <Text>{identifier} : </Text>
            </View>
        </View>
    )
}
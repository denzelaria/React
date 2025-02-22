import { FlatList, View, Text, Button, TouchableOpacity, Image, ScrollView, StyleSheet, } from 'react-native';
import { Icon } from 'react-native-elements';
import { movieData } from './MovieData'
import { useState, useEffect } from 'react';

const DetailMovieScreen = (props) => {
    const { route } = props;
    const { title, year, imageLink } = route.params;
    const movie = route.params.item;
    
    useEffect(()=>{
        console.log(title)
    })

    return (
        <View style={styles.mainContainer}>
        <View style={styles.movieContainer}>
            <View style={styles.middle}>
                <Image
                    style={styles.image}
                    source={{ uri: imageLink }}
                />
            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </View>
    </View>
    )
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    },
    movieContainer: {
        margin: 8,
        padding: 8
    },
    middle: {
        alignItems: 'center'
    },
    image: {
        width: 200,
        height: 300,
        borderRadius: 10,
        borderWidth: 3,
        borderColor: '#ffbe7bff'
    }
});
export default DetailMovieScreen;

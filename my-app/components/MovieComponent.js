import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { Icon } from 'react-native-elements'
export const ShowMovie = (props) => {
    const { image, title, viewers } = props
    return (
    <View style={styles.horizontalDataContainer}>
        <Image style={styles.movieImage} source={image}></Image>
        <View style={styles.horizontalTitleContainer}>
            <Text style={styles.horizontalTitle}><Icon name='title' type="material" size={10}></Icon>{title}</Text>
        </View>
        <View style={styles.viewersContainer}>
            <View style={styles.viewersText}>
                <Text><Icon name='eye' type="font-awesome" size={10}></Icon> {viewers}</Text>
            </View>
        </View>
    </View>
  )
}

styles = StyleSheet.create({
    horizontalDataContainer: {
        margin: 8,
        width: 180,
        alignItems: 'center',
        borderColor: '#96ceb4',
        borderWidth: 2,
        borderRadius: 10,
        padding: 16
        },
        horizontalTitleContainer: {
        marginTop: 8,
        marginBottom: 8
        },
        horizontalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
        },
        movieImage: {
        width: 130,
        height: 200,
        borderRadius: 10
        },
        viewersContainer: {
            flexDirection:'row',
            alignItems:'center'
        },
        viewersText: {
            marginLeft:8
        }
})

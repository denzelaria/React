import React, { useEffect } from 'react'
import { movieData } from '../../data/MovieData'
import { View, Text, Image, FlatList, StyleSheet } from 'react-native'
import { ShowMovie } from '../../../../components/MovieComponent';
import { useState } from 'react';
export default HomeScreen = () => {
    const [recommended1, setRecommended1] = useState([])
    const [recommended2, setRecommended2] = useState([])
    const compareRating = (a, b) => {
        const ratingA = a.rating
        const ratingB = b.rating

        if (ratingA > ratingB) {
            return -1
        } else if (ratingA < ratingB) {
            return 1
        } else {
            return 0
        }
    }
    const compareViewers = (a, b) => {
        const viewersA = a.viewers
        const viewersB = b.viewers

        if (viewersA > viewersB) {
            return -1
        } else if (viewersA < viewersB) {
            return 1
        } else {
            return 0
        }
    }
    useEffect(() => {
        const sortedRecommended2 = movieData.sort(compareViewers)
        const sortedRecommended1 = movieData.sort(compareRating)
        setRecommended2(sortedRecommended1)
        setRecommended1(sortedRecommended2)
    }, [])

    return (
        <View style={styles.body}>
            <FlatList
                contentContainerStyle={{ padding: 8 }}
                data={recommended2}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.row}>
                            <Image source={{ uri: item.imageLink }} style={styles.image} />
                            <View>
                                <Text>{item.title}</Text>
                                <Text>{item.year}</Text>
                                <Text>{item.rating}</Text>
                            </View>
                        </View>
                    )
                }}
                ListHeaderComponent={
                    <View>
                        <View style={styles.mainCategoryContainer}>
                            <View style={styles.categoryContainer}>
                                <Text style={styles.categoryText}>
                                    Most viewed
                                </Text>
                            </View>
                        </View>
                        <FlatList
                            horizontal
                            data={recommended2}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) => {
                                return (
                                    <ShowMovie image={{ uri: item.imageLink }} title={item.title} viewers={item.viewers} />
                                )
                            }}
                        ></FlatList>
                        <View style={styles.mainCategoryContainer}>
                            <View style={styles.categoryContainer}>
                                <Text style={styles.categoryText}>
                                    Recommended
                                </Text>
                            </View>
                        </View>
                    </View>
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({

    body: {
        backgroundColor: 'white',
    },
    image: {
        width: 100,
        height: 150,
        borderRadius: 10,
        marginRight: 10
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        margin: 10,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'green',
        alignItems: 'center'
    },
    mainCategoryContainer: {
        marginTop: 8,
        marginLeft: 8,
        marginRight: 8,
        flexDirection: 'row'
    },
    categoryContainer: {
        flex: 1
    },
    categoryText: {
        fontSize: 20,
        fontWeight: 'bold'
    }
})
import React from 'react'
import { View, FlatList, Text, Image, ScrollView, StyleSheet } from 'react-native'
import { userData } from '../../data/TryCodeData'

export default TryCodeScreen = () => {
    return (
        <View style={styles.containerAnItem}>
            <Text>
                An array of objects lets you store multiple values in a single variable. It
                stores a fixed-size sequential collection of elements of the same type. An
                array is used to store a collection of data, but it is often more useful to
                think of an array as a collection of variables of the same type.
            </Text>
            <FlatList
                contentContainerStyle={{ padding: 8 }}
                data={userData}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.containerAnItem}>
                            <Image source={{ uri: item.imageLink }} style={styles.image} />
                            <Text>{item.name}</Text>
                            <Text>{item.gender}</Text>
                            <Text>{item.age}</Text>
                        </View>
                    )
                }}
            />
        </View >
    )
}

const styles = StyleSheet.create({
    containerAnItem: {
        margin:8,
        backgroundColor:'lavendar',
        borderWidth:1
    },
    image: {
        width:100,height:100
    }
})
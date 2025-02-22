import { FlatList, View, Text, Button, TouchableOpacity, Image, ScrollView, StyleSheet, } from 'react-native';
import { Icon } from 'react-native-elements';
import { movieData } from './MovieData'
import { useState, useEffect } from 'react';
import { ButtonComponent } from '../../../../components/ButtonComponent'
import { useNavigation } from 'expo-router';

const HomeScreen = (props) => {
    const [recommended, setRecommended] = useState([]);
    const [topViews, setTopViews] = useState([]);
    // const { navigation } = props;
    const navigation = useNavigation()
   console.log(navigation)
    

    const compareRating = (a, b) => {
        const ratingA = a.rating;
        const ratingB = b.rating;
        if (ratingA > ratingB) {
            return -1;
        } else if (ratingA < ratingB) {
            return 1;
        } else {
            return 0;
        }
    }
    const compareViews = (a, b) => {
        const viewsA = a.viewers;
        const viewsB = b.viewers;
        if (viewsA > viewsB) {
            return -1;
        } else if (viewsA < viewsB) {
            return 1;
        } else {
            return 0;
        }
    }
    const numberWithCommas = (number) => {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    };
    useEffect(() => {
        const sortRecommended = [...movieData].sort(compareRating);
        setRecommended(sortRecommended);
        const sortViews = [...movieData].sort(compareViews);
        setTopViews(sortViews);
    }, []);
    return (
        <View style={styleSheet.mainContainer}>
            <Text style={styleSheet.listHeader}>Most viewed</Text>
            <FlatList
                horizontal
                height={500}
                data={topViews}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styleSheet.smallContainerRow}
                renderItem={({ item }) => {
                    return (
                        <View style={styleSheet.dataContainerRow}>
                            <Image source={{ uri: item.imageLink }} style={styleSheet.movieImageRow} />
                            <View style={styleSheet.textContainerRow}>
                                <Text style={styleSheet.titleTextRow}>{item.title}</Text>
                                <View style={styleSheet.viewContainer}>
                                    <Icon name='eyeo' type='antdesign' color={'white'} size={20} style={{ marginRight: 10 }} />
                                    <Text style={styleSheet.normalText}>{numberWithCommas(item.viewers)}</Text>
                                </View>
                            </View>
                        </View>
                    )
                }}

            />
            <FlatList
                data={recommended}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styleSheet.smallContainer}
                renderItem={({ item }) => {
                    return (
                        <View style={styleSheet.dataContainer}>
                            <Image source={{ uri: item.imageLink }} style={styleSheet.movieImage} />
                            <View style={styleSheet.textContainer}>
                                <Text style={styleSheet.titleText}>{item.title}</Text>
                                <Text style={styleSheet.normalText}>{item.year}</Text>
                                {item.rating === 5 ?
                                    <Image style={styleSheet.starStyle} source={require('../../../../assets/images/five-stars.png')} />
                                    : item.rating === 4 ?
                                        <Image style={styleSheet.starStyle} source={require('../../../../assets/images/four-stars.png')} />
                                        : item.rating === 3 ?
                                            <Image style={styleSheet.starStyle} source={require('../../../../assets/images/three-stars.png')} />
                                            : item.rating === 2 ?
                                                <Image style={styleSheet.starStyle} source={require('../../../../assets/images/two-stars.png')} />
                                                : <Image style={styleSheet.starStyle} source={require('../../../../assets/images/star.png')} />
                                }
                                <ButtonComponent onPress={() => navigation.navigate('DetailMovie', { title: item.title, year: item.year, imageLink: item.imageLink })} />
                            </View>
                        </View>
                    )
                }}
                ListHeaderComponent={
                    < View >
                        <Text style={styleSheet.listHeader}>Recommended by rating</Text>
                    </View >
                }
            />
        </View >
    )
};

const styleSheet = StyleSheet.create({
    smallContainer: {
        margin: 8,
        padding: 8,
    },
    dataContainer: {
        margin: 8,
        backgroundColor: '#2c2d47',
        borderRadius: 10,
        padding: 8,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    mainContainer: {
        flex: 1
    },
    movieImage: {
        width: 130,
        height: 200,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'white'
    },
    titleText: {
        color: 'white',
        marginBottom: 10,
        fontSize: 18,
        fontWeight: 'bold',
    },
    textContainer: {
        paddingLeft: 20,
        textAlign: 'left',
        flex: 1,
        height: '100%',
        paddingVertical: 10
    },
    normalText: {
        color: '#cacbed'
    },
    dataContainerRow: {
        margin: 8,
        backgroundColor: '#2c2d47',
        borderRadius: 10,
        width: 150,
        padding: 8,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textContainerRow: {
        textAlign: 'center',
        flex: 1,
        height: '100%',
        paddingVertical: 10
    },
    movieImageRow: {
        width: 130,
        height: 200,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'white'
    },
    titleTextRow: {
        color: 'white',
        marginBottom: 5,
        fontSize: 13,
        fontWeight: 'bold',
    },
    listHeader: {
        fontWeight: 'bold',
        fontSize: 20,
    },

    starStyle: {
        width: 100,
        height: 20
    },

    viewContainer: {
        display: 'flex',
        flexDirection: 'row'
    }
})
export default HomeScreen;

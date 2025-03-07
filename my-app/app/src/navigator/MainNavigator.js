import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/Meeting9/HomeScreen';
import DetailMovieScreen from '../screens/Meeting9/DetailMovieScreen';

const Stack = createStackNavigator();
const MainNavigator = () => {
    return (
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen
                    name="Home"

                component={HomeScreen}
                options={{ headerShown: false }}/>

                <Stack.Screen
                    name="DetailMovie"

                component={DetailMovieScreen}
                options={{ headerShown: false }}/>
            </Stack.Navigator>
    )
}

export default MainNavigator
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import GuessTheCountryScreen from
    '../screens/Meeting6/GuessTheCountryScreen';
import WinScreen from '../screens/Meeting6/WinScreen';

const Stack = createStackNavigator();
const MainNavigator = () => {
    return (
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen
                    name="Home"

                component={GuessTheCountryScreen}
                options={{ headerShown: false }}/>

                <Stack.Screen
                    name="Win"

                component={WinScreen}
                options={{ headerShown: false }}/>
            </Stack.Navigator>
    )
}

export default MainNavigator
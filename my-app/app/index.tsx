import { Image, StyleSheet, Platform } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import React from 'react';
import { SafeAreaProvider }
from 'react-native-safe-area-context';
import MainNavigator from './src/navigator/MainNavigator'
import ChallengeScreen from './src/screens/FirstScreen'
import ChallengeScreen2 from './src/screens/SecondScreen'
import ChallengeScreen3 from './src/screens/ThirdScreen'
import ChallengeScreen4 from './src/screens/FourthScreen'
import ChallengeScreen5 from './src/screens/FifthScreen'
import GuessTheCountryScreen from './src/screens/Meeting6/GuessTheCountryScreen'
import WinScreen from './src/screens/Meeting6/WinScreen'
import SolarSystemScreen from './src/screens/Test/SolarSystemScreen'

export default function App() {
  return (
    <SafeAreaProvider>
      <SolarSystemScreen/>
    </SafeAreaProvider>
  )
}

// const styles = StyleSheet.create({
//   titleContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 8,
//   },
//   stepContainer: {
//     gap: 8,
//     marginBottom: 8,
//   },
//   reactLogo: {
//     height: 178,
//     width: 290,
//     bottom: 0,
//     left: 0,
//     position: 'absolute',
//   },
// });

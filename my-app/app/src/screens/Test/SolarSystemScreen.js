import React from 'react';
import {
    View,
    Text,
    ImageBackground,
    Image,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import { PlanetComponent } from '../../../../components/PlanetComponent'

const SolarSystemScreen = () => {
    return (
        <View style={{backgroundColor:'white',flex:1}}>
            <Text style={{margin:10,textAlign:'center', fontSize:30,fontFamily:'serif', textDecorationLine:'underline'}}>SOLAR SYSTEM</Text>
            <ScrollView>
                <PlanetComponent planetName={'Mercury'} planetDescription={'Mercury is the fastest planet, zipping around the sun every 88 earth days'} planetImage={require('../../../../assets/images/mercury.png')} />
                <PlanetComponent planetName={'Venus'} planetDescription={'Venus spins slowly in the opposite direction from most nets'} planetImage={require('../../../../assets/images/venus.png')}/>
                <PlanetComponent planetName={'Earth'} planetDescription={'Earth is the only place we know of so far thats inhabited by living things'} planetImage={require('../../../../assets/images/earth.png')} />
                <PlanetComponent planetName={'Mars'} planetDescription={'Mars is a dusty, cold, desert world with a very thin atmosphere'} planetImage={require('../../../../assets/images/mars.png')} />
                <PlanetComponent planetName={'jupiter'} planetDescription={'Jupiter is more than twice as massive than the other planets of our solar system combined'} planetImage={require('../../../../assets/images/jupiter.png')} />
                <PlanetComponent planetName={'Saturn'} planetDescription={'Adorned with a dazzling, complex system of icy rings, Saturn is unique in our solar system'} planetImage={require('../../../../assets/images/saturn.png')} />
                <PlanetComponent planetName={'Uranus'} planetDescription={'Uranus rotates at a nearly 90-degree angle from the plane of its orbit'} planetImage={require('../../../../assets/images/uranus.png')} />
                <PlanetComponent planetName={'Neptune'} planetDescription={'Neptune is dark, cold, and whipped by supersonic winds'} planetImage={require('../../../../assets/images/neptune.png')} />

            </ScrollView>
        </View>
    )
};
export default SolarSystemScreen;
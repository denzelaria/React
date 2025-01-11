import React from 'react'
import { View, Text, Button, ScrollView } from 'react-native';
import { Story } from '../../../components/InstagramComponents';
import { Feed } from '../../../components/InstagramComponents';
import { Icon } from 'react-native-elements';

const ChallengeScreen5 = () => {
return (
<View style={{ flex: 1, backgroundColor:'white' }}>
  <View style={{
    flexDirection: 'row',
    justifyContent: 'space-between'
  }}>
    <Text
      style={{
      fontFamily: 'StyleScript-Regular',
      fontSize: 40, marginLeft: 16
    }}>
    Instagram
    </Text>
    <View style={{flexDirection: 'row',alignItems: 'center', marginRight: 8}}>
      <View style={{ margin: 8 }}>
        <Icon name='plus-square-o' type='font-awesome' size={26}/>
      </View>
    </View> 
  </View>
  <View style={{ flexDirection: 'row', margin: 8 }}>
      <ScrollView horizontal>
          <Story
            profile={require('../../../assets/images/profilePicture1.png')}
            username='joe'
          />
          <Story
            profile={require('../../../assets/images/profilePicture2.png')}
            username='joe'
          />
          <Story
            profile={require('../../../assets/images/profilePicture3.png')}
            username='joe'
          />
          <Story
            profile={require('../../../assets/images/profilePicture4.png')}
            username='joe'
          />
      </ScrollView>
  </View>
  <ScrollView>
    <Feed profile={require('../../../assets/images/profilePicture1.png')} username='joe' post={'https://images4.alphacoders.com/292/292026.jpg'}/>
    <Feed profile={require('../../../assets/images/profilePicture2.png')} username='rogan' post={'https://wallpaperaccess.com/full/496881.jpg'}/>
    <Feed profile={require('../../../assets/images/profilePicture3.png')} username='joe' post={'https://images5.alphacoders.com/316/316297.jpg'}/>
    <Feed profile={require('../../../assets/images/profilePicture4.png')} username='rogan' post={'https://wallpaperaccess.com/full/1403923.jpg'}/>
  </ScrollView>
</View >
)
};

export default ChallengeScreen5
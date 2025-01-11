import React from 'react'
import { View, Text, Button } from 'react-native';

const ChallengeScreen2 = () => {
    return (
      <View style={{backgroundColor:"white",flex:1,justifyContent:"center",alignItems:"center"}}>
          <View>
            <Text>iOS</Text>
          </View>
          <View>
            <Text>
            iOS (formerly iPhone OS) is a mobile operating
            system created and developed by Apple Inc.
            exclusively for its hardware. It is the operating
            system that powers many of the company's mobile
            devices, including the iPhone and iPod Touch.
            </Text>
          </View>
          <View>
            <Text>VS.</Text>
          </View>
          <View>
            <Text>Android</Text>
          </View>
          <View>
            <Text>
            Android is a mobile operating system based on a
            modified version of the Linux kernel and other open
            source software, designed primarily for
            touchscreen mobile devices such as smartphones and
            tablets. Android is developed by a consortium of
            developers known as the Open Handset Alliance and
            commercially sponsored by Google.
            </Text>
         </View>
    </View>
    )
};

export default ChallengeScreen2
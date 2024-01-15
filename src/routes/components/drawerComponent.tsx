import {Pressable, Text, View} from 'react-native';
import React from 'react';

const DrawerComponent = () => {
  return (
    <View style={{}}>
      <Pressable style={{paddingVertical: '5%', borderBottomWidth: 0.5}}>
        <Text>Profile</Text>
      </Pressable>
      <Pressable style={{paddingVertical: '5%', borderBottomWidth: 0.5}}>
        <Text>Logout</Text>
      </Pressable>
    </View>
  );
};

export default DrawerComponent;

// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ScreenName} from '../common/commonText';
import DrawerRoute from './drawerRoute';
import User from '../modules/User';

function HomeScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function StackRouteScreens() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={ScreenName.HOME} component={DrawerRoute} />
      <Stack.Screen name={ScreenName.USER} component={User} />
    </Stack.Navigator>
  );
}

export default StackRouteScreens;

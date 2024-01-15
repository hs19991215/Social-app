import * as React from 'react';
import {Button, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Profile from '../modules/Profile';
import {ScreenName} from '../common/commonText';
import Home from '../modules/Home';
import WebPannel from '../modules/WebPannel';
import DrawerComponent from './components/drawerComponent';
import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function DrawerRoute() {
  const drawerComponent = (props: any) => {
    return <DrawerComponent {...props} />;
  };
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Home"
      drawerContent={drawerComponent}>
      <Drawer.Screen name={ScreenName.HOME} component={Home} />
      <Drawer.Screen name={ScreenName.PROFILE} component={Profile} />
      <Drawer.Screen
        name={ScreenName.NOTIFICATIONS}
        component={NotificationsScreen}
      />
      <Drawer.Screen name={ScreenName.WEBPANNEL} component={WebPannel} />
    </Drawer.Navigator>
  );
}

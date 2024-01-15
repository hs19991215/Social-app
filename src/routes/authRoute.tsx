// In App.js in a new project

import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../modules/Login';
import SignUp from '../modules/SignUp';
import {ScreenName} from '../common/commonText';

const Stack = createNativeStackNavigator();

function AuthRoute() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={ScreenName.SIGN_UP} component={SignUp} />
      <Stack.Screen name={ScreenName.LOGIN} component={Login} />
    </Stack.Navigator>
  );
}

export default AuthRoute;

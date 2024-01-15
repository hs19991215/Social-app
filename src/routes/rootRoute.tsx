/* eslint-disable react/react-in-jsx-scope */
import {NavigationContainer} from '@react-navigation/native';
import AuthRoute from './authRoute';
import StackRouteScreens from './stackRoute';
import {useSelector} from 'react-redux';

const RootRoute = () => {
  const user = useSelector(state => state);
  const isLogedin = user?.auth?.user?.token !== '';
  return (
    <NavigationContainer>
      {isLogedin === true ? <StackRouteScreens /> : <AuthRoute />}
    </NavigationContainer>
  );
};

export default RootRoute;

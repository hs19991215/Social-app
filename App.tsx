import {View} from 'react-native';
import React from 'react';
import RootRoute from './src/routes/rootRoute';
import {styles} from './src/common/styles';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import store, {persistor} from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <GestureHandlerRootView style={{flex: 1}}>
          <View style={styles.flex1}>
            <RootRoute />
          </View>
        </GestureHandlerRootView>
      </PersistGate>
    </Provider>
  );
};

export default App;

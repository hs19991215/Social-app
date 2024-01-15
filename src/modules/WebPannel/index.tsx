import React from 'react';
import WebView from 'react-native-webview';

const WebPannel = () => {
  return (
    <>
      <WebView source={{uri: 'https://reactnative.dev/'}} style={{flex: 1}} />
    </>
  );
};

export default WebPannel;

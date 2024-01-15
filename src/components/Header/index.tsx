import {Image, Pressable, Text, View} from 'react-native';
import React from 'react';
import {styles} from './style';
import {useNavigation} from '@react-navigation/native';

type Props = {
  onPressLeft?: () => void;
  onPressRight?: () => void;
  screenName?: string;
  type?: string;
};

const Header = (props: Props) => {
  const {onPressRight, screenName, type, onPressLeft} = props;
  const navigation = useNavigation();
  return (
    <View style={styles.mainContainer}>
      {(() => {
        switch (type) {
          case 'left':
            return (
              <View style={styles.leftSubContainer}>
                <Pressable
                  onPress={() => {
                    navigation.goBack();
                    onPressLeft;
                  }}>
                  <Image
                    source={require('../../assets/images/back.png')}
                    style={styles.imageSize}
                  />
                </Pressable>
                <Text style={styles.headerText}>{screenName}</Text>
              </View>
            );
          case 'middle':
            return (
              <View style={styles.subContainer}>
                <Pressable onPress={onPressRight}>
                  <Image
                    source={require('../../assets/images/menu.png')}
                    style={styles.middleImageSize}
                  />
                </Pressable>
                <Text style={styles.headerText}>{screenName}</Text>
                <Pressable onPress={onPressLeft}>
                  <Image
                    source={require('../../assets/images/notification.png')}
                    style={styles.middleImageSize}
                  />
                </Pressable>
              </View>
            );
        }
      })()}
    </View>
  );
};

export default Header;

import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {styles} from './style';

type Props = {
  type?: string;
  title?: string;
  onPress?: () => void | undefined;
};
const CustomButton = (props: Props) => {
  const {type, title, onPress} = props;
  return (
    <>
      {(() => {
        switch (type) {
          case 'regular':
            return (
              <Pressable onPress={onPress} style={styles.buttonContainer}>
                <Text>{title}</Text>
              </Pressable>
            );
        }
      })()}
    </>
  );
};

export default CustomButton;

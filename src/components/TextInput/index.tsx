import {
  KeyboardTypeOptions,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React from 'react';
import { styles } from './style';

type Props = {
  type?: string;
  placeholder?: string;
  keyboardType?: KeyboardTypeOptions | undefined;
  onChangeText?: () => void;
  value?:string
};

const CustomTextInput = (props: Props) => {
  const {type, placeholder, keyboardType, onChangeText,value} = props;
  return (
    <>
      {(() => {
        switch (type) {
          case 'regular':
            return (
              <View style={styles.container}>
                <TextInput
                style={styles.textContainer}
                  placeholder={placeholder}
                  keyboardType={keyboardType}
                  onChangeText={onChangeText}
                  value={value}
                />
              </View>
            );
        }
      })()}
    </>
  );
};

export default CustomTextInput;


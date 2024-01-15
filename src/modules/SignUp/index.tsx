import {Text, TextInput, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from '../../common/styles';
import CustomTextInput from '../../components/TextInput';
import CustomButton from '../../components/Button';
import {useDispatch} from 'react-redux';
import {signUp} from '../../redux/actions/authAction';
import {ScreenName} from '../../common/commonText';

const SignUp = (props: any) => {
  const [name, setName] = useState('harsh');
  const [email, setEmail] = useState('harsh@gmail.com');
  const [password, setPassword] = useState('12345678');

  const dispatch = useDispatch<any>();
  const handleSignUp = () => {
    setName('');
    setEmail('');
    setPassword('');
    const payload = {
      name: name,
      email: email,
      password: password,
    };
    dispatch(signUp(payload, props?.navigation));
  };

  return (
    <View style={styles.flex1}>
      <CustomTextInput
        type="regular"
        onChangeText={(e: any) => setName(e)}
        placeholder="name"
      />
      <CustomTextInput
        type="regular"
        onChangeText={(e: any) => setEmail(e)}
        placeholder="email"
      />
      <CustomTextInput
        type="regular"
        onChangeText={(e: any) => setPassword(e)}
        placeholder="password"
      />
      <CustomButton
        type="regular"
        title="Sign UP"
        onPress={(e: any) => handleSignUp()}
      />
      <CustomButton
        type="regular"
        title="Login"
        onPress={(e: any) => props.navigation.navigate(ScreenName.LOGIN)}
      />
    </View>
  );
};

export default SignUp;

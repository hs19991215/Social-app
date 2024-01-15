import {View} from 'react-native';
import React, {useState} from 'react';
import {styles} from '../../common/styles';
import CustomTextInput from '../../components/TextInput';
import {login} from '../../redux/actions/authAction';
import {useDispatch} from 'react-redux';
import CustomButton from '../../components/Button';

const Login = (props: any) => {
  const [email, setEmail] = useState('harsh@gmail.com');
  const [password, setPassword] = useState('12345678');
  const dispatch = useDispatch<any>();

  const handleSignUp = () => {
    setEmail('');
    setPassword('');
    const payload = {
      email: 'string',
      password: 'string',
    };
    dispatch(login(payload, props?.navigation));
  };
  return (
    <View style={styles.flex1}>
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
        title="Login"
        onPress={(e: any) => handleSignUp()}
      />
    </View>
  );
};

export default Login;

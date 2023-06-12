import React, {useState} from 'react';
import {View, Text, TextInput, Pressable} from 'react-native';
import styles from './styles';

const Login = ({navigation}: any) => {
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const goToRegister = () => {
    navigation.navigate('Register');
  };

  const login = () => {
    console.log(email, phoneNumber);
  };
  return (
    <View style={styles.column}>
      <Text style={[styles.textCenter, styles.fontMedium]}>Login Page</Text>
      <View style={[styles.column, styles.border]}>
        <Text style={[styles.textCenter, styles.fontLarge]}>Login</Text>
        <Text>Login with email</Text>
        <Text>Mobile Number</Text>
        <View style={styles.row}>
          <TextInput
            style={styles.textPhoneNumber}
            onChangeText={setPhoneNumber}></TextInput>
          <Text style={styles.textOTP}>Send OTP</Text>
        </View>
        <View style={styles.row}>
          <TextInput
            style={styles.textEmail}
            onChangeText={setEmail}></TextInput>
        </View>
        <Pressable style={styles.button} onPress={login}>
          <Text style={styles.fontMedium}>Login</Text>
        </Pressable>
      </View>
      <View style={[styles.column]}>
        <Text style={[styles.textCenter, styles.fontMedium]}>
          Don't have account?
        </Text>
        <Pressable style={styles.button} onPress={goToRegister}>
          <Text style={styles.fontMedium}>Register Now</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Login;

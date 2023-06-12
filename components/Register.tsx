import React, {useState} from 'react';
import {View, Text, TextInput, Pressable} from 'react-native';
import styles from './styles';
const Register = ({navigation}: any) => {
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const goToLogin = () => {
    navigation.navigate('Login');
  };

  const signup = () => {
    console.log(email, phoneNumber);
  };
  return (
    <View style={styles.column}>
      <Text style={[styles.textCenter, styles.fontMedium]}>
        Registeration Page
      </Text>
      <View style={[styles.column, styles.border]}>
        <Text style={[styles.textCenter, styles.fontLarge]}>Resiter</Text>
        <Text>Register with email</Text>
        <View>
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
          <Pressable style={styles.button} onPress={signup}>
            <Text style={styles.fontMedium}>Sign up</Text>
          </Pressable>
        </View>
      </View>
      <View style={[styles.column]}>
        <Text style={[styles.textCenter, styles.fontMedium]}>
          Already have account?
        </Text>
        <Pressable style={styles.button} onPress={goToLogin}>
          <Text style={styles.fontMedium}>Login</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Register;

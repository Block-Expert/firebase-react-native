import React, {useState} from 'react';
import {View, Text, TextInput, Pressable} from 'react-native';
import styles from './styles';
import firebase from 'react-native-firebase';
const Register = ({navigation}: any) => {
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [emailMode, setEmailMode] = useState(true);
  const [verificationCode, setVerificationCode] = useState('');

  const goToLogin = () => {
    navigation.navigate('Login');
  };

  const handleChangeMode = () => {
    // setEmailMode(!emailMode);
  };

  const signup = () => {
    console.log('email', email);
    console.log('verificationCode', verificationCode);
    registerEmail();
  };

  const registerEmail = () => {
    console.log('email', email);
    console.log('verificationCode', verificationCode);

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, verificationCode)
      .then(user => {
        console.log(user);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <View style={styles.column}>
      <Text style={[styles.textCenter, styles.fontMedium]}>
        Registeration Page
      </Text>
      <View style={[styles.column, styles.border]}>
        <Text style={[styles.textCenter, styles.fontLarge]}>Register</Text>
        <Pressable onPress={handleChangeMode}>
          <Text>Register with {emailMode ? 'email' : 'mobile'}</Text>
        </Pressable>
        <Text>{emailMode ? 'Mobile Number' : 'Email'}</Text>
        {emailMode ? (
          <View style={styles.row}>
            <TextInput
              style={styles.textPhoneNumber}
              onChangeText={setEmail}></TextInput>
            <Pressable
              style={{
                width: '100%',
                height: 40,
                justifyContent: 'center',
              }}
              onPress={() => {}}>
              <Text style={styles.textOTP}>Send OTP</Text>
            </Pressable>
          </View>
        ) : (
          <View style={styles.row}>
            <TextInput
              style={styles.textPhoneNumber}
              onChangeText={setPhoneNumber}></TextInput>
            <Pressable
              style={{
                width: '100%',
                height: 40,
                justifyContent: 'center',
              }}
              onPress={() => {}}>
              <Text style={styles.textOTP}>Send OTP</Text>
            </Pressable>
          </View>
        )}
        <View style={styles.row}>
          <TextInput
            style={styles.textVerficiationCode}
            onChangeText={setVerificationCode}></TextInput>
        </View>
        <Pressable style={styles.button} onPress={signup}>
          <Text style={styles.fontMedium}>Register</Text>
        </Pressable>
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

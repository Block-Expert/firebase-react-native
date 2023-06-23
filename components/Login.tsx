import React, {useState} from 'react';
import {View, Text, TextInput, Pressable, TouchableOpacity} from 'react-native';
import firebase from 'react-native-firebase';
import styles from './styles';

const Login = ({navigation}: any) => {
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [confirmResult, setConfirmResult] = useState<any>();
  const [verificationCode, setVerificationCode] = useState('');
  const [userId, setUserId] = useState('');
  const [emailMode, setEmailMode] = useState(true);
  const [otpVerificationId, setOtpVerificationId] = useState();
  const goToRegister = () => {
    navigation.navigate('Register');
  };

  const login = () => {
    console.log(email, phoneNumber);
    if (emailMode) {
      lgoinWithEmail();
    } else {
      handleVerifyCode();
    }
  };

  const validatePhoneNumber = () => {
    const regexp = /^\+[0-9]?()[0-9](\s|\S)(\d[0-9]{8,16})$/;
    return regexp.test(phoneNumber);
  };

  const validateEmailAddress = () => {
    return email;
  };
  const handleChangeMode = () => {
    // setEmailMode(!emailMode);
  };

  const handleSendCode = () => {
    console.log('Send OTP');
    // Request to send OTP
    if (validatePhoneNumber()) {
      firebase
        .auth()
        .signInWithPhoneNumber(phoneNumber)
        .then(confirmResult => {
          console.log(confirmResult);
          setConfirmResult(confirmResult);
        })
        .catch(error => {
          // alert(error.message)
          console.log(error);
        });
    } else {
      // alert('Invalid Phone Number');
      console.log('Invalid Phone Number');
    }
  };

  const changePhoneNumber = () => {};

  const handleVerifyCode = () => {
    // Request for OTP verification
    if (verificationCode.length == 6) {
      confirmResult
        .confirm(verificationCode)
        .then(user => {
          setUserId(user.uid);
          // Alert(`Verified! ${user.uid}`)
        })
        .catch(error => {
          // alert(error.message)
          console.log(error);
        });
    } else {
      // alert(`Please enter a 6 digit OTP code.`)
    }
  };

  const lgoinWithEmail = () => {
    console.log(email, verificationCode);
    if (validateEmailAddress()) {
      firebase
        .auth()
        .signInWithEmailLink(email, verificationCode)
        .then(user => {
          console.log(user);
          setUserId(user.user.uid);
        })
        .catch(error => {
          console.log(error);
        });
    }
  };

  const sendEmailCode = () => {
    console.log(email);
    const actionCodeSettings = {
      handleCodeInApp: true,
      // URL must be whitelisted in the Firebase Console.
      url: 'https://www.example.page.link',
      android: {
        packageName: 'com.myapp',
        installApp: true,
        minimumVersion: '12',
      },
      iOS: {},
    };

    firebase
      .auth()
      .sendSignInLinkToEmail(email, actionCodeSettings)
      .then(verificationId => {
        console.log(verificationId);
      })
      .catch(error => console.log(error));
  };

  return (
    <View style={styles.column}>
      <Text style={[styles.textCenter, styles.fontMedium]}>Login Page</Text>
      {userId ? (
        <View>
          <Text>{userId} logged in</Text>
        </View>
      ) : (
        <View style={[styles.column, styles.border]}>
          <Text style={[styles.textCenter, styles.fontLarge]}>Login</Text>
          <Pressable onPress={handleChangeMode}>
            <Text>Login with {!emailMode ? 'email' : 'mobile'}</Text>
          </Pressable>
          <Text>{!emailMode ? 'Mobile Number' : 'Email'}</Text>
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
                onPress={sendEmailCode}>
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
                onPress={handleSendCode}>
                <Text style={styles.textOTP}>Send OTP</Text>
              </Pressable>
            </View>
          )}
          <View style={styles.row}>
            <TextInput
              style={styles.textVerficiationCode}
              onChangeText={setVerificationCode}></TextInput>
          </View>
          <Pressable style={styles.button} onPress={login}>
            <Text style={styles.fontMedium}>Login</Text>
          </Pressable>
        </View>
      )}
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

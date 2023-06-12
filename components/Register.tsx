import React, {useState} from 'react';
import {View, Text, TextInput, Pressable, StyleSheet} from 'react-native';
// import {Actions} from 'react-native-router-flux';

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
              style={{
                backgroundColor: '#FFFFFF',
                width: '75%',
                marginRight: 10,
              }}
              onChangeText={setPhoneNumber}></TextInput>
            <Text
              style={{width: '100%', height: '100%', justifyContent: 'center'}}>
              Send OTP
            </Text>
          </View>
          <View style={styles.row}>
            <TextInput
              style={{backgroundColor: '#FFFFFF', width: '100%'}}
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

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
  },
  column: {
    flexDirection: 'column',
    margin: 10,
  },
  link: {
    fontWeight: 'bold',
  },
  border: {
    borderWidth: 1,
    borderRadius: 20,
    padding: 30,
    backgroundColor: '#cbcbcb',
  },
  textCenter: {
    textAlign: 'center',
  },
  fontLarge: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  fontMedium: {
    fontSize: 18,
  },
  fontSmall: {
    fontSize: 10,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
  },
});

export default Register;
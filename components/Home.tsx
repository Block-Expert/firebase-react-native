import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

const Home = ({navigation}: any) => {
  const goToLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <TouchableOpacity style={{margin: 128}} onPress={goToLogin}>
      <Text>Go to Login !</Text>
    </TouchableOpacity>
  );
};

export default Home;

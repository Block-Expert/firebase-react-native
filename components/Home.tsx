import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

const Home = ({navigation}: any) => {
  const goToRegister = () => {
    navigation.navigate('Register');
  };

  return (
    <TouchableOpacity style={{margin: 128}} onPress={goToRegister}>
      <Text>Go to Register!</Text>
    </TouchableOpacity>
  );
};

export default Home;

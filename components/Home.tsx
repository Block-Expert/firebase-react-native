import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
// import {Actions} from 'react-native-router-flux';

const Home = ({navigation}: any) => {
  const goToRegister = () => {
    // Actions.about();
    navigation.navigate('Register');
  };

  return (
    <TouchableOpacity style={{margin: 128}} onPress={goToRegister}>
      <Text>Go to Register!</Text>
    </TouchableOpacity>
  );
};

export default Home;

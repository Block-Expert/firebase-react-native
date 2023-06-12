import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

const About = ({navigation}: any) => {
  const goToHome = () => {
    navigation.navigate('Home');
  };

  return (
    <TouchableOpacity style={{margin: 128}} onPress={goToHome}>
      <Text>This is a small App</Text>
    </TouchableOpacity>
  );
};

export default About;

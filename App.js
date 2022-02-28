import {View, Text} from 'react-native';
import React from 'react';
import {useForm, Controller} from 'react-hook-form';

export default function App() {
  const {control} = useForm();
  return (
    <View>
      <Text>App</Text>
    </View>
  );
}

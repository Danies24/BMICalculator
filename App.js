import React from 'react';
import ReactHookForm from './src/Components/ReactHookForm';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BMI from './src/Components/BMI';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="BMI" component={BMI} /> */}
        <Stack.Screen name="ReactHookForm" component={ReactHookForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

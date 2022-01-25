import React, { useState } from 'react';
import { Alert, Button, Text, TextInput, View } from 'react-native';

export default function App() {
  const [Height, setHeight] = useState(0);
  const [Weight, setWeight] = useState(0);
  const [BMI, setBMI] = useState('');


  const calculateBmiFunction=()=>{
    if (Weight === 0 || Height === 0) {
      Alert.alert(
        "No Value Found",
        "Enter Proper Weight and Height",
        [
          { text: "OK" }
        ]
      );
    } else {
      let BMI = (Weight/(Height*Height)*703);
      setBMI(BMI.toFixed(1));
      
    }
    
  }
  return (
    <View>
      <Text>BMI CALCULATOR</Text>
      <TextInput placeholder='Weight' defaultValue={Weight} keyboardType='numeric'  onChangeText={(value)=>setWeight(value)}/>
      <TextInput placeholder='Height(Centimeter)' defaultValue={Height} keyboardType='numeric'  onChangeText={(value)=>setHeight(value)}/>
      <Button title='Submit' onPress={calculateBmiFunction}/>
      <Text></Text>
    </View>
  )
}

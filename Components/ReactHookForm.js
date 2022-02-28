import {
  Alert,
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useForm, Controller} from 'react-hook-form';

export default function App() {
  const {
    control,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm();

  const [bmi, setBMI] = useState('');
  const [message, setMessage] = useState('');

  const calculateBmiFunction = data => {
    const {Height, Weight} = data;

    if (Weight == 0 || Height == 0) {
      Alert.alert('Wrong Value', 'Enter Proper Weight and Height', [
        {text: 'OK'},
      ]);
    } else {
      let bmi = (Weight / (Height * Height)) * 10000;
      setBMI(bmi.toFixed(1));
      if (bmi < 18.5) {
        setMessage('You are underweight');
      } else if (bmi > 18.5 && bmi < 24.9) {
        setMessage(' Healthy person with Normal Weight ');
      } else if (bmi > 25.0 && bmi < 29.9) {
        setMessage('Eat Less ! You are Overweight');
      } else {
        setMessage('Obesity Do more Exercises ');
      }
    }
  };

  return (
    <View style={style.container}>
      <View style={style.middleBox}>
        <Text style={style.logo}>BMI CALCULATOR</Text>
        <View>
          <Controller
            control={control}
            render={({field: {onChange, onBlur, value, ref}}) => (
              <TextInput
                style={style.textInput}
                placeholderTextColor="#1A1A40"
                placeholder="Weight (kg)"
                keyboardType="numeric"
                value={value}
                keyboardAppearance="dark"
                onChangeText={value => onChange(value)}
              />
            )}
            name="Weight"
            rules={{
              required: true,
            }}
          />
          {errors.Weight && <Text>Field required</Text>}
          <Controller
            control={control}
            name="Height"
            rules={{
              required: true,
            }}
            render={({field: {onChange, onBlur, value, ref}}) => (
              <TextInput
                style={style.textInput}
                placeholderTextColor="#1A1A40"
                placeholder="Height (kg)"
                keyboardType="numeric"
                value={value}
                keyboardAppearance="dark"
                onChangeText={value => onChange(value)}
              />
            )}
          />
          {errors.Height && <Text>Field required</Text>}
        </View>

        <View style={style.buttonBox}>
          <Button
            title="Calculate"
            onPress={handleSubmit(calculateBmiFunction)}
          />
          <Button title="Reset" onPress={() => reset()} />
        </View>
        <Text style={[style.message, style.bmiNumber]}>
          {' '}
          Your BMI : {bmi} kg/m
        </Text>
        {message !== '' ? <Text style={style.message}> {message}</Text> : null}
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A40',
    justifyContent: 'center',
    alignItems: 'center',
  },
  middleBox: {
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    justifyContent: 'space-between',
    padding: 10,
    paddingVertical: 20,
    width: '85%',
    height: '75%',
  },
  logo: {
    color: '#1A1A40',
    fontWeight: '800',
    fontSize: 20,
    textAlign: 'center',
  },
  textInput: {
    fontSize: 20,
    // fontWeight:500,
    paddingVertical: 15,
    borderBottomWidth: 2,
    borderBottomColor: '#FBCAFF',
  },
  buttonBox: {
    height: '20%',
    justifyContent: 'space-around',
  },
  button: {
    backgroundColor: '#1A1A40',
    textAlign: 'center',
    padding: 8,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 15,
  },
  resetButton: {
    backgroundColor: 'red',
    // padding:0
  },
  bmiNumber: {
    fontSize: 20,
  },
  message: {
    backgroundColor: 'white',
    // marginTop:'14%',
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'center',
    // padding:1
    color: '#1A1A40',
    textTransform: 'uppercase',
  },
});

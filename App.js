import React, { useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';


export default function App() {
  const [Height, setHeight] = useState('');
  const [Weight, setWeight] = useState('');
  const [bmi, setBMI] = useState('');
  const [message, setMessage] = useState('');


  const calculateBmiFunction=()=>{
    if (Weight == 0 || Height == 0) {
      Alert.alert(
        "No Value Found",
        "Enter Proper Weight and Height",
        [
          { text: "OK" }
        ]
      );
    } else {
      let bmi = (Weight/(Height*Height))*10000;
      setBMI(bmi.toFixed(1)); 

      if (bmi < 18.5) {
        setMessage("You are underweight")
      }else if(bmi >18.5 && bmi <24.9){
        setMessage(" Healthy person with Normal Weight ")
      }else if(bmi>25.0 && bmi <29.9){
        setMessage("Eat Less ! You are Overweight")
      }else{
        setMessage("Obesity Do more Exercises ")
      }


    }
  }
  const ResetFunction=()=>{
    setHeight('')
    setWeight('')
    setBMI('')
    setMessage('')
  }
  return (
    <View style={style.container}>
    <View style={style.middleBox}>

      <Text style={style.logo}>BMI CALCULATOR</Text>
      <View>
      <TextInput style={style.textInput} placeholderTextColor='#1A1A40' placeholder='Weight (kg)' keyboardType='numeric' keyboardAppearance='dark' onChangeText={(value)=>setWeight(value)}/>
      <TextInput style={style.textInput}  placeholderTextColor='#1A1A40' placeholder='Height (cm)' keyboardType='numeric'  onChangeText={(value)=>setHeight(value)}/>
      </View>

      <View style={style.buttonBox}>

      <TouchableOpacity style={style.button} onPress={()=>calculateBmiFunction()}>
        <Text style={style.buttonText}>C A L C U L A T E</Text>
      </TouchableOpacity>
      </View>
      <Text style={[style.message,style.bmiNumber]}> Your BMI : {bmi} kg/m</Text>
    {message !== "" ? 
      <Text style={style.message}> {message}</Text> : null
    }
    </View>
    </View>
  )
}
 const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#1A1A40',
    justifyContent:'center',
    alignItems:'center'
  },
  middleBox:{
    backgroundColor:'white',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    justifyContent:'space-between',
    padding:10,
    paddingVertical:20,
    width:'85%',
    height:'65%',
  },
  logo:{
    color:'#1A1A40',
  fontWeight:'800',
    fontSize:20,
    textAlign:'center'
  },
  textInput:{
    fontSize:20,
    // fontWeight:500,
    paddingVertical:15,
    borderBottomWidth:2,
    borderBottomColor:'#FBCAFF'
  },
buttonBox:{
  height:'20%',
  justifyContent:'space-around'
},
button:{
  backgroundColor:'#1A1A40',
  textAlign:'center',
  padding:8,
},
buttonText:{
  color:'white',
  textAlign:'center',
  fontWeight:'600',
  fontSize:17
},
bmiNumber:{
  fontSize:20,
},
message:{
  backgroundColor:'white',
  // marginTop:'14%',
  fontSize:15,
  fontWeight:'600',
  textAlign:'center',
  // padding:1
  color:'#1A1A40',
  textTransform:"uppercase"
}
 })
import React, {useRef, useState} from 'react';
import {StyleSheet, View, Pressable, Text, Button} from 'react-native';

import LottieView from 'lottie-react-native';

export default function InteractiveAnimation() {
  const animation = useRef(null);
  const [pressed, setPressed] = useState(false);
  const [speed, setSpeed] = useState(1);

  const increaseFunction = () => {
    setSpeed(speed + 1);
  };
  const decreaseFunction = () => {
    setSpeed(speed - 1);
  };
  return (
    <View>
      <LottieView
        source={require('../../assets/44773-bird.json')}
        style={styles.animation}
        autoPlay={true}
        speed={speed}
      />
      <Text>{pressed ? 'Pressed' : 'Not pressed'}</Text>
      <View
        style={{
          backgroundColor: 'black',
          height: 40,
          justifyContent: 'space-evenly',
          flexDirection: 'row',
        }}>
        <Button title="+" onPress={increaseFunction} />
        <Button title="-" onPress={decreaseFunction} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  animation: {
    width: 400,
    height: 300,
  },
});

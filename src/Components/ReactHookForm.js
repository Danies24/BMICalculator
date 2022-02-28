// import {View, Text, StyleSheet, Button, Pressable} from 'react-native';
// import React, {useRef, useState} from 'react';
// import LottieView from 'lottie-react-native';

// export default function ReactHookForm() {
//   const animation = useRef(null);
//   const [speed, setSpeed] = useState(1);
//   const [pressed, setPressed] = useState(false);

//   const increaseFunction = () => {
//     setSpeed(speed + 1);
//   };
//   const decreaseFunction = () => {
//     setSpeed(speed - 1);
//   };
//   return (
//     <View>
//       <Pressable
//         onPressIn={() => {
//           animation.current.resume();
//           setPressed(true);
//         }}
//         onPressOut={() => {
//           animation.current.pause();
//           setPressed(false);
//         }}>
//         <LottieView
//           source={require('../../assets/44773-bird.json')}
//           style={styles.animation}
//           // loop={true}
//           speed={speed}
//           // autoPlay={true}
//         />
//       </Pressable>
//       <View
//         style={{
//           backgroundColor: 'black',
//           height: 40,
//           justifyContent: 'space-evenly',
//           flexDirection: 'row',
//         }}>
//         <Button title="+" onPress={increaseFunction} />
//         <Button title="Stop" onPress={increaseFunction} />

//         <Button title="-" onPress={decreaseFunction} />
//       </View>
//       <Text>{pressed ? 'Pressed' : 'Not pressed'}</Text>
//     </View>
//   );
// }
// const styles = StyleSheet.create({
//   animation: {
//     // width: 200,
//     height: 250,
//     backgroundColor: '#f0f',
//   },
// });
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
      {/* <Pressable
        onPressIn={() => {
          animation.current.resume();
          setPressed(true);
        }}
        onPressOut={() => {
          animation.current.pause();
          setPressed(false);
        }}> */}
      <LottieView
        // ref={animation}
        source={require('../../assets/44773-bird.json')}
        style={styles.animation}
        autoPlay={true}
        speed={speed}
      />
      {/* </Pressable> */}
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

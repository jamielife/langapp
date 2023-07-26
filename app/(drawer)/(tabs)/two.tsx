import { View, Text, Pressable, } from "native-base";
import React, { useEffect } from 'react';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  cancelAnimation,
  Easing,
} from 'react-native-reanimated';


export const SpinButton = () => {
	let turnedOn = false;
	const rotation = useSharedValue(0);
  
	const animatedStyle = useAnimatedStyle(() => {
	  return {
		transform: [{ rotateZ: `${rotation.value}deg` }],
	  };
	});
  
	useEffect(() => {
	  return () => {
		cancelAnimation(rotation);
	  };
	}, []);
  
	const handlePress = (value:boolean) => {
		turnedOn = !turnedOn;
		console.log(value)
		rotation.value = withTiming(value ? 225 : 0, {
		  duration: 1000,
		  easing: Easing.bounce,
		});
	  };
  
	return (
	  <View flex={1} justifyContent={"center"} alignItems={"center"}>
		<Animated.View style={animatedStyle}>
		  <Pressable onPress={()=>{ handlePress(!turnedOn) }}>
			<Text>Test</Text>
		  </Pressable>
		</Animated.View>
	  </View>
	);
};


export default function TabTwoScreen() {
	return (
		<View p={3} flex={1} style={{ justifyContent: "center", alignContent: "center" }}>
			<Text style={{ color: "gray" }} bold>Second Page on Deck!</Text>        
      		{/* Other components */}
      		<SpinButton />
		</View>
	);
}


import { View, Text } from "native-base";

export default function TabTwoScreen() {
	return (
		<View p={3} flex={1} style={{ justifyContent: "center", alignContent: "center" }}>
			<Text style={{ color: "gray" }} bold>Second Page on Deck!</Text>        
		</View>
	);
}


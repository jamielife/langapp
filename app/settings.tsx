import { StatusBar } from 'expo-status-bar';
import { Platform } from 'react-native';
import { NativeBaseProvider, View, Text } from 'native-base';
import { theme } from '../constants/Theme';

export default function ModalScreen() {
	return (
		<NativeBaseProvider theme={theme}> 
			<View p={3} flex={1} bg={"rgba(255,255,255,.97)"} _dark={{ bg: "rgba(0,0,0,.93)" }}>
				<Text>Test Modal</Text>

				{/* Use a light status bar on iOS to account for the black space above the modal */}
				<StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
			</View>
		</NativeBaseProvider>
	);
}
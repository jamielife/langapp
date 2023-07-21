import { StatusBar } from 'expo-status-bar';
import { View, Text, Platform } from 'react-native';


//todo - use native base
export default function ModalScreen() {
  return (
    <View>
      <Text>Jamie Modal</Text>
      <View />

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}
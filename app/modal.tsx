import { StatusBar } from 'expo-status-bar';
import { View, Text, Platform } from 'react-native';


//todo - use native base
export default function ModalScreen() {
  return (
    <View style={{ justifyContent: "center", alignContent: "center" }}>
      <Text style={{ color: "gray" }}>Test Modal</Text>

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}
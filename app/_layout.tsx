import FontAwesome from '@expo/vector-icons/FontAwesome';
import { ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack, useRouter } from 'expo-router';
import { useEffect } from 'react';
import { NativeBaseProvider, Icon, Pressable, Button, StatusBar } from 'native-base';
import { theme, DarkTheme, DefaultTheme } from '../constants/Theme';
import { MaterialIcons } from '@expo/vector-icons';
import { Platform } from 'react-native';

export {
	// Catch any errors thrown by the Layout component.
	ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
	// Ensure that reloading on `/modal` keeps a back button present.
	initialRouteName: '(drawer)',
};

export default function RootLayout() {
	const [loaded, error] = useFonts({
		SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
		...FontAwesome.font,
	});

	// Expo Router uses Error Boundaries to catch errors in the navigation tree.
	useEffect(() => {
		if (error) throw error;
	}, [error]);

	return (
		<>
		{/* Keep the splash screen open until the assets have loaded. In the future, we should just support async font loading with a native version of font-display. */}
		{!loaded && <SplashScreen />}
		{loaded && <RootLayoutNav />}
		</>
	);
}

//https://expo.github.io/router/docs/ 
function RootLayoutNav() {
	const router = useRouter();

	return (
		<>
			<StatusBar animated barStyle={theme.config.initialColorMode === 'dark' ? "light-content" : "dark-content"}/>
			<NativeBaseProvider theme={theme}>
				<ThemeProvider value={theme.config.initialColorMode === 'dark' ? DarkTheme : DefaultTheme}>
						<Stack>
							<Stack.Screen name="(drawer)"  options={{ headerShown: false }} />
							
							<Stack.Screen name="post/[id]" options={{ title: "Post", presentation: "transparentModal" }} />
							<Stack.Screen name="new-post"  options={{ title: "New Post!",  presentation: 'transparentModal', 
								headerLeft:() => ( 							
								<Pressable onPress={ ()=>{ router.back() } }>
									<Icon as={MaterialIcons} name="close" mx={2} size={8} _dark={{ color: "cyan.500" }} color="cyan.500" />
								</Pressable>
								),
								headerRight:() => ( <Button bg={"cyan.300"} zIndex={20} borderWidth={2} borderBottomWidth={4} w={20} h={12} borderRadius={"full"} mr={3}>Post</Button> ) }} />
						</Stack>

				</ThemeProvider>
			</NativeBaseProvider>
		</>
	);
}

import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable, useTheme, View, useColorModeValue, useColorMode } from 'native-base';
import ProfileMenuIcon from '../../../components/ProfileMenuAvatar';
import { theme } from '../../../constants/Theme';

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={15} style={{ marginBottom: -3 }} {...props} />;
}

const user = {
	id: 'ul000001',
	username: 'jamielife',
	name: 'Jamie Taylor',
	image:
	  'https://2.gravatar.com/avatar/e529653809f90533471211fca7717069',
}

export default function TabLayout() {
	const { colors } = useTheme();	
	const iconColor = useColorModeValue("black", "white");
	const iconBgColor = useColorModeValue(colors["cyan"][200], colors["cyan"][700]);
	const { toggleColorMode } = useColorMode();

	function switchColorMode(){
		toggleColorMode();
		theme.config.initialColorMode = "light"
	}

	return (
			<Tabs
				screenOptions={{
					tabBarActiveTintColor: colors["cyan"][500],				
					tabBarStyle: {
						height: 50,
						paddingHorizontal: 5,
						paddingTop: 10,
						paddingBottom: 10,
						//padding: 20,
						//backgroundColor: 'rgba(34,36,40,1)',
						//position: 'absolute',
						borderTopWidth: 0,						
					},					
				}}>
				<Tabs.Screen
					name="index"
					options={{
						title: 'LangAppTBD',
						tabBarIcon: ({ color }) => <TabBarIcon name="newspaper-o" color={color} />,
						headerRight: () => (
							// <Link href="/settings" asChild>
								<Pressable onPress={switchColorMode}>
									{({ isPressed }) => (
										<View mr={15} h={25} w={50} p={0} overflow={"hidden"} bg={iconBgColor} borderWidth={2} borderRadius={25} borderColor={iconColor}
											alignContent={"center"} justifyContent={"center"} alignItems={"center"} justifyItems={"center"} >
											<FontAwesome name="info" size={15} color={iconColor} style={{ padding: 0, margin: 0, opacity: isPressed ? 0.5 : 1 }} />
										</View>
									)}
								</Pressable>
							// </Link>
						),
						headerLeft: () => (
							<ProfileMenuIcon id={user.id} image={user.image} avaSize='sm'  />
						)}} />
					
					<Tabs.Screen name="two" options={{ title: 'Notifications', tabBarIcon: ({ color }) => <TabBarIcon name="bell-o" color={color} /> }} />
					<Tabs.Screen name="messages" options={{	title: 'Messages', tabBarIcon: ({ color }) => 
													// <View w={30} h={30} borderRadius={"full"} bg={colors["cyan"][200]} borderWidth={2}
													// alignContent={"center"} justifyContent={"center"} alignItems={"center"} justifyItems={"center"} >
														<TabBarIcon name="comment-o" color={color} /> // </View>
											 }} />										
			</Tabs>
	);
}

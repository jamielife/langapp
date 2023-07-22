import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import {Pressable, useTheme } from 'native-base';

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
	const { colors } = useTheme();	
	const tabColor:string = colors["primary"][400];
	const testGreen:string = colors.secondary["500"]

	return (
			<Tabs
				screenOptions={{
					tabBarActiveTintColor: colors["primary"][500],				
					tabBarStyle: {
						height: 90,
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
					tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
					headerRight: () => (
					<Link href="/modal" asChild>
						<Pressable>
						{({ isPressed }) => (
							<FontAwesome
								name="info-circle"
								size={25}
								color={"gray"}
								style={{ marginRight: 15, opacity: isPressed ? 0.5 : 1 }}
							/>
						)}
						</Pressable>
					</Link>
					),
				}}
				/>
				<Tabs.Screen
				name="two"
				options={{
					title: 'Tab Two',
					tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
				}}
				/>
			</Tabs>
	);
}

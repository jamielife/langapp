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

	return (
			<Tabs
				screenOptions={{
					tabBarActiveTintColor: colors["primary"][500],
				}}>
				<Tabs.Screen
				name="index"
				options={{
					title: 'Tab One',
					tabBarIcon: ({ color }) => <TabBarIcon name="code" color={tabColor} />,
					headerRight: () => (
					<Link href="/modal" asChild>
						<Pressable>
						{({ isPressed }) => (
							<FontAwesome
							name="info-circle"
							size={25}
							//color={theme.colors.secondary[400]}
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
					tabBarIcon: ({ color }) => <TabBarIcon name="code" color={tabColor} />,
				}}
				/>
			</Tabs>
	);
}

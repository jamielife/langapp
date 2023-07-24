import { View, FlatList, useColorModeValue } from 'native-base'
import tweets from '../../../assets/data/tweets';
import PostView from '../../../components/PostView';
import FabMenu from '../../../components/FabMenu';

const arrayOfColors = [
		"primary.50", "secondary.50", "tertiary.50", "pink.50", "cyan.50", 
		"primary.100", "secondary.100", "tertiary.100", "pink.100", "cyan.100",
		"primary.200", "secondary.200", "tertiary.200", "pink.200", "cyan.200"
	];

	const arrayOfDarkColors = [
		"primary.900", "secondary.900", "tertiary.900", "pink.900", "cyan.900",
		"primary.950", "secondary.950", "tertiary.950", "pink.950", "cyan.950",
		"primary.950", "secondary.950", "tertiary.950", "pink.950", "cyan.950",
	];	

export default function HomeScreen() {
	const colorModeColors = useColorModeValue(arrayOfColors, arrayOfDarkColors);
	return (		
		<View flex={1} px={5}>
			<FlatList data={tweets} renderItem={({item}) => <PostView post={item} randomColor={colorModeColors[Math.floor(Math.random() * 15)]} />} />
			<FabMenu />
		</View>		
	);
}
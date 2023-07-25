import { View, FlatList, useColorModeValue } from 'native-base'
import tweets from '../../../assets/data/tweets';
import PostView from '../../../components/PostView';
import FabMenu from '../../../components/FabMenu';
import { arrayOfColors, arrayOfDarkColors } from '../../../constants/Theme';

export default function HomeScreen() {
	const colorModeColors = useColorModeValue(arrayOfColors, arrayOfDarkColors);
	return (		
		<View flex={1} px={5}>
			<FlatList data={tweets} renderItem={({item}) => <PostView post={item} randomColor={colorModeColors[Math.floor(Math.random() * 15)]} />} />
			<FabMenu />
		</View>		
	);
}
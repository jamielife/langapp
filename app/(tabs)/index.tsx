import { View, Text, Image, Avatar, HStack, VStack, FlatList } from 'native-base'
import tweets from '../../assets/data/tweets';
import Post from '../../components/Post';

export default function TabOneScreen() {
	return (		
		<View flex={1} >
			<FlatList data={tweets} renderItem={({item}) => <Post post={item} />} />
		</View>		
	);
}
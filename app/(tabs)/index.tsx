import { View, FlatList } from 'native-base'
import tweets from '../../assets/data/tweets';
import PostView from '../../components/PostView';
import FabMenu from '../../components/FabMenu';


export default function TabOneScreen() {
	return (		
		<View flex={1} >		
			<FlatList data={tweets} renderItem={({item}) => <PostView post={item} />} />
			<FabMenu />
		</View>		
	);
}

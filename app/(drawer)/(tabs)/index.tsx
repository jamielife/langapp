import { View, FlatList, useColorModeValue } from 'native-base'
import PostView from '../../../components/PostView';
import FabMenu from '../../../components/FabMenu';
import { arrayOfColors, arrayOfDarkColors } from '../../../constants/Theme';
import { useEffect, useState } from 'react';
import { API_URL } from '../../../constants/Globals';

export default function HomeScreen() {
	const [posts, setPosts] = useState<Array<Object>>([]);

	useEffect(() =>{
		const fetchItems = async () => {
			try {
				const response = await fetch(API_URL);
				const json = await response.json();
				setPosts(json);
			} catch(err:any) {
				console.log(err.stack);
			}
		}
		fetchItems();
	}, []);	

	const colorModeColors = useColorModeValue(arrayOfColors, arrayOfDarkColors);

	return (		
		<View flex={1} px={5}>
			<FlatList data={posts} renderItem={({item}:any) => <PostView post={item} randomColor={colorModeColors[Math.floor(Math.random() * 15)]} />} />
			<FabMenu />
		</View>
	);
}
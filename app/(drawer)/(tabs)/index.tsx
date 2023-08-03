import { View, FlatList, useColorModeValue, Text } from 'native-base'
import PostView from '../../../components/PostView';
import FabMenu from '../../../components/FabMenu';
import { arrayOfColors, arrayOfDarkColors } from '../../../constants/Theme';
import { useEffect, useState } from 'react';
import { API_URL } from '../../../constants/Globals';

export default function HomeScreen() {
	const [posts, setPosts] = useState<Array<Object>>([]);
	const [loading, setLoading] = useState<boolean>(true);	
	const colorModeColors = useColorModeValue(arrayOfColors, arrayOfDarkColors);

	useEffect(() =>{
		const fetchItems = async () => {
			try {
                //Fetch data from API
				const response = await fetch(API_URL);
				const posts = await response.json();
                //otherwise update post state
                setPosts(posts);
				setLoading(false);
			} catch(err:any) {
				console.log(`Error getting post by ID: ${err.stack}`);
			}
		}
		fetchItems();
	}, []);	



	return (		
		<View flex={1} px={5}>
			{ loading ? 
				<Text>Loading...</Text>
			: 
				<FlatList data={posts} renderItem={({item}:any) => <PostView post={item} randomColor={colorModeColors[Math.floor(Math.random() * 15)]} />} />	
			}				
			<FabMenu />
		</View>
	);
}
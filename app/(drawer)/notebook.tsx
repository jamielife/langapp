import { View, FlatList, useColorModeValue, Center, Text } from 'native-base';
import { arrayOfColors, arrayOfDarkColors } from '../../constants/Theme';
import NotebookNotes from '../../components/NotebookNote';
import { ActivityIndicator } from 'react-native';
import { API_URL } from '../../constants/Globals';
import { PostType } from '../../constants/Types';
import { useEffect, useState } from 'react';

const Notebook = () => {
	const [noteBook, setNoteBook] = useState<Array<PostType>>();
	const [loading, setLoading] = useState<boolean>(true);
	
	useEffect(() =>{
		//get Post by ID
		const fetchPost = async () => {
			try {
				//Fetch data from API
				const response = await fetch(API_URL);
				const noteBook = await response.json();
				//otherwise update post state
				setNoteBook(noteBook);
				setLoading(false);
			} catch(err:any) {
				console.log(`Error getting post by ID: ${err.stack}`);
			}
		}
		//Execute functions
		fetchPost();
	}, []);	

    const colorModeColors = useColorModeValue(arrayOfColors, arrayOfDarkColors);    
	return (
		<View p={3} flex={1} style={{ justifyContent: "center", alignContent: "center" }}>
			{ loading ? 
				<ActivityIndicator size="large" color="#00ff00" style={{ alignSelf: "center" }} />
            : 
				<>
					<Center><Text bold>Your highlighted posts will appear here!</Text></Center>
					<FlatList flex={1} numColumns={2} data={noteBook} renderItem={({item}:any) => <NotebookNotes post={item} randomColor={colorModeColors[Math.floor(Math.random() * 15)]} />} />
				</>
			}
        </View>
	);   
}

export default Notebook;
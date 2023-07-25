import { View, FlatList, useColorModeValue, Center, Text } from 'native-base';
import tweets from '../../assets/data/tweets';
import NotebookNotes from '../../components/NotebookNote';
import { arrayOfColors, arrayOfDarkColors } from '../../constants/Theme';

const Notebook = () => {
    const colorModeColors = useColorModeValue(arrayOfColors, arrayOfDarkColors);    
	return (
		<View p={3} flex={1} style={{ justifyContent: "center", alignContent: "center" }}>
            <Center><Text bold>Your highlighted posts will appear here!</Text></Center>
			<FlatList flex={1} numColumns={2} data={tweets} renderItem={({item}) => <NotebookNotes post={item} randomColor={colorModeColors[Math.floor(Math.random() * 15)]} />} />
        </View>
	);   
}

export default Notebook;
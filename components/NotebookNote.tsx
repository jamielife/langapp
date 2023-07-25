import { useRouter } from "expo-router";
import { Box, Icon, Pressable, ScrollView, Text } from "native-base";
import { PostType } from "../constants/Types";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export type NotebookNoteProps = {
    post: PostType;
    randomColor: any;
}

const NotebookNotes = ({ post, randomColor }:NotebookNoteProps ) => {
    const router = useRouter();
	return (
        <ScrollView>            
            <Pressable onPress={() => router.push({pathname: `/post/${post.id}`, params: { randomColor: randomColor } })}>                
                <Box bg={randomColor} p={6} m={2} borderWidth={2} borderBottomWidth={4} borderRightWidth={4}>
                    <Text>{post.content}</Text>
                </Box>
                <Icon position={"absolute"} top={3} right={4} as={MaterialCommunityIcons} name="note-minus" size={7} 
                    _dark={{ color: "white" }} color="black" />                
            </Pressable>
        </ScrollView>
	);
    
}
 
export default NotebookNotes;
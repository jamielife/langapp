import { useState, useEffect } from "react"
import { View, Avatar, HStack, TextArea, Button } from "native-base"
import { useRouter, useNavigation } from 'expo-router';

const user = {
    id: 'ul000001',
    username: 'jamielife',
    name: 'Jamie Taylor',
    image:
      'https://2.gravatar.com/avatar/e529653809f90533471211fca7717069',
}

export default function NewPost(){
    const [postContent, setPostContent] = useState("");
    const router = useRouter();
    const navigation = useNavigation();
    
    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Button onPress={submitPost} mr={3}>Post</Button>
            ),
        });
      }, [navigation, postContent]);    

    const submitPost = () => {
        // Check that message is set and of x length
        // Sanitize?
        console.warn(`Sending post for user: ${user.username} - ${postContent}`);
        setPostContent("");
        router.back();
    }
  
    return(
        <View padding={3} flex={1}>
            <HStack>
                <Avatar bg="primary.400" source={{ uri: user.image }} size={"md"}>
                    <Avatar.Badge bg="primary.400"></Avatar.Badge>
                </Avatar>
                <TextArea h={"500px"} placeholder="What's new?" ml={2} flex={1} autoCompleteType={""} variant="unstyled" autoFocus
                value={postContent} onChangeText={(newValue) => setPostContent(newValue)} />
            </HStack>
        </View>
    )
}
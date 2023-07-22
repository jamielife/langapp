import { useState } from "react"
import { View, Text, Avatar, Image, HStack, TextArea, Button } from "native-base"
import { useRouter } from 'expo-router';

/*  possible need here to remove headerbar * add safeareacontainter 
    and custom build if existing navigator header can't acces page */

const user = {
    id: 'ul000001',
    username: 'jamielife',
    name: 'Jamie Taylor',
    image:
      'https://2.gravatar.com/avatar/e529653809f90533471211fca7717069',
}

export default function NewPost(){
    const [postContent, setPostContent] =  useState("");
    const router = useRouter();
    
    const submitPost = () => {
        // Check that message is set and of x length
        // Sanitize?
        console.warn(`Sending post for user: ${user.username} - ${postContent}`);
        setPostContent("");
        router.back();
    }
  
    return(
        <View padding={3} flex={1}>
            <Button onPress={submitPost}>Post</Button>
            <HStack>
                <Avatar bg="primary.400" source={{ uri: user.image }} size={"md"}>
                    {/* If is friend - show status? Or show country here */}
                    <Avatar.Badge bg="primary.400"></Avatar.Badge>
                </Avatar>
                <TextArea h={"500px"} placeholder="What's new?" ml={2} flex={1} autoCompleteType={""} variant="unstyled" autoFocus
                value={postContent} onChangeText={(newValue) => setPostContent(newValue)} />
            </HStack>
        </View>
    )
}
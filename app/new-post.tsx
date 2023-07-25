import { useState, useEffect } from "react"
import { View, Avatar, HStack, TextArea, Button, Text, KeyboardAvoidingView, Pressable, Icon } from "native-base"
import { useRouter, useNavigation } from 'expo-router';
import { Platform } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

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
                <Button zIndex={20} borderWidth={2} borderBottomWidth={4} w={20} h={12} borderRadius={"full"} onPress={submitPost} mr={3}>Post</Button>
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
        <KeyboardAvoidingView flex={1} 
            keyboardVerticalOffset={165} behavior={Platform.OS === "ios" ? "padding" : "height"} 
            bg={"rgba(255,255,255,.97)"} _dark={{ bg: "rgba(0,0,0,.93)" }}>
            <View p={3} flex={1}>
                <HStack flex={1}>
                    <Avatar bg="primary.400" source={{ uri: user.image }} borderWidth={2} size={"md"}>
                        <Avatar.Badge bg="primary.400" borderColor={"black"}></Avatar.Badge>
                    </Avatar>
                    <TextArea borderWidth={0} fontSize={20} lineHeight={28} h={"400px"} placeholder="What's new?" ml={2} flex={1} 
                    autoCompleteType={null} variant="unstyled" autoFocus value={postContent} onChangeText={(newValue) => setPostContent(newValue)}  />
                </HStack>
                <HStack height={12} alignSelf={"flex-end"}>
                    <Pressable mb="4" ml="2" variant="solid" bg="primary.500" colorScheme="primary" borderRadius="full" w={12} h={12} 
                        alignItems={"center"} justifyContent={"center"} borderWidth={2} borderBottomWidth={6} >
                        <Icon as={MaterialCommunityIcons} name="note-plus" size={7} _dark={{ color: "warmGray.50" }} color="warmGray.50" />                            
                    </Pressable>       
                    <Pressable mb="4" ml="2" variant="solid" bg="secondary.300" colorScheme="secondary" borderRadius="full" w={12} h={12} 
                        alignItems={"center"} justifyContent={"center"} borderWidth={2} borderBottomWidth={6} >
                        <Icon as={MaterialCommunityIcons} name="note-plus" size={7} _dark={{ color: "warmGray.50" }} color="warmGray.50" />                            
                    </Pressable>         
                    <Pressable mb="4" ml="2" variant="solid" bg="tertiary.300" colorScheme="tertiary" borderRadius="full" w={12} h={12} 
                        alignItems={"center"} justifyContent={"center"} borderWidth={2} borderBottomWidth={6} >
                        <Icon as={MaterialCommunityIcons} name="note-plus" size={7} _dark={{ color: "warmGray.50" }} color="warmGray.50" />                            
                    </Pressable>         
                    <Pressable mb="4" ml="2" variant="solid" bg="pink.300" colorScheme="pink" borderRadius="full" w={12} h={12} 
                        alignItems={"center"} justifyContent={"center"} borderWidth={2} borderBottomWidth={6} >
                        <Icon as={MaterialCommunityIcons} name="note-plus" size={7} _dark={{ color: "warmGray.50" }} color="warmGray.50" />                            
                    </Pressable>                                                                                 
                </HStack>
            </View>
        </KeyboardAvoidingView> 
    )
}
import { View, Text, Image, HStack, VStack, Avatar, Pressable } from 'native-base'
import { PostType } from '../constants/Types';
import { useRouter } from 'expo-router';
import PostViewMoreMenu from './PostViewMoreMenu';
import PostFooter from './PostFooter';
import { Octicons } from '@expo/vector-icons';

export type PostProps = {
    post: PostType;
    randomColor: any;
}

const PostView = ({ post, randomColor }:PostProps ) => {
    const router = useRouter();
    
	return (    
        <Pressable onPress={() => router.push({pathname: `/post/${post.id}`, params: { randomColor: randomColor } })} zIndex={1}>
            <HStack my={2} p={3} rounded={"xl"} bg={randomColor}
                justifyContent={"flex-start"} alignContent={"center"} w={"100%"}
                borderWidth={2} borderBottomWidth={4} borderRightWidth={4}>
                {/* Show online status of friends */}
                <VStack>                
                    <Avatar size={"md"} borderWidth={2} bg="primary.400" source={{ uri: post.user.image }} >
                        <Avatar.Badge bg="primary.200" borderColor={"black"}></Avatar.Badge>
                    </Avatar>                   
                </VStack>
                <VStack ml={2} flex={1} >
                    <HStack>
                        { post.user.isVIP && ( <Text ml={0} mt={0} mr={1}><Octicons name="verified" size={16} color="rgba(0,0,0,.55)" /></Text> )}
                         <Text bold>{post.user.name}</Text>
                        <Text ml={1}>@{post.user.username} · 2h</Text>
                    </HStack>                   
                    <Text>{post.content}</Text>
                    {/* Image Combonent to handle multiples */}
                    { post.image && (
                    <View>
                        <Image borderWidth={2} mt={2} borderRadius={"lg"} source={{ uri:post.image }} resizeMode="cover" borderColor={"black"}
                            alt={`image provided with post containing: ${post.content}`} size={"full"} h={150}  />
                    </View> 
                    )}
                    <PostFooter postData={post} />
                </VStack>
            </HStack>
            <PostViewMoreMenu post={post} />   
        </Pressable>        
	);
}
export default PostView;
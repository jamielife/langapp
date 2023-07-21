import { View, Text, Image, Avatar, HStack, VStack, AspectRatio } from 'native-base'
import { PostType } from '../constants/Types';
import { Entypo } from '@expo/vector-icons'; 

export type PostProps = {
    post: PostType
}

const PostView = ({ post }:PostProps ) => {
	return (		
        <HStack p={4} bg={"white"} borderBottomWidth={1} borderBottomColor={"tertiary.200:alpha.50"}
             justifyContent={"flex-start"}>
            <Avatar bg="primary.400" source={{ uri: post.user.image }} size={"md"}>
                {/* If is friend - show status? Or show country here */}
                <Avatar.Badge bg="primary.400"></Avatar.Badge>
            </Avatar>
            <VStack ml={2} flex={1} >
                <HStack>
                    <Text bold>{post.user.name}</Text>                
                    <Text ml={1} color={"warmGray.400"}>@{post.user.username} · 2h</Text>  
                    <Entypo style={{marginLeft: "auto"}} name="dots-three-horizontal" size={14} color="gray" />
                </HStack>
                <Text color={"quint.700"}>{post.content}</Text>
                {/* Image Combonent to handle multiples */}
                { post.image && (
                <AspectRatio ratio={{ base: 16/9 }} height={{ base: 200, md: 400 }}>
                    <Image mt={2} borderRadius={"lg"} src={post.image} resizeMode="cover" alt={`image provided with post containing: ${post.content}`} />
                </AspectRatio> )}
            </VStack>
        </HStack>
	);
}
 
export default PostView;
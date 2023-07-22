import { View, Text, Image, Avatar, HStack, VStack, AspectRatio } from 'native-base'
import { PostType } from '../constants/Types';
import { Entypo } from '@expo/vector-icons'; 
import FooterButton from './FooterButton';
import { Link } from 'expo-router';

export type PostProps = {
    post: PostType
}

const PostView = ({ post }:PostProps ) => {
	return (
        <Link href={`/post/${post.id}`} style={{ display: "flex"}} >
            <HStack p={3} borderBottomWidth={1} borderBottomColor={"tertiary.200:alpha.50"}
                justifyContent={"flex-start"} w={"100%"}>
                <Avatar bg="primary.400" source={{ uri: post.user.image }} size={"md"}>
                    {/* If is friend - show status? Or show country here */}
                    <Avatar.Badge bg="primary.400"></Avatar.Badge>
                </Avatar>
                <VStack ml={2} flex={1} >
                    <HStack>
                        <Text bold>{post.user.name}</Text>                
                        <Text ml={1}>@{post.user.username} · 2h</Text>  
                        <Entypo style={{marginLeft: "auto"}} name="dots-three-horizontal" size={14} color="gray" />
                    </HStack>
                    <Text>{post.content}</Text>
                    {/* Image Combonent to handle multiples */}
                    { post.image && (
                    <View>
                    <AspectRatio ratio={{ base: 16/9 }} height={{ base: 186, md: 400 }}>
                        <Image mt={2} borderRadius={"lg"} src={post.image} resizeMode="cover" alt={`image provided with post containing: ${post.content}`} flex={1} />
                    </AspectRatio></View> )}
                    <HStack mt={2} justifyContent={"space-between"}>
                        <FooterButton icon="comment-outline" text="123" />
                        <FooterButton icon="square-edit-outline" text="3" />
                        <FooterButton icon="clipboard-search-outline" text="15" />
                        <FooterButton icon="translate" />
                        <FooterButton icon="heart-outline" text="15" />                    
                    </HStack>
                </VStack>
            </HStack>
        </Link>
	);
}
 
export default PostView;
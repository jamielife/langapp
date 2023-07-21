import { View, Text, Image, Avatar, HStack, VStack, AspectRatio, IconButton } from 'native-base'
import { PostType } from '../constants/Types';
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons'; 
import { IconButtonProps } from '@expo/vector-icons/build/createIconSet';

export type PostProps = {
    post: PostType
}

type FooterButtonProps = {
    icon: any;
    text?: string | number;
}

const FooterButton = ({icon, text}: FooterButtonProps) => {
    return(
        <View flexDir={"row"} alignItems={"center"}>
            <MaterialCommunityIcons name={icon} size={24} color="gray" /><Text fontSize={16} color={"warmGray.400"}>{text}</Text>
        </View>
    )
}

const PostView = ({ post }:PostProps ) => {
	return (		
        <HStack p={3} bg={"white"} borderBottomWidth={1} borderBottomColor={"tertiary.200:alpha.50"}
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
                <View>
                <AspectRatio ratio={{ base: 16/9 }} height={{ base: 186, md: 400 }}>
                    <Image mt={2} borderRadius={"lg"} src={post.image} resizeMode="cover" alt={`image provided with post containing: ${post.content}`} flex={1} />
                </AspectRatio></View> )}
                <HStack mt={2} justifyContent={"space-between"} flex={1}>
                    <FooterButton icon="comment-outline" text="123" />
                    <FooterButton icon="square-edit-outline" text="3" />
                    <FooterButton icon="clipboard-search-outline" text="15" />
                    <FooterButton icon="translate" />
                    <FooterButton icon="heart-outline" text="15" />                    
                </HStack>
            </VStack>
        </HStack>
	);
}
 
export default PostView;
import { View, Text, Image, Avatar, HStack, VStack } from 'native-base'

const Post = ({ post }:any ) => {
	return (		
        <HStack p={4} bg={"white"} borderBottomWidth={1} borderBottomColor={"tertiary.200:alpha.50"}
            alignContent={"center"} justifyContent={"flex-start"} alignItems={"center"}>
            <Avatar bg="primary.400" source={{ uri: post.user.image }} size={"md"}>
                {/* If is friend - show status? Or show country here */}
                <Avatar.Badge bg="primary.400"></Avatar.Badge>
            </Avatar>
            <VStack ml={2} flex={1} >
                <Text bold>{post.user.name}</Text>
                <Text color={"quint.700"}>{post.content}</Text>
            </VStack>
        </HStack>
	);
}
 
export default Post;
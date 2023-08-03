import { View, Text, HStack, VStack, Avatar, Pressable, ZStack, Icon, useToken } from 'native-base'
import { CommentType } from '../constants/Types';
import { useRouter } from 'expo-router';
import { Entypo, MaterialCommunityIcons, Octicons } from '@expo/vector-icons';
import { useState } from 'react';


const colorShade = (col:any, amt:number) => {
    col = col.replace(/^#/, '')
    if (col.length === 3) col = col[0] + col[0] + col[1] + col[1] + col[2] + col[2]

    let [r, g, b] = col.match(/.{2}/g);
    ([r, g, b] = [parseInt(r, 16) + amt, parseInt(g, 16) + amt, parseInt(b, 16) + amt])

    r = Math.max(Math.min(255, r), 0).toString(16)
    g = Math.max(Math.min(255, g), 0).toString(16)
    b = Math.max(Math.min(255, b), 0).toString(16)

    const rr = (r.length < 2 ? '0' : '') + r
    const gg = (g.length < 2 ? '0' : '') + g
    const bb = (b.length < 2 ? '0' : '') + b
    return `#${rr}${gg}${bb}`
}


export type CommentProps = {
    comment: CommentType;
    bgColor: any;
}


const CommentsView = ({ comment, bgColor }: CommentProps ) => {
    const router = useRouter();
    const [likedPost, setLikeStatus] = useState(false);
        
    const hexColortoChange = useToken('colors', bgColor)

	return (             
            <HStack p={3} bg={colorShade(hexColortoChange, 25)}  // needs darkmode conditional value
                justifyContent={"flex-start"} alignContent={"center"} flex={1}
                 borderBottomWidth={1} w={"100%"}>
                {/* Show online status of friends */}
                <VStack>
                    <Pressable onPress={() => router.push({pathname: `/${comment.user.username}`, params: { } })}>
                        <Avatar size={"md"} borderWidth={2} bg="primary.400" source={{ uri: comment.user.image }}>
                            <Avatar.Badge bg="primary.200" borderColor={"black"}></Avatar.Badge>
                        </Avatar>
                    </Pressable>
                </VStack>
                <VStack ml={2} flex={1}>
                    <HStack>
                        { comment.user.isVIP && ( <Text ml={0} mt={0} mr={1}><Octicons name="verified" size={16} color="rgba(0,0,0,.55)" /></Text> )}
                         <View flexDir={"row"} flexWrap={"nowrap"}><Text bold isTruncated maxW={100}>{comment.user.name}</Text>
                            <Text ml={1} isTruncated maxW={90}>@{comment.user.username}</Text><Text> · 2h</Text></View>
                    </HStack>                   
                    <Text>{comment.content}</Text>
                </VStack>
                <VStack pl={2}>
                    {/* Comments menu */}

                    <Pressable variant="solid" alignItems={"center"} justifyContent={"center"} mt={-1} w={6} h={6}>
					    <Icon as={Entypo} size={4} name="dots-three-horizontal" color="black" _dark={{ color: "warmGray.50" }} />
				    </Pressable>

                    <Pressable onPress={() => setLikeStatus(!likedPost) } mt={1.5}>
                        <VStack>
                            <ZStack>
                                <Icon as={MaterialCommunityIcons} name={"food-apple"} size={26} color={likedPost ? 'pink.400' : "rgba(255,255,255,0)"} />
                                <Icon as={MaterialCommunityIcons} name={"food-apple-outline"} size={26} color="black" />
                            </ZStack>                                        
                        </VStack>
                    </Pressable> 
                </VStack>                   
            </HStack>
	);
}
export default CommentsView;
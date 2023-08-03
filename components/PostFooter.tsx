import { HStack, Pressable, View, ZStack, Text, useColorModeValue } from 'native-base'
import PostFooterButton from './PostFooterButton';
import { PostType } from '../constants/Types';
import { useState } from 'react'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { theme } from '../constants/Theme';

type FooterPostProps= {
    postData: PostType;
}

//posts tables has corresponding post_likes table and post_data table
//fill look for matching userID in post_likes, comments, corrections, etc. 

//check for friendship
//const isFriend = true;

const PostFooter = ({postData}: FooterPostProps) => {
    const [likedPost,     setLikeStatus]      = useState(false);
    const [commentedPost, setCommentedStatus] = useState(false);
    const [correctedPost, seCorrectedStatus]  = useState(false);

    const iconColor = useColorModeValue("black", "white");

    return(
        <HStack mt={2} justifyContent={"space-between"} alignItems={"center"}>

            {/* Can't be toggled on and off without deleting comment(s) */}
            <Pressable onPress={() => setCommentedStatus(!commentedPost) }>
                <ZStack mt={0}>
                    <MaterialCommunityIcons name={"comment"} size={20} color={commentedPost ? theme.colors.secondary[500] : "rgba(255,255,255,0)"} />
                    <MaterialCommunityIcons name={"comment-outline"} size={20} color={iconColor} />                    
                </ZStack>
                <Text mt={0} ml={6}>123</Text>
            </Pressable>

            {/* This can't be toggled on and off, though correction can be deleted to remove. Green may be better friend color */}
            <Pressable onPress={() => seCorrectedStatus(!correctedPost) }>
                <ZStack mt={0}>
                    <MaterialCommunityIcons name={"application-edit"} size={20} color={correctedPost ? theme.colors.primary[500] : "rgba(255,255,255,0)"} />
                    <MaterialCommunityIcons name={"application-edit-outline"} size={20} color={iconColor} />                    
                </ZStack>                                
                <Text mt={0} ml={6}>123</Text>
            </Pressable>

            <Pressable>
                <ZStack>
                    <View ml={-3} mt={-3}><Ionicons name={"people"} size={21} color={postData.user.isFriend ? theme.colors.cyan[500] : "rgba(255,255,255,0)"} /></View>
                    <View ml={-3} mt={-3}><Ionicons name={"people-outline"} size={21} color={iconColor} /></View>
                </ZStack>                     
            </Pressable>

            <Pressable>
                <PostFooterButton icon="translate" />
            </Pressable>
            
            <Pressable onPress={() => setLikeStatus(!likedPost) }>
                <ZStack mt={0}>
                    <MaterialCommunityIcons name={"heart"} size={20} color={likedPost ? theme.colors.pink[400] : "rgba(255,255,255,0)"} />
                    <MaterialCommunityIcons name={"heart-outline"} size={20} color={iconColor} />                    
                </ZStack>                                
                <Text mt={0} ml={6}>15</Text>
            </Pressable>
        </HStack>
    )
}

export default PostFooter;
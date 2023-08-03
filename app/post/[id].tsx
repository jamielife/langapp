import PostView from "../../components/PostView";
import CommentsView from "../../components/Comments";
import { useNavigation, useRouter, useLocalSearchParams } from "expo-router";
import { Text, View, ScrollView, Skeleton, HStack, VStack } from "native-base";
import { useEffect, useState } from "react";
import { PostType, CommentType } from "../../constants/Types";
import { API_URL, API_COMMENTS_URL } from "../../constants/Globals";

export default function PostScreen() {
    const navigation = useNavigation();
    const router = useRouter();    
    
    /* 
        Get Post by ID 
        Will eventually be ID passed and query DB from that
    */
    //const { id } = useSearchParams(); //get from URL   
    const params = useLocalSearchParams();    
    const { id, randomColor } = params;

    /*
        If no post found, say it
    */

    /*
        Set loading to true then 
        Get comments by Post ID
    */
    const [post, setPosts] = useState<PostType>();
    const [comments, setComments] = useState<Array<CommentType>>(); //<Array<Object>>([]); ??
    const [loading, setLoading] = useState<boolean>(true);

        //setTimeout(() => {

        //}, 1);        

	useEffect(() =>{
        //get Post by ID
		const fetchPost = async () => {
			try {
                //Fetch data from API
				const response = await fetch(API_URL);
				const json = await response.json();
                //TEMP - search from data for ID, this will become ID based query
				const post = json.find((p: { id: string | string[] | undefined; }) => p.id === id);
                //If nothing, return
                if(!post) return <Text>Post {id} not found.</Text>
                //otherwise update post state
                setPosts(post);
			} catch(err:any) {
				console.log(`Error getting post by ID: ${err.stack}`);
			}
		}
        //Get comments
		const fetchComments = async () => {
			try {
				const response = await fetch(API_COMMENTS_URL);
				const json = await response.json();
                setComments(json);
                setLoading(false);
			} catch(err:any) {
				console.log(`Error getting comments: ${err.stack}`);
			}
		}
        //Execute functions
		fetchPost();
        fetchComments();
	}, []);	    

    return(
        <ScrollView p={3} flex={1} bg={"rgba(255,255,255,.90)"} _dark={{ bg: "rgba(0,0,0,.93)" }}>
            { loading ? 
                <>
                    <HStack p={3} justifyContent={"flex-start"} alignContent={"center"} flex={1} borderBottomWidth={1} 
                        _dark={{ borderColor: "coolGray.500" }} _light={{ borderColor: "coolGray.200" }}>
                        <Skeleton startColor="coolGray.400" h="5" size={12} rounded="full" />
                        <VStack flex="3" mt={2} space="4" px={5}>
                            <Skeleton.Text startColor="coolGray.400" lines={2} />
                        </VStack>
                        <VStack>
                            <Skeleton size="5" startColor="coolGray.400" rounded="full" mb={1} />
                            <Skeleton size="5" startColor="coolGray.400" rounded="full" />
                        </VStack>
                    </HStack>
                    <HStack p={3} justifyContent={"flex-start"} alignContent={"center"} flex={1} borderBottomWidth={1} 
                        _dark={{ borderColor: "coolGray.500" }} _light={{ borderColor: "coolGray.200" }}>
                        <Skeleton startColor="coolGray.400" h="5" size={12} rounded="full" />
                        <VStack flex="3" mt={2} space="4" px={5}>
                            <Skeleton.Text startColor="coolGray.400" lines={2} />
                        </VStack>
                        <VStack>
                            <Skeleton size="5" startColor="coolGray.400" rounded="full" mb={1} />
                            <Skeleton size="5" startColor="coolGray.400" rounded="full" />
                        </VStack>
                    </HStack>
                    <HStack p={3} justifyContent={"flex-start"} alignContent={"center"} flex={1} borderBottomWidth={1} 
                        _dark={{ borderColor: "coolGray.500" }} _light={{ borderColor: "coolGray.200" }}>
                        <Skeleton startColor="coolGray.400" h="5" size={12} rounded="full" />
                        <VStack flex="3" mt={2} space="4" px={5}>
                            <Skeleton.Text startColor="coolGray.400" lines={2} />
                        </VStack>
                        <VStack>
                            <Skeleton size="5" startColor="coolGray.400" rounded="full" mb={1} />
                            <Skeleton size="5" startColor="coolGray.400" rounded="full" />
                        </VStack>
                    </HStack>
                    <HStack p={3} justifyContent={"flex-start"} alignContent={"center"} flex={1} borderBottomWidth={1} 
                        _dark={{ borderColor: "coolGray.500" }} _light={{ borderColor: "coolGray.200" }}>
                        <Skeleton startColor="coolGray.400" h="5" size={12} rounded="full" />
                        <VStack flex="3" mt={2} space="4" px={5}>
                            <Skeleton.Text startColor="coolGray.400" lines={2} />
                        </VStack>
                        <VStack>
                            <Skeleton size="5" startColor="coolGray.400" rounded="full" mb={1} />
                            <Skeleton size="5" startColor="coolGray.400" rounded="full" />
                        </VStack>
                    </HStack>
                </>
            :
                <>
                    { post && <PostView post={post} randomColor={randomColor} /> }
                    <View mt={-3} alignItems={"center"} alignSelf={"center"} overflow={"hidden"} mb={10}
                        borderWidth={2} w={"92%"} borderBottomRadius={"xl"} borderBottomWidth={4} >
                        {comments && comments.map((comment, index) => (  
                            <CommentsView key={comment.id} comment={comment} bgColor={randomColor} />
                        ))}
                        {/* <FlatList data={comments} renderItem={({item}) => <CommentsView comment={item} bgColor={randomColor} />} /> */}
                        
                    </View>
                </>
            }
        </ScrollView>
    )
}
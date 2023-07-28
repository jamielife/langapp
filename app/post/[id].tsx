import PostView from "../../components/PostView";
import CommentsView from "../../components/Comments";
import tweets from "../../assets/data/tweets";
import comments from "../../assets/data/comments";
import { useNavigation, useRouter, useLocalSearchParams } from "expo-router";
import { Text, View, ScrollView, Skeleton, HStack, VStack } from "native-base";
import { useEffect, useState } from "react";
import { CommentType } from "../../constants/Types";

export default function PostScreen() {
    //const { id } = useSearchParams();

    const navigation = useNavigation();
    const router = useRouter();
    const params = useLocalSearchParams();    
    const { id, randomColor } = params;

    const post = tweets.find(p => p.id === id);

    if(!post){
        return <Text>Post {id} not found.</Text>
    }

    const [loadedComments, setLoadedComments] = useState<CommentType[]>([]);
    const [loading, setLoading] = useState<boolean>(true);


    function loadLocalData() {
        // Simulate a delay with a timeout
        setTimeout(() => {
            const localData = comments; // replace this with your actual data loading logic
            setLoadedComments(localData);
            setLoading(false);
        }, 1000);
    }
  
    useEffect(() => {
        loadLocalData();
    }, []);

    return(
        <ScrollView p={3} flex={1} bg={"rgba(255,255,255,.90)"} _dark={{ bg: "rgba(0,0,0,.93)" }}>
            <PostView post={post} randomColor={randomColor} />
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
            <View mt={-3} alignItems={"center"} alignSelf={"center"} overflow={"hidden"} mb={10}
                borderWidth={2} w={"92%"} borderBottomRadius={"xl"} borderBottomWidth={4} >
                {loadedComments.map((comment, index) => (  
                    <CommentsView key={comment.id} comment={comment} bgColor={randomColor} />
                ))}
                {/* <FlatList data={comments} renderItem={({item}) => <CommentsView comment={item} bgColor={randomColor} />} /> */}
                
            </View>
            }
        </ScrollView>
    )
}
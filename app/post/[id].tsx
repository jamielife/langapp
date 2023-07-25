import PostView from "../../components/PostView";
import tweets from "../../assets/data/tweets";
import { useNavigation, useRouter, useLocalSearchParams } from "expo-router";
import { Pressable, Text, View } from "native-base";

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

    return(
        <View p={3} flex={1} bg={"rgba(255,255,255,.90)"} _dark={{ bg: "rgba(0,0,0,.93)" }}>
            <Pressable onPress={()=> router.back() } flex={1}>
                <PostView post={post} randomColor={randomColor} />
            </Pressable>
        </View>
    )
}
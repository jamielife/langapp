import PostView from "../../components/PostView";
import tweets from "../../assets/data/tweets";
import { useSearchParams } from "expo-router";
import { Text, View } from "native-base";

export default function PostScreen() {
    const { id } = useSearchParams();
    const post = tweets.find(p => p.id === id);

    if(!post){
        return <Text>Post {id} not found.</Text>
    }

    return(
        <View p={3} flex={1} bg={"rgba(0,0,0,.93)"}>
            <PostView post={post} />
        </View>
    )
}
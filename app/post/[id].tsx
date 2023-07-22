import PostView from "../../components/PostView";
import tweets from "../../assets/data/tweets";
import { useSearchParams } from "expo-router";
import { Text } from "native-base";

export default function PostScreen() {
    const { id } = useSearchParams();
    const post = tweets.find(p => p.id === id);

    if(!post){
        return <Text>Post {id} not found.</Text>
    }

    return(
        <PostView post={post} />
    )
}
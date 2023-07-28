import { useNavigation, useRouter, useLocalSearchParams, Stack } from "expo-router";
import { Text, View, ScrollView, Heading } from "native-base";
import tweets from "../assets/data/tweets";

export default function UserScreen() {
    const router = useRouter();
    const params = useLocalSearchParams();    
    const { username } = params;

    const user = tweets.find(p => p.user.username === username);
    //const user = null; //for testing no user until DB call

    if(!user){
        return router.replace('/error/404'); //works for now
    }  

    //const navigation = useNavigation();

    //remove headerbar 

    return(
        <ScrollView p={3} flex={1} bg={"rgba(255,255,255,.90)"} _dark={{ bg: "rgba(0,0,0,.93)" }}>
            <Stack.Screen options={{ title: `${user.user.name} @${user.user.username} | LangAppTBD` }} />
                
                <Heading>{username}</Heading>
                <Text>{user.user.name}</Text>
                {/* <PostView post={post} randomColor={randomColor} />

                <View mt={-3} alignItems={"center"} alignSelf={"center"} overflow={"hidden"} mb={10}
                    borderWidth={2} w={"92%"} borderBottomRadius={"xl"} borderBottomWidth={4} >
                    {tweets.map((tweet, index) => (  
                        <CommentsView key={index} post={tweet} bgColor={randomColor} />
                    ))}
                </View> */}
        </ScrollView>
    )
}
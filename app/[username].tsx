import { useNavigation, useRouter, useLocalSearchParams, Stack } from "expo-router";
import { Text, View, ScrollView, Heading } from "native-base";
import { API_URL } from "../constants/Globals";
import { PostType } from "../constants/Types";
import { useState, useEffect } from "react";

export default function UserScreen() {
    const router = useRouter();
    const params = useLocalSearchParams();    
    const { username } = params;

    const [user, setUser] = useState<PostType>();
    const [loading, setLoading] = useState<boolean>(true);  

	useEffect(() =>{
        //get Post by ID
		const fetchPost = async () => {
			try {
                //Fetch data from API
				const response = await fetch(API_URL);
				const json = await response.json();
                //TEMP - search from data for ID, this will become ID based query
				const user = json.find((p: { user: any; id: string | string[] | undefined; }) => p.user.username === username);
                //If nothing, return
                if(!user){
                    return router.replace('/error/404'); //works for now
                } 
                //otherwise update post state
                setUser(user);
                setLoading(false);
			} catch(err:any) {
				console.log(`Error getting post by ID: ${err.stack}`);
			}
		}
        //Execute functions
		fetchPost();
	}, []);

    return(
        <ScrollView p={3} flex={1} bg={"rgba(255,255,255,.90)"} _dark={{ bg: "rgba(0,0,0,.93)" }}>
            { loading ? 
                <Text>Loading...</Text>
            :
                <>
                    { user && 
                        <>
                            <Stack.Screen options={{ title: `${user.user.name} @${user.user.username} | LangAppTBD` }} /> 
                            <Heading>{username}</Heading>
                            <Text>{user.user.name}</Text> 
                        </>
                    }
                    
                    {/* <PostView post={post} randomColor={randomColor} />

                    <View mt={-3} alignItems={"center"} alignSelf={"center"} overflow={"hidden"} mb={10}
                        borderWidth={2} w={"92%"} borderBottomRadius={"xl"} borderBottomWidth={4} >
                        {tweets.map((tweet, index) => (  
                            <CommentsView key={index} post={tweet} bgColor={randomColor} />
                        ))}
                    </View> */}
                </>

            }
        </ScrollView>
    )
}
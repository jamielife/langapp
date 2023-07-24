import { useNavigation } from 'expo-router';
import { Pressable, Avatar } from 'native-base';
import { DrawerActions } from '@react-navigation/native';

export type AvatarProps = {
    id: string;
    image: string | undefined;
    avaSize: string;
}

const ProfileMenuIcon = ({ id, image, avaSize }:AvatarProps ) => {
	const navigation = useNavigation();
    return(
        <Pressable ml={3} key={id} onPress={() => navigation.dispatch(DrawerActions.toggleDrawer()) } >
            <Avatar size={avaSize} borderWidth={2} bg="primary.400" source={{ uri: image }} >
                <Avatar.Badge bg="primary.200" borderColor={"black"}></Avatar.Badge>
            </Avatar>
        </Pressable>
    )
}

export default ProfileMenuIcon;
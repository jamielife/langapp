import { useNavigation } from 'expo-router';
import { Pressable, Avatar } from 'native-base';
import { DrawerActions } from '@react-navigation/native';

const user = {
    id: 'ul000001',
    username: 'jamielife',
    name: 'Jamie Taylor',
    image:
      'https://2.gravatar.com/avatar/e529653809f90533471211fca7717069',
}

const ProfileMenuIcon = () => {
	const navigation = useNavigation();
    return(
        <Pressable onPress={() => navigation.dispatch(DrawerActions.toggleDrawer()) } >
            <Avatar ml={3} bg="primary.400" source={{ uri: user.image }} size={"sm"}>
                <Avatar.Badge bg="primary.400"></Avatar.Badge>
            </Avatar>
        </Pressable>
    )
}

export default ProfileMenuIcon;
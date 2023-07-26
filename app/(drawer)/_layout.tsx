import { withLayoutContext } from "expo-router";
import { DrawerContentScrollView, DrawerItemList, createDrawerNavigator } from "@react-navigation/drawer";
import { HStack, NativeBaseProvider, Text } from 'native-base';
import { theme } from "../../constants/Theme";
import ProfileMenuIcon from "../../components/ProfileMenuAvatar";

const DrawerNavigator = createDrawerNavigator().Navigator;
const Drawer = withLayoutContext(DrawerNavigator);

const user = {
	id: 'ul000001',
	username: 'jamielife',
	name: 'Jamie Taylor',
	image:
	  'https://2.gravatar.com/avatar/e529653809f90533471211fca7717069',
}

function CustomDrawerContent(props:any) {
    return (
      <DrawerContentScrollView {...props}>
        <HStack mb={4}>
            <ProfileMenuIcon id={user.id} image={user.image} avaSize="md"  />
            <Text alignSelf={"center"} fontSize={14} ml={2}>Jamie Taylor</Text>
        </HStack>
        
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    );
  }

export default function DrawerLayout() {

    return (
        <NativeBaseProvider theme={theme}>    
            <Drawer drawerContent={(props) => <CustomDrawerContent {...props} />}>
                <Drawer.Screen name='(tabs)'   options={{ headerShown: false, title: 'Feed' }}  />                
                <Drawer.Screen name='notebook' options={{  title: 'Notebook', headerLeft: () => (<ProfileMenuIcon id={user.id} image={user.image} avaSize="md"  />) }}  />
                <Drawer.Screen name='go-pro'   options={{  title: 'Go Pro!',  headerLeft: () => (<ProfileMenuIcon id={user.id} image={user.image} avaSize="md" />) }}  />
            </Drawer>
        </NativeBaseProvider>
    )
}
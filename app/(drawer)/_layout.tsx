import { withLayoutContext } from "expo-router";
import { DrawerContentScrollView, DrawerItemList, createDrawerNavigator } from "@react-navigation/drawer";
import { HStack, NativeBaseProvider, Text } from 'native-base';
import { theme } from "../../constants/Theme";
import ProfileMenuIcon from "../../components/ProfileMenuIcon";


const DrawerNavigator = createDrawerNavigator().Navigator;
const Drawer = withLayoutContext(DrawerNavigator);

function CustomDrawerContent(props:any) {
    return (
      <DrawerContentScrollView {...props}>
        <HStack mb={4}>
            <ProfileMenuIcon />
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
                <Drawer.Screen name='(tabs)' options={{ headerShown: false, title: 'Feed' }}  />                
                <Drawer.Screen name='favorites' options={{  title: 'My Favs', headerLeft: () => (<ProfileMenuIcon />) }}  />
                <Drawer.Screen name='go-pro' options={{  title: 'Go Pro!', headerLeft: () => (<ProfileMenuIcon />) }}  />
            </Drawer>
        </NativeBaseProvider>
    )
}
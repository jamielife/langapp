import { withLayoutContext } from "expo-router";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NativeBaseProvider } from 'native-base';
import { theme } from "../../constants/Theme";
import ProfileMenuIcon from "../../components/ProfileMenuIcon";

const DrawerNavigator = createDrawerNavigator().Navigator;
const Drawer = withLayoutContext(DrawerNavigator);


export default function DrawerLayout() {

    return (
        <NativeBaseProvider theme={theme}>    
            <Drawer>
                <Drawer.Screen name='(tabs)' options={{ headerShown: false, title: 'Feed' }}  />                
                <Drawer.Screen name='favorites' options={{  title: 'My Favs', headerLeft: () => (<ProfileMenuIcon />) }}  />
                <Drawer.Screen name='go-pro' options={{  title: 'Go Pro!', headerLeft: () => (<ProfileMenuIcon />) }}  />
            </Drawer>
        </NativeBaseProvider>
    )
}
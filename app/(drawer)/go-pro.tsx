import { View, Text, Center } from 'native-base';

const Favorites = () => {
    return (
        <View p={3} flex={1} style={{ justifyContent: "center", alignContent: "center" }}>
            <Center p={5} bg={'cyan.100'} _dark={{ bg: 'cyan.700' }} borderWidth={2} borderBottomWidth={4}>
                <Text bold>Go Pro Today for $1,000,000 USD!</Text>
            </Center>
        </View>
      );    
}

export default Favorites;
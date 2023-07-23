import { View, Text } from 'native-base';

const Favorites = () => {
    return (
        <View p={3} flex={1} style={{ justifyContent: "center", alignContent: "center" }}>
            <Text style={{ color: "gray" }} bold>Go Pro Today for $1,000,000 USD!</Text>        
        </View>
      );    
}

export default Favorites;
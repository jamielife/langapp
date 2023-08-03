import { View, Text, useColorModeValue } from 'native-base'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

type PostFooterButtonProps = {
    icon: React.ComponentProps<typeof MaterialCommunityIcons>['name'];
    text?: string | number;
}

const PostFooterButton = ({icon, text}: PostFooterButtonProps) => {
    const iconColor = useColorModeValue("black", "white");
    return(
        <View flexDir={"row"} alignItems={"center"}>
            <MaterialCommunityIcons name={icon} size={18} color={iconColor} /><Text fontSize={16} color={iconColor}>{text}</Text>
        </View>
    )
}

export default PostFooterButton;
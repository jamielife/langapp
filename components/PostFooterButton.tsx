import { View, Text } from 'native-base'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

type PostFooterButtonProps = {
    icon: React.ComponentProps<typeof MaterialCommunityIcons>['name'];
    text?: string | number;
}

const PostFooterButton = ({icon, text}: PostFooterButtonProps) => {
    return(
        <View flexDir={"row"} alignItems={"center"}>
            <MaterialCommunityIcons name={icon} size={18} color="black" /><Text fontSize={16} color={"black"}>{text}</Text>
        </View>
    )
}

export default PostFooterButton;
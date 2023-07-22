import { View, Text } from 'native-base'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

type FooterButtonProps = {
    icon: React.ComponentProps<typeof MaterialCommunityIcons>['name'];
    text?: string | number;
}

const FooterButton = ({icon, text}: FooterButtonProps) => {
    return(
        <View flexDir={"row"} alignItems={"center"}>
            <MaterialCommunityIcons name={icon} size={18} color="gray" /><Text fontSize={16} color={"warmGray.400"}>{text}</Text>
        </View>
    )
}

export default FooterButton;
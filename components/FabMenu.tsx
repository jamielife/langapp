import { View, Icon, Stagger, Box, HStack, useDisclose, Pressable, Text } from 'native-base'
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

function FabMenu(){
	const router = useRouter();
	const {
	  isOpen,
	  onClose,
	  onToggle
	} = useDisclose();
	return <View position={"absolute"} bottom={2} right={5}>
		<Box alignItems="center" minH="220">
		  <Stagger visible={isOpen} 
		  initial={{
		  	opacity: 0,
			scale: 0,
			translateY: 34
		}} 
		animate={{
			translateY: 0,
			scale: 1,
			opacity: 1,
			transition: {
				type: "spring",
				mass: 0.8,
				stagger: {
					offset: 30,
					reverse: true
				}
			}
		}} 
		exit={{
			translateY: 34,
			scale: 0.5,
			opacity: 0,
			transition: {
				duration: 100,
				stagger: {
					offset: 30,
					reverse: true
				}
			}
		}}>
			<Pressable  mb="4" variant="solid" bg="primary.400" colorScheme="primary" borderRadius="full" w={12} h={12} alignItems={"center"} justifyContent={"center"}
				onPress={()=>{ onClose(); router.push('/two') }}>
				<Text color={"white"} fontSize={16} position={"relative"} left={-48} bottom={-5} mb={-5}>Test</Text>
				<Icon as={MaterialIcons} name="location-pin" size={8} _dark={{ color: "warmGray.50" }} color="warmGray.50" />
			</Pressable>

			<Pressable  mb="4" variant="solid" bg="tertiary.400" colorScheme="tertiary" borderRadius="full" w={12} h={12} alignItems={"center"} justifyContent={"center"}
				onPress={()=>{ onClose(); }}>
				<Text color={"white"} fontSize={16} position={"relative"} left={-48} bottom={-5} mb={-5}>Test</Text>
				<Icon as={MaterialCommunityIcons} name="microphone" size={8} _dark={{ color: "warmGray.50" }} color="warmGray.50" />
			</Pressable>

			<Pressable  mb="4" variant="solid" bg="warmGray.500" colorScheme="warmGray" borderRadius="full" w={12} h={12} alignItems={"center"} justifyContent={"center"}
				onPress={()=>{ onClose(); }}>
					<Text color={"white"} fontSize={16} position={"relative"} left={-48} bottom={-5} mb={-5}>Test</Text>
				<Icon as={MaterialCommunityIcons} name="video" size={8} _dark={{ color: "warmGray.50" }} color="warmGray.50" />
			</Pressable>

			<Pressable  mb="4" variant="solid" bg="green.400" colorScheme="green" borderRadius="full" w={12} h={12} alignItems={"center"} justifyContent={"center"}
				onPress={()=>{ onClose(); }}>
					<Text color={"white"} fontSize={16} position={"relative"} left={-48} bottom={-5} mb={-5}>Test</Text>
				<Icon as={MaterialIcons} name="photo-library" size={8} _dark={{ color: "warmGray.50" }} color="warmGray.50" />
			</Pressable>

		  </Stagger>
		</Box>
		<HStack alignItems="center">
			<Pressable shadow={"9"} variant="solid" borderRadius="full" onPress={onToggle} bg="primary.600">
				<Icon as={MaterialCommunityIcons} size="12" name="dots-horizontal" color="warmGray.50" _dark={{ color: "warmGray.50" }} />
			</Pressable>
		</HStack>
	  </View>;
  };

  export default FabMenu;
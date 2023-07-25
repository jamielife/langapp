import { View, Icon, Stagger, Box, HStack, useDisclose, Pressable, Text } from 'native-base'
import { MaterialCommunityIcons, MaterialIcons, Entypo } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

function FabMenu(){
	const router = useRouter();
	const {
	  isOpen,
	  onClose,
	  onToggle
	} = useDisclose();

	return (
		<View position={"absolute"} zIndex={0} bottom={0} right={3}>
			<Box alignItems="center" overflow={"visible"} height={ isOpen ? "auto" : 0 }>
				<Stagger visible={isOpen} 
					initial={{
						opacity: 0,
						scale: 0,
						translateY: 34,
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
				<Pressable  mb="4" variant="solid" bg="primary.500" colorScheme="primary" borderRadius="full" w={12} h={12} 
							alignItems={"center"} justifyContent={"center"} borderWidth={2} borderBottomWidth={6}
							onPress={()=>{ onClose(); router.push('/new-post') }}>
					<Icon as={Entypo} name="new-message" size={6} _dark={{ color: "warmGray.50" }} color="warmGray.50" />
				</Pressable>

				<Pressable  mb="4" variant="solid" bg="secondary.300" colorScheme="tertiary" borderRadius="full" w={12} h={12} 
							alignItems={"center"} justifyContent={"center"} borderWidth={2} borderBottomWidth={6}
							onPress={()=>{ onClose(); }}>
					<Icon as={MaterialCommunityIcons} name="microphone" size={8} _dark={{ color: "warmGray.50" }} color="warmGray.50" />
				</Pressable>

				<Pressable  mb="4" variant="solid" bg="tertiary.300" colorScheme="warmGray" borderRadius="full" w={12} h={12} 
							alignItems={"center"} justifyContent={"center"} borderWidth={2} borderBottomWidth={6}
							onPress={()=>{ onClose(); }}>
					<Icon as={MaterialCommunityIcons} name="video" size={8} _dark={{ color: "warmGray.50" }} color="warmGray.50" />
				</Pressable>

				<Pressable  mb="4" variant="solid" bg="pink.400" colorScheme="green" borderRadius="full" w={12} h={12} 
							alignItems={"center"} justifyContent={"center"} borderWidth={2} borderBottomWidth={6}
							onPress={()=>{ onClose(); }}>
					<Icon as={MaterialIcons} name="photo-library" size={7} _dark={{ color: "warmGray.50" }} color="warmGray.50" />
				</Pressable>

				</Stagger>

			</Box>

			<HStack alignItems="center">
				<Pressable variant="solid" borderRadius="full" onPress={()=> { onToggle() } } bg="cyan.200" 
							alignItems={"center"} justifyContent={"center"} borderWidth={2} borderBottomWidth={6} w={16} h={16}  >
					<Icon as={MaterialCommunityIcons} size={10} name="plus" color="warmGray.50" _dark={{ color: "warmGray.50" }} />
				</Pressable>
			</HStack>

		</View>
	);
};

export default FabMenu;
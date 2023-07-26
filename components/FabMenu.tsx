import { Icon, Stagger, Box, useDisclose, Pressable, Modal, View } from 'native-base'
import { MaterialCommunityIcons, MaterialIcons, Entypo } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import Animated, {
	useSharedValue,
	useAnimatedStyle,
	withTiming,
	Easing,
  } from 'react-native-reanimated';

function FabMenu(){
	const [showModal, setShowModal] = useState(false);

	const router = useRouter();
	const {
	  isOpen,
	  onClose,
	  onToggle
	} = useDisclose();

	let turnedOn = false;
	const rotation = useSharedValue(0);
	// const translateY = useSharedValue(0);
	// const translateX = useSharedValue(0);
  
	const animatedStyle = useAnimatedStyle(() => {
	  return {
		transform: [
			{ rotateZ: `${rotation.value}deg` },
			//{ translateY: translateY.value },
			//{ translateX: translateX.value },
		],
	  };
	});
  
	const handlePress = (value:boolean) => {
		turnedOn = !turnedOn;
		rotation.value = withTiming(value ? 225 : 0, {
		  duration: 1000,
		  easing: Easing.bounce,
		});	
		// setTimeout(() => {
		// 	translateY.value = withTiming(value ? 0 : 0, {
		// 		duration: 1000,
		// 		easing: Easing.linear,
		// 	  });	
		// 	  translateX.value = withTiming(value ? 0 : 0, {
		// 		duration: 1000,
		// 		easing: Easing.linear,
		// 	  });				
		// }, 1001);
	};


	return (
		<View position={"absolute"} zIndex={0} bottom={0} right={3}>

            <Modal isOpen={showModal} onClose={() =>{ onToggle(); setShowModal(false); handlePress(turnedOn) }}  borderWidth={0} position={"absolute"} bg={"white:alpha.75"}>
                <Modal.Content bg={"none"} width={24} shadow={"none"} position={"absolute"} bottom={"52px"} right={"-4px"} overflow={"visible"}>

					<Box alignItems={"center"} overflow={"visible"} height={ isOpen ? "auto" : "full" }>
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
							<Pressable mb="3" variant="solid" bg="primary.500" colorScheme="primary" borderRadius="full" w={12} h={12} 
								alignItems={"center"} justifyContent={"center"} borderWidth={2} borderBottomWidth={6}
								onPress={()=>{ onClose(); router.push('/new-post') }}>
								<Icon as={Entypo} name="new-message" size={6} _dark={{ color: "warmGray.50" }} color="warmGray.50" />
							</Pressable>

							<Pressable mb="3" variant="solid" bg="secondary.300" colorScheme="tertiary" borderRadius="full" w={12} h={12} 
								alignItems={"center"} justifyContent={"center"} borderWidth={2} borderBottomWidth={6}
								onPress={()=>{ onClose(); }}>
								<Icon as={MaterialCommunityIcons} name="microphone" size={8} _dark={{ color: "warmGray.50" }} color="warmGray.50" />
							</Pressable>

							<Pressable mb="3" variant="solid" bg="tertiary.300" colorScheme="warmGray" borderRadius="full" w={12} h={12} 
								alignItems={"center"} justifyContent={"center"} borderWidth={2} borderBottomWidth={6}
								onPress={()=>{ onClose(); }}>
								<Icon as={MaterialCommunityIcons} name="video" size={8} _dark={{ color: "warmGray.50" }} color="warmGray.50" />
							</Pressable>

							<Pressable mb="3" variant="solid" bg="pink.400" colorScheme="green" borderRadius="full" w={12} h={12} 
								alignItems={"center"} justifyContent={"center"} borderWidth={2} borderBottomWidth={6}
								onPress={()=>{ onClose(); }}>
								<Icon as={MaterialIcons} name="photo-library" size={7} _dark={{ color: "warmGray.50" }} color="warmGray.50" />
							</Pressable>

						</Stagger>
							
						<Pressable overflow={"hidden"} variant="solid" borderRadius="full" onPress={()=> { onToggle(); setShowModal(false); handlePress(turnedOn) } } bg="cyan.200" 
							alignItems={"center"} justifyContent={"center"} borderWidth={2} w={16} h={16} borderBottomWidth={4} >
							<Animated.View style={animatedStyle}>
								<Icon as={MaterialCommunityIcons} size={10} name="plus" color="warmGray.50" _dark={{ color: "warmGray.50" }} />
							</Animated.View>
						</Pressable>	

					</Box>				

				</Modal.Content>
            </Modal>    					

			<Pressable variant="solid" borderRadius="full" onPress={()=> { onToggle(); setShowModal(true); handlePress(!turnedOn); } } bg="cyan.200" 
				alignItems={"center"} justifyContent={"center"} borderWidth={2} w={16} h={16} borderBottomWidth={3}>
					<Animated.View style={animatedStyle}>
				<Icon as={MaterialCommunityIcons} size={10} name="plus" color="warmGray.50" _dark={{ color: "warmGray.50" }} />
				</Animated.View>
			</Pressable>

		</View>
	);
};

export default FabMenu;
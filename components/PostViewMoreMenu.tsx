import { Entypo, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { View, Text, Center, Pressable, Icon, Stagger, Box, HStack, useDisclose, Button, AlertDialog, extendTheme, NativeBaseProvider, VStack, Modal } from 'native-base';
import { PostType } from '../constants/Types';
import { useRef, useState } from 'react';

export type PostProps = {
    post: PostType; 
}


function PostViewMoreMenu({ post }:PostProps){
    // Alert Box
    const [isAlertOpen, setIsAlertOpen] = useState(false);  
    const onAlertClose = () => setIsAlertOpen(false);  isAlertOpen
    const cancelRef = useRef(null);

    const [showModal, setShowModal] = useState(false);

    const router = useRouter();
	const {
        isOpen,
        onClose,
        onToggle
	} = useDisclose();

	return (
		<View position={"absolute"} right={2.5} top={4}>

            {/* Report confirmation prompt */}
            <Center>
                <AlertDialog leastDestructiveRef={cancelRef} isOpen={isAlertOpen} onClose={onAlertClose} bg={"pink.400:alpha.25"}>
                    <AlertDialog.Content borderWidth={2} borderBottomWidth={6} borderRadius={"xl"}>
                    <AlertDialog.Body borderRadius={"xl"}>
                        <Text mb={4} bold>Report Comment?</Text>
                        Please report this comment if it violates any of our policies.
                        <HStack mt={4}>
                            <Button mr={"auto"} variant="unstyled" colorScheme="coolGray" onPress={() => { onAlertClose(); setShowModal(false);}} ref={cancelRef}>
                                Nevermind
                            </Button>
                            <Button px={6} bg={"pink.300"} onPress={() => { onAlertClose(); setShowModal(false); console.warn(`Post ID: ${post.id} Reported!`)  }} 
                                borderWidth={1} borderBottomWidth={3} colorScheme={"pink"}>
                                Report
                            </Button>
                        </HStack>
                    </AlertDialog.Body>
                    </AlertDialog.Content>
                </AlertDialog>
            </Center>
                 
            {/* Elipsis Button */}
            <HStack justifyContent={"flex-end"}>
				<Pressable variant="solid" borderRadius="full" 
                    onPress={()=> { onToggle(); setShowModal(true); }} bg="white:alpha.50" alignItems={"center"} justifyContent={"center"} borderWidth={1} w={6} h={6}>
					<Icon as={Entypo} size={4} name="dots-three-horizontal" color="warmGray.500" _dark={{ color: "warmGray.50" }} />
				</Pressable>
			</HStack>
            
            {/* Modal, animated icons open/close func */}
            <Modal isOpen={showModal} onClose={() =>{ onToggle(); setShowModal(false); }} bg={"white:alpha.75"} borderWidth={0}>
                <Modal.Content bg={"none"} height={24} justifyContent={"center"} shadow={"none"}>

                    <Box alignItems="center" overflow={"visible"} height={ isOpen ? "auto" : 0 } w={ isOpen ? "auto" : 0 } opacity={isOpen ? 1 : 0}>				            
                        <HStack >    
                            <Stagger visible={isOpen} 
                                initial={{
                                    opacity: 0,
                                    scale: 0,
                                    translateX: 34,
                                    translateY: 34
                                }} 
                                animate={{
                                    translateX: 0,
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
                                    translateX: 34,
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

                                <Box ml={2} alignItems={"center"}>
                                    <Pressable mb="4" variant="solid" bg="primary.500" colorScheme="primary" borderRadius="full" w={12} h={12} 
                                                alignItems={"center"} justifyContent={"center"} borderWidth={2} borderBottomWidth={6}
                                                onPress={()=>{ onClose(); setShowModal(false); router.push('/new-post') }}>                            
                                        <Icon as={MaterialIcons} name="translate" size={6} _dark={{ color: "warmGray.50" }} color="warmGray.50" />
                                    </Pressable>
                                    <Center mt={-3} px={2} bg={"primary.500"} borderWidth={1} borderRadius={"full"} borderBottomWidth={3}>
                                        <Text fontSize={12}>Translate</Text>
                                    </Center>
                                </Box>

                                <Box ml={2} alignItems={"center"}>
                                    <Pressable mb="4" variant="solid" bg="secondary.300" colorScheme="tertiary" borderRadius="full" w={12} h={12} 
                                                alignItems={"center"} justifyContent={"center"} borderWidth={2} borderBottomWidth={6}
                                                onPress={()=>{ onClose(); setShowModal(false); console.warn(`Post ID: ${post.id} added to Notebook!`) }}>
                                        <Icon as={MaterialCommunityIcons} name="note-plus" size={7} _dark={{ color: "warmGray.50" }} color="warmGray.50" />                            
                                    </Pressable>
                                    <Center mt={-3} px={2} bg={"secondary.300"} borderWidth={1} borderRadius={"full"} borderBottomWidth={3}>
                                        <Text fontSize={12}>Highlight</Text>
                                    </Center>
                                </Box>

                                <Box ml={2} alignItems={"center"}>
                                    <Pressable mb="4" variant="solid" bg="tertiary.300" colorScheme="warmGray" borderRadius="full" w={12} h={12} 
                                                alignItems={"center"} justifyContent={"center"} borderWidth={2} borderBottomWidth={6}
                                                onPress={()=>{ onClose(); setShowModal(false); }}>
                                        <Icon as={MaterialIcons} name="file-copy" size={6} _dark={{ color: "warmGray.50" }} color="warmGray.50" />
                                    </Pressable>
                                    <Center mt={-3} px={2} bg={"tertiary.300"} borderWidth={1} borderRadius={"full"} borderBottomWidth={3}>
                                        <Text fontSize={12}>Copy</Text>
                                    </Center>
                                </Box>

                                <Box ml={2} alignItems={"center"}>
                                    <Pressable mb="4" variant="solid" bg="pink.400" colorScheme="green" borderRadius="full" w={12} h={12} 
                                                alignItems={"center"} justifyContent={"center"} borderWidth={2} borderBottomWidth={6}
                                                onPress={()=>{ setIsAlertOpen(!isAlertOpen); onClose() }}>
                                        <Icon as={MaterialIcons} name="report" size={7} _dark={{ color: "warmGray.50" }} color="warmGray.50" />
                                    </Pressable>
                                    <Center mt={-3} px={2} bg={"pink.400"} borderWidth={1} borderRadius={"full"} borderBottomWidth={3}>
                                        <Text fontSize={12}>Report</Text>
                                    </Center>
                                </Box>
                            </Stagger>
                        </HStack>
                    </Box>
                </Modal.Content>
            </Modal>    
		</View>
	);   
}
export default PostViewMoreMenu;
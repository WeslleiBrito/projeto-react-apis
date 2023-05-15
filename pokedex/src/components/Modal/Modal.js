import {
    Modal,
    ModalContent,
    ModalBody,
    Heading,
    Text
} from '@chakra-ui/react'

export function VerticallyCenter({ isOpen, onClose, heading, text }) {


    return (
        <>

            <Modal onClose={onClose} isOpen={isOpen} isCentered >
                <ModalContent height="23vh" width="22vw" textAlign="center">
                    <ModalBody justifyContent={"center"} display="flex" flexDirection="column">
                        <Heading as="h1" fontWeight={"700"} fontSize={"4xl"}>{heading}</Heading>
                        <Text fontSize="0.7em" fontWeight="700">{text}</Text>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}
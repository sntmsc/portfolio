import React from 'react'
import {
    Box,
    Flex,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    Icon
  } from '@chakra-ui/react'
  import {ArrowLeftIcon, ArrowRightIcon} from '@chakra-ui/icons'




  const ModalProjects = () =>  {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const projects = [{name:'Memotest'},
                      {name:'to-do-list'},
                      {name:'SuperHero'},
                      {name:'Cretona Web'},
                      {name:'Paises'}]
    
    return (
      <>
        <Button onClick={onOpen}>Open Modal</Button>
  
        <Modal isOpen={isOpen} onClose={onClose} size='2xl'>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader
            fontSize='2em'
            width='100%'
            textAlign='center'
            mt='1em'>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <Box 
                height='30em'
                position='relative'>
                    <Icon 
                    as={ArrowLeftIcon}
                    position='absolute'
                    top='50%'
                    left='10px'/>
                    <Icon 
                    as={ArrowRightIcon}
                    position='absolute'
                    top='50%'
                    right='10px'/>
                </Box>
            </ModalBody>
  
            <ModalFooter 
            display='flex'
            justifyContent='center'>
            {projects.map((x,i)=>
              <Button variant='outline' mr={3} onClick={onClose} key={i}>
              {x.name}
            </Button>            
            )}
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

  export default ModalProjects
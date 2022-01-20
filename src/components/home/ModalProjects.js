import React from 'react'
import {
    Box,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
  } from '@chakra-ui/react'




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
            <ModalHeader fontSize='2em'>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <Box height='30em'></Box>
              Prueba
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
import React from 'react'
import { useSelector } from "react-redux";
import {
    Box,
    Image,
    Flex,
    HStack,
    Text,
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

    const project = useSelector(state => state.project)
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
            fontFamily="'Cabin', sans-serif"
            w='100%'
            mt='1em'
            textAlign='center'>
              {project.name}
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <Flex
                position='relative'
                justify='center'
                align='center'
                direction='column'>
                  <HStack
                  spacing='29px'
                  my='1em'>
                    <Flex
                    direction='column'
                    justify='center'
                    align='center'>
                      <Image
                      src='./imgs/icons/github-logo.png'
                      alt='github'
                      boxSize='1.9em'
                      mb='.2em'/>
                      <Text
                      fontFamily="'Cabin', sans-serif">
                        Github
                      </Text>
                    </Flex>
                    <Flex
                    direction='column'
                    justify='center'
                    align='center'>
                      <Image
                      src='./imgs/icons/internet.png'
                      alt='website'
                      boxSize='2.1em'/>
                      <Text
                      fontFamily="'Cabin', sans-serif">
                        sitio web
                      </Text>
                    </Flex>
                  </HStack>
                    <Image 
                    src={project.img}
                    alt={project.name}
                    objectFit='cover'
                    boxSize='15em'
                    mb='1em'
                    boxShadow='dark-lg'/>
                  <Flex
                  justify='center'
                  w='70%'
                  bg='#9c8e8e'
                  p='2px'
                  border='2px'
                  mb='1em'>
                    <Text
                    bg='#e1e1e1'
                    p='1em'
                    borderRadius='15px'
                    fontFamily="'Cabin', sans-serif">
                      {project.desc}
                    </Text>
                  </Flex>
                    <Icon 
                    as={ArrowLeftIcon}
                    alt='left option'
                    position='absolute'
                    top='50%'
                    left='10px'
                    boxSize='2em'/>
                    <Icon 
                    as={ArrowRightIcon}
                    alt='right option'
                    position='absolute'
                    top='50%'
                    right='10px'
                    boxSize='2em'/>
                </Flex>
            </ModalBody>
  
            <ModalFooter 
            display='flex'
            justifyContent='center'>
            {projects.map((x,i)=>
              <Button
              variant='outline'
              mr={3}
              fontFamily='Source Code Pro, monospace'
              onClick={onClose}
              key={i}>
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
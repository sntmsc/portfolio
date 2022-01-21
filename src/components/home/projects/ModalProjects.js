import React from 'react'
import { useSelector } from "react-redux";
import projectsData from "../../../projectsData"
import { useDispatch } from 'react-redux'
import { selectProject } from './../../../reducers/ProjectReducer'
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
    Icon,
    IconButton
  } from '@chakra-ui/react'
  import {ArrowLeftIcon, ArrowRightIcon} from '@chakra-ui/icons'



  const ModalProjects = ({disclosure}) =>  {

    const project = useSelector(state => state.project)
    const dispatch = useDispatch();
    const projectsNames = projectsData.map((x)=>x.name);
    const {isOpen, onClose, onOpen} = disclosure;
    return (
      <>
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
                    align='center'
                    height='5em'>
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
                    <IconButton
                    as={ArrowLeftIcon}
                    onClick={()=>dispatch(selectProject(project.id-1))}
                    alt='left option'
                    position='absolute'
                    top='15em'
                    left='10px'
                    boxSize='2em'
                    _hover={{
                      cursor:'pointer'
                    }}/>
                    <IconButton 
                    as={ArrowRightIcon}
                    onClick={()=>dispatch(selectProject(project.id+1))}
                    alt='right option'
                    position='absolute'
                    top='15em'
                    right='10px'
                    boxSize='2em'
                    _hover={{
                      cursor:'pointer'
                    }}/>
                </Flex>
            </ModalBody>
  
            <ModalFooter 
            display='flex'
            justifyContent='center'>
            {projectsNames.map((x,i)=>
              <Button
              variant={x !== project.name ? 'outline' : 'solid'}
              mr={3}
              fontFamily='Source Code Pro, monospace'
              onClick={onClose}
              key={i}>
              {x}
            </Button>            
            )}
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

  export default ModalProjects
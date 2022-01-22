import React from 'react'
import { useSelector } from "react-redux";
import projectsData from "../../../projectsData"
import { useDispatch } from 'react-redux'
import { selectProject, cleanProject } from './../../../reducers/ProjectReducer'
import {
    Image,
    Box,
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
    Link
  } from '@chakra-ui/react'
  import {ArrowLeftIcon, ArrowRightIcon} from '@chakra-ui/icons'



  const ModalProjects = ({disclosure}) =>  {

    const project = useSelector(state => state.project)
    const dispatch = useDispatch();
    const projectsNames = projectsData.map((x)=>x.name);
    const {isOpen, onClose} = disclosure;
    const currentIndex = projectsNames.indexOf(project.name);

    const handleClose = () =>{
      dispatch(cleanProject())
    }

    return (
      <>
        <Modal isOpen={isOpen} onClose={()=>{handleClose();onClose()}} size='2xl'>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader
            fontSize='3em'
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
                  mb='1em'>
                    <Link href={project.github} isExternal>
                      <Flex
                      direction='column'
                      justify='center'
                      align='center'>
                        <Box
                        boxSize='35px'>
                          <Image
                          src='./imgs/icons/github-logo.png'
                          alt='Github'
                          objectFit='cover'/>
                        </Box>
                        <Text
                        fontFamily="'Space Mono', monospace">
                          Github
                        </Text>
                      </Flex>
                    </Link>
                    <Link href={project.website} isExternal>
                      <Flex
                      direction='column'
                      justify='center'
                      align='center'>
                        <Box
                        boxSize='40px'>
                          <Image
                          src='./imgs/icons/internet.png'
                          alt='website'
                          objectFit='cover'
                          position='relative'
                          top='3px'/>
                        </Box>
                        <Text
                        fontFamily="'Space Mono', monospace" position='relative' bottom='2.3px'>
                          App
                        </Text>
                      </Flex>
                    </Link>
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
                    fontFamily="'Cabin', sans-serif"
                    h='8em'>
                      {project.desc}
                    </Text>
                  </Flex>
                    <Image
                    as={ArrowLeftIcon}
                    onClick={()=>dispatch(selectProject(currentIndex > 0 ? currentIndex - 1 : projectsData.length - 1))}
                    alt='left option'
                    position='absolute'
                    top='15em'
                    left='10px'
                    boxSize='2em'
                    _hover={{
                      cursor:'pointer'
                    }}/>
                    <Image
                    as={ArrowRightIcon}
                    onClick={()=>dispatch(selectProject(currentIndex < projectsData.length - 1 ? currentIndex + 1 : 0))}
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
              onClick={()=>dispatch(selectProject(projectsNames.indexOf(x)))}
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
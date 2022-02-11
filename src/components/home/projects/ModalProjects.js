import React from 'react'
import { useSelector } from "react-redux";
import projectsData from "../../../projectsData"
import { useDispatch } from 'react-redux'
import { selectProject, cleanProject } from './../../../reducers/ProjectReducer'
import {
    Flex,
    Image,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useMediaQuery
  } from '@chakra-ui/react'
  import {ArrowLeftIcon, ArrowRightIcon} from '@chakra-ui/icons'
  import ModalBodyProjects from './ModalBodyProjects';
  import { motion } from 'framer-motion';



  const ModalProjects = ({disclosure}) =>  {

    const arrow = {
      init: { scale: 1 },
      pressed: { scale: 1.5, transition:{duration:0.4}},
      focus: { scale: 1.5, transition:{duration:0.4}},
    }

    const project = useSelector(state => state.project);
    const dispatch = useDispatch();
    const projectsNames = projectsData.map((x)=>x.name);
    const {isOpen, onClose} = disclosure;
    const currentIndex = projectsNames.indexOf(project.name);
    const [queryMaxHeight800,queryMinWidth800] = useMediaQuery(['(max-height: 800px)','(min-width: 800px)']);

    const handleClose = () =>{
      dispatch(cleanProject())
    }
    return (
      <>
        <Modal 
        isOpen={isOpen} 
        onClose={()=>{handleClose();onClose()}} 
        size={queryMinWidth800 ? '2xl' : 'xl'}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader
            as={motion.h1}
            key={project.name}
            initial={{opacity: 0,transition: { duration: .7 }}}
            animate={{opacity: 1,transition: { duration: .7 }}}
            fontSize={queryMaxHeight800?'2em' : '3em'}
            fontFamily="'Cabin', sans-serif"
            w='100%'
            mt={queryMaxHeight800?'0' : '1em'}
            jusitfy='center'
            align='center'
            textAlign='center'>
              {project.name}
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody
            display='flex'
            pt={5}
            pb={5}
            align='center'
            justify='center'>
              <ModalBodyProjects project={project} minW800={queryMinWidth800}/>
                  <Flex
                  as={motion.div}
                  variants={arrow}
                  initial="init"
                  whileTap="pressed"
                  whileFocus="focus"
                  position='absolute'
                  top='50%'
                  left='10px'>   
                    <Image
                    as={ArrowLeftIcon}
                    onClick={()=>dispatch(selectProject(currentIndex > 0 ? currentIndex - 1 : projectsData.length - 1))}
                    alt='left option'
                    boxSize='2em'
                    _hover={{
                      cursor:'pointer'
                    }}/>
                  </Flex>
                  <Flex
                  as={motion.div}
                  variants={arrow}
                  initial="init"
                  whileTap="pressed"
                  whileFocus="focus"
                  position='absolute'
                  top='50%'
                  right='10px'>
                    <Image
                    as={ArrowRightIcon}
                    onClick={()=>dispatch(selectProject(currentIndex < projectsData.length - 1 ? currentIndex + 1 : 0))}
                    alt='right option'
                    boxSize='2em'
                    _hover={{
                      cursor:'pointer'
                    }}/>
                  </Flex>
            </ModalBody>
            <ModalFooter
            as={Flex}
            wrap='wrap'
            display={{base:'none',md:'flex'}}
            justifyContent='center'>
                          {!queryMaxHeight800 &&
            projectsNames.map((x,i)=>
              <Button
              variant={x !== project.name ? 'outline' : 'solid'}
              mb='1em'
              w='8em'
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
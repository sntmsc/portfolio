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

    const project = useSelector(state => state.project);
    const dispatch = useDispatch();
    const projectsNames = projectsData.map((x)=>x.name);
    const {isOpen, onClose} = disclosure;
    const currentIndex = projectsNames.indexOf(project.name);
    const [queryMaxHeight800] = useMediaQuery('(max-height: 800px)');

    const handleClose = () =>{
      dispatch(cleanProject())
    }
    return (
      <>
        <Modal isOpen={isOpen} onClose={()=>{handleClose();onClose()}} size={queryMaxHeight800? 'sm' : 'xl'}>
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
            pt={10}
            pb={20}
            align='center'>
              <ModalBodyProjects project={project} max800={queryMaxHeight800}/>
                  <Image
                  as={ArrowLeftIcon}
                  onClick={()=>dispatch(selectProject(currentIndex > 0 ? currentIndex - 1 : projectsData.length - 1))}
                  alt='left option'
                  position='absolute'
                  top='23em'
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
                  top='23em'
                  right='10px'
                  boxSize='2em'
                  _hover={{
                    cursor:'pointer'
                  }}/>
            </ModalBody>
            {!queryMaxHeight800 && 
            <ModalFooter
            as={Flex}
            wrap='wrap'
            display={{base:'none',md:'flex'}}
            justifyContent='center'>
            {projectsNames.map((x,i)=>
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
            }
          </ModalContent>
        </Modal>
      </>
    )
  }

  export default ModalProjects
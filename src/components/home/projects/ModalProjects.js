import React from 'react'
import { useSelector } from "react-redux";
import projectsData from "../../../projectsData"
import { useDispatch } from 'react-redux'
import { selectProject, cleanProject } from './../../../reducers/ProjectReducer'
import {
    Image,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
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

    const handleClose = () =>{
      dispatch(cleanProject())
    }

    return (
      <>
        <Modal isOpen={isOpen} onClose={()=>{handleClose();onClose()}} size='2xl'>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader
            as={motion.h1}
            key={project.name}
            initial={{opacity: 0,transition: { duration: .7 }}}
            animate={{opacity: 1,transition: { duration: .7 }}}
            fontSize='3em'
            fontFamily="'Cabin', sans-serif"
            w='100%'
            mt='1em'
            jusitfy='center'
            align='center'
            textAlign='center'>
              {project.name}
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <ModalBodyProjects project={project}/>
                  <Image
                  as={ArrowLeftIcon}
                  onClick={()=>dispatch(selectProject(currentIndex > 0 ? currentIndex - 1 : projectsData.length - 1))}
                  alt='left option'
                  position='absolute'
                  top='21em'
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
                  top='21em'
                  right='10px'
                  boxSize='2em'
                  _hover={{
                    cursor:'pointer'
                  }}/>
            </ModalBody>
            <ModalFooter 
            display={{base:'none',md:'flex'}}
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
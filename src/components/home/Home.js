import React from 'react' 
import Projects from './projects/Projects'
import ModalProjects from './projects/ModalProjects'
import Techs from './Techs'
import { useDisclosure } from '@chakra-ui/react'

const Home = () =>{
    const disclosure = useDisclosure();
    
    return(
        <>
        <Projects disclosure={disclosure}/>
        <ModalProjects disclosure={disclosure}/>
        <Techs/>
        </>
    )
}

export default Home
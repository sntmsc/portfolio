import React from 'react' 
import Projects from './projects/Projects'
import ModalProjects from './projects/ModalProjects'
import { useDisclosure } from '@chakra-ui/react'

const Home = () =>{
    const disclosure = useDisclosure();
    
    return(
        <>
        <Projects disclosure={disclosure}/>
        <ModalProjects disclosure={disclosure}/>
        </>
    )
}

export default Home
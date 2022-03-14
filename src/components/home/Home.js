import React from 'react' 
import Tittle from '../layout/header/Tittle'
import Projects from './projects/Projects'
import ModalProjects from './projects/ModalProjects'
import Techs from './Techs'
import { Flex, useDisclosure } from '@chakra-ui/react'

const Home = () =>{

    const disclosure = useDisclosure();

    return(
        <Flex
        direction='column'
        id='home'>
        <Tittle/>
        <Projects disclosure={disclosure}/>
        <ModalProjects disclosure={disclosure}/>
        <Techs/>
        </Flex>
    )
}

export default Home
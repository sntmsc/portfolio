import React from 'react' 
import Tittle from '../layout/header/Tittle'
import Projects from './projects/Projects'
import Techs from './Techs'
import AboutMe from './AboutMe'
import Contact from './Contact'
import { Flex, useDisclosure } from '@chakra-ui/react'

const Home = () =>{

    const disclosure = useDisclosure();

    return(
        <Flex
        direction='column'
        id='inicio'>
        <Tittle/>
        <AboutMe/>
        <Projects disclosure={disclosure}/>
        <Techs/>
        <Contact/>
        </Flex>
    )
}

export default Home
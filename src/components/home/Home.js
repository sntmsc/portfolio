import React from 'react' 
import Tittle from '../layout/header/Tittle'
import Projects from './projects/Projects'
import ModalProjects from './projects/ModalProjects'
import Techs from './Techs'
import { useDisclosure } from '@chakra-ui/react'
import { motion } from 'framer-motion'
const Home = () =>{

    const disclosure = useDisclosure();
    const variants = {
        hidden:{
            x: '-100vw',
        },
        visible: {
            x: '0',
            transition: { duration: .7 }
        },
        exit: {
            opacity: 0,
            overflow:'hidden',
            transition: {
                ease: 'easeInOut' }
        }
    }
    return(
        <motion.div
        variants={variants}
        initial='hidden'
        animate='visible'
        exit='exit'>
        <Tittle/>
        <Projects disclosure={disclosure}/>
        <ModalProjects disclosure={disclosure}/>
        <Techs/>
        </motion.div>
    )
}

export default Home
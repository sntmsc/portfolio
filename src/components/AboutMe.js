import React from 'react'
import { Flex, Box, Text, Image } from '@chakra-ui/react'
import Subtitle from '../utils/Subtitle'
import Contact from './Contact'
import { motion } from 'framer-motion'
const AboutMe = () => {

    const variants = {
        hidden:{
            x: '-100vw'
        },
        visible: {
            x: '0',
            opacity:1,
            transition: { duration: .7 }
        },
        exit: {
            opacity: 0,
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
            <Flex
            mb='5em'
            w='100%'
            direction='column'>
                <Subtitle txt='Sobre mi'/>
                <Flex
                w='100%'
                justify='center'
                align='center'>
                    <Flex
                    w={{base:'90%',md:'50%'}}
                    justify='center'
                    align='center'
                    direction={{base:'column',md:'row'}}
                    bg='#d0d0d5'
                    borderRadius='5px'
                    p='1em'>
                        <Box
                        boxSize={{base:'15em',md:'20em'}}
                        border='2px'
                        overflow='hidden'>
                        <Image
                        src='./imgs/me.jpeg'/>
                        </Box>
                        <Flex
                        w={{base:'90%',md:'50%'}}
                        ml='.5em'
                        direction='column'
                        justify='space-between'
                        align='center'
                        py='1em'
                        pl={{base: '0', md: '1em'}}>
                            <Text fontSize='5xl'
                            textAlign='center'>
                                Santiago Hamber
                            </Text>
                            <Text
                            fontFamily='Source Code Pro, monospace'
                            fontSize={{base:'1.2em',md:'1em'}}
                            textAlign='center'>
                                Soy de Necochea, tengo 29 años y estudio desarrollo web desde diciembre del 2020. Decidí especializarme en frontend (utilizando React JS). Mi método de aprendizaje se basa en la creación de proyectos y el seguimiento de múltiples contenidos informativos en función de mis necesidades. Estoy buscando mi primer empleo como Junior, no dudes en contactarme! 
                            </Text>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
            <Contact/>
        </motion.div>
    )
}

export default AboutMe
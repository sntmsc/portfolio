import React from 'react'
import { Flex, Box, Text, Image } from '@chakra-ui/react'
import Subtitle from '../../utils/Subtitle'
import { motion } from 'framer-motion'
const AboutMe = () => {

    return(
        <Flex
        id='aboutMe'
        direction='column'
        w='100%'>
            <Flex
            mb='1em'
            w='100%'
            direction='column'
            justify='center'
            align='center'>
                <Subtitle txt='Sobre mi'/>
                <Flex
                w='100%'
                justify='center'
                align='center'>
                    <Flex
                    as={motion.div}
                    key='card'
                    initial={{
                        opacity: 0,
                        scale:.8}}
                    animate={{
                        opacity: 1,
                        scale:1,
                        transition: {delay:.5, duration: .5 }}}
                    w={{base:'90%',md:'70%',lg:'50%'}}
                    justify='center'
                    align='center'
                    direction={{base:'column',md:'row'}}
                    boxShadow='black 3px 3px'
                    border='black 2px solid'
                    bg='#d0d0d5'
                    p='1em'>
                        <Box
                        boxSize={{base:'15em',md:'20em'}}
                        border='2px'
                        overflow='hidden'>
                        <Image
                        src='./imgs/me.jpg'/>
                        </Box>
                        <Flex
                        w={{base:'90%',md:'50%'}}
                        ml='.5em'
                        direction='column'
                        justify='space-between'
                        align='center'
                        py='1em'
                        pl={{base: '0', md: '1em'}}>
                            <Text
                            fontFamily='Source Code Pro, monospace'
                            fontSize={{base:'1.2em',md:'1em'}}
                            textAlign='center'>
                                ??Hola! mi nombre es Santiago, soy de Necochea y estudio desarrollo web desde diciembre del 2020. Decid?? especializarme en frontend (utilizando React JS). Mi m??todo de aprendizaje se basa en la creaci??n de proyectos y el seguimiento de m??ltiples contenidos informativos en funci??n de mis necesidades. Estoy buscando mi primer empleo como Junior, no dudes en contactarme! 
                            </Text>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default AboutMe

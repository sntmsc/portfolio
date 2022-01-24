import React from 'react'
import { Flex, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const Tittle = () => {

  const variants = {
    initial:{scale: 0},
    animate:{scale: 1,transition: { duration: 1 }}
  }
    return(
        <Flex 
        w='100%'
        h='60%' 
        direction='column'
        justify='center'
        align='center'
        mt='5em'>
          <Text
          key='santiago'
          as={motion.h1}
          variants={variants}
          initial='initial'
          animate='animate'
          fontSize='6xl'
          fontFamily='Oswald, sans-serif'
          textAlign='center'>
            Santiago Hamber
          </Text>
          <Text
          key='frontend'
          as={motion.h1}
          variants={variants}
          initial='initial'
          animate={{scale: 1,transition: { duration: 1.5 }}}
          fontSize='4xl'
          fontFamily='Oswald, sans-serif'
          color='gray.600'>
            Frontend developer
          </Text>
        </Flex>
    )
}

export default Tittle
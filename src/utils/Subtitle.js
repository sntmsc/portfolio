import React from 'react'
import { Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
const Subtitle = ({txt}) => {
    return(
        <Text
        as={motion.p}
        key='card'
        initial={{
        opacity: 0,
        scale:.8}}
        animate={{
        opacity: 1,
        scale:1,
        transition: {delay:.5, duration: .5 }}}
        fontFamily='Source Code Pro, monospace'
        fontSize='2.3em'
        textDecoration='underline'
        mt='3em'
        mb='2em'>
          {txt}
        </Text>
    )
}

export default Subtitle
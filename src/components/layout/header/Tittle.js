import React from 'react'
import { Flex, Text } from '@chakra-ui/react'

const Tittle = () => {
    return(
        <Flex 
        w='100%'
        h='60%' 
        direction='column'
        justify='center'
        align='center'>
          <Text fontSize='6xl' fontFamily='Oswald, sans-serif'>
            Santiago Hamber
          </Text>
          <Text fontSize='4xl' fontFamily='Oswald, sans-serif' color='gray.600'>
            Frontend developer
          </Text>
        </Flex>
    )
}

export default Tittle
import React from 'react'
import { Text } from '@chakra-ui/react'
const Subtitle = ({txt}) => {
    return(
        <Text
        fontFamily='Source Code Pro, monospace'
        fontSize='2em'
        textDecoration='underline'
        ml='1em'
        mt='3em'
        mb='2em'>
          {txt}
        </Text>
    )
}

export default Subtitle
import React from 'react'
import { Text } from '@chakra-ui/react'
const Subtitle = ({txt}) => {
    return(
        <Text
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
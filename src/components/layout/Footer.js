import React from 'react'
import { useSelector } from "react-redux";
import { Flex, Text } from '@chakra-ui/react'
const Footer = () => {
    const project = useSelector(state => state.project)

    const message = () => {
        if(project.footer ===''){
            return 'Gracias por tu interés en mi perfil'
        }
        return project.footer
    }

    return(
        <Flex w='100%' bg='#0a0a23' position='fixed' bottom='0em' justify='center' align='center' zIndex='2000'>
            <Text color='white' fontFamily="'Space Mono', monospace">
                 {message()}
            </Text>
        </Flex>
    )
}

export default Footer


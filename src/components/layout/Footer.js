import React from 'react'
import { useSelector } from "react-redux"
import { Flex, Text } from '@chakra-ui/react'
import { useLocation } from 'react-router-dom'

const Footer = () => {

    const project = useSelector(state => state.project)
    const location = useLocation()
    
    const message = () => {
        if(location.pathname ==='/about'){
            return '¡No dudes en contactarme!'
        }
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


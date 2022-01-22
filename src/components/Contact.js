import React from 'react'
import Subtitle from '../utils/Subtitle'
import { Flex, Box, Text, Image } from '@chakra-ui/react'

const Contact = () => {

    const CustomImg = ({dir,desc}) => {
        return(
                <Flex
                role='group'
                w='8em'
                h='5em'
                mb='5em'
                direction='column'
                justify='center'
                align='center'
                _hover={{
                    cursor:'pointer'
                }}>
                    <Image
                    src={dir}
                    alt={desc}
                    objectFit='cover'
                    boxSize={desc === 'Linkedin' ? '5.95em' : '6em'}
                    _groupHover={{boxSize:'10em'}}
                    _groupActive={{boxSize:'10em'}}/>
                    <Text
                    textAlign='center'
                    fontFamily="'Cabin', sans-serif"
                    fontSize='2em'
                    mt='.3em'>
                        {desc}
                    </Text>
                </Flex>
        )
    }
    return(
        <>
            <Subtitle txt='Contactos'/>
            <Flex
            justify='center'
            w='100%'>
                <Flex
                w='50%'
                justify='space-around'
                direction={{base:'column', md:'row'}}>
                    <CustomImg
                    dir='./imgs/contacts/linkedin.png'
                    desc={'Linkedin'}/>
                    <CustomImg
                    dir='./imgs/contacts/mail.png'
                    desc={'Mail'}/>
                    <CustomImg
                    dir='./imgs/icons/github-logo.png'
                    desc={'Github'}/>
                    
                    
                </Flex>

            </Flex>
        </>
    )
}

export default Contact
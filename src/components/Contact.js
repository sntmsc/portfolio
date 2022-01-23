import React from 'react'
import Subtitle from '../utils/Subtitle'
import { Flex, Link, Text, Image } from '@chakra-ui/react'

const Contact = () => {

    const CustomImg = ({img,desc,dir}) => {
        return(
            <Link href={dir} isExternal style={{textDecoration:'none'}}>
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
                    src={img}
                    alt={desc}
                    objectFit='cover'
                    boxSize={desc === 'Linkedin' || 'Gihtub' ? '5.95em' : '6em'}
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
            </Link>
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
                mt='2em'
                justify={{base:'center',md:'space-around'}}
                align='center'
                direction={{base:'column', md:'row'}}>
                    <CustomImg
                    img='./imgs/contacts/linkedin.png'
                    desc={'Linkedin'}
                    dir={'https://www.linkedin.com/in/santiago-hamber-526b78205/'}/>
                    <CustomImg
                    img='./imgs/contacts/mail.png'
                    desc={'Mail'}
                    dir={'mailto:santiago.hamber@gmail.com'}/>
                    <CustomImg
                    img='./imgs/icons/github-logo.png'
                    desc={'Github'}
                    dir={'https://github.com/sntmsc'}/>
                    
                    
                </Flex>

            </Flex>
        </>
    )
}

export default Contact
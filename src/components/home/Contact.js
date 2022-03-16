import React from 'react'
import Subtitle from '../../utils/Subtitle'
import { Flex, Text, Image } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const Contact = () => {

    const variants = {
        init: { scale: 1 },
        value: { scale: 1.2, transition:{duration:0.4}}
      }

  

    const CustomImg = ({img,desc,dir}) => {
        return(
            <a href={dir} target="_blank" rel="noreferrer" style={{textDecoration:'none'}} className='tap-mobile'>
                <Flex
                as={motion.div}
                  variants={variants}
                  initial="init"
                  whileTap="value"
                  whileFocus="value"
                  whileHover="value"
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
                    as={motion.img}
                    src={img}
                    alt={desc}
                    objectFit='cover'
                    boxSize={desc === 'Linkedin' || 'Gihtub' ? '5.95em' : '6em'}/>
                    <Text
                    textAlign='center'
                    fontFamily="'Cabin', sans-serif"
                    fontSize='2em'
                    mt='.3em'>
                        {desc}
                    </Text>
                </Flex>
            </a>
        )
    }
    return(
        <div id='contactos'>
            <Subtitle txt='Contactos' />
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
        </div>
    )
}

export default Contact
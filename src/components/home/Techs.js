import React from 'react'
import { Flex, Box, Text, Image } from '@chakra-ui/react'

const Techs = () => {

    const CustomImg = ({dir,desc}) => {
        return(
                <Box
                boxSize='5em'
                mb='2em'>
                    <Image
                    src={dir}
                    alt={desc}
                    mb='.5em'/>
                    <Text
                    textAlign='center'
                    fontFamily="'Cabin', sans-serif">
                        {desc}
                    </Text>
                </Box>
        )
    }
    return(
        <Flex
        justify='center'
        align='center'
        direction='column'
        w='100%'
        p='1em'>
            <Text
            textAlign='center'
            fontFamily='Source Code Pro, monospace'
            fontSize='2em'
            mt='3em'>
            Algunas de las tecnologías utilizadas
            </Text>
            <Flex
            w={{base:'80%',sm:'60%',md:'50%'}}
            direction='column'
            justify='center'
            align='center'
            mt='4em'
            p='2em'
            bg='#d0d0d5'
            borderRadius={'5px'}
            mb='5em'>
                <Flex 
                wrap='wrap'
                w='100%'
                justify='center'
                align='center'
                justify='space-around'>
                        <CustomImg dir='./imgs/techs/html/html.png' desc='HTML' />
                        <CustomImg dir='./imgs/techs/css/css.png' desc='CSS' />
                        <CustomImg dir='./imgs/techs/js/js.png' desc='Javascrip' />
                        <CustomImg dir='./imgs/techs/react/react.png' desc='React' />
                </Flex>
                <Flex 
                justify='center'
                align='center'
                wrap='wrap'
                w='100%'
                justify='space-around'
                mt='1em'>
                        <CustomImg dir='./imgs/techs/chakra/chakra.png' desc='Chakra' />
                        <CustomImg dir='./imgs/techs/bootstrap/bootstrap.png' desc='Bootstrap' />
                        <CustomImg dir='./imgs/techs/redux/redux.png' desc='Redux' />
                        <CustomImg dir='./imgs/techs/firebase/firebase.png' desc='Firebase' />
                </Flex>
            </Flex>
        </Flex>
    )
}

export default Techs
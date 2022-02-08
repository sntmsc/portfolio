import React from 'react'
import { motion } from 'framer-motion';
import {
    Image,
    Box,
    Flex,
    HStack,
    Text,
    Link
  } from '@chakra-ui/react'

  const ModalBodyProjects = ({project,maxH800, minW800}) => {

    const variants = {
      hidden:{
          opacity:0 ,
          transition: { duration: .7 }
      },
      visible: {
          opacity: 1,
          transition: { duration: .7 }
      },
  }


  return(
          <Flex
          as={motion.div}
          key={project.name}
          position='relative'
          justify='center'
          align='center'
          direction='column'
          variants={variants}
          initial='hidden'
          animate='visible'
          exit='exit'>
            <HStack
            spacing='29px'
            mb='1em'>
              <Link href={project.github} isExternal>
                <Flex
                direction='column'
                justify='center'
                align='center'>
                  <Box
                  boxSize='35px'>
                    <Image
                    src='./imgs/icons/github-logo.png'
                    alt='Github'
                    objectFit='cover'/>
                  </Box>
                  <Text
                  fontFamily="'Space Mono', monospace">
                    Github
                  </Text>
                </Flex>
              </Link>
              <Link href={project.website} isExternal>
                <Flex
                direction='column'
                justify='center'
                align='center'>
                  <Box
                  boxSize='40px'>
                    <Image
                    src='./imgs/icons/internet.png'
                    alt='website'
                    objectFit='cover'
                    position='relative'
                    top='3px'/>
                  </Box>
                  <Text
                  fontFamily="'Space Mono', monospace" position='relative' bottom='2.3px'>
                    App
                  </Text>
                </Flex>
              </Link>
            </HStack>
              <Flex
              direction={maxH800 && minW800 ? 'row' : 'column'}
              align='center'
              w='80%'>
                <Image 
                src={project.img}
                alt={project.name}
                objectFit='cover'
                boxSize='15em'
                borderRadius={maxH800 && minW800 ? '15px' : '0'}
                mb='1em'
                boxShadow='dark-lg'/>
                <Flex
                visibility={maxH800 && minW800 ? 'hidden' : 'visible'}
                justify='center'
                w={maxH800 && minW800 ? '70%' : '100%'}
                bg='#9c8e8e'
                p='2px'
                border='2px'
                mb='1em'>
                  <Text
                  visibility='visible'
                  bg='#e1e1e1'
                  p='1em'
                  borderRadius='15px'
                  fontFamily="'Cabin', sans-serif"
                  h={maxH800 && minW800 ? '15em' : {base:'10em',md:'8em'}}
                  w={maxH800 && minW800 ? '15em' : ''}
                  ml={maxH800 && minW800 ? '.5em' : '0'}
                  boxShadow={maxH800 && minW800 ? 'dark-lg' : ''}
                  textAlign='center'
                  justify='center'>
                    {project.desc}
                  </Text>
              </Flex>
            </Flex>
          </Flex>
    )
  }

  export default ModalBodyProjects
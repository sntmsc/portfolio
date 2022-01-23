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

  const ModalBodyProjects = ({project}) => {

    const variants = {
      hidden:{
          opacity: 0,
      },
      visible: {
          opacity: 1,
          transition: { duration: .7 }
      },
      exit: {
          opacity:0,
          transition: { duration: .1 }
      }
  }

    return(
          <Flex
          as={motion.div}
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
              <Image 
              src={project.img}
              alt={project.name}
              objectFit='cover'
              boxSize='15em'
              mb='1em'
              boxShadow='dark-lg'/>
            <Flex
            justify='center'
            w='70%'
            bg='#9c8e8e'
            p='2px'
            border='2px'
            mb='1em'>
              <Text
              bg='#e1e1e1'
              p='1em'
              borderRadius='15px'
              fontFamily="'Cabin', sans-serif"
              h={{base:'12em',md:'8em'}}>
                {project.desc}
              </Text>
            </Flex>
          </Flex>
    )
  }

  export default ModalBodyProjects
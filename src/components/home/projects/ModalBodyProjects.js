import React from 'react'
import { motion } from 'framer-motion';
import {
    Image,
    Box,
    Flex,
    Text,
    Link
  } from '@chakra-ui/react'

  const ModalBodyProjects = ({project, minW800}) => {

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
          w='100%'
          as={motion.div}
          key={project.name}
          position='relative'
          align='center'
          direction='column'
          variants={variants}
          initial='hidden'
          animate='visible'
          exit='exit'>
            <Flex
            justify='center'
            align='center'
            gridGap={10}
            mb='1em'>
              <Link href={project.github} isExternal display='flex' mr='1em'>
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
                position='relative'
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
            </Flex>
              <Flex
              spacing='29px'
              flexDirection={minW800 ? 'row' : 'column'}
              align='center'
              justify='space-around'
              w='100%'>
                <Image 
                src={project.img}
                alt={project.name}
                objectFit='cover'
                boxSize='15em'
                borderRadius={minW800 ? '15px' : '0'}
                boxShadow='dark-lg'/>
                <Flex
                visibility={minW800 ? 'hidden' : 'visible'}
                justify='center'
                align='center'
                mt={minW800 ? '0' : '.5em'}
                bg='#9c8e8e'
                p='2px'
                border='2px'>
                  <Flex
                    align='center'
                    visibility='visible'
                    bg='#e1e1e1'
                    p='1em'
                    borderRadius='15px'
                    h={minW800 ? '15em' : {base:'10em',md:'8em'}}
                    w={minW800 ? '15em' : ''}
                    boxShadow={minW800 ? 'dark-lg' : ''}
                    justify='center'
                  >
                    <Text
                    userSelect = 'none'
                    fontFamily="'Cabin', sans-serif"
                    textAlign='center'
                    fontWeight='600'>
                      {project.desc}
                    </Text>
                  </Flex>
              </Flex>
            </Flex>
          </Flex>
    )
  }

  export default ModalBodyProjects
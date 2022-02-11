import React from 'react'
import { useDispatch } from 'react-redux'
import { selectProject } from './../../../reducers/ProjectReducer'
import {  Flex, Text, Image  } from '@chakra-ui/react'
import { motion } from 'framer-motion'

      const CardProject = ({name,tags,index,img,disclosure}) => {

        const variants = {
          init: { scale: 1 },
          value: { scale: 1.2, transition:{duration:0.3}}
        }
  
        const {onOpen} = disclosure;
        const dispatch = useDispatch();
        const projectFocus = (i) => {
          dispatch(selectProject(i))
        }
        return(
          <Flex
          as={motion.div}
          variants={variants}
          initial='init'
          whileTap="value"
          whileFocus="value"
          whileHover="value"
          onClick={()=>{projectFocus(index);onOpen()}}
          flexDirection='column'
          justify='center'
          position='relative'
          align='center'
          w='10em'
          h='15em'
          _hover={{cursor:'pointer'}}>
            <Image
                  boxSize='8em'
                  borderRadius={index%2===0 ? '50%' : '0'}
                  border='1px solid black'
                  borderColor='rgba(0,0,0,0.2)'
                  mb='1em'
                  src={img}
                  alt='project'
                  boxShadow=' 0 0 0 2px black'
                  objectFit='cover'/>
            <Text 
            fontFamily="'Cabin', sans-serif"
            fontSize='1.5em'
            textAlign='center'>
              {name}
            </Text>
            <Text
            fontFamily="'Cabin', sans-serif">
              {tags.map((x)=>`#${x}`).join(' ')}
            </Text>
          </Flex>
        )
      }

      export default CardProject
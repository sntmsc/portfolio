import React from 'react'
import { useDispatch } from 'react-redux'
import { selectProject } from './../../../reducers/ProjectReducer'
import {  Flex, Text, Image  } from '@chakra-ui/react'

      const CardProject = ({name,tags,index,img,disclosure}) => {
        const {onOpen} = disclosure;
        const dispatch = useDispatch();
        const projectFocus = (i) => {
          dispatch(selectProject(i))
        }
        return(
          <Flex
          onClick={()=>{projectFocus(index);onOpen()}}
          role='group'
          flexDirection='column'
          justify='center'
          position='relative'
          align='center'
          width='10em'
          height='15em'
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
                  objectFit='cover'
                  _groupHover={{boxSize:'10em'}}
                  _groupActive={{boxSize:'10em'}}/>
                  
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
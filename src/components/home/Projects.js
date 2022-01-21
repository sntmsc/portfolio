import React from 'react'
import { Box, Stack , Flex, Text, Image  } from '@chakra-ui/react';
import projectsData from '../../projectsData';
import { useDispatch } from 'react-redux';
import { selectProject } from '../../reducers/ProjectReducer';
const Projects = ({setOpen}) => {
      const CardProject = ({name,tags,index,img}) => {
        const dispatch = useDispatch();
        return(
          <Flex
          onClick={()=>dispatch(selectProject(index))}
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
    return(
      <Box 
      marginTop='5em'>
        <Text
        fontFamily='Source Code Pro, monospace'
        fontSize='2em'
        marginLeft='1em'
        textDecoration='underline'>
          Proyectos
        </Text>
        <Flex
        width='100%'
        marginTop='2em'
        justifyContent='center'
        alignItems='center'>
          <Stack
          border={{base:'0',md:'1px'}}
          borderRadius='15px'
          direction={{base:'column',md:'row'}}
          spacing={{base:'27',md:'31'}}
          justify='center'
          align='center'
          flexWrap='wrap'
          w={{base:'100%',md:'80%'}}
          p='2em'>
            {projectsData.map((x,i) => 
                <CardProject 
                key={i}
                name={x.name}
                tags={x.tags}
                img={x.img}
                index={i}
                setOpen={setOpen}
                />
            )}
          </Stack>
        </Flex>
      </Box>
    )
  }
  export default Projects 
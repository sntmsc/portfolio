import React from 'react'
import { Box, Stack , Flex, Text  } from '@chakra-ui/react';
import projectsData from '../../../projectsData';
import CardProject from './CardProject';

const Projects = ({disclosure}) => {

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
                disclosure={disclosure}
                />
            )}
          </Stack>
        </Flex>
      </Box>
    )
  }
  export default Projects 
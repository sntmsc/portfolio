import React from 'react'
import './App.css'
import Menu from './components/header/Menu';
import Tittle from './components/header/Tittle';
import { Box, Stack , Flex, Text, Image } from '@chakra-ui/react';

const Projects = () => {
  const projects = [{name:'Memotest',tags:['juego'],img:'./imgs/projects/memotest.png'},
                    {name:'To-do List',tags:['oficina'],img:'./imgs/projects/to-do-list.png'},
                    {name:'SuperHero',tags:['juego','info'],img:'./imgs/projects/superhero.png'},
                    {name:'Cretona Web',tags:['e-commerce'],img:'./imgs/projects/cretona.png'},
                    {name:'Paises', tags:['info'],img:'./imgs/projects/paises.png'}]

    const CardProject = ({name,tags,index,img}) => {
      return(
        <Flex
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
          fontFamily="'Cabin', sans-serif;"
          fontSize='1.5em'
          textAlign='center'>
            {name}
          </Text>
          <Text>
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
          {projects.map((x,i) => 
              <CardProject 
              name={x.name}
              tags={x.tags}
              img={x.img}
              index={i}
              />
          )}
        </Stack>
      </Flex>
    </Box>
  )
}

function App() {
  return (
    <div>
      <Menu/>
      <Tittle/>
      <Projects/>
    </div>
  );
}

export default App;

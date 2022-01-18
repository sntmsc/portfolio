import React from 'react'
import './App.css'
import Menu from './components/header/Menu';
import Tittle from './components/header/Tittle';
import { Box, Stack , Flex, Text, Image } from '@chakra-ui/react'

const Projects = () => {

    const CardProject = ({name,tag}) => {
      return(
        <Flex 
        flexDirection='column'
        justify='center'
        align='center'>
          <Image
            borderRadius='full'
            boxSize='150px'
            src='https://bit.ly/dan-abramov'
            alt='Dan Abramov'
          />
          <Text 
          fontFamily="'Cabin', sans-serif;"
          fontSize='1.5em'
          textAlign='center'>
            {name}
          </Text>
          <Text>
            #{tag}
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
        backgroundColor='red'
        direction={{base:'column',md:'row'}}
        spacing={{base:'27',md:'31'}}
        justify='center'
        align='center'
        w={{base:'100%',md:'80%'}}
        p='2em'>
          <CardProject name={'Memotest'} tag={'juego'}/>
          <CardProject name={'to-do list'} tag={'oficina'}/>
          <CardProject name={'SuperHero'} tag={'marvel'}/>
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

import React from 'react'
import './App.css'
import Menu from './components/header/Menu';
import Tittle from './components/header/Tittle';
import { Box, HStack , Flex, Text, Image } from '@chakra-ui/react'

const Projects = () => {
  return(
    <Box marginTop='5em'>
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
        <HStack
        backgroundColor='red'
        spacing='25px'
        flexDirection='row'
        p='2em'>
          <Image
          borderRadius='full'
          boxSize='150px'
          src='https://bit.ly/dan-abramov'
          alt='Dan Abramov'
        />
                  <Image
          borderRadius='full'
          boxSize='150px'
          src='https://bit.ly/dan-abramov'
          alt='Dan Abramov'
        />
                  <Image
          borderRadius='full'
          boxSize='150px'
          src='https://bit.ly/dan-abramov'
          alt='Dan Abramov'
        />
        </HStack>
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

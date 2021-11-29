import React from 'react'
import './App.css'
import { Box, Flex, Text } from '@chakra-ui/react'

function App() {
  return (
    <Flex className="App" 
    w='100%' 
    h='100%' 
    bg='red'
    align='center'>
      <Flex 
      w='100%'
      h='40%' 
      direction='column'
      justify='center'
      align='center'
      bg='green'>
        <Text fontSize='6xl' fontFamily='Oswald, sans-serif'>
          Santiago Hamber
        </Text>
        <Text fontSize='4xl' fontFamily='Oswald, sans-serif' color='gray.600'>
          Frontend developer
        </Text>
      </Flex>
   
    </Flex>
  );
}

export default App;

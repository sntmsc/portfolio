import React from 'react'
import './App.css'
import { Flex, Text} from '@chakra-ui/react'

function App() {
  return (
    <div className="App">
      <Flex 
      w='100' 
      direction='column'>
        <Text fontSize='5xl'>
          Santiago Hamber
        </Text>
        <Text fontSize='3xl'>
          Frontend developer
        </Text>
      </Flex>
    </div>
  );
}

export default App;

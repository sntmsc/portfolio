import React from 'react'
import './App.css'
import { Stack , Flex, Text } from '@chakra-ui/react'

const Menu = () => {
  const CustomText = ({children}) => {
    return(
      <Text
      fontSize='xl'
      fontFamily='Source Code Pro, monospace'
      fontWeight='bold'>
        {children}
      </Text>
    )
  }
return(
    <Stack
    bg='red'
    w='100%'
    h='3em'
    direction='row'
    justify='end'
    align='center'
    spacing='1em'
    pr='1em'>
      <CustomText>
        Home 
      </CustomText>
      <CustomText>
        Sobre mi 
      </CustomText>
      <CustomText>
        Contactos
      </CustomText>
    </Stack>
  )
}

function App() {
  return (
    <Flex className="App" 
    w='100%' 
    h='100%' 
    align='center'
    direction='column'>
     <Menu/>
      <Flex 
      w='100%'
      h='60%' 
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

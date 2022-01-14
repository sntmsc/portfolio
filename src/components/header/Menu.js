import React from 'react'
import { Stack , Text } from '@chakra-ui/react'

const Menu = () => {
    const CustomText = ({children}) => {
      return(
        <Text
        fontSize='xl'
        fontFamily='Source Code Pro, monospace'
        fontWeight='bold'
        cursor='pointer'
        _hover={{
            textDecoration:'underline'
        }}>
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


export default Menu
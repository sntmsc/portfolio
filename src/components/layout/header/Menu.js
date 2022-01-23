import React from 'react'
import { Stack , Text } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
import './Menu.css'
const Menu = () => {
    const CustomText = ({children,link}) => {

      return(
          <Text
          fontSize='xl'
          fontFamily='Source Code Pro, monospace'
          fontWeight='bold'
          cursor='pointer'
          _hover={{
              textDecoration:'underline'
          }}>
            <NavLink to={link}>
              {children}
            </NavLink>
          </Text>
      )
    }
  return(
      <Stack
      position='fixed'
      top='0em'
      zIndex='500'
      bg='#e1e1e1'
      boxShadow='0 4px 2px -2px '
      w='100%'
      h='3em'
      direction='row'
      justify='end'
      align='center'
      spacing='1em'
      pr='1em'>
          <CustomText link='/'>
            Home
          </CustomText>
          <CustomText link='/about'>
            Sobre mi/Contactos
          </CustomText>
      </Stack>
    )
  }


export default Menu
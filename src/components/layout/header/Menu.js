import React from 'react'
import { Stack , Text, Link } from '@chakra-ui/react'
import './Menu.css'

const CustomText = ({children,link}) => {
    
  return(
      <Text
      className='tap-mobile'
      fontSize={{base:'1em',md:'xl'}}
      fontFamily='Source Code Pro, monospace'
      fontWeight='bold'
      cursor='pointer'
      _hover={{
          textDecoration:'underline'
      }}>
        <Link
        href={link}
        _focus={{
          outline:'none'
        }}
        textDecoration='none'
        userSelect='none'>
          {children}
        </Link>
      </Text>
  )
}

const Menu = () => {

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
          <CustomText link='#aboutMe'>
            Sobre mi
          </CustomText>
          <CustomText link='#proyectos'>
            Proyectos
          </CustomText>
          <CustomText link='#contactos'>
            Contactos
          </CustomText>
      </Stack>
    )
  }


export default Menu
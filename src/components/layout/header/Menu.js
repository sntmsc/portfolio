import {useState} from 'react'
import { Stack , Text, Link } from '@chakra-ui/react'
import './Menu.css'

const CustomText = ({children,link, selected, setSelected}) => {
    
  return(
      <Text
      className='tap-mobile'
      onClick={()=>setSelected(children)}
      fontSize='xl'
      fontFamily='Source Code Pro, monospace'
      fontWeight='bold'
      cursor='pointer'
      textDecoration={selected === children ? 'underline' : 'none'}
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
const [selectedSection, setSelectedSection] = useState('');
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
          <CustomText link='#home'
          selected={selectedSection}
          setSelected={(s)=>setSelectedSection(s)}>
            Home
          </CustomText>
          <CustomText link='#aboutMe'
          selected={selectedSection}
          setSelected={(s)=>setSelectedSection(s)}>
            Sobre mi/Contactos
          </CustomText>
      </Stack>
    )
  }


export default Menu
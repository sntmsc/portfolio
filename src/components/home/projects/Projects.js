import {useState} from 'react'
import { Box, Text , Flex } from '@chakra-ui/react';
import projectsData from '../../../projectsData';
import Subtitle from '../../../utils/Subtitle';
import CardProject from './CardProject';
const Projects = () => {
  const [showMore, setShowMore] = useState(false);
    return(
      <Flex 
      id='proyectos'
      marginTop='5em'
      direction='column'
      align='center'
      justify='center'>
        <Subtitle txt='Proyectos'/>
        <Flex
        width='100%'
        justifyContent='center'
        alignItems='center'
        direction='column'>
          <Box
          direction={{base:'column',md:'row'}}
          spacing={{base:'27',md:'31'}}
          display='grid'
          gridTemplateColumns={'repeat(auto-fill, minmax(300px, 1fr));'}
          maxW= '1000px'
          gridGap='20px'
          alignItems='stretch'
          w={{base:'100%',md:'80%'}}>

            {showMore ? 
                projectsData.map((x,i) => 
                    
                <CardProject
                i={i}
                name={x.name}
                desc={x.desc}
                tags={x.tags}
                img={x.img}
                app={x.website}
                github={x.github}/>) :
                
                projectsData.filter((x,i)=> i < 3).map((x,i)=>
                <CardProject
                i={i}
                name={x.name}
                desc={x.desc}
                tags={x.tags}
                img={x.img}
                app={x.website}
                github={x.github}/>)}
          </Box>
          <Text
          className='tap-mobile'
          as='a'
          mt='1em'
          _active={{bg:'#d0d0d5'}}
          cursor='pointer'
          border='1px solid'
          userSelect='none'
          p='.5em'
          borderRadius='5px'
          boxShadow='lg'
          fontSize='1.5em'
          fontFamily='Source Code Pro, monospace'
          href='#proyectos'
          onClick={()=>{setShowMore(!showMore)}}>
            {showMore ? '...mostrar menos' : 'mostrar más...'}
          </Text>
        </Flex>
      </Flex>
    )
  }
  export default Projects 
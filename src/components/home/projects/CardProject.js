import {
    Image,
    Heading,
    Flex,
    Box,
    Center,
    Text,
    Stack,
    Button,
    Badge,
  } from '@chakra-ui/react';
  
  const CardProject = ({name,desc,tags,img,app,github}) => {
    return (
      <Center
      py={6}>
        <Box
          maxW='320px'
          w='full'
          bg='white'
          boxShadow='black 3px 3px'
          border='2px solid black'
          rounded='lg'
          textAlign='center'>
        <Image
        h='150px'
        w='full'
        src={img}
        
        objectFit={'cover'}
        />
        <Flex
        direction='column'
        p={6}>
            <Heading
            fontSize={'2em'}
            fontFamily='Oswald, sans-serif'
            fontWeight='500'
            mb='1em'>
                {name}
            </Heading>
            <Flex
            h='6em'
            align='center'>
            <Text
                textAlign='center'
                fontFamily="'Cabin', sans-serif"
                color='gray.700'
                px={3}
                >
                  {desc}
            </Text>
            </Flex>
    
            <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
              {tags.map((x,index)=>
                <Badge
                key={index}
                px={2}
                py={1}
                bg='gray.50'
                fontWeight={'400'}>
                {`#${x}`}
                </Badge>
                )}
                
            </Stack>
    
            <Stack mt={8} direction={'row'} spacing={4}>
                <Button
                as='a'
                target='_blank'
                href={app}
                alt={name}
                className='tap-mobile'
                flex={1}
                fontSize={'1em'}
                fontFamily='Source Code Pro, monospace'
                rounded={'full'}
                _focus={{
                    bg: 'gray.200',
                }}>
                App
                </Button>
                <Button
                as='a'
                target='_blank'
                href={github}
                className='tap-mobile'
                flex={1}
                fontSize={'1em'}
                fontFamily='Source Code Pro, monospace'
                rounded={'full'}
                bg={'gray.400'}
                color={'black'}
                _hover={{
                    bg: 'gray.500',
                }}
                _focus={{
                    bg: 'gray.500',
                }}>
                Github
                </Button>
            </Stack>
          </Flex>
        </Box>
      </Center>
    );
  }

  export default CardProject
import {
    Image,
    Heading,
    Flex,
    Box,
    Center,
    Text,
    Stack,
    Button,
    Link,
    Badge,
    useColorModeValue,
  } from '@chakra-ui/react';
  
  const CardProject2 = () => {
    return (
      <Center py={6}>
        <Box
          maxW='320px'
          w='full'
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow='lg'
          rounded='lg'
          textAlign='center'>
        <Image
        h='150px'
        w='full'
        src='./imgs/projects/cretona-socks.jpg'
        
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
                Cretona Web
            </Heading>
            <Text
                textAlign={'center'}
                fontFamily="'Cabin', sans-serif"
                color={useColorModeValue('gray.700', 'gray.400')}
                px={3}>
                E-commerce diseñado para un emprendimiento. Diseño en CSS. Migración de HTML a React. Pseudo-backend con react-papaparse y Google sheets.
            </Text>
    
            <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
                <Badge
                px={2}
                py={1}
                bg={useColorModeValue('gray.50', 'gray.800')}
                fontWeight={'400'}>
                #ecommerce
                </Badge>
                <Badge
                px={2}
                py={1}
                bg={useColorModeValue('gray.50', 'gray.800')}
                fontWeight={'400'}>
                #socks
                </Badge>
            </Stack>
    
            <Stack mt={8} direction={'row'} spacing={4}>
                <Button
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

  export default CardProject2
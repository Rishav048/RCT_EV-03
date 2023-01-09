import React from 'react';
import Link from 'next/link';
import {
    Heading,
    Avatar,
    Box,
    Center,
    Text,
    Stack,
    Button,
    Badge,
    useColorModeValue,
  } from '@chakra-ui/react';
  
  export default function GitintoCard({data}) {
    const {name,followers,following,avatar_url,login,bio} = data

    return (
      <Center py={6}>
        <Box
          maxW={'320px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'2xl'}
          rounded={'lg'}
          p={6}
          textAlign={'center'}>
          <Avatar
            size={'xl'}
            src={
                avatar_url
            }
            alt={'Avatar Alt'}
            mb={4}
            pos={'relative'}
            _after={{
              content: '""',
              w: 4,
              h: 4,
              bg: 'green.300',
              border: '2px solid white',
              rounded: 'full',
              pos: 'absolute',
              bottom: 0,
              right: 3,
            }}
          />
          <Heading fontSize={'2xl'} fontFamily={'body'}>
            {name}
          </Heading>
          <Text fontWeight={600} color={'gray.500'} mb={4}>
            @{login}
          </Text>
          <Text
            textAlign={'center'}
            color={useColorModeValue('gray.700', 'gray.400')}
            px={3}>
            {bio}
          </Text>
  
          <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
          </Stack>
          <Text>Followers : {followers}</Text>
          <br />
          <Text>Following : {following}</Text>
  
          <Stack mt={8} direction={'row'} spacing={4}>

              
            <Button
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              _focus={{
                bg: 'gray.200',
              }}>
              <Link href={'https://drive.google.com/file/d/19-zdgD5fW1qK92wTNfr19QYR4vV3StG5/view?usp=share_link'} >Resume</Link>
            </Button>
            <Button
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              bg={'blue.400'}
              color={'white'}
              boxShadow={
                '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
              }
              _hover={{
                bg: 'blue.500',
              }}
              _focus={{
                bg: 'blue.500',
              }}>
               <Link href={'https://github.com/Rishav048'} >Follow</Link>
            </Button>
          </Stack>
        </Box>
      </Center>
    );
  }
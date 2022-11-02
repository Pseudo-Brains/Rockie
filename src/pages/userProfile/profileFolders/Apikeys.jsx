import React, { useState } from 'react';
import { Box, Button, Flex, FormControl, FormLabel, Heading, HStack, Input, Text } from '@chakra-ui/react';

import { FaEnvelope } from 'react-icons/fa';

export default function Apikeys() {

  return (
    <Box px="50px">
      <Text 
        fontSize={['1xl','1xl','2xl']} 
        fontWeight='bold' 
        fontFamily='sans-serif'
        mb="15px"
        >
          Enable API access on your account to generate keys.
      </Text>

      <Flex gap='10px'>
        <Heading 
          as="h2" 
          fontFamily='sans-serif'
          mb="10px">
          API Access is 
        </Heading>
        <Heading color='red.600'>
          Disabled
        </Heading>
      </Flex>

      <Flex align='center' gap='4px'>
        <FaEnvelope color='gray' />
        <Text 
          fontSize='17px' 
          fontFamily='sans-serif'
          fontWeight='bold' 
          color='white'>
            Petersonkenn@Demo.Com
        </Text>
      </Flex>

      <Box 
        mt='50px' 
        bg='gray.900' 
        p={['50px 25px','50px 25px','50px']}
        borderRadius='10px'
        w='100%'>

        <Text 
          fontSize='2xl' 
          fontWeight='bold' 
          fontFamily='sans-serif'>
            Enable API keys
        </Text>

        <Text
          fontSize='15px' 
          fontFamily='sans-serif' 
          color='gray.300'>
          Enter Your Password And 2FA Code To Enable The API Keys.
        </Text>

        <FormControl mt='20px'>
          <HStack spacing='15px'>
            <Box>
              <FormLabel fontFamily='sans-serif' fontWeight='bold'>Your Password</FormLabel>
              <Input 
                placeholder='Your Password'
                type="text" 
                w='100%' 
                h='50px'
                bg='gray.800'
                border='none'
              />
            </Box>

            <Box>
              <FormLabel fontFamily='sans-serif' fontWeight='bold'>2FA Code</FormLabel>
              <Input
                placeholder='2FA code' 
                type="text" 
                w='100%'
                h='50px' 
                bg='gray.800'
                border='none'
              />
            </Box>
          </HStack>

        <Button 
          borderRadius='full'
          w={['50%','50%','30%']}
          h='50px'
          mt='20px'
          bg='#3772FF'
        >
        <Text fontFamily='sans-serif' fontSize={["10px","10px","10px"]} >Enable API Keys</Text>
        </Button>
      </FormControl>
      </Box>
    </Box>

  )
}


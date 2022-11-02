import React, { useState } from 'react';
import { Box, Button, Flex, FormControl, FormLabel, Heading, HStack, Input, Text } from '@chakra-ui/react';

import { FaEnvelope } from 'react-icons/fa';

export default function Twofactor() {

  return (
    <Box px="50px">
      <Flex gap='10px'>
        <Heading 
          as="h2" 
          fontFamily='sans-serif'
          mb="10px">
          2FA 
        </Heading>
        <Heading color='red.600'>
          Enabled
        </Heading>
      </Flex>

      <Text
        fontSize='15px' 
        fontFamily='sans-serif' 
        color='gray.300'>
          If You Want To Turn Off 2FA, Input Your Account Password And The Six-Digit Code Provided By The Google Authenticator App Below, Then Click "Disable 2FA".
      </Text>


      <Box 
        mt='50px' 
        bg='gray.900' 
        // p='50px'
        p={['50px 25px','50px 25px','50px']}
        borderRadius='10px'>

        <Text 
          fontSize='2xl' 
          fontWeight='bold' 
          fontFamily='sans-serif'>
            Disable 2FA
        </Text>

        <Text
          fontSize='15px' 
          fontFamily='sans-serif' 
          color='gray.300'>
          Enter Your Password And 2FA Code To Disable The 2FA Verification
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
        <Text fontFamily='sans-serif'fontSize={["10px","10px","10px"]} >Disable 2FA verification</Text>
        </Button>
      </FormControl>
      </Box>
    </Box>

  )
}



import React, { useState } from 'react';
import { Box, Button, Flex, FormControl, FormLabel, Heading, HStack, Input, Text } from '@chakra-ui/react';

export default function Referrals() {
  const [account, setAccount] = useState('https://accounts.rockie.com/login');
  const [code, setCode] = useState('N84CRDKK');
  return (
    <Box px="50px">
      <Text 
        fontSize='2xl' 
        fontWeight='bold' 
        fontFamily='sans-serif'>
          Total rewards
      </Text>

      <Flex gap='10px'>
        <Heading 
          as="h2" 
          fontFamily='sans-serif'
          mb="10px">
          $1,056.00
        </Heading>
        <Heading color='green.400'>
          USD
        </Heading>
      </Flex>

      <Text 
        fontSize='15px' 
        fontFamily='sans-serif' 
        color='gray.300'>
          You're Earning 20% Of The Trading Fees Your Referrals Pay. Learn More.
      </Text>

      <Box 
        mt='50px' 
        bg='gray.900' 
        p='50px'
        borderRadius='10px'
        w='100%'>
        <Text 
          fontSize='2xl' 
          fontWeight='bold' 
          fontFamily='sans-serif'>
            Invite friends to earn 20%
        </Text>

        <FormControl mt='20px'>
          <HStack spacing='15px'>
            <Box>
              <FormLabel fontFamily='sans-serif' fontWeight='bold'>Referral Link</FormLabel>
              <Input 
                type="text" 
                w='100%' 
                h='50px'
                bg='gray.800'
                border='none'
                value={account}
              />
            </Box>

            <Box>
              <FormLabel fontFamily='sans-serif' fontWeight='bold'>Referral Code</FormLabel>
              <Input 
                type="text" 
                w='100%'
                h='50px' 
                bg='gray.800'
                border='none'
                value={code}
              />
            </Box>
          </HStack>
        </FormControl>
      </Box>

      <Button 
        borderRadius='full'
        w='30%'
        h='50px'
        mt='20px'
        bg='#3772FF'
        >
        <Text fontFamily='sans-serif'>Wallet</Text>
      </Button>
    </Box>

  )
}

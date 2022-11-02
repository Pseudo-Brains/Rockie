import { useState } from 'react';
import { Box, Button, Flex, FormControl, FormLabel, Heading, HStack, Input, Select, Stack, Text } from '@chakra-ui/react';
import { FaToggleOn } from 'react-icons/fa';

export default function Userprofile() {
  const [oldPassword, setOldPassword] = useState('1234567890');

  return (
    <Box px="50px" mt="20px" w="100%" >
      <Heading 
        as="h1" 
        fontFamily='sans-serif'
        mb="10px">
        Change Password
      </Heading>
      <Text 
        fontSize='2xl' 
        fontWeight='bold' 
        fontFamily='sans-serif'>
          New Password
      </Text>

      <FormControl mt='40px'>
        <HStack display="Flex" gap="20px 0px" flexDirection={["column","column","row"]} mb='20px' w="100%">
          <Box w="100%"> 
            <FormLabel fontFamily='sans-serif' fontWeight='medium' color='gray.400'>Old Password*:</FormLabel>
            <Input 
              type="text" 
              w='100%' 
              h='50px'
              bg='gray.900'
              border='none'
              value={oldPassword}
            />
          </Box>

          <Box w="100%">
          <FormLabel fontFamily='sans-serif' fontWeight='medium' color='gray.400'>2FA Code*:</FormLabel>
            <Input 
              type="text" 
              w='100%'
              h='50px' 
              bg='gray.900'
              border='none'
            />
          </Box>
        </HStack>

        <HStack display="Flex" gap="20px 0px" flexDirection={["column","column","row"]} mb='20px' w="100%">
          <Box w="100%">
            <FormLabel fontFamily='sans-serif' fontWeight='medium' color='gray.400'>New Password*:</FormLabel>
            <Input
              placeholder='New Password' 
              type="text" 
              w='100%' 
              h='50px'
              bg='gray.900'
              border='none'
            />
          </Box>

          <Box w="100%">
            <FormLabel fontFamily='sans-serif' fontWeight='medium' color='gray.400'>Confirm New Password*:</FormLabel>
            <Input
              placeholder='Confirm New Password' 
              type="text" 
              w='100%'
              h='50px' 
              bg='gray.900'
              border='none'
            />
          </Box>
        </HStack>

        <Button 
          borderRadius='full'
          w='30%'
          h='50px'
          mt='20px'
          bg='#3772FF'
        >
        <Text fontFamily='sans-serif'>Change Password</Text>
        </Button>
      </FormControl>
    </Box>
  )
 }

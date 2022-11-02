import React from 'react';
import { Box, Flex, FormControl, FormLabel, Input, Text } from '@chakra-ui/react';

export default function Email() {
  return (
    <Box textAlign='center'>
        <FormControl>
            <Box mt={['25px','25px','15px']}>
                <FormLabel 
                    fontFamily='sans-serif' 
                    fontWeight='bold' 
                    color='gray.400' 
                    fontSize='2xl'
                    mx={['0px','0px','350px']}
                    
                    >
                        Email/ID
                </FormLabel>
                <Input
                    color='black' 
                    type='text'
                    w={['100%','100%','50%']}
                    bg='white'
                    h='50px'
                    placeholder=' Please enter your email'
                    _placeholder={{ color: 'black' }}
                />
            </Box>

            <Box mt={['25px','25px','15px']}>
                <FormLabel 
                    fontFamily='sans-serif' 
                    fontWeight='bold' 
                    color='gray.400' 
                    fontSize='2xl'
                    mx={['0px','0px','350px']}
                    >
                        Password
                </FormLabel>
                <Input 
                    type='text'
                    w={['100%','100%','50%']}
                    bg='white'
                    h='50px'
                    placeholder=' Please enter your password'
                    _placeholder={{ color: 'black' }}
                />
            </Box>

            <Box 
                as='div'
                mx='auto'
                mt={['20px','20px','10px']}>
                <Flex justify={['space-between','space-between','center']} gap={['0px','0px','400px']}>
                   <Flex align='center' gap='5px'>
                        <Input 
                            type='checkbox' 
                            w='5px'
                            h='25px' 
                        />
                        <Text 
                            fontFamily='sans-serif' 
                            color='gray.400'>Remember Me
                        </Text>
                   </Flex>
                    <Text 
                        fontFamily='sans-serif' 
                        color='red.400'>Forgot Password?
                    </Text>
                </Flex>
            </Box>

            <Box
                mt={['25px','25px','15px']}
                mb={['25px','25px','15px']}
                borderRadius='full' 
                w={['100%','100%','50%']}
                h='50px'
                bg='#3772ff'
                mx={['auto','auto','350px']}
                textAlign='center'
                pt='12px'>
                <Text 
                    fontFamily='sans-serif' 
                    fontWeight='bold'
                    cursor='pointer'>Login
                </Text>
            </Box>
        </FormControl>
    </Box>
  )
}

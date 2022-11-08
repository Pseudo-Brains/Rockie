import React from 'react';
import { Box, Flex, FormControl, FormLabel, Input, Select, Text } from '@chakra-ui/react';

export default function Mobile() {
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
                        Mobile
                </FormLabel>
                <Box 
                    display='flex'
                    justifyContent={["space-between","space-between","left"]}
                    mx={['0px','0px','350px']}
                    >
                    <Select
                        color='black'
                        type='text'
                        width={['27%','27%','10%']}
                        bg='white'
                        h='50px'>
                        <option value='+1'>+1</option>
                        <option value='+67'>+67</option>
                    </Select>
                    <Input 
                        mx='5px'
                        type='text'
                        width={['70%','70%','100%']}
                        bg='white'
                        h='50px'
                        placeholder=' Please enter your mobile number'
                        _placeholder={{ color: 'black '}}
                    />
                </Box>
            </Box>

            <Box mt='15px'>
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
                        width={['100%','100%','50%']}
                        bg='white'
                    h='50px'
                    placeholder=' Enter a Password'
                    _placeholder={{ color: 'black '}}
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

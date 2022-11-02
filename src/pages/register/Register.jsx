import React, { useState } from 'react';
import { Box, Flex, Heading, Img, Input, Stack, Text, VStack } from '@chakra-ui/react';
import { Link, NavLink } from 'react-router-dom';
import { FaLock } from 'react-icons/fa';
import Email from '../register/Email';
import Mobile from '../register/Mobile';

export default function Register() {
    const [isEmail, setIsEmail] = useState(true);

    const handleMobile = () => {
        setIsEmail(false);
    }

    const handleEmail = () => {
        setIsEmail(true);
    }
  return (
    <Box 
        pb="100px">
        <Box 
        pt="40px" 
        pb="70px" 
        px="30px" 
        bg="gray.900">
        <Flex 
            align="center" 
            justify="space-between">
            <Heading 
            fontSize="4xl">
            Register
            </Heading>
            <Flex>
            <Link to={'/'}>Home / </Link>
            <Text>&nbsp; Register</Text>
            </Flex>
        </Flex>
        </Box>

        <Box 
            bg='black'
            pt="50px" 
            pb="70px" 
            px="30px">
            <Stack>
                <VStack>
                    <Text 
                        fontSize='50px'
                        fontFamily='sans-serif'
                        fontWeight='bold'>Register To Rockie
                    </Text>

                    <Text 
                        color='gray.300' 
                        fontFamily='sans-serif' 
                        fontSize='2xl'>Register in advance and enjoy the event benefits
                    </Text>

                    <Flex justify='center' gap='20px'>
                        <Box 
                            h='40px' 
                            width='20' 
                            bg='#3772ff'
                            borderRadius='full'
                            onClick={handleEmail}>
                            <Box as='div' 
                                textAlign='center'
                                pt='8px'>
                                <Link to='#'>
                                    <Text 
                                        fontWeight='bold' 
                                        fontFamily='sans-serif'>Email
                                    </Text>
                                </Link>
                            </Box>
                        </Box>

                        <Box 
                            as='div'
                            h='40px' 
                            width='20' 
                            bg='#3772ff'
                            borderRadius='full' 
                            onClick={handleMobile}>
                            <Box as='div' 
                                textAlign='center'
                                pt='8px'>
                                <Link to='#'>
                                    <Text 
                                        fontWeight='bold' 
                                        fontFamily='sans-serif'>Phone
                                    </Text>
                                </Link>
                            </Box>
                        </Box>                        
                    </Flex>                    
                </VStack>
                {isEmail && <Email />}
                {!isEmail && <Mobile />}
                <VStack>
                    <Flex 
                        align='center' 
                        gap='5px' 
                        mt='30px'>
                        <Text 
                            fontFamily='sans-serif' 
                            fontWeight='bold'>Already Have an Account?
                        </Text>
                        <Link>
                            <Text 
                                fontFamily='sans-serif' 
                                fontWeight='bold' 
                                color='#3772ff'>Login
                            </Text>
                        </Link>
                    </Flex>
                </VStack>
            </Stack>          
        </Box>
    </Box>
  )
}

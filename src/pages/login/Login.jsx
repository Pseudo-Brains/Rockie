import React, { useState } from 'react';
import { Box, Flex, Heading, Img, Input, Stack, Text, VStack } from '@chakra-ui/react';
import { Link, NavLink } from 'react-router-dom';
import { FaLock } from 'react-icons/fa';
import Email from './Email';
import Mobile from './Mobile';

export default function Login() {
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
            Login
            </Heading>
            <Flex>
            <Link to={'/'}>Home / </Link>
            <Text>&nbsp; Login</Text>
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
                        fontWeight='bold'>Login To Rockie
                    </Text>

                    <Text 
                        color='gray.300' 
                        fontFamily='sans-serif' 
                        fontSize='2xl'>Welcome back! Log In now to start trading
                    </Text>

                    <Box
                        h={['45px','45px','50px']}
                        w={['10%','10%','4%']}
                        borderColor='gray.600'
                        borderRadius='full'
                        bg='green.900'
                        position='absolute'
                        top={['415px','415px','370px']}
                        left={['54px','54px','500px']}> 
                        <Box 
                            ml='20px' 
                            pt='15px'>
                            <FaLock />
                        </Box>
                    </Box>
                    <Box
                        textAlign='center'
                        pt='12px'
                        h='50px'
                        w={['90%','90%','30%']}
                        borderColor='gray.600'
                        borderRadius='full'
                        bg='gray.900'>
                        <Text 
                            fontFamily='sans-serif'
                            fontWeight='bold'>
                                <span 
                                    style={{ color: "green" }}>
                                    https://
                                </span>accounts.rockie.com/login
                        </Text>
                    </Box>

                    <Flex justify='center' gap='20px'>
                        <Box 
                            h='40px' 
                            width='20' 
                            bg='#3772ff'
                            borderRadius='full'
                            onClick={handleEmail}
                            >
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
                        mb='50px'>
                        <Text 
                            fontFamily='sans-serif' 
                            fontWeight='bold'>Not a Member?
                        </Text>
                        <Link>
                            <Text 
                                fontFamily='sans-serif' 
                                fontWeight='bold' 
                                color='#3772ff'>Register
                            </Text>
                        </Link>
                    </Flex>
                    <Box 
                        mt='20px'>
                        <Img 
                            src='/public/image/barcode.png' 
                            alt='barcode' 
                        />
                    </Box>
                    <Text 
                        fontFamily='sans-serif' 
                        fontWeight='bold' 
                        fontSize='2xl'>Login With QR Code
                    </Text>
                    <Text
                        fontWeight='light'
                        color='gray.400'>Scan this code with the 
                        <span 
                            style={{ color: '#3772ff'}}>
                            &nbsp;Rockie mobile app&nbsp;
                        </span>
                        to log in instantly.
                    </Text>
                </VStack>
            </Stack>
            
        </Box>
    </Box>
  )
}

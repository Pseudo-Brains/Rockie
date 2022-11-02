import React from 'react';
import { Box, Flex, FormControl, FormLabel, Heading, HStack, Img, Input, Text, Textarea, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function Contact() {
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
                Contact
                </Heading>
                <Flex>
                <Link to={'/'}>Home / </Link>
                <Text>&nbsp; Contact</Text>
                </Flex>
            </Flex>
        </Box>

        <Box p={["0px 20px","0px 20px","0px 0px"]}>
            <Flex justify='center' direction={["column","column","row"]}>
                {/* first flex */}
                <Img src='/public/image/btc.jpg'/>

                {/* second flex */}
                <Box
                    w={['100%','100%','50%']}>
                    <VStack>
                        <Heading 
                            fontSize={['3xl','3xl','5xl']}>Leave a message for us
                        </Heading>
                        <Text 
                            color='gray.400' 
                            fontFamily='sans-serif' 
                            fontSize={['1xl','1xl','2xl']}>Get in touch with Rockie
                        </Text>
                    </VStack>

                    <FormLabel 
                        fontFamily='sans-serif' 
                        fontWeight='bold' 
                        color='gray.400' 
                        fontSize='1xl'
                        mx={['0px','0px','70px']}>
                        Your Name
                    </FormLabel>
                    <VStack>
                        <Input
                            color='black' 
                            type='text'
                            w={['100%','100%','80%']}
                            bg='white'
                            h='50px'
                            mb='30px'
                            placeholder=' Enter your name'
                            _placeholder={{ color: 'black'}}
                        />
                    </VStack>

                    <FormLabel 
                        fontFamily='sans-serif' 
                        fontWeight='bold' 
                        color='gray.400' 
                        fontSize='1xl'
                        mx={['0px','0px','70px']}>
                        Email
                    </FormLabel>
                    <VStack>
                        <Input
                            color='black' 
                            type='text'
                            w={['100%','100%','80%']}
                            mb='30px'
                            bg='white'
                            h='50px'
                            placeholder=' Enter mail'
                            _placeholder={{ color: 'black'}}
                        />
                    </VStack>

                    <FormLabel 
                        fontFamily='sans-serif' 
                        fontWeight='bold' 
                        color='gray.400' 
                        fontSize='1xl'
                        mx={['0px','0px','70px']}>
                        Subject
                    </FormLabel>
                    <VStack>
                        <Input
                            color='black' 
                            type='text'
                            w={['100%','100%','80%']}
                            mb='30px'
                            bg='white'
                            h='50px'
                            placeholder=' NFT Items'
                            _placeholder={{ color: 'black'}}
                        />
                    </VStack>

                    <FormLabel 
                        fontFamily='sans-serif' 
                        fontWeight='bold' 
                        color='gray.400' 
                        fontSize='1xl'
                        mx={['0px','0px','70px']}>
                        Message
                    </FormLabel>
                    <VStack>
                        <Textarea
                            w={['100%','100%','80%']}
                            h='100px'
                            bg='white'
                            placeholder=' Enter Your message'
                            _placeholder={{ color: 'black'}}>
                        </Textarea>
                    </VStack>
                    <Box
                        mt='20px'
                        borderRadius='full' 
                        w={['100%','100%','80%']}
                        h='50px'
                        bg='#3772ff'
                        textAlign='center'
                        pt='12px'
                        m="30px auto"
                        >
                        <Text 
                            fontFamily='sans-serif' 
                            fontWeight='bold'
                            cursor='pointer'>Send Message
                        </Text>
                    </Box>
                </Box>
            </Flex>
        </Box>
    </Box>
  )
}

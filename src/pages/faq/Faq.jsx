import React, { useState } from 'react';
import { Box, Flex, Heading, Text, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';

export default function Faq() {
    const [whatRockie, setWhatRockie] = useState(true);
    const [howToRockie, setHowToRockie] = useState(false);
    const [crypto, setCrypto] = useState(false);
    const [sell, setSell] = useState(false);

    //function what is rockie
    const handleOpen = () => {
        setWhatRockie(true);
    }
    const handleClose = () => {
        setWhatRockie(false);
    }

    //how to rockie
    const openHowTo = () => {
        setHowToRockie(true);
    }
    const closeHowTo = () => {
        setHowToRockie(false);
    }

    //crypto faq
    const openCrypto = () => {
        setCrypto(true);
    }
    const closeCrypto = () => {
        setCrypto(false);
    }

    //crypto faq
    const openSell = () => {
        setSell(true);
    }
    const closeSell = () => {
        setSell(false);
    }
  return (
    <Box 
        pb="100px">
        <Box 
            pt="40px" 
            pb="70px" 
            px="30px" 
            bg="gray.900"
            >
            <Flex 
                align="center" 
                justify="space-between">
                <Heading 
                    fontSize="4xl">
                    FAQ
                </Heading>
                <Flex>
                    <Link to={'/'}>Home / </Link>
                    <Text>&nbsp; FAQ</Text>
                </Flex>
            </Flex>
        </Box>
        <Box pt='50px' pl={["20px","20px","0px"]} pr={["20px","20px","0px"]}>
            <VStack>
                <Heading 
                    fontFamily='sans-serif' 
                    fontSize={['3xl','3xl','5xl']}>
                    Frequently Asked Questions
                </Heading>
                <Text 
                    fontSize='2xl' 
                    color='gray.400' 
                    fontFamily='sans-serif'>
                    Learn how to get started
                </Text>

                    {/* what is rockie */}
                    <Box 
                        borderBottom='1px'
                        borderColor='gray.500'
                        w={['100%','100%','50%']}>
                        <Flex 
                            align='center' 
                            justify='space-between'>
                            <Text 
                                fontFamily='sans-serif'
                                fontSize={['1xl','1xl','2xl']}
                                color='gray.400'>
                                What is Rockie
                            </Text>
                            {whatRockie && <MdKeyboardArrowUp 
                                cursor='pointer'
                                onClick={handleClose}
                            />}
                            {!whatRockie && <MdKeyboardArrowDown onClick={handleOpen} cursor='pointer' />}
                        </Flex>
                    </Box>
                    <Box w={['100%','100%','50%']}>
                        {whatRockie && <Text fontFamily='sans-serif' color='gray.400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quae nisi tenetur dicta possimus consequuntur perspiciatis at inventore, nemo blanditiis unde, dignissimos adipisci cumque error debitis veritatis recusandae officia corrupti.</Text>}
                    </Box>

                    {/* getting started with rockie */}
                    <Box 
                        borderBottom='1px'
                        borderColor='gray.500'
                        w={['100%','100%','50%']}>
                        <Flex 
                            align='center' 
                            justify='space-between'>
                            <Text 
                                fontFamily='sans-serif'
                                fontSize={['1xl','1xl','2xl']}
                                color='gray.400'>
                                How to get Started with Rockie
                            </Text>
                            {!howToRockie && <MdKeyboardArrowDown 
                                cursor='pointer'
                                onClick={openHowTo}
                            />}
                            {howToRockie && <MdKeyboardArrowUp onClick={closeHowTo} cursor='pointer' />}
                        </Flex>
                    </Box>
                    <Box w={['100%','100%','50%']}>
                        {howToRockie && <Text fontFamily='sans-serif' color='gray.400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quae nisi tenetur dicta possimus consequuntur perspiciatis at inventore, nemo blanditiis unde, dignissimos adipisci cumque error debitis veritatis recusandae officia corrupti.</Text>}
                    </Box>


                    {/* buying crypto */}
                    <Box 
                        borderBottom='1px'
                        borderColor='gray.500'
                        w={['100%','100%','50%']}>
                        <Flex 
                            align='center' 
                            justify='space-between'>
                            <Text 
                                fontFamily='sans-serif'
                                fontSize={['1xl','1xl','2xl']}
                                color='gray.400'>
                                What Cryptocurrencies can I purchase?
                            </Text>
                            {!crypto && <MdKeyboardArrowDown 
                                cursor='pointer'
                                onClick={openCrypto}
                            />}
                            {crypto && <MdKeyboardArrowUp onClick={closeCrypto} cursor='pointer' />}
                        </Flex>
                    </Box>
                    <Box w={['100%','100%','50%']}>
                        {crypto && <Text fontFamily='sans-serif' color='gray.400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quae nisi tenetur dicta possimus consequuntur perspiciatis at inventore, nemo blanditiis unde, dignissimos adipisci cumque error debitis veritatis recusandae officia corrupti.</Text>}
                    </Box>

                    {/* buying crypto */}
                    <Box 
                        borderBottom='1px'
                        borderColor='gray.500'
                        w={['100%','100%','50%']}>
                        <Flex 
                            align='center' 
                            justify='space-between'>
                            <Text 
                                fontFamily='sans-serif'
                                fontSize={['1xl','1xl','2xl']}
                                color='gray.400'>
                                How to buy & sell in Rockie
                            </Text>
                            {!sell && <MdKeyboardArrowDown 
                                cursor='pointer'
                                onClick={openSell}
                            />}
                            {sell && <MdKeyboardArrowUp onClick={closeSell} cursor='pointer' />}
                        </Flex>
                    </Box>
                    <Box w={['100%','100%','50%']}>
                        {sell && <Text fontFamily='sans-serif' color='gray.400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quae nisi tenetur dicta possimus consequuntur perspiciatis at inventore, nemo blanditiis unde, dignissimos adipisci cumque error debitis veritatis recusandae officia corrupti.</Text>}
                    </Box>
            </VStack>
        </Box>
    </Box>
  )
}

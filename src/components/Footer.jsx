import {
  Box,
  Text,
  HStack,
  Icon,
  Image,
  Heading,
  VStack,
  Flex,
  useColorModeValue,
  Spacer,
  Input,
  Button,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

import React from "react";

function Footer() {
  const bg = useColorModeValue("#141416", "#FFFFFF");
  const headerColor = useColorModeValue("#FFFFFF", "#23262F");
  const TextColor = useColorModeValue("#FFFFFF", "#969BA9");

  return (
    <Box w={"100%"} bg={bg} px="24">
      <Box>
        <Flex>
          <VStack alignItems={"flex-start"} w="33%" p="4" pt="8">
            <Image
              objectFit="contain"
              src="/image/rock-logo1.png"
              alt="logo"
              mb={"2"}
            />
            <Heading color={TextColor} fontSize="20">
              Let's talk! 🤙
            </Heading>
            <Text
              color={"#969BA9"}
              fontSize="md"
              fontWeight={"semibold"}
              mb="2"
            >
              +12 345 678 9101
            </Text>
            <Text
              color={"#969BA9"}
              fontSize="sm"
              fontWeight={"semibold"}
              mb="2"
            >
              Info.Avitex@Gmail.Com
            </Text>
            <Text
              color={"#969BA9"}
              fontSize="sm"
              pr="12"
              fontWeight={"semibold"}
            >
              Cecilia Chapman 711-2880 Nulla St. Mankato Mississippi 96522
            </Text>
            {/* <Text color={"#969BA9"} fontSize="sm" fontWeight={"bold"}>
             
            </Text> */}
          </VStack>
          {/* ttt */}
          <VStack alignItems={"flex-start"} w="35%" p="4" pt="8">
            <Flex
              flexDir={{ base: "column", md: "row" }}
              justify="space-between"
            >
              <VStack alignItems={"flex-start"} py="4">
                <Text
                  color={TextColor}
                  textTransform="uppercase"
                  fontSize={"md"}
                >
                  PRODUCTS
                </Text>
                <Text
                  color={TextColor}
                  fontSize="sm"
                  _hover={{ color: "#163DE9" }}
                >
                  Spot
                </Text>
                <Text
                  color={TextColor}
                  fontSize="sm"
                  _hover={{ color: "#163DE9" }}
                >
                  Inverse Perpetual
                </Text>
                <Text
                  color={TextColor}
                  fontSize="sm"
                  _hover={{ color: "#163DE9" }}
                >
                  USDT Perpetual
                </Text>
                <Text
                  color={TextColor}
                  fontSize="sm"
                  _hover={{ color: "#163DE9" }}
                >
                  Exchange
                </Text>
                <Text
                  color={TextColor}
                  fontSize="sm"
                  _hover={{ color: "#163DE9" }}
                >
                  Launchpad
                </Text>
                <Text
                  color={TextColor}
                  fontSize="sm"
                  _hover={{ color: "#163DE9" }}
                >
                  Binance Pay
                </Text>
              </VStack>
              <Spacer />
              <VStack py="4" alignItems={"flex-start"} ml="10">
                <Text color={TextColor} textTransform="uppercase">
                  SERVICES
                </Text>
                <Text
                  color={TextColor}
                  fontSize="sm"
                  _hover={{ color: "#163DE9" }}
                >
                  Buy Crypto
                </Text>
                <Text
                  color={TextColor}
                  fontSize="sm"
                  _hover={{ color: "#163DE9" }}
                >
                  Tranding Fee
                </Text>
                <Text
                  color={TextColor}
                  fontSize="sm"
                  _hover={{ color: "#163DE9" }}
                >
                  Markets
                </Text>
                <Text
                  color={TextColor}
                  fontSize="sm"
                  _hover={{ color: "#163DE9" }}
                >
                  API
                </Text>
                <Text
                  color={TextColor}
                  fontSize="sm"
                  _hover={{ color: "#163DE9" }}
                >
                  Referral Program
                </Text>
              </VStack>
            </Flex>
          </VStack>
          {/* ttete */}
          <VStack
            alignItems={"flex-start"}
            w="33%"
            p="4"
            pr="14"
            pt="12"
            justify={"space-evenly"}
          >
            <Heading
              as={"h4"}
              fontSize="2xl"
              color={TextColor}
              textTransform="uppercase"
            >
              Newletters
            </Heading>
            <Text color={TextColor} fontSize="sm" mb="10">
              Subscribe Our Newsletter To Get More Free Design Course And
              Resource.
            </Text>

            <InputGroup size="md">
              <Input borderRadius="full" p={"1rem"} bg="white" />
              <InputRightElement width="6.5rem" borderRadius="full" pr="-1">
                <Button
                  h="2rem"
                  size="lg"
                  fontSize={"14"}
                  bg="#5084FF"
                  borderRadius="full"
                  py="4"
                  color={"white"}
                >
                  submit
                </Button>
              </InputRightElement>
            </InputGroup>
            <HStack spacing={"4"}>
              <Icon color={"#969BA9"} as={FaFacebookF} />
              <Icon color={"#969BA9"} as={FaInstagram} />
              <Icon color={"#969BA9"} as={FaYoutube} />
              <Icon color={"#969BA9"} as={FaTwitter} />
            </HStack>
          </VStack>
        </Flex>
      </Box>
      {/* footer */}
      <Box>
        <Text
          textAlign={"center"}
          fontWeight="semibold"
          p={"4"}
          m="4"
          color={"#969BA9"}
          borderTopWidth="2px"
          borderTopColor="#23262F"
        >
          ©2022 Rockie.Com. All Rights Reserved. Terms Of Service | Privacy
          Terms
        </Text>
      </Box>
    </Box>
  );
}

export default Footer;

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
  useColorMode,
  Spacer,
  Input,
  Button,
  InputGroup,
  InputRightElement,
  background,
} from "@chakra-ui/react";
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

import React from "react";

function Footer() {
  const bg = useColorModeValue("#141416", "#FFFFFF");
  const headerColor = useColorModeValue("#FFFFFF", "#23262F");
  const TextColor = useColorModeValue("#FFFFFF", "#969BA9");
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box w={"100%"} bg={bg} px="2">
      <Box>
        <Flex
          justify={"center"}
          flexDir={{ base: "column", md: "row", lg: "row" }}
          flexWrap="wrap"
        >
          <VStack
            alignItems={"flex-start"}
            w={{ base: "100%", md: "50%", lg: "33%" }}
            p="4"
            pt="8"
          >
            {colorMode === "light" ? (
              <Image
                objectFit="cover"
                src="/image/rock-logo1.png"
                alt="logo"
                // boxSize={"160px"}
                width={"230px"}
                mb={"3"}
              />
            ) : (
              <Image
                objectFit="cover"
                src="/image/rockie-logo.png"
                alt="logo"
                // boxSize={"160px"}
                width={"230px"}
                mb={"3"}
              />
            )}

            <Heading color={TextColor} fontSize="28" mb="2.5">
              Let's talk! 🤙
            </Heading>
            <Text
              color={"#969BA9"}
              fontSize="2xl"
              fontWeight={"semibold"}
              mb="3"
            >
              +12 345 678 9101
            </Text>
            <Text
              color={"#969BA9"}
              fontSize="lg"
              fontWeight={"semibold"}
              mb="2"
            >
              Info.Avitex@Gmail.Com
            </Text>
            <Text
              color={"#969BA9"}
              fontSize="lg"
              pr="36"
              fontWeight={"semibold"}
            >
              Cecilia Chapman 711-2880 Nulla St. Mankato Mississippi 96522
            </Text>
            {/* <Text color={"#969BA9"} fontSize="sm" fontWeight={"bold"}>
             
            </Text> */}
          </VStack>
          {/* ttt */}
          <VStack
            w={{ base: "100%", md: "50%", lg: "33%" }}
            p="2"
            pt="8"
            borderRight={"2px"}
            borderLeft={{ base: "0px", md: "0px", lg: "2px" }}
            borderColor={"#23262F"}
          >
            <Flex
              flexDir={{ base: "column", md: "row" }}
              justify="space-between"
            >
              <VStack alignItems={"flex-start"} py="4">
                <Text
                  color={TextColor}
                  textTransform="uppercase"
                  fontSize={"2xl"}
                >
                  PRODUCTS
                </Text>
                <Text
                  color={TextColor}
                  fontSize="2xl"
                  _hover={{ color: "#163DE9" }}
                >
                  Spot
                </Text>
                <Text
                  color={TextColor}
                  fontSize="2xl"
                  _hover={{ color: "#163DE9" }}
                >
                  Inverse Perpetual
                </Text>
                <Text
                  color={TextColor}
                  fontSize="2xl"
                  _hover={{ color: "#163DE9" }}
                >
                  USDT Perpetual
                </Text>
                <Text
                  color={TextColor}
                  fontSize="2xl"
                  _hover={{ color: "#163DE9" }}
                >
                  Exchange
                </Text>
                <Text
                  color={TextColor}
                  fontSize="2xl"
                  _hover={{ color: "#163DE9" }}
                >
                  Launchpad
                </Text>
                <Text
                  color={TextColor}
                  fontSize="2xl"
                  _hover={{ color: "#163DE9" }}
                >
                  Binance Pay
                </Text>
              </VStack>
              <Spacer />
              <VStack
                py="4"
                alignItems={"flex-start"}
                ml={{ base: "2", md: "2", lg: "10" }}
              >
                <Text
                  color={TextColor}
                  textTransform="uppercase"
                  fontSize={"2xl"}
                >
                  SERVICES
                </Text>
                <Text
                  color={TextColor}
                  fontSize="2xl"
                  _hover={{ color: "#163DE9" }}
                >
                  Buy Crypto
                </Text>
                <Text
                  color={TextColor}
                  fontSize="2xl"
                  _hover={{ color: "#163DE9" }}
                >
                  Tranding Fee
                </Text>
                <Text
                  color={TextColor}
                  fontSize="2xl"
                  _hover={{ color: "#163DE9" }}
                >
                  Markets
                </Text>
                <Text
                  color={TextColor}
                  fontSize="2xl"
                  _hover={{ color: "#163DE9" }}
                >
                  API
                </Text>
                <Text
                  color={TextColor}
                  fontSize="2xl"
                  _hover={{ color: "#163DE9" }}
                >
                  Referral Program
                </Text>
              </VStack>
            </Flex>
          </VStack>
          {/* ttete */}
          <VStack
            borderTopWidth={{ base: "2px", md: "2px", lg: "0" }}
            borderTopColor={{
              base: "#23262F",
              md: "#23262F",
              lg: "transparent",
            }}
            alignItems={"flex-start"}
            w={{ base: "100%", md: "100%", lg: "33%" }}
            px="20"
            pr="14"
            pt="4"
            justify={"space-evenly"}
          >
            <Heading
              as={"h6"}
              fontSize="2xl"
              color={TextColor}
              textTransform="uppercase"
            >
              Newletters
            </Heading>
            <Text color={TextColor} fontSize="18" mb="10">
              Subscribe Our Newsletter To Get More Free Design Course And
              Resource.
            </Text>

            <InputGroup size="lg">
              <Input borderRadius="full" p={"1.1rem"} bg="white" />
              <InputRightElement width="6.5rem" borderRadius="full" pr="1">
                <Button
                  h="2rem"
                  size="lg"
                  fontSize={"18"}
                  bg="#5084FF"
                  borderRadius="full"
                  py="6"
                  _hover={{ background: "blue", color: "white" }}
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
          p={"6"}
          mx="4"
          mt="4"
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

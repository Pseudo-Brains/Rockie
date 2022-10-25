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
} from "@chakra-ui/react";

import React from "react";

function Footer() {
  const bg = useColorModeValue("#141416", "#FFFFFF");
  const headerColor = useColorModeValue("#FFFFFF", "#23262F");
  const TextColor = useColorModeValue("#FFFFFF", "#969BA9");

  return (
    <Box w={"100%"} bg={bg} px="24">
      <Box>
        <Flex>
          <VStack p="6" alignItems={"flex-start"} w="32%">
            <Image
              // as={Icon}
              // boxSize="180px"
              objectFit="contain"
              src="/image/rock-logo1.png"
              alt="logo"
              mb={"2"}
            />
            <Heading color={TextColor} fontSize="20">
              Let's talk! 🤙
            </Heading>
            <Text color={"#969BA9"} fontSize="md" fontWeight={"bold"}>
              +12 345 678 9101
            </Text>
            <Text color={"#969BA9"} fontSize="md" fontWeight={"bold"}>
              Info.Avitex@Gmail.Com
            </Text>
            <Text color={"#969BA9"} fontSize="md" fontWeight={"bold"}>
              Cecilia Chapman 711-2880 Nulla St.
            </Text>
            <Text color={"#969BA9"} fontSize="md" fontWeight={"bold"}>
              Mankato Mississippi 96522
            </Text>
          </VStack>
          {/* ttt */}
          <VStack w="32%">
            <Flex flexDir={{ base: "column", md: "row" }}>
              <VStack alignItems={"flex-start"} p="4">
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
                  Spot
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
                  Spot
                </Text>
              </VStack>
              <VStack>
                <Text color={TextColor} textTransform="uppercase">
                  SERVICES
                </Text>
              </VStack>

              <VStack p="6" alignItems={"flex-start"} w="32%">
                <VStack alignItems={"flex-start"} p="4">
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
                    Spot
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
                    Spot
                  </Text>
                </VStack>
              </VStack>
            </Flex>
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

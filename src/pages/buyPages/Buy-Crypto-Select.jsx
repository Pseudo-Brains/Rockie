import {
  Box,
  Flex,
  HStack,
  Stack,
  useColorModeValue,
  Text,
  Heading,
  Button,
  color,
  VStack,
  Icon,
  Image,
  FormLabel,
  FormControl,
  Input,
  Spacer,
} from "@chakra-ui/react";
import "../../main.css";
import React from "react";
import { MdRadioButtonChecked } from "react-icons/md";
import { FcRefresh } from "react-icons/fc";
import { Link } from "react-router-dom";
import { refreshicon } from "../../../public/Icons/icons";
import EarnUp from "../../components/EarnUp";
import SubHeader from "../../components/SubHeader";
function BuyCryptoSelect() {
  const bg = useColorModeValue("#141416", "#FFFFFF");
  const bgSub = useColorModeValue("#17181C", "#FFFFFF");
  const InputColor = useColorModeValue("#222630", "#FFFFFF");
  const bgFormcolor = useColorModeValue("#18191D", "#F7F7F7");
  const headerColor = useColorModeValue("#FFFFFF", "#23262F");
  const TextColor = useColorModeValue("#FFFFFF", "#969BA9");
  return (
    <Box>
      <SubHeader title={"Buy Crypto"} />
      <Box py="20" bg={bg}>
        <Flex>
          <Box
            w="25%"
            flexDir={"column"}
            px="4"
            display={{ base: "none", md: "none", lg: "flex" }}
            borderRight="2px"
            borderRightColor={"white"}
            alignItems="self-start"
          >
            <Button
              bg={"#3772FF"}
              borderRadius="full"
              mb="4"
              fontSize={"1xl"}
              py="25px"
              pr="40"
              color={TextColor}
            >
              Overview
            </Button>
            <Button
              bg={"transparent"}
              borderRadius="full"
              mb="4"
              fontSize={"1xl"}
              py="25px"
              pr="40"
              color={TextColor}
            >
              Buy Crypto
            </Button>
            <Button
              bg={"transparent"}
              borderRadius="full"
              mb="4"
              fontSize={"1xl"}
              py="25px"
              pr="40"
              color={TextColor}
            >
              Sell Crypto
            </Button>
          </Box>

          <Box
            w={{ base: "100%", md: "100%", lg: "70%" }}
            alignItems={"center"}
          >
            <Flex justify={"center"} alignItems="center" flexDir="column">
              <HStack w="90%" alignItems={"center"} ml="12">
                {" "}
                <Icon
                  as={MdRadioButtonChecked}
                  fontSize={{ base: "sm", md: "md", lg: "lg" }}
                  color="green.400"
                />{" "}
                <Text
                  fontSize={{ base: "sm", md: "md", lg: "lg" }}
                  color={headerColor}
                >
                  Select currency
                </Text>{" "}
                <Image
                  src="/image/whitedash.png"
                  w={{ base: "1rem", md: "1.3rem", lg: "8.5rem" }}
                  alt="Dot arrow"
                />
                <Icon
                  as={MdRadioButtonChecked}
                  fontSize={{ base: "sm", md: "md", lg: "lg" }}
                />{" "}
                <Text
                  fontSize={{ base: "sm", md: "md", lg: "lg" }}
                  color={headerColor}
                >
                  {" "}
                  Important Notes
                </Text>
                <Image
                  src="/image/whitedash.png"
                  w={{ base: "1rem", md: "1.3rem", lg: "8.5rem" }}
                  alt="Dot arrow"
                />
                <Icon
                  as={MdRadioButtonChecked}
                  fontSize={{ base: "sm", md: "md", lg: "lg" }}
                />
                <Text
                  fontSize={{ base: "sm", md: "md", lg: "lg" }}
                  color={headerColor}
                >
                  Payment Details
                </Text>
              </HStack>
              <VStack w={{ base: "90%", md: "86%", lg: "80%" }}>
                <FormControl
                  isRequired
                  px="10"
                  pt="6"
                  pb="6"
                  mt="8"
                  borderRadius={"2xl"}
                  bg={bgFormcolor}
                >
                  <VStack alignItems={"flex-start"} rowGap="50px">
                    <Text
                      textAlign={"left"}
                      color={TextColor}
                      mb="-2"
                      fontSize="2xl"
                    >
                      Select Currency
                    </Text>
                    <Text textAlign={"left"} color={"#AAAEBD"} fontSize="lg">
                      Reference Price: 1,450,939,280.43 VND/BTC
                    </Text>
                  </VStack>
                  <HStack justify={"space-between"} columnGap="20px">
                    <Box>
                      <FormLabel
                        fontWeight={"bold"}
                        fontSize={"1xl"}
                        color={"white"}
                        requiredIndicator={false}
                        border="none"
                      >
                        Pay
                      </FormLabel>
                      <Input
                        placeholder="US$"
                        py="6"
                        pl="4"
                        pr="14"
                        border={"none"}
                        borderRadius="2xl"
                        bg={InputColor}
                      />
                    </Box>
                    <Box
                      alignSelf={"flex-end"}
                      p="10px"
                      borderRadius={"full"}
                      bg="#5084FF"
                      mx="40px"
                    >
                      <Icon
                        as={refreshicon}
                        boxSize="2px"
                        requiredIndicator={false}
                      />
                    </Box>
                    <Box>
                      <FormLabel
                        fontWeight={"bold"}
                        fontSize={"1xl"}
                        color={"white"}
                        requiredIndicator={false}
                        border="none"
                      >
                        Receive
                      </FormLabel>
                      <Input
                        placeholder="BTC"
                        type={"number"}
                        borderRadius="2xl"
                        py="6"
                        pl="4"
                        pr="14"
                        border={"none"}
                        bg={InputColor}
                      />
                    </Box>
                  </HStack>
                  <Spacer />
                  <HStack justify={"flex-end"}>
                    {" "}
                    <Button
                      bg="#5084FF"
                      py="4"
                      px="10"
                      mt="25px"
                      _hidden={{ bg: "#141416" }}
                      borderRadius={"full"}
                      color={TextColor}
                    >
                      {" "}
                      Continue
                    </Button>
                  </HStack>
                </FormControl>
              </VStack>
            </Flex>
          </Box>
        </Flex>
      </Box>
      <EarnUp />
    </Box>
  );
}

export default BuyCryptoSelect;

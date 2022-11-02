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
  FormHelperText,
  Input,
  Spacer,
} from "@chakra-ui/react";

import "../../main.css";
import React from "react";
import { MdRadioButtonChecked, MdCloud } from "react-icons/md";
import { CiWallet } from "react-icons/ci";
import { CgCloud } from "react-icons/cg";
import { FaWallet, FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { refreshicon } from "../../../public/Icons/icons";
import EarnUp from "../../components/EarnUp";
import SubHeader from "../../components/SubHeader";

function BuyCryptoConfirm() {
  const bg = useColorModeValue("#141416", "#FFFFFF");
  const bgSub = useColorModeValue("#17181C", "#FFFFFF");
  const InputColor = useColorModeValue("#222630", "#FFFFFF");
  const bgFormcolor = useColorModeValue("#18191D", "#F7F7F7");
  const headerColor = useColorModeValue("#FFFFFF", "#23262F");
  const TextColor = useColorModeValue("#FFFFFF", "#969BA9");
  return (
    <Box display={"flex"} flexDir="column" alignItems={"center"} bg={bg}>
      <SubHeader title={"Buy Crypto"} />
      <Box maxW={"1450px"} w="100%" pt="20" pb="28">
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
              bg={"transparent"}
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
              bg={"#3772FF"}
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
                  as={FaCheckCircle}
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
                  src="/image/greenline.png"
                  w={{ base: "1rem", md: "1.3rem", lg: "8.5rem" }}
                  alt="Dot arrow"
                />
                <Icon
                  color="green.400"
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
                  <VStack alignItems={"flex-start"}>
                    <Text textAlign={"left"} color={TextColor} fontSize="2xl">
                      Confirm Information
                    </Text>
                    <Text textAlign={"left"} color={"#AAAEBD"} fontSize="lg">
                      You Are About To Receive 1.356 BTC For Bitcloud Bank
                    </Text>
                  </VStack>

                  <HStack justify={"space-between"} columnGap="20px">
                    <HStack color={TextColor} py="4">
                      <VStack borderRadius="full" p="2" bg="#5084FF">
                        <Icon
                          as={CiWallet}
                          fontSize="2xl"
                          requiredIndicator={false}
                        />
                      </VStack>
                      <VStack alignItems={"flex-start"}>
                        <Text color="#AAAEBD" fontWeight={"bold"}>
                          Pay
                        </Text>
                        <Text mt="-5px" fontWeight={"bold"}>
                          3.000.000 VND
                        </Text>
                      </VStack>
                    </HStack>
                    <HStack color={TextColor} pt="4">
                      <VStack borderRadius="full" p="2" bg="#58BD7D">
                        <Icon
                          as={CiWallet}
                          fontSize="2xl"
                          requiredIndicator={false}
                        />
                      </VStack>
                      <VStack alignItems={"flex-start"}>
                        <Text color="#AAAEBD" fontWeight={"bold"}>
                          Get
                        </Text>
                        <Text mt="-5px" fontWeight={"bold"}>
                          {" "}
                          0.00207026 BTC
                        </Text>
                      </VStack>
                    </HStack>
                    <HStack color={TextColor} pt="4">
                      <VStack borderRadius="full" p="2" bg="#5084FF">
                        <Icon
                          as={MdCloud}
                          color="white"
                          fontSize="2xl"
                          requiredIndicator={false}
                        />
                      </VStack>
                      <VStack alignItems={"flex-start"}>
                        <Text color="#AAAEBD" fontWeight={"bold"}>
                          {" "}
                          For
                        </Text>
                        <Text mt="-5px" fontWeight={"bold"}>
                          {" "}
                          Rockie
                        </Text>
                      </VStack>
                    </HStack>
                  </HStack>
                </FormControl>
              </VStack>

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
                  <FormHelperText color={TextColor} fontSize="2xl" mb="26">
                    Payment Details
                  </FormHelperText>

                  <FormHelperText color={TextColor} fontSize="1.3rem" mb="2">
                    Bank account
                  </FormHelperText>
                  {/* start */}
                  <FormLabel
                    fontWeight={"bold"}
                    fontSize={"1xl"}
                    color={"white"}
                    requiredIndicator={false}
                    border="none"
                  >
                    Account name
                  </FormLabel>
                  <Input
                    placeholder="Veum Cecilia"
                    py="6"
                    pl="4"
                    pr="14"
                    mb="3"
                    border={"none"}
                    _placeholder={{ opacity: 1, color: TextColor }}
                    borderRadius="2xl"
                    bg={InputColor}
                  />
                  {/* end  */}
                  {/* start */}
                  <FormLabel
                    fontWeight={"bold"}
                    fontSize={"1xl"}
                    color={"white"}
                    requiredIndicator={false}
                    border="none"
                  >
                    Account number
                  </FormLabel>
                  <Input
                    placeholder="V548422222221"
                    py="6"
                    pl="4"
                    pr="14"
                    mb="3"
                    border={"none"}
                    _placeholder={{ opacity: 1, color: TextColor }}
                    borderRadius="2xl"
                    bg={InputColor}
                  />
                  {/* end  */}
                  {/* start */}
                  <FormLabel
                    fontWeight={"bold"}
                    fontSize={"1xl"}
                    color={"white"}
                    requiredIndicator={false}
                    border="none"
                  >
                    Address
                  </FormLabel>
                  <Input
                    placeholder="079 Dariana Knoll, CA"
                    py="6"
                    pl="4"
                    pr="14"
                    mb="3"
                    border={"none"}
                    _placeholder={{ opacity: 1, color: TextColor }}
                    borderRadius="2xl"
                    bg={InputColor}
                  />
                  {/* end  */}
                  {/* start */}
                  <FormLabel
                    fontWeight={"bold"}
                    fontSize={"1xl"}
                    color={"white"}
                    requiredIndicator={false}
                    border="none"
                  >
                    SWIFT Code
                  </FormLabel>
                  <Input
                    placeholder="UI8"
                    py="6"
                    pl="4"
                    pr="14"
                    mb="3"
                    border={"none"}
                    _placeholder={{ opacity: 1, color: TextColor }}
                    borderRadius="2xl"
                    bg={InputColor}
                  />
                  {/* end  */}
                  {/* start */}
                  <FormLabel
                    fontWeight={"bold"}
                    fontSize={"1xl"}
                    color={"white"}
                    requiredIndicator={false}
                    border="none"
                  >
                    Bank Address
                  </FormLabel>
                  <Input
                    placeholder="55416 Powlowski Spring, CA"
                    py="6"
                    pl="4"
                    pr="14"
                    mb="3"
                    border={"none"}
                    _placeholder={{ opacity: 1, color: TextColor }}
                    borderRadius="2xl"
                    bg={InputColor}
                  />
                  {/* end  */}
                  <FormHelperText color={TextColor} fontSize="1.3rem" my="3">
                    Reference code
                  </FormHelperText>
                  <FormHelperText color={TextColor} fontSize="1.3rem" my="3">
                    You MUST include the Reference Code in your deposit in order
                    to credit your account! Reference Code:
                  </FormHelperText>
                  <Input
                    placeholder="BLUTUKHY34PB"
                    py="1.4rem"
                    textAlign={"center"}
                    mb="3"
                    _readOnly={"true"}
                    fontSize={"1.5rem"}
                    border={"none"}
                    _placeholder={{ opacity: 1, color: TextColor }}
                    borderRadius="lg"
                    bg={InputColor}
                  />
                  <HStack
                    flexDir={{ base: "column", md: "row", lg: "row" }}
                    justify="space-evenly"
                    mt="2"
                  >
                    <Button
                      w={{ base: "90%", md: "45%", lg: "45%" }}
                      borderRadius="full"
                      bg={InputColor}
                      color="white"
                      py="6"
                    >
                      Cancel
                    </Button>
                    <Button
                      w={{ base: "90%", md: "45%", lg: "45%" }}
                      borderRadius="full"
                      bg={"#5084FF"}
                      py="6"
                      color="white"
                      _hover={{ bg: "#5084FF" }}
                    >
                      Let's Move On!
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

export default BuyCryptoConfirm;

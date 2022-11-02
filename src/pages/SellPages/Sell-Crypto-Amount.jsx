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
function SellCryptoAmount() {
  const bg = useColorModeValue("#141416", "#FFFFFF");
  const bgSub = useColorModeValue("#17181C", "#FFFFFF");
  const InputColor = useColorModeValue("#222630", "#FFFFFF");
  const bgFormcolor = useColorModeValue("#18191D", "#F7F7F7");
  const headerColor = useColorModeValue("#FFFFFF", "#23262F");
  const TextColor = useColorModeValue("#FFFFFF", "#969BA9");
  return (
    <Box display={"flex"} flexDir="column" alignItems={"center"} bg={bg}>
      <SubHeader title={"Sell Crypto"} />
      <Box py="20" maxW={"1450px"} w="100%" bg={bg}>
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
            <Flex justify={"center"} alignItems="flex-end" flexDir="column">
              <HStack
                w={{ base: "90%", md: "86%", lg: "95%" }}
                justify="space-between"
                ml={{ base: "2", md: "2", lg: "2" }}
              >
                {" "}
                <Icon
                  as={MdRadioButtonChecked}
                  fontSize={{ base: "sm", md: "md", lg: "lg" }}
                  color="green.400"
                />{" "}
                <Text
                  fontSize={{ base: "sm", md: "1xl", lg: "md" }}
                  color={headerColor}
                >
                  Select crypto
                </Text>{" "}
                <Image
                  src="/image/whitedash.png"
                  w={{ base: "1rem", md: "1.3rem", lg: "4rem" }}
                  alt="Dot arrow"
                />
                <Icon
                  as={MdRadioButtonChecked}
                  fontSize={{ base: "sm", md: "md", lg: "lg" }}
                  color="green.400"
                />{" "}
                <Text
                  fontSize={{ base: "sm", md: "md", lg: "lg" }}
                  color={headerColor}
                >
                  {" "}
                  Confirm Payment
                </Text>
                <Image
                  src="/image/whitedash.png"
                  w={{ base: "1rem", md: "1.3rem", lg: "5.5rem" }}
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
                <Image
                  src="/image/whitedash.png"
                  w={{ base: "1rem", md: "1.3rem", lg: "5.5rem" }}
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
              <VStack w={{ base: "90%", md: "86%", lg: "95%" }}>
                <FormControl
                  isRequired
                  px="6"
                  pt="6"
                  pb="14"
                  mt="8"
                  borderRadius={"2xl"}
                  bg={bgFormcolor}
                >
                  <VStack alignItems={"flex-start"} rowGap="50px">
                    <Text
                      textAlign={"left"}
                      color={TextColor}
                      mb="2"
                      fontSize="2xl"
                    >
                      Confirm Information
                    </Text>
                  </VStack>
                  <HStack justify={"space-between"} columnGap="10px" w="100%">
                    <Box w="42%">
                      <FormLabel
                        fontWeight={"bold"}
                        fontSize={"1xl"}
                        color={"white"}
                        requiredIndicator={false}
                        border="none"
                      >
                        Sell
                      </FormLabel>
                      <Input
                        placeholder="US$"
                        py="6"
                        pl="4"
                        // pr="14"
                        border={"none"}
                        borderRadius="2xl"
                        bg={InputColor}
                        w="100%"
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
                    <Box w="42%">
                      <FormLabel
                        fontWeight={"bold"}
                        fontSize={"1xl"}
                        color={"white"}
                        requiredIndicator={false}
                        border="none"
                      >
                        Get
                      </FormLabel>
                      <Input
                        placeholder="BTC"
                        type={"number"}
                        borderRadius="2xl"
                        py="6"
                        pl="4"
                        // pr="14"
                        border={"none"}
                        bg={InputColor}
                        w="100%"
                      />
                    </Box>
                  </HStack>
                  <Spacer />
                  <HStack justify={"flex-end"}>
                    {" "}
                    <Button
                      bg="#5084FF"
                      py="4"
                      px="14"
                      mt="8"
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

export default SellCryptoAmount;

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
  Divider,
  VStack,
  Icon,
  FormHelperText,
  Image,
  FormLabel,
  FormControl,
  Input,
  Spacer,
} from "@chakra-ui/react";
import React from "react";
import { MdRadioButtonChecked, MdCloud } from "react-icons/md";
import { CiWallet } from "react-icons/ci";
import { CgCloud } from "react-icons/cg";
import { FaWallet, FaCheckCircle } from "react-icons/fa";
import { FiCopy } from "react-icons/fi";
import { Link } from "react-router-dom";
import { refreshicon } from "../../../public/Icons/icons";
import EarnUp from "../../components/EarnUp";
import SubHeader from "../../components/SubHeader";

function SellCryptoDetails() {
  const bg = useColorModeValue("#141416", "#FFFFFF");
  const bgSub = useColorModeValue("#17181C", "#FFFFFF");
  const InputColor = useColorModeValue("#222630", "#FFFFFF");
  const bgFormcolor = useColorModeValue("#18191D", "#F7F7F7");
  const headerColor = useColorModeValue("#FFFFFF", "#23262F");
  const TextColor = useColorModeValue("#FFFFFF", "#969BA9");
  return (
    <Box display={"flex"} flexDir="column" alignItems={"center"} bg={bg}>
      <SubHeader title={"Buy Crypto"} />

      <Box pt="20" pb="28" bg={bg} maxW={"1450px"} w="100%">
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
              bg={"#3772FF"}
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
                  as={FaCheckCircle}
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
                  src="/image/greenline.png"
                  w={{ base: "1rem", md: "1.3rem", lg: "4rem" }}
                  alt="Dot arrow"
                />
                <Icon
                  as={FaCheckCircle}
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
                  src="/image/greenline.png"
                  w={{ base: "1rem", md: "1.3rem", lg: "5.5rem" }}
                  alt="Dot arrow"
                />
                <Icon
                  as={FaCheckCircle}
                  fontSize={{ base: "sm", md: "md", lg: "lg" }}
                  color="green.400"
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
                  color="green.400"
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
                  px="10"
                  pt="6"
                  pb="6"
                  mt="8"
                  borderRadius={"2xl"}
                  bg={bgFormcolor}
                >
                  <VStack alignItems={"center"} mb="4">
                    <HStack mt="4" mb="-2">
                      <Text color={"green.300"} fontSize="4xl">
                        Success
                      </Text>
                      <Icon
                        color="green.400"
                        as={FaCheckCircle}
                        fontSize={{ base: "sm", md: "md", lg: "2xl" }}
                      />
                    </HStack>
                    <Text color={"#AAAEBD"} fontSize="lg" mt="-0.5">
                      You successfully bought 1.356{" "}
                      <Text as={"samp"} color="green.300" fontWeight={"bold"}>
                        BTC
                      </Text>
                      for Rockie!
                    </Text>
                  </VStack>

                  <VStack
                    justify={"space-between"}
                    border={"2px"}
                    borderRadius="2xl"
                    bg={InputColor}
                    px="8"
                  >
                    <HStack
                      color={TextColor}
                      py="4"
                      fontSize={"1xl"}
                      w="100%"
                      justify="space-between"
                    >
                      <Text color={"white"}>Status</Text>
                      <Text color={"gray.200"}>Completed</Text>
                    </HStack>
                    <HStack
                      color={TextColor}
                      py="4"
                      fontSize={"1xl"}
                      w="100%"
                      justify="space-between"
                    >
                      <Text color={"white"}>Transaction ID</Text>
                      <Text color={"gray.200"}>0msx836930...87r398 ID</Text>
                    </HStack>
                  </VStack>
                </FormControl>
              </VStack>

              <VStack w={{ base: "90%", md: "86%", lg: "95%" }}>
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
                  <HStack
                    borderBottom={"2px"}
                    borderColor=" AAAEBD"
                    color={"#AAAEBD"}
                    fontSize="1.2rem"
                    pb="2"
                    justify={"space-between"}
                    mb="4"
                  >
                    {" "}
                    <Text>Account name</Text>{" "}
                    <HStack>
                      <Text color={TextColor} mr="2">
                        {" "}
                        Veum Cecilia
                      </Text>
                      <Icon as={FiCopy} />
                    </HStack>{" "}
                  </HStack>
                  <HStack
                    borderBottom={"2px"}
                    borderColor=" AAAEBD"
                    color={"#AAAEBD"}
                    fontSize="1.2rem"
                    pb="2"
                    justify={"space-between"}
                    mb="4"
                  >
                    {" "}
                    <Text>Account number</Text>{" "}
                    <HStack>
                      <Text color={TextColor} mr="2">
                        {" "}
                        548422222221
                      </Text>
                      <Icon as={FiCopy} />
                    </HStack>{" "}
                  </HStack>
                  <HStack
                    borderBottom={"2px"}
                    borderColor=" AAAEBD"
                    color={"#AAAEBD"}
                    fontSize="1.2rem"
                    pb="2"
                    justify={"space-between"}
                    mb="4"
                  >
                    {" "}
                    <Text>Address</Text>{" "}
                    <HStack>
                      <Text color={TextColor} mr="2">
                        {" "}
                        079 Dariana Knoll, CA
                      </Text>
                      <Icon as={FiCopy} />
                    </HStack>{" "}
                  </HStack>
                  <HStack
                    borderBottom={"2px"}
                    borderColor=" AAAEBD"
                    color={"#AAAEBD"}
                    fontSize="1.2rem"
                    pb="2"
                    justify={"space-between"}
                    mb="4"
                  >
                    {" "}
                    <Text>SWIFT Code</Text>{" "}
                    <HStack>
                      <Text color={TextColor} mr="2">
                        {" "}
                        UI8
                      </Text>
                      <Icon as={FiCopy} />
                    </HStack>{" "}
                  </HStack>
                  <HStack
                    borderBottom={"2px"}
                    borderColor=" AAAEBD"
                    color={"#AAAEBD"}
                    fontSize="1.2rem"
                    pb="2"
                    justify={"space-between"}
                    mb="4"
                  >
                    {" "}
                    <Text>Bank Address</Text>{" "}
                    <HStack>
                      <Text color={TextColor} mr="2">
                        {" "}
                        55416 Powlowski Spring, CA
                      </Text>
                      <Icon as={FiCopy} />
                    </HStack>{" "}
                  </HStack>

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
                      _hover={{ bg: "#5084FF" }}
                      color="white"
                      py="6"
                    >
                      Tradel
                    </Button>
                    <Button
                      w={{ base: "90%", md: "45%", lg: "45%" }}
                      borderRadius="full"
                      bg={"#5084FF"}
                      py="6"
                      color="white"
                      _hover={{ bg: "#5084FF" }}
                    >
                      Wallet
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

export default SellCryptoDetails;

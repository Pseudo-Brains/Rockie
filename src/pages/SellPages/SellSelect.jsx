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
  InputGroup,
  InputLeftElement,
  Select,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import React from "react";
import { MdRadioButtonChecked, MdCloud } from "react-icons/md";
import { BiSearch } from "react-icons/bi";
import { CiWallet } from "react-icons/ci";
import { CgCloud } from "react-icons/cg";
import { FaWallet, FaCheckCircle } from "react-icons/fa";
import { FiCopy } from "react-icons/fi";
import { Link } from "react-router-dom";
import { refreshicon } from "../../../public/Icons/icons";
import EarnUp from "../../components/EarnUp";
import SubHeader from "../../components/SubHeader";

function SellSelect() {
  const bg = useColorModeValue("#141416", "#FFFFFF");
  const bgSub = useColorModeValue("#17181C", "#FFFFFF");
  const InputColor = useColorModeValue("#222630", "#FFFFFF");
  const bgFormcolor = useColorModeValue("#18191D", "#F7F7F7");
  const headerColor = useColorModeValue("#FFFFFF", "#23262F");
  const TextColor = useColorModeValue("#FFFFFF", "#969BA9");
  return (
    <Box display={"flex"} flexDir="column" alignItems={"center"} bg={bg}>
      <SubHeader title={"Sell Crypto"} />

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
            w={{ base: "100%", md: "100%", lg: "88%" }}
            alignItems={"center"}
          >
            <Flex justify={"center"} alignItems="center" flexDir="column">
              <HStack
                w={{ base: "90%", md: "86%", lg: "90%" }}
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
              <VStack w={{ base: "90%", md: "90%", lg: "90%" }} mb="6">
                <FormControl
                  isRequired
                  px="10"
                  pt="6"
                  pb="8"
                  mt="8"
                  borderRadius={"2xl"}
                  bg={bgFormcolor}
                >
                  <VStack>
                    <HStack
                      w="100%"
                      alignItems={"center"}
                      justify="space-between"
                    >
                      <VStack w="35%" alignItems={"flex-start"}>
                        {" "}
                        <Text
                          textAlign={"left"}
                          color={TextColor}
                          fontSize="2xl"
                          fontWeight={"bold"}
                        >
                          Select Crypto
                        </Text>
                        <Text
                          textAlign={"left"}
                          color={"#B1B5C3"}
                          fontSize="1xl"
                        >
                          Which Crypto Do You Want To Search?
                        </Text>
                      </VStack>
                      <HStack w="65%">
                        <InputGroup>
                          <InputLeftElement
                            pointerEvents="none"
                            children={
                              <BiSearch color="#B1B5C3" fontSize="2xl" />
                            }
                          />
                          <Input
                            type="search"
                            border={"none"}
                            w="90%"
                            bg={InputColor}
                            placeholder="search"
                          />
                        </InputGroup>
                        <Select color={"blue.300"} w="140px">
                          <option value="USD">USD</option>
                          <option value="VND">VND</option>
                          <option value="usdt">USDT</option>
                          <option value="usdc">USDC</option>
                        </Select>
                      </HStack>
                    </HStack>

                    <HStack w="100%" justify="flex-end">
                      <Button
                        bg={"#5084FF"}
                        _hover={{ bg: "#5084FF" }}
                        size="lg"
                        borderRadius={"full"}
                        px="16"
                        color={"white"}
                        fontWeight="bold"
                      >
                        Search
                      </Button>{" "}
                    </HStack>
                  </VStack>
                </FormControl>
              </VStack>
              {/* table */}

              <TableContainer
                borderRadius={"2xl"}
                border="2px"
                w="90%"
                py="6"
                p={"8"}
              >
                <Heading fontSize="2xl" color={TextColor} mb="14">
                  Select Crypto
                </Heading>
                <Table variant="simple" borderColor="#B1B5C3">
                  <TableCaption p="6"></TableCaption>
                  <Thead color="#212529">
                    <Tr borderBottom={"2px"} borderBottomColor="#22252E">
                      <Th w="6px" pr="2" color="#212529">
                        #
                      </Th>
                      <Th w="80px" pl="0" color="#212529">
                        Name
                      </Th>
                      <Th isNumeric w="50%" color="#212529">
                        Price{" "}
                      </Th>
                      <Th w="20%" isNumeric color="#212529">
                        24%
                      </Th>
                    </Tr>
                  </Thead>
                  <Tbody
                    borderBottom={"2px"}
                    color={"#767D8E"}
                    borderBottomColor="#22252E"
                    className="show-Btn-Hover"
                    fontWeight={"bold"}
                  >
                    <Tr>
                      <Td>1</Td>
                      <Td pl="0">
                        <HStack>
                          <Image w="90%" src="/image/BtC.png" />
                          <VStack alignItems={"flex-start"}>
                            <Text color="#212529">USDT</Text>
                            <Text>Tether USD</Text>
                          </VStack>
                        </HStack>
                      </Td>
                      <Td isNumeric color="#212529">
                        $2,605.95
                      </Td>
                      <Td color={"green.300"}>+6.04%</Td>
                    </Tr>
                  </Tbody>
                  {/* <Tfoot></Tfoot> */}
                </Table>
              </TableContainer>
            </Flex>
          </Box>
        </Flex>
      </Box>

      <EarnUp />
    </Box>
  );
}

export default SellSelect;

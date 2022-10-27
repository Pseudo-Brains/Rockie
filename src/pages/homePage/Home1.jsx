import React from "react";
import { BiStar } from "react-icons/bi";
import { FaRegCheckCircle } from "react-icons/fa";
import {
  Box,
  Flex,
  Heading,
  Text,
  HStack,
  useColorModeValue,
  Button,
  Image,
  Spinner,
  Spacer,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Icon,
  VStack,
  color,
} from "@chakra-ui/react";
import "../../main.css";

function Home1() {
  const bg = useColorModeValue("#141416", "#FFFFFF");
  const bgSub = useColorModeValue("#17181C", "#FFFFFF");

  const headerColor = useColorModeValue("#FFFFFF", "#23262F");
  const TextColor = useColorModeValue("#FFFFFF", "#969BA9");

  const ShowBg = function (e) {
    e.target.closest(".btn-show").classList.toggle("btn-show-bg");
  };
  return (
    <Box bg={bg}>
      <Box pt="10">
        <Flex
          flexDir={{ base: "column", md: "column", lg: "row" }}
          justify={"center"}
        >
          <Box w={{ base: "100%", md: "100%", lg: "48%" }}>
            <Heading
              color={headerColor}
              fontSize={{ base: "6xl", md: "6xl", lg: "7xl" }}
              p={{ base: "1", md: "3", lg: "3" }}
              mt="12"
            >
              Buy & Sell Digital Assets In The Rockie
            </Heading>
            <Text
              color={"#AEB2C0"}
              fontSize="3xl"
              fontWeight={"bold"}
              pr="28"
              lineHeight={"1"}
              mt={"8"}
            >
              Coin rockie is the easiest, safest, and fastest way to buy & sell
              crypto asset exchange.
            </Text>
            <Button
              colorScheme="blue"
              fontSize={"20"}
              fontWeight="bold"
              mt="12"
              py="8"
              px="16"
              borderRadius={"full"}
            >
              Get Started Now
            </Button>
            <Heading mt="10" color={TextColor}>
              Our Partners
            </Heading>
            <HStack w={"80%"} overflowX="clip" spacing={"20"}>
              <Image
                objectFit="contain"
                src="/image/OurPartners1.png"
                alt="OurPartner1"
                boxSize={"150px"}
              />
              <Image
                objectFit="contain"
                src={"/image/OurPartners2.png"}
                alt="OurPartner2"
                boxSize={"150px"}
              />
              <Image
                objectFit="contain"
                src={"/image/OurPartners3.png"}
                alt="OurPartner3"
                boxSize={"100px"}
              />

              <Image
                objectFit="contain"
                src={"/image/OurPartners4.png"}
                alt="OurPartner4"
                boxSize={"150px"}
              />
              <Image
                objectFit="contain"
                src={"/image/OurPartners2.png"}
                alt="OurPartner2"
                boxSize={"150px"}
              />
              <Image
                objectFit="contain"
                src={"/image/OurPartners3.png"}
                alt="OurPartner3"
                boxSize={"100px"}
              />
            </HStack>
          </Box>
          <Box w={{ base: "100%", md: "100%", lg: "48%" }} mt="14">
            <Image
              boxSize={"80%"}
              objectFit="contain"
              src="/image/banner-01.png"
              alt="OurPartner1"
            />
          </Box>
        </Flex>
      </Box>
      {/* end of box1 */}
      <Box
        m={"auto"}
        bg={bgSub}
        pY="6"
        px={"8"}
        w="94%"
        borderRadius={"2xl"}
        border="2px"
        borderColor={"#22252E"}
      >
        {/* <Flex > */}
        <Box
          onChange={() => ShowBg()}
          // m="auto"
          p="3"
          mb="6"
          w="98%"
          borderBottom="2px"
          borderBottomColor={"#22252E"}
        >
          <Flex flexWrap={"wrap"} color={TextColor} fontSize="2xl">
            <Button color={TextColor} bg="transparent" className="btn-show">
              {" "}
              Crypto
            </Button>
            <Button color={TextColor} bg="transparent" className="btn-show">
              {" "}
              DeFi
            </Button>
            <Button color={TextColor} bg="transparent" className="btn-show">
              {" "}
              BSC
            </Button>
            <Button color={TextColor} bg="transparent" className="btn-show">
              {" "}
              NFT
            </Button>
            <Button color={TextColor} bg="transparent" className="btn-show">
              Metaverse
            </Button>
            <Button color={TextColor} bg="transparent" className="btn-show">
              {" "}
              Polkadot
            </Button>
            <Button color={TextColor} bg="transparent" className="btn-show">
              {" "}
              Solana
            </Button>
            <Button color={TextColor} bg="transparent" className="btn-show">
              {" "}
              Opensea
            </Button>
            <Button color={TextColor} bg="transparent" className="btn-show">
              {" "}
              Makersplace
            </Button>
          </Flex>{" "}
        </Box>
        {/* </Flex> */}
        <Box pb={"8"}>
          <Flex justify={"space-around"}>
            <Box
              w={{ base: "95%", md: "46%", lg: "24%" }}
              bg="#141416"
              px="12"
              py="8"
              borderRadius={"lg"}
            >
              <HStack spacing={"3"}>
                <Image
                  // boxSize={"80%"}
                  objectFit="contain"
                  src="/image/BtC.png"
                  alt="OurPartner1"
                />
                <Text color={TextColor} fontSize="20">
                  {" "}
                  Bitcoin
                </Text>
                <Text color={"#9497A3"} fontSize="24">
                  {" "}
                  BTC/USD
                </Text>
              </HStack>
              <HStack mb="2">
                <Text color={TextColor} fontSize="4xl">
                  USD 46,168.95
                </Text>
              </HStack>
              <HStack>
                <Text color={TextColor} fontSize="lg" fontWeight={"bold"}>
                  36,641.20
                </Text>{" "}
                <Text
                  color={TextColor}
                  bg="red.500"
                  px={"2"}
                  py="0.5"
                  borderRadius="full"
                >
                  -0.79%
                </Text>
              </HStack>
            </Box>
            {/* ttt */}
            <Box
              w={{ base: "95%", md: "46%", lg: "24%" }}
              bg="#141416"
              px="12"
              py="8"
              borderRadius={"lg"}
            >
              <HStack spacing={"3"}>
                <Image
                  // boxSize={"80%"}
                  objectFit="contain"
                  src="/image/Ether.png"
                  alt="OurPartner1"
                />
                <Text color={TextColor} fontSize="20">
                  Ethereum
                </Text>
                <Text color={"#9497A3"} fontSize="24">
                  {" "}
                  ETH/USD
                </Text>
              </HStack>
              <HStack mb="2">
                <Text color={TextColor} fontSize="4xl">
                  USD $3,480.04
                </Text>
              </HStack>
              <HStack>
                <Text color={TextColor} fontSize="lg" fontWeight={"bold"}>
                  36,641.20
                </Text>{" "}
                <Text
                  color={TextColor}
                  bg="green.500"
                  px={"2"}
                  py="0.5"
                  borderRadius="full"
                >
                  +10.55%
                </Text>
              </HStack>
            </Box>
            {/* ttt */}
            <Box
              w={{ base: "95%", md: "46%", lg: "24%" }}
              bg="#141416"
              px="12"
              py="8"
              borderRadius={"lg"}
            >
              <HStack spacing={"3"}>
                <Image
                  // boxSize={"80%"}
                  objectFit="contain"
                  src="/image/Teth.png"
                  alt="OurPartner1"
                />
                <Text color={TextColor} fontSize="20">
                  {" "}
                  Tether
                </Text>
                <Text color={"#9497A3"} fontSize="24">
                  {" "}
                  USDT/USD
                </Text>
              </HStack>
              <HStack mb="2">
                <Text color={TextColor} fontSize="4xl">
                  USD 1.00
                </Text>
              </HStack>
              <HStack>
                <Text color={TextColor} fontSize="lg" fontWeight={"bold"}>
                  36,641.20
                </Text>{" "}
                <Text
                  color={TextColor}
                  bg="red.500"
                  px={"2"}
                  py="0.5"
                  borderRadius="full"
                >
                  -0.01%
                </Text>
              </HStack>
            </Box>
            {/* ttt */}
            <Box
              w={{ base: "95%", md: "46%", lg: "24%" }}
              bg="#141416"
              px="12"
              py="8"
              borderRadius={"lg"}
            >
              <HStack spacing={"3"}>
                <Image
                  // boxSize={"80%"}
                  objectFit="contain"
                  src="/image/BNB.png"
                  alt="OurPartner1"
                />
                <Text color={TextColor} fontSize="20">
                  BNB
                </Text>
                <Text color={"#9497A3"} fontSize="24">
                  BNB/USD
                </Text>
              </HStack>
              <HStack mb="2">
                <Text color={TextColor} fontSize="4xl">
                  USD 443.56
                </Text>
              </HStack>
              <HStack>
                <Text color={TextColor} fontSize="lg" fontWeight={"bold"}>
                  36,641.20
                </Text>{" "}
                <Text
                  color={TextColor}
                  bg="red.500"
                  px={"2"}
                  py="0.5"
                  borderRadius="full"
                >
                  -1.24%
                </Text>
              </HStack>
            </Box>
            {/* tttt */}
          </Flex>
        </Box>
      </Box>
      {/* end of box 2 */}
      <Box>
        <HStack px={"6"} mt="20">
          <Heading
            as={"h2"}
            fontSize={"6xl"}
            fontWeight="bold"
            color={TextColor}
          >
            Market Update
          </Heading>
          <Spacer />
          <Text _hover={"#163DE9"} color={TextColor}>
            See All Coins
          </Text>{" "}
        </HStack>
        <HStack spacing={"8"} ml="8" h={"80px"}>
          {" "}
          <Button
            color={TextColor}
            className="btn-show"
            fontWeight={"bold"}
            fontSize="20"
            bg="transparent"
          >
            {" "}
            View All
          </Button>{" "}
          <Button
            color={TextColor}
            className="btn-show"
            fontWeight={"bold"}
            fontSize="20"
            bg="transparent"
          >
            {" "}
            Metaverse
          </Button>{" "}
          <Button
            color={TextColor}
            bg="transparent"
            fontWeight={"bold"}
            fontSize="20"
          >
            Entertainment
          </Button>{" "}
          <Button
            color={TextColor}
            className="btn-show"
            fontWeight={"bold"}
            fontSize="20"
            bg="transparent"
          >
            Energy
          </Button>{" "}
          <Button
            color={TextColor}
            className="btn-show"
            fontWeight={"bold"}
            fontSize="20"
            bg="transparent"
          >
            NFT
          </Button>{" "}
          <Button
            color={TextColor}
            className="btn-show"
            fontWeight={"bold"}
            fontSize="20"
            bg="transparent"
          >
            Gameing
          </Button>{" "}
          <Button
            color={TextColor}
            className="btn-show"
            fontWeight={"bold"}
            fontSize="20"
            bg="transparent"
          >
            Music
          </Button>{" "}
        </HStack>
        <TableContainer px="6">
          <Table variant="simple">
            <TableCaption></TableCaption>
            <Thead borderBottom={"4px"} borderColor="white" colorScheme="teal">
              <Tr>
                <Th fontSize={"2xl"}></Th>
                <Th fontSize={"2xl"}>#</Th>
                <Th fontSize={"2xl"}>Name</Th>
                <Th fontSize={"2xl"}>Last Price</Th>
                <Th fontSize={"2xl"}>24h %</Th>
                <Th fontSize={"2xl"}>Market Cap</Th>
                <Th fontSize={"2xl"}>Last 7 Days</Th>
                <Th fontSize={"2xl"}></Th>
              </Tr>
            </Thead>
            <Tbody color={TextColor}>
              <Tr
                borderBottom={"2px"}
                color={"#767D8E"}
                borderBottomColor="#22252E"
                className="show-Btn-Hover"
              >
                <Td>
                  <Icon as={BiStar} fontSize="3xl" />
                </Td>
                <Td fontSize={"3xl"} fontWeight="bold">
                  1
                </Td>
                <Td>
                  <Image
                    objectFit="contain"
                    boxSize={"30px"}
                    src="/image/BtC.png"
                    alt="OurPartner1"
                    display={"inline"}
                    mr="3"
                    mb="-2"
                  />
                  <Text
                    display={"inline-block"}
                    color={TextColor}
                    fontSize="24"
                    fontWeight={"bold"}
                  >
                    Bitcoin
                  </Text>
                </Td>
                <Td>
                  <Text fontSize={"2xl"} color={TextColor} fontWeight="bold">
                    $56,623.54
                  </Text>
                </Td>
                <Td>
                  {" "}
                  <Text fontSize={"2xl"} color={TextColor} fontWeight="bold">
                    +1.45%
                  </Text>
                </Td>
                <Td>
                  {" "}
                  <Text fontSize={"2xl"} color={TextColor} fontWeight="bold">
                    {" "}
                    $880,423,640,582
                  </Text>
                </Td>
                <Td>
                  <Image
                    objectFit="fill"
                    // boxSize={"80px"}
                    width={"130px"}
                    h={"60px"}
                    src="/image/Chart.png"
                    alt="OurPartner1"
                    display={"inline"}
                    mr="3"
                    mb="-2"
                  />
                </Td>
                <Td>
                  <Button
                    py="6"
                    px="8"
                    borderRadius={"full"}
                    bg="transparent"
                    className="btn-hover"
                    border="2px"
                    borderColor={"white"}
                    fontSize={"2xl"}
                    color={TextColor}
                  >
                    Trade
                  </Button>
                </Td>
              </Tr>
              <Tr
                borderBottom={"2px"}
                color={"#767D8E"}
                borderBottomColor="#22252E"
                className="show-Btn-Hover"
              >
                <Td>
                  <Icon as={BiStar} fontSize="3xl" />
                </Td>
                <Td fontSize={"3xl"} fontWeight="bold">
                  1
                </Td>
                <Td>
                  <Image
                    objectFit="contain"
                    boxSize={"30px"}
                    src="/image/BtC.png"
                    alt="OurPartner1"
                    display={"inline"}
                    mr="3"
                    mb="-2"
                  />
                  <Text
                    display={"inline-block"}
                    color={TextColor}
                    fontSize="24"
                    fontWeight={"bold"}
                  >
                    Bitcoin
                  </Text>
                </Td>
                <Td>
                  <Text fontSize={"2xl"} color={TextColor} fontWeight="bold">
                    $56,623.54
                  </Text>
                </Td>
                <Td>
                  {" "}
                  <Text fontSize={"2xl"} color={TextColor} fontWeight="bold">
                    +1.45%
                  </Text>
                </Td>
                <Td>
                  {" "}
                  <Text fontSize={"2xl"} color={TextColor} fontWeight="bold">
                    {" "}
                    $880,423,640,582
                  </Text>
                </Td>
                <Td>
                  <Image
                    objectFit="fill"
                    // boxSize={"80px"}
                    width={"130px"}
                    h={"60px"}
                    src="/image/Chart.png"
                    alt="OurPartner1"
                    display={"inline"}
                    mr="3"
                    mb="-2"
                  />
                </Td>
                <Td>
                  <Button
                    py="6"
                    px="8"
                    borderRadius={"full"}
                    bg="transparent"
                    className="btn-hover"
                    border="2px"
                    borderColor={"white"}
                    fontSize={"2xl"}
                    color={TextColor}
                  >
                    Trade
                  </Button>
                </Td>
              </Tr>
              <Tr
                borderBottom={"2px"}
                color={"#767D8E"}
                borderBottomColor="#22252E"
                className="show-Btn-Hover"
              >
                <Td>
                  <Icon as={BiStar} fontSize="3xl" />
                </Td>
                <Td fontSize={"3xl"} fontWeight="bold">
                  1
                </Td>
                <Td>
                  <Image
                    objectFit="contain"
                    boxSize={"30px"}
                    src="/image/BtC.png"
                    alt="OurPartner1"
                    display={"inline"}
                    mr="3"
                    mb="-2"
                  />
                  <Text
                    display={"inline-block"}
                    color={TextColor}
                    fontSize="24"
                    fontWeight={"bold"}
                  >
                    Bitcoin
                  </Text>
                </Td>
                <Td>
                  <Text fontSize={"2xl"} color={TextColor} fontWeight="bold">
                    $56,623.54
                  </Text>
                </Td>
                <Td>
                  {" "}
                  <Text fontSize={"2xl"} color={TextColor} fontWeight="bold">
                    +1.45%
                  </Text>
                </Td>
                <Td>
                  {" "}
                  <Text fontSize={"2xl"} color={TextColor} fontWeight="bold">
                    {" "}
                    $880,423,640,582
                  </Text>
                </Td>
                <Td>
                  <Image
                    objectFit="fill"
                    // boxSize={"80px"}
                    width={"130px"}
                    h={"60px"}
                    src="/image/Chart.png"
                    alt="OurPartner1"
                    display={"inline"}
                    mr="3"
                    mb="-2"
                  />
                </Td>
                <Td>
                  <Button
                    py="6"
                    px="8"
                    borderRadius={"full"}
                    bg="transparent"
                    className="btn-hover"
                    border="2px"
                    borderColor={"white"}
                    fontSize={"2xl"}
                    color={TextColor}
                  >
                    Trade
                  </Button>
                </Td>
              </Tr>
              <Tr
                borderBottom={"2px"}
                color={"#767D8E"}
                borderBottomColor="#22252E"
                className="show-Btn-Hover"
              >
                <Td>
                  <Icon as={BiStar} fontSize="3xl" />
                </Td>
                <Td fontSize={"3xl"} fontWeight="bold">
                  1
                </Td>
                <Td>
                  <Image
                    objectFit="contain"
                    boxSize={"30px"}
                    src="/image/BtC.png"
                    alt="OurPartner1"
                    display={"inline"}
                    mr="3"
                    mb="-2"
                  />
                  <Text
                    display={"inline-block"}
                    color={TextColor}
                    fontSize="24"
                    fontWeight={"bold"}
                  >
                    Bitcoin
                  </Text>
                </Td>
                <Td>
                  <Text fontSize={"2xl"} color={TextColor} fontWeight="bold">
                    $56,623.54
                  </Text>
                </Td>
                <Td>
                  {" "}
                  <Text fontSize={"2xl"} color={TextColor} fontWeight="bold">
                    +1.45%
                  </Text>
                </Td>
                <Td>
                  {" "}
                  <Text fontSize={"2xl"} color={TextColor} fontWeight="bold">
                    {" "}
                    $880,423,640,582
                  </Text>
                </Td>
                <Td>
                  <Image
                    objectFit="fill"
                    // boxSize={"80px"}
                    width={"130px"}
                    h={"60px"}
                    src="/image/Chart.png"
                    alt="OurPartner1"
                    display={"inline"}
                    mr="3"
                    mb="-2"
                  />
                </Td>
                <Td>
                  <Button
                    py="6"
                    px="8"
                    borderRadius={"full"}
                    bg="transparent"
                    className="btn-hover"
                    border="2px"
                    borderColor={"white"}
                    fontSize={"2xl"}
                    color={TextColor}
                  >
                    Trade
                  </Button>
                </Td>
              </Tr>
            </Tbody>
            <Tfoot p={"4"}>
              <Tr> ..</Tr>
            </Tfoot>
          </Table>
        </TableContainer>
      </Box>
      {/* end of box 3 */}
      <Box bg={bgSub} py="28">
        <Box>
          <Flex justify={"center"} flexDir="column" alignItems={"center"}>
            <Heading
              as={"h1"}
              display="block"
              color={headerColor}
              fontSize="6xl"
              mt="20"
            >
              How It Work
            </Heading>
            <Text
              color={"#AAAEBD"}
              fontSize="2xl"
              py={"2"}
              textAlign="center"
              letterSpacing={"normal"}
              fontWeight="bold"
              w={{ base: "90%", md: "80%", lg: "36%" }}
            >
              Stacks is a production-ready library of stackable content blocks
              built in React Native.
            </Text>
          </Flex>
        </Box>
        <Box>
          <Flex justify={"space-evenly"} mt="8">
            <VStack
              w={{ base: "90%", md: "90%", lg: "23%" }}
              // h={{ base: "200px", md: "250px", lg: "300px" }}
            >
              <Image objectFit="cover" src="/image/step1.png" alt="step1" />
              <Text
                fontSize={"lg"}
                mt="0.5"
                color={"#AAAEBD"}
                fontWeight="bold"
              >
                STEP 1
              </Text>
              <Heading fontSize={"2xl"} my="2" color={headerColor}>
                Download
              </Heading>
              <Text
                mt="3"
                color={"#AAAEBD"}
                textAlign="center"
                fontSize="22"
                px={"1.9rem"}
              >
                Stacks Is A Production-Ready Library Of Stackable Content Blocks
                Built In React Native.
              </Text>
            </VStack>
            <VStack
              w={{ base: "90%", md: "90%", lg: "23%" }}
              // h={{ base: "200px", md: "250px", lg: "300px" }}
            >
              <Image objectFit="cover" src="/image/step2.png" alt="step1" />
              <Text fontSize={"lg"} color={"#AAAEBD"} fontWeight="bold">
                STEP 2
              </Text>
              <Heading
                fontSize={"2xl"}
                color={headerColor}
                _hover={{ color: "blue" }}
                my="2"
              >
                Connect Wallet
              </Heading>
              <Text
                mt="3"
                color={"#AAAEBD"}
                textAlign="center"
                fontSize="22"
                px={"1.9rem"}
              >
                Stacks Is A Production-Ready Library Of Stackable Content Blocks
                Built In React Native.
              </Text>
            </VStack>
            <VStack
              w={{ base: "90%", md: "90%", lg: "23%" }}
              // h={{ base: "200px", md: "250px", lg: "300px" }}
            >
              <Image objectFit="cover" src="/image/step3.png" alt="step3" />
              <Text fontSize={"lg"} color={"#AAAEBD"} fontWeight="bold">
                STEP 3
              </Text>
              <Heading
                fontSize={"2xl"}
                color={headerColor}
                _hover={{ color: "blue" }}
                my="2"
              >
                Start Trading
              </Heading>
              <Text
                mt="3"
                color={"#AAAEBD"}
                textAlign="center"
                fontSize="22"
                px={"1.9rem"}
              >
                Stacks Is A Production-Ready Library Of Stackable Content Blocks
                Built In React Native.
              </Text>
            </VStack>
            <VStack
              w={{ base: "90%", md: "90%", lg: "23%" }}
              // h={{ base: "200px", md: "250px", lg: "300px" }}
            >
              <Image objectFit="cover" src="/image/step4.png" alt="step3" />
              <Text fontSize={"lg"} color={"#AAAEBD"} fontWeight="bold">
                STEP 4
              </Text>
              <Heading
                fontSize={"2xl"}
                color={headerColor}
                _hover={{ color: "blue" }}
                my="2"
              >
                Start Trading
              </Heading>
              <Text
                mt="3"
                color={"#AAAEBD"}
                textAlign="center"
                fontSize="22"
                px={"1.9rem"}
              >
                Stacks Is A Production-Ready Library Of Stackable Content Blocks
                Built In React Native.
              </Text>
            </VStack>
          </Flex>
        </Box>
      </Box>

      {/* end of box 4 */}

      <Box bg={bg} py="10" px="4">
        <Flex justify={"center"}>
          <Box w={"60%"} position="relative" mt={"20"}>
            <Image
              boxSize={"10%"}
              objectFit="contain"
              src="/image/btc2.png"
              alt="pc"
              position={"absolute"}
              top="20px"
              right={"20%"}
            />
            <Image
              boxSize={"30%"}
              objectFit="contain"
              src="/image/Ether2.png"
              alt="pc"
              position={"absolute"}
              bottom="20px"
              left={"-100px"}
            />
            <Image
              boxSize={"10%"}
              objectFit="contain"
              src="/image/Td2.png"
              alt="pc"
              position={"absolute"}
              bottom="100px"
              right={"200px"}
            />
            <Image
              boxSize={"15%"}
              objectFit="contain"
              src="/image/usdt.png"
              alt="pc"
              position={"absolute"}
              Top="23px"
              left={"30px"}
            />

            <Image
              boxSize={"15%"}
              objectFit="contain"
              src="/image/ripp2.png"
              alt="pc"
              position={"absolute"}
              Top="-90px"
              left={"180px"}
            />
            <Image
              boxSize={"98%"}
              objectFit="contain"
              src="/image/pcandcoin.png"
              alt="pc"
            />
          </Box>
          <Box w={"40%"} pr="8">
            <VStack alignItems={"flex-start"}>
              <Heading fontSize={"6xl"} mt="-4" mb={"4"} color={headerColor}>
                What Is Rockie
              </Heading>
              <Text
                color={"#AAAEBD"}
                fontSize="1.7rem"
                // lineHeight={"shorter"}
              >
                Experience a variety of trading on Bitcost. You can use various
                types of coin transactions such as Spot Trade, Futures Trade,
                P2P, Staking, Mining, and margin.
              </Text>

              <HStack>
                <Icon fontSize={"3xl"} color={"blue"} as={FaRegCheckCircle} />{" "}
                <Text color={TextColor} fontSize="3xl">
                  View real-time cryptocurrency prices
                </Text>
              </HStack>
              <Text color={"#AAAEBD"} fontSize="1.4rem">
                Experience A Variety Of Trading On Bitcost. You Can Use Various
                Types Of Coin Transactions Such As Spot Trade, Futures Trade,
                P2P, Staking, Mining, And Margin.
              </Text>
              <HStack>
                <Icon fontSize={"3xl"} color={"blue"} as={FaRegCheckCircle} />{" "}
                <Text color={TextColor} fontSize="3xl">
                  View real-time cryptocurrency prices
                </Text>
              </HStack>
              <Text color={"#AAAEBD"} fontSize="1.4rem">
                Experience A Variety Of Trading On Bitcost. You Can Use Various
                Types Of Coin Transactions Such As Spot Trade, Futures Trade,
                P2P, Staking, Mining, And Margin.
              </Text>
            </VStack>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

export default Home1;

import React, { useEffect } from "react";
import { BiStar } from "react-icons/bi";
import { FaRegCheckCircle, FaCheckCircle } from "react-icons/fa";
import {
  Box,
  Flex,
  Heading,
  Text,
  HStack,
  Stack,
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
  Wrap,
  useColorMode,
  WrapItem,
  Avatar,
  AvatarBadge,
  AvatarGroup,
  useModal,
  chakra,
} from "@chakra-ui/react";
import "../../main.css";
import EarnUp from "../../components/EarnUp";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Swiper, SwiperSlide } from "swiper/react";
import Tableer from "../../components/table";
import "swiper/css";

function Home1() {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("#141416", "#FFFFFF");
  const bgSub = useColorModeValue("#17181C", "#F6F6F6");
  const bgSubc = useColorModeValue("#17181C", "#E2E2E2");
  const headerColor = useColorModeValue("#FFFFFF", "#23262F");
  const TextColor = useColorModeValue("#FFFFFF", "#969BA9");
  const bgTr = useColorModeValue("#17181C", "#FFFFFF");
  const bgTrSub = useColorModeValue("#131315", "#FFFFFF");
  // Function
  const ShowBg = function (e) {
    let check = e.target.classList.contains("btn-show");
    if (check) {
      let listOfBtn = e.target.parentElement.childNodes;
      console.log(listOfBtn);
      listOfBtn.forEach((item) => {
        if (item.classList.contains("btn-active")) {
          item.style.backgroundColor = "transparent";
        }
      });
      let clicked = e.target;
      clicked.classList.add("btn-active");
      clicked.style.backgroundColor = "blue";
    }
  };

  // Inter section Observer

  const { ref: myRef, inView: myElementIsVisible } = useInView();
  const { ref: myRef2, inView: myElementIsVisible2 } = useInView();
  const { ref: myRef3, inView: myElementIsVisible3 } = useInView();
  useEffect(() => {
    console.log(myElementIsVisible);
  }, [myElementIsVisible]);

  return (
    <Box bg={bg} w="100%">
      <Box w="100%" bg={bgSub}>
        {" "}
        <Box pt="10" p={{ base: "4" }} pb="20" m="auto" maxW="1450px">
          <Flex
            flexDir={{ base: "column", md: "column", lg: "row" }}
            justify={"space-between"}
          >
            <Box w={{ base: "100%", md: "100%", lg: "52%" }}>
              <Heading
                color={headerColor}
                fontSize={{ base: "3xl", md: "4xl", lg: "6xl" }}
                p={{ base: "3", md: "3", lg: "1" }}
                mt="12"
                letterSpacing={"1"}
              >
                Buy & Sell Digital Assets In The Rockie
              </Heading>
              <Text
                color={"#AEB2C0"}
                fontSize="2xl"
                fontWeight={"bold"}
                pr="22"
                lineHeight={"1"}
                mt={"6"}
              >
                Coin rockie is the easiest, safest, and fastest way to buy &
                sell crypto asset exchange.
              </Text>
              <Button
                colorScheme="blue"
                fontSize={"20"}
                fontWeight="bold"
                mt="12"
                _hover={{ bg: "blue" }}
                py="6"
                px="10"
                borderRadius={"full"}
              >
                Get Started Now
              </Button>
              <Heading fontSize={"2xl"} mt="6" color={TextColor}>
                Our Partners
              </Heading>
              <HStack w={"80%"} overflowX="clip" spacing={"10"} mb="8">
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
            <Box
              w={{ base: "100%", md: "100%", lg: "48%" }}
              display="flex"
              pl="20"
              pb="14"
            >
              <Image
                objectFit="scale-down"
                src="/image/banner-01.png"
                alt="OurPartner1"
              />
            </Box>
          </Flex>
        </Box>
      </Box>
      {/* end of box1 */}
      <Box ref={myRef}>
        <Box
          as={motion.div}
          flexWrap="wrap"
          m={"auto"}
          bg={bgTr}
          py="2"
          mt="-28"
          borderRadius={"2xl"}
          px={"8"}
          w="84%"
          border="2px"
          boxShadow="2xl"
          borderColor={useColorModeValue("#22252D", "#fff")}
          initial={myElementIsVisible ? "" : { y: "0%", opacity: 1 }}
          animate={myElementIsVisible ? "" : { y: "100%", opacity: 0 }}
          transition={{
            type: "Tween",
            // bounce: 2.5,
            duration: 10,
            delay: 2,
          }}
        >
          {/* <Flex > */}
          <Box
            // m="auto"
            p="3"
            mb="6"
            w="98%"
            borderBottom="2px"
            borderBottomColor={"#22252E"}
          >
            <Flex onClick={ShowBg} color={TextColor} justify="" fontSize="2xl">
              <Button color={TextColor} bg="transparent" className="btn-show">
                {" "}
                Crypto
              </Button>
              <Button
                color={TextColor}
                bg="transparent"
                mx="2"
                className="btn-show"
              >
                {" "}
                DeFi
              </Button>
              <Button
                color={TextColor}
                mx="2"
                bg="transparent"
                className="btn-show"
              >
                {" "}
                BSC
              </Button>
              <Button
                color={TextColor}
                mx="2"
                bg="transparent"
                className="btn-show"
              >
                {" "}
                NFT
              </Button>
              <Button
                color={TextColor}
                _hover={{ bg: "transparent" }}
                bg="transparent"
                className="btn-show"
              >
                Metaverse
              </Button>
              <Button
                color={TextColor}
                mx="2"
                bg="transparent"
                className="btn-show"
              >
                {" "}
                Polkadot
              </Button>
              <Button
                color={TextColor}
                mx="2"
                bg="transparent"
                className="btn-show"
              >
                {" "}
                Solana
              </Button>
              <Button
                color={TextColor}
                mx="2"
                bg="transparent"
                className="btn-show"
              >
                {" "}
                Opensea
              </Button>
              <Button
                color={TextColor}
                mx="2"
                bg="transparent"
                className="btn-show"
              >
                {" "}
                Makersplace
              </Button>
            </Flex>{" "}
          </Box>
          {/* </Flex> */}
          <Box pb={"4"}>
            <Flex justify={"space-around"} flexWrap="wrap">
              <Box
                w={{ base: "95%", md: "46%", lg: "24%" }}
                bg={bgTrSub}
                mb="2"
                _hover={{ boxShadow: "xl" }}
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
                px="12"
                bg={bgTrSub}
                mb="2"
                _hover={{ boxShadow: "xl" }}
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
                px="12"
                py="8"
                borderRadius={"lg"}
                bg={bgTrSub}
                mb="2"
                _hover={{ boxShadow: "xl" }}
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
                px="12"
                py="8"
                borderRadius={"lg"}
                bg={bgTrSub}
                mb="2"
                _hover={{ boxShadow: "xl" }}
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
        <HStack spacing={"8"} ml="8" h={"80px"} onClick={ShowBg}>
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
            className="btn-show"
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
            className="btn-show "
            fontWeight={"bold"}
            fontSize="20"
            bg="transparent"
          >
            Music
          </Button>{" "}
        </HStack>
        {/* <TableContainer px="6">
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
        </TableContainer> */}
        <Tableer />
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
          <Flex justify={"space-evenly"} flexWrap="wrap" mt="8">
            <VStack
              w={{ base: "90%", md: "90%", lg: "23%" }}
              // h={{ base: "200px", md: "250px", lg: "300px" }}
            >
              <Image
                as={motion.img}
                whileHover={{ rotateY: -320 }}
                // transition={{ yoyo: "linear" }}
                objectFit="cover"
                src="/image/step1.png"
                alt="step1"
              />
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
              <Image
                objectFit="cover"
                as={motion.img}
                whileHover={{ rotateY: -320 }}
                src="/image/step2.png"
                alt="step1"
              />
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
              <Image
                objectFit="cover"
                as={motion.img}
                whileHover={{ rotateY: -320 }}
                src="/image/step3.png"
                alt="step3"
              />
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
              <Image
                objectFit="cover"
                as={motion.img}
                whileHover={{ rotateY: -320 }}
                src="/image/step4.png"
                alt="step3"
              />
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
      <Box bg={bg} py="10" px="4" ref={myRef2}>
        <Flex justify={"center"} flexWrap="wrap">
          <Box
            w={{ base: "100%", md: "100%", lg: "60%" }}
            position="relative"
            mt={"20"}
            // p={{ base: "2", md: "2" }}
            textAlign="center"
          >
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
              boxSize={{ base: "88%", md: "88%", lg: "90%" }}
              objectFit="contain"
              src="/image/pcandcoin.png"
              alt="pc"
            />
          </Box>
          <Box
            as={motion.div}
            w={{ base: "100%", md: "100%", lg: "40%" }}
            p={{ base: "2", md: "2" }}
            pr={{ lg: "8" }}
            initial={myElementIsVisible2 ? "" : { y: "0", opacity: 1 }}
            animate={myElementIsVisible2 ? "" : { y: "100%", opacity: 0 }}
            transition={{
              type: "spring",
              bounce: 2.5,
              duration: 16,
            }}
          >
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
                <Icon fontSize={"3xl"} color={"#3772FF"} as={FaCheckCircle} />{" "}
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
                <Icon fontSize={"3xl"} color={"#3772FF"} as={FaCheckCircle} />{" "}
                <Text color={TextColor} fontSize="3xl">
                  View real-time cryptocurrency prices
                </Text>
              </HStack>
              <Text color={"#AAAEBD"} fontSize="1.4rem">
                Experience A Variety Of Trading On Bitcost. You Can Use Various
                Types Of Coin Transactions Such As Spot Trade, Futures Trade,
                P2P, Staking, Mining, And Margin.
              </Text>
              <Button
                bg="#3772FF"
                color={"white"}
                py="8"
                fontSize={"2xl"}
                borderRadius="full"
                px="10"
                _hover={{ bg: "blue" }}
                mt="8"
              >
                Explore More{" "}
              </Button>
            </VStack>
          </Box>
        </Flex>
      </Box>
      {/* end of box 5 */}
      <Box ref={myRef3}>
        <Flex
          flexWrap={"wrap"}
          flexDir={{ base: "column", md: "column", lg: "row" }}
          px="3"
          py="2"
        >
          <Box
            w={{ base: "100%", md: "100%", lg: "50%" }}
            as={motion.div}
            initial={myElementIsVisible3 ? "" : { y: "0%", opacity: 1 }}
            F
            animate={myElementIsVisible3 ? "" : { y: "100%", opacity: 0 }}
            transition={{
              bounce: 2.5,
              duration: 7,
            }}
          >
            <VStack mb="38px" rowGap={"30px"}>
              {" "}
              <Heading fontSize={"6xl"} color={headerColor} pr="6">
                Free Your Money & Invest With Confident
              </Heading>
              <Text
                fontSize={"1.8rem"}
                pr="4"
                color={"#AAAEBD"}
                textAlign="left"
              >
                With Cryptor Trade, you can be sure your trading skills are
                matched
              </Text>
            </VStack>

            <Spacer />
            <HStack columnGap={"3px"} mb={"20px"} pl="2">
              {" "}
              <Icon fontSize={"2xl"} color={"#3772FF"} as={FaCheckCircle} />
              <Text fontSize={"3xl"} color={headerColor}>
                Buy, Sell, And Trade On The Go
              </Text>
            </HStack>

            <HStack columnGap={"10px"} mb={"10px"} pl="14">
              {" "}
              <Text color={"#AAAEBD"} fontSize="1.4rem">
                Managa Your Holdings From Your Mobile Decive
              </Text>
            </HStack>
            <Spacer />
            <HStack columnGap={"3px"} mb={"10px"} pl="2">
              {" "}
              <Icon fontSize={"2xl"} color={"#3772FF"} as={FaCheckCircle} />
              <Text fontSize={"3xl"} color={headerColor}>
                Take Control Of Your Wealth
              </Text>
            </HStack>
            <Spacer />
            <HStack>
              <Text color={"#AAAEBD"} fontSize="1.4rem" mb={"10px"} pl="14">
                Rest Assured You (And Only You) Have Access To Your Funds
              </Text>
            </HStack>
            <HStack columnGap={"40px"} px="3">
              <Image
                boxSize="160px"
                objectFit="contain"
                src="/image/GooglePlay.png"
                alt="Dan Abramov"
              />
              <Image
                boxSize="160px"
                objectFit="contain"
                src="/image/AppStore.png"
                alt="Dan Abramov"
              />
            </HStack>
          </Box>
          <Box w={{ base: "100%", md: "100%", lg: "50%" }} position="relative">
            <Image
              boxSize="90%"
              objectFit="cover"
              src="/image/AppMobileView.png"
              alt="Dan Abramov"
            />
          </Box>
        </Flex>
      </Box>
      {/* end of 6 */}

      <Box p="8" w="100%">
        <Flex
          flexDir={{ base: "column", md: "column", lg: "row" }}
          justify={"space-between"}
          flexWrap="wrap"
        >
          <Box
            w={{ base: "100%", md: "100%", lg: "40%" }}
            pr={{ base: "2", md: "2", lg: "16" }}
          >
            <HStack>
              <Text fontSize={"6xl"} lineHeight="60px" color={headerColor}>
                Our Customers Love What We Do
              </Text>
            </HStack>
            <HStack my="4">
              <Text fontSize={"3xl"} pr="4" color={headerColor}>
                Transform Your idea into Reality With Finsweet
              </Text>
            </HStack>
            <HStack mb="8">
              <Text color={"#AAAEBD"} fontSize="2xl">
                It Is A Long Established Fact That A Reader Will Be Distracted
                By The Readable Content Of A Page When Looking At Its Layout.
              </Text>
            </HStack>
            <HStack>
              <Wrap>
                <WrapItem>
                  <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
                </WrapItem>
                <WrapItem>
                  <Avatar
                    name="Ryan Florence"
                    src="https://bit.ly/ryan-florence"
                  />
                </WrapItem>
                <WrapItem>
                  <Avatar
                    name="Prosper Otemuyiwa"
                    src="https://bit.ly/prosper-baba"
                  />
                </WrapItem>
                <WrapItem>
                  <Avatar
                    name="Christian Nwamba"
                    src="https://bit.ly/code-beast"
                  />
                </WrapItem>
                <WrapItem>
                  <Avatar
                    name="Segun Adebayo"
                    src="https://bit.ly/sage-adebayo"
                  />
                </WrapItem>
              </Wrap>
            </HStack>
            <HStack mt="8">
              <Text fontSize="2xl" color={headerColor}>
                30+ Customer Reviews
              </Text>
            </HStack>
          </Box>
          <Box w={{ base: "100%", md: "100%", lg: "50%" }} p="8">
            <Flex>
              <Box
                borderLeft={"8px"}
                borderLeftRadius="lg"
                borderLeftColor="blue.300"
                py="14"
                px="10"
                bg={"#222630"}
              >
                <HStack>
                  <Text fontSize={"3xl"} fontWeight="bold" color={TextColor}>
                    “Great course I really enjoyed it and the course was way
                    easy to learn with very good explanations of the code, I
                    could easily understand and develop applications with the
                    knowledge gathered during the course.”{" "}
                  </Text>
                </HStack>
                <HStack>
                  <VStack>
                    <Avatar
                      size="lg"
                      name="Segun Adebayo"
                      src="https://bit.ly/sage-adebayo"
                    />
                  </VStack>
                  <VStack mt="2">
                    <Text
                      fontSize={"2xl"}
                      fontWeight="bold"
                      color={headerColor}
                    >
                      Johnny Andro
                    </Text>
                    <Text fontSize={"lg"} color={headerColor}>
                      Director Company
                    </Text>
                  </VStack>
                  <Spacer />
                  <VStack>
                    <Image
                      objectFit="cover"
                      src="/image/comentLogo.png"
                      alt="Dan Abramov"
                    />
                  </VStack>
                </HStack>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Box>
      {/* end of 7 */}
      <EarnUp />
    </Box>
  );
}

export default Home1;

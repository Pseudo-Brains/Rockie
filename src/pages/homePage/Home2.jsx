import {
  Box,
  Flex,
  Icon,
  Image,
  Text,
  Heading,
  Table,
  Thead,
  Tbody,
  AspectRatio,
  Tr,
  Th,
  Td,
  TableContainer,
  Link,
} from "@chakra-ui/react";
import { FaArrowUp, FaStar, FaCircle } from "react-icons/fa";

const Home2 = () => {
  return (
    <Box width="100%" pt="50px" minH="100vh" bgColor="#141416">
      <Box w="100%" minH="100px" bgColor="#18191d">
        <Box w="80%" minH="100px" color="white" m="auto">
          <Flex bgColor="#" w="100%" justify="space-between" h="700px">
            <Box h="90%" w="45%" pt="30px">
              <Heading py="30px" fontSize="6xl" lineHeight="75px">
                A trusted and secure cryptocurrency exchange.
              </Heading>
              <Text pb="40px" fontSize="20px" fontWeight="bold">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Text>
              <Box
                bgColor="#3772ff"
                w="fit-content"
                px="20px"
                py="10px"
                fontWeight="700"
                borderRadius="35px"
              >
                Trading Now
              </Box>
            </Box>
            <Flex align="center" h="90%" w="50%">
              <Image
                objectFit="cover"
                src="/image/bannerHome2.png"
                alt="Homebanner"
              />
            </Flex>
          </Flex>
        </Box>
      </Box>
      <Flex
        minH="250px"
        mt="-100px"
        mx="auto"
        borderRadius="30px"
        bg="#18191d"
        w="75%"
        border="1px solid"
        align="center"
        justify="space-around"
      >
        <Flex
          align="center"
          justify="center"
          direction="column"
          width="24%"
          h="190px"
        >
          <Flex justify="space-between" w="90%">
            <Flex
              justify="space-between"
              align="center"
              direction="column"
              width="30%"
            >
              <Image
                objectFit="cover"
                src="/image/Bitcoin.png"
                alt="Homebanner"
              />
              <Text p="13px" fontWeight="bold" color="white">
                Bitcoin
              </Text>
            </Flex>
            <Flex
              align="center"
              justify="space-between"
              direction="column"
              width="40%"
            >
              <Image
                objectFit="cover"
                src="/image/chart-bit.png"
                alt="Homebanner"
              />
              <Flex
                align="center"
                borderRadius="15px"
                py="5px"
                px="15px"
                bgColor="#58bd7d"
              >
                <Icon as={FaArrowUp} />
                7.2%
              </Flex>
            </Flex>
          </Flex>
          <Flex p="13px" justify="space-between" w="80%">
            <Heading fontSize="22px" fontWeight="bold" color="white">
              USD 53,260.20
            </Heading>
            <Text fontSize="14px" color="white">
              BTC
            </Text>
          </Flex>
        </Flex>
        <Flex
          align="center"
          justify="center"
          direction="column"
          width="24%"
          h="190px"
        >
          <Flex justify="space-between" w="90%">
            <Flex
              justify="space-between"
              align="center"
              direction="column"
              width="30%"
            >
              <Image
                objectFit="cover"
                src="/image/Ether7.png"
                alt="Homebanner"
              />
              <Text p="13px" fontWeight="bold" color="white">
                Etherium
              </Text>
            </Flex>
            <Flex
              align="center"
              justify="space-between"
              direction="column"
              width="40%"
            >
              <Image
                objectFit="cover"
                src="/image/downchart.png"
                alt="Homebanner"
              />
              <Flex
                align="center"
                borderRadius="15px"
                py="5px"
                px="15px"
                bgColor="#cb3333"
              >
                <Icon as={FaArrowUp} />
                7.2%
              </Flex>
            </Flex>
          </Flex>
          <Flex p="13px" justify="space-between" w="80%">
            <Heading fontSize="22px" fontWeight="bold" color="white">
              USD 53,260.20
            </Heading>
            <Text fontSize="14px" color="white">
              ETH
            </Text>
          </Flex>
        </Flex>
        <Flex
          align="center"
          justify="center"
          direction="column"
          width="24%"
          h="190px"
        >
          <Flex justify="space-between" w="90%">
            <Flex
              justify="space-between"
              align="center"
              direction="column"
              width="30%"
            >
              <Image
                objectFit="cover"
                src="/image/Teter.png"
                alt="Homebanner"
              />
              <Text p="13px" fontWeight="bold" color="white">
                Teter
              </Text>
            </Flex>
            <Flex
              align="center"
              justify="space-between"
              direction="column"
              width="40%"
            >
              <Image
                objectFit="cover"
                src="/image/chart-bit.png"
                alt="Homebanner"
              />
              <Flex
                align="center"
                borderRadius="15px"
                py="5px"
                px="15px"
                bgColor="#58bd7d"
              >
                <Icon as={FaArrowUp} />
                7.2%
              </Flex>
            </Flex>
          </Flex>
          <Flex p="13px" justify="space-between" w="80%">
            <Heading fontSize="22px" fontWeight="bold" color="white">
              USD 53,260.20
            </Heading>
            <Text fontSize="14px" color="white">
              USDT
            </Text>
          </Flex>
        </Flex>
        <Flex
          align="center"
          justify="center"
          direction="column"
          width="24%"
          h="190px"
        >
          <Flex justify="space-between" w="90%">
            <Flex
              justify="space-between"
              align="center"
              direction="column"
              width="30%"
            >
              <Image
                objectFit="cover"
                src="/image/BNByy.png"
                alt="Homebanner"
              />
              <Text p="13px" fontWeight="bold" color="white">
                BNB
              </Text>
            </Flex>
            <Flex
              align="center"
              justify="space-between"
              direction="column"
              width="40%"
            >
              <Image
                objectFit="cover"
                src="/image/chart-bit.png"
                alt="Homebanner"
              />
              <Flex
                align="center"
                borderRadius="15px"
                py="5px"
                px="15px"
                bgColor="#58bd7d"
              >
                <Icon as={FaArrowUp} />
                7.2%
              </Flex>
            </Flex>
          </Flex>
          <Flex p="13px" justify="space-between" w="80%">
            <Heading fontSize="22px" fontWeight="bold" color="white">
              USD 53,260.20
            </Heading>
            <Text fontSize="14px" color="white">
              BNB
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Box w="80%" m="30px auto" minH="500px">
        <Flex w="100%" minH="600px" align="center" justify="space-between">
          <Flex w="46%" minH="600px">
            <Flex
              direction="column"
              justify="space-between"
              maxH="100%"
              align="center"
              w="50%"
            >
              <Flex
                align="center"
                direction="column"
                color="white"
                bgColor="#18191d"
                pt="35px"
                w="100%"
                h="46%"
                borderRadius="10px"
              >
                <Image
                  objectFit="cover"
                  h="60px"
                  src="/image/pottiff.png"
                  alt="Homebanner"
                />
                <Heading py="20px" fontSize="25px">
                  <Link href="#">Portfolio Manager</Link>
                </Heading>
                <Text align="center" fontWeight="900">
                  Buy And Sell Popular Digital Currencies, Keep Track Of Them In
                  The One Place.
                </Text>
              </Flex>
              <Flex
                align="center"
                direction="column"
                color="white"
                bgColor="#18191d"
                pt="35px"
                w="100%"
                h="47%"
                borderRadius="10\px"
              >
                <Image
                  objectFit="cover"
                  h="60px"
                  src="/image/mobbil.png"
                  alt="Homebanner"
                />
                <Heading py="20px" fontSize="25px">
                  <Link href="#">Mobile Apps</Link>
                </Heading>
                <Text align="center" fontWeight="900">
                  Stay On Top Of The Markets With The Cryptolly App For Android
                  Or IOS.
                </Text>
              </Flex>
            </Flex>
            <Flex align="center" w="50%" direction="row-reverse" maxH="50%">
              <Flex
                align="center"
                direction="column"
                color="white"
                bgColor="#18191d"
                pt="35px"
                w="90%"
                h="50%"
                borderRadius="10px"
              >
                <Image
                  objectFit="cover"
                  h="60px"
                  src="/image/vauuul.png"
                  alt="Homebanner"
                />
                <Heading py="20px" fontSize="25px">
                  <Link href="#">Vault Protection</Link>
                </Heading>
                <Text align="center" fontWeight="900">
                  For Added Security, Store Your Funds In A Vault With Time
                  Delayed Withdrawals.
                </Text>
              </Flex>
            </Flex>
          </Flex>
          <Flex
            w="48%"
            color="white"
            align="center"
            // border="1px solid"
            minH="600px"
          >
            <Box minH="300px" w="100%">
              <Heading pt="20px" fontSize="50px">
                The Most Trusted Cryptocurrency Platform.
              </Heading>
              <Text py="30px" fontSize="20px">
                Cryptolly has a variety of features that make it the best place
                to start trading
              </Text>
              <Box
                bgColor="#5184ff"
                px="95px"
                py="12px"
                borderRadius="30px"
                w="fit-content"
              >
                Let's Trade Now
              </Box>
            </Box>
          </Flex>
        </Flex>
      </Box>
      <Box w="80%" m="30px auto" minH="500px" bgColor="#18191d">
        <Flex color="white" justify="space-between" w="100%" align="center">
          <Heading fontSize="42px">Market Update</Heading>
          <Text fontSize="20px">
            <Link>See All Coins</Link>
          </Text>
        </Flex>
        <Flex h="50px" align="center" w="60%">
          sas
        </Flex>
        <TableContainer>
          <Table size="lg" fontSize="20px" fontWeight="900">
            <Thead>
              <Tr>
                <Th></Th>
                <Th>#</Th>
                <Th>Name</Th>
                <Th>Last Price</Th>
                <Th>24h %</Th>
                <Th>Market Cap</Th>
                <Th>Last 7 Days</Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody color="white">
              <Tr _hover="red">
                <Td>
                  <Icon as={FaStar} />
                </Td>
                <Td>1</Td>
                <Td>
                  <Flex align="center">
                    <Image
                      objectFit="cover"
                      h="20px"
                      src="/image/Bitcoin.png"
                      alt="Homebanner"
                    />
                    <Text pl="10px">Bitcoin</Text>
                  </Flex>
                </Td>
                <Td>$56,623.54</Td>
                <Td>+1.45%</Td>
                <Td>$880,423,640,582</Td>
                <Td>
                  <Image
                    objectFit="cover"
                    h="20px"
                    src="/image/chart-bit.png"
                    alt="Homebanner"
                  />
                </Td>
                <Td>
                  <Box
                    border="2px solid"
                    borderRadius="20px"
                    px="20px"
                    w="fit-content"
                  >
                    Trade
                  </Box>
                </Td>
              </Tr>
              <Tr _hover="red">
                <Td>
                  <Icon as={FaStar} />
                </Td>
                <Td>2</Td>
                <Td>
                  <Flex align="center">
                    <Image
                      objectFit="cover"
                      h="20px"
                      src="/image/Ether7.png"
                      alt="Homebanner"
                    />
                    <Text pl="10px">Etherium</Text>
                  </Flex>
                </Td>
                <Td>$56,623.54</Td>
                <Td>-5.12%</Td>
                <Td>$880,423,640,582</Td>
                <Td>
                  <Image
                    objectFit="cover"
                    h="20px"
                    src="/image/downchart.png"
                    alt="Homebanner"
                  />
                </Td>
                <Td>
                  <Box
                    border="2px solid"
                    borderRadius="20px"
                    px="20px"
                    w="fit-content"
                  >
                    Trade
                  </Box>
                </Td>
              </Tr>
              <Tr _hover="red">
                <Td>
                  <Icon as={FaStar} />
                </Td>
                <Td>3</Td>
                <Td>
                  <Flex align="center">
                    <Image
                      objectFit="cover"
                      h="20px"
                      src="/image/BNByy.png"
                      alt="Homebanner"
                    />
                    <Text pl="10px">Binance</Text>
                  </Flex>
                </Td>
                <Td>$56,623.54</Td>
                <Td>-3.75%</Td>
                <Td>$880,423,640,582</Td>
                <Td>
                  <Image
                    objectFit="cover"
                    h="20px"
                    src="/image/downchart.png"
                    alt="Homebanner"
                  />
                </Td>
                <Td>
                  <Box
                    border="2px solid"
                    borderRadius="20px"
                    px="20px"
                    w="fit-content"
                  >
                    Trade
                  </Box>
                </Td>
              </Tr>
              <Tr _hover="red">
                <Td>
                  <Icon as={FaStar} />
                </Td>
                <Td>4</Td>
                <Td>
                  <Flex align="center">
                    <Image
                      objectFit="cover"
                      h="20px"
                      src="/image/Teter.png"
                      alt="Homebanner"
                    />
                    <Text pl="10px">Tether</Text>
                  </Flex>
                </Td>
                <Td>$56,623.54</Td>
                <Td>+1.45%</Td>
                <Td>$880,423,640,582</Td>
                <Td>
                  <Image
                    objectFit="cover"
                    h="20px"
                    src="/image/chart-bit.png"
                    alt="Homebanner"
                  />
                </Td>
                <Td>
                  <Box
                    border="2px solid"
                    borderRadius="20px"
                    px="20px"
                    w="fit-content"
                  >
                    Trade
                  </Box>
                </Td>
              </Tr>
              <Tr _hover="red">
                <Td>
                  <Icon as={FaStar} />
                </Td>
                <Td>5</Td>
                <Td>
                  <Flex align="center">
                    <Image
                      objectFit="cover"
                      h="20px"
                      src="/image/Bitcoin.png"
                      alt="Homebanner"
                    />
                    <Text pl="10px">Bitcoin</Text>
                  </Flex>
                </Td>
                <Td>$56,623.54</Td>
                <Td>+1.45%</Td>
                <Td>$880,423,640,582</Td>
                <Td>
                  <Image
                    objectFit="cover"
                    h="20px"
                    src="/image/chart-bit.png"
                    alt="Homebanner"
                  />
                </Td>
                <Td>
                  <Box
                    border="2px solid"
                    borderRadius="20px"
                    px="20px"
                    w="fit-content"
                  >
                    Trade
                  </Box>
                </Td>
              </Tr>
              <Tr _hover="red">
                <Td>
                  <Icon as={FaStar} />
                </Td>
                <Td>6</Td>
                <Td>
                  <Flex align="center">
                    <Image
                      objectFit="cover"
                      h="20px"
                      src="/image/Bitcoin.png"
                      alt="Homebanner"
                    />
                    <Text pl="10px">Bitcoin</Text>
                  </Flex>
                </Td>
                <Td>$56,623.54</Td>
                <Td>+1.45%</Td>
                <Td>$880,423,640,582</Td>
                <Td>
                  <Image
                    objectFit="cover"
                    h="20px"
                    src="/image/downchart.png"
                    alt="Homebanner"
                  />
                </Td>
                <Td>
                  <Box
                    border="2px solid"
                    borderRadius="20px"
                    px="20px"
                    w="fit-content"
                  >
                    Trade
                  </Box>
                </Td>
              </Tr>
              <Tr _hover="red">
                <Td>
                  <Icon as={FaStar} />
                </Td>
                <Td>7</Td>
                <Td>
                  <Flex align="center">
                    <Image
                      objectFit="cover"
                      h="20px"
                      src="/image/Bitcoin.png"
                      alt="Homebanner"
                    />
                    <Text pl="10px">Bitcoin</Text>
                  </Flex>
                </Td>
                <Td>$56,623.54</Td>
                <Td>+1.45%</Td>
                <Td>$880,423,640,582</Td>
                <Td>
                  <Image
                    objectFit="cover"
                    h="20px"
                    src="/image/chart-bit.png"
                    alt="Homebanner"
                  />
                </Td>
                <Td>
                  <Box
                    border="2px solid"
                    borderRadius="20px"
                    px="20px"
                    w="fit-content"
                  >
                    Trade
                  </Box>
                </Td>
              </Tr>
              <Tr _hover="red">
                <Td>
                  <Icon as={FaStar} />
                </Td>
                <Td>8</Td>
                <Td>
                  <Flex align="center">
                    <Image
                      objectFit="cover"
                      h="20px"
                      src="/image/Bitcoin.png"
                      alt="Homebanner"
                    />
                    <Text pl="10px">Bitcoin</Text>
                  </Flex>
                </Td>
                <Td>$56,623.54</Td>
                <Td>+1.45%</Td>
                <Td>$880,423,640,582</Td>
                <Td>
                  <Image
                    objectFit="cover"
                    h="20px"
                    src="/image/chart-bit.png"
                    alt="Homebanner"
                  />
                </Td>
                <Td>
                  <Box
                    border="2px solid"
                    borderRadius="20px"
                    px="20px"
                    w="fit-content"
                  >
                    Trade
                  </Box>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
      <Box w="80%" m="30px auto" minH="600px">
        <Flex w="100%" justify="space-between" minH="600px">
          <Flex
            maxH="100%"
            backgroundImage="url('/image/Globaly.png')"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            w="45%"
            align="center"
          >
            <Flex
              w="50%"
              justify="space-between"
              h="70%"
              direction="column"
              alignItems="flex-end"
            >
              <Flex
                bgColor="#222630"
                color="white"
                borderRadius="10px"
                align="center"
                w="60%"
                justify="center"
              >
                <Image
                  objectFit="cover"
                  h="30px"
                  src="/image/compass.png"
                  alt="Homebanner"
                />
                <Box mx="13px">
                  <Heading>198+</Heading>
                  <Text>Countries</Text>
                </Box>
              </Flex>
              <Flex
                bgColor="#222630"
                color="white"
                borderRadius="10px"
                align="center"
                w="60%"
                h="17%"
                justify="center"
                // px="30px"
                // py="5px"
              >
                <Image
                  objectFit="cover"
                  h="30px"
                  src="/image/profile.png"
                  alt="Homebanner"
                />
                <Box mx="13px">
                  <Heading fontSize="25px">20 Million+</Heading>
                  <Text>Trades</Text>
                </Box>
              </Flex>
            </Flex>
            <Flex
              w="50%"
              justify="center"
              h="70%"
              direction="column"
              alignItems="center"
            >
              <Flex
                bgColor="#222630"
                color="white"
                borderRadius="10px"
                align="center"
                w="60%"
                justify="center"
                // px="30px"
                // py="5px"
              >
                <Image
                  objectFit="cover"
                  h="30px"
                  src="/image/refresh.png"
                  alt="Homebanner"
                />
                <Box mx="13px">
                  <Heading>350+</Heading>
                  <Text>Trading Pairs</Text>
                </Box>
              </Flex>
            </Flex>
          </Flex>
          <Box width="50%" color="white">
            <Heading py="13px">
              We Are The Most Trusted Cryptocurrency Platform.
            </Heading>
            <Text py="13px" fontWeight="600" fontSize="20px">
              We believe Cryptolly is here to stay — and that a future worth
              building is one which opens its doors and invites everyone in.
            </Text>
            <Flex
              direction="column"
              justify="space-between"
              h="60%"
              color="white"
            >
              <Flex align="center" w="70%" h="22%" justify="space-between">
                <Flex
                  h="100%"
                  w="18%"
                  justify="center"
                  align="center"
                  borderRadius="10px"
                  bgColor="#281719"
                  mx="3px"
                >
                  <Image
                    objectFit="cover"
                    h="30px"
                    src="/image/refresh.png"
                    alt="Homebanner"
                  />
                </Flex>
                <Box w="75%">
                  <Heading fontSize="27px">Clarity</Heading>
                  <Text fontWeight="bold">
                    We Help You Make Sense Of The Coins, The Terms, The Dense
                    Charts And Market Changes.
                  </Text>
                </Box>
              </Flex>
              <Flex align="center" w="70%" h="22%" justify="space-between">
                <Flex
                  h="100%"
                  w="18%"
                  justify="center"
                  align="center"
                  borderRadius="10px"
                  bgColor="#281719"
                  mx="3px"
                >
                  <Image
                    objectFit="cover"
                    h="30px"
                    src="/image/piggyb.png"
                    alt="Homebanner"
                  />
                </Flex>
                <Box w="75%">
                  <Heading fontSize="27px">Confidence</Heading>
                  <Text fontWeight="bold">
                    Our Markets Are Always Up To Date, Sparking Curiosity With
                    Real-World Relevance.
                  </Text>
                </Box>
              </Flex>
              <Flex align="center" w="70%" h="22%" justify="space-between">
                <Flex
                  h="100%"
                  w="18%"
                  justify="center"
                  align="center"
                  borderRadius="10px"
                  bgColor="#281719"
                  mx="3px"
                >
                  <Image
                    objectFit="cover"
                    h="30px"
                    src="/image/scorpio.png"
                    alt="Homebanner"
                  />
                </Flex>
                <Box w="75%">
                  <Heading fontSize="27px">Community</Heading>
                  <Text fontWeight="bold">
                    We Supports The Crypto Community, Putting Data In The Hands
                    Which Need It Most.
                  </Text>
                </Box>
              </Flex>
            </Flex>
          </Box>
        </Flex>
      </Box>
      <Box w="80%" m="30px auto" color="white">
        <Flex align="center" w="100%" direction="column">
          <Heading pt="20px">How It Works</Heading>
          <Text py="20px" w="30%" textAlign="center" fontSize="22px">
            Stacks is a production-ready library of stackable content blocks
            built in React Native.
          </Text>
          <Flex w="100%" py="50px" justify="space-between" minH="80%">
            <Flex
              align="center"
              justify="center"
              w="21%"
              direction="column"
              position="relative"
            >
              <Image
                objectFit="cover"
                src="/image/weber1.png"
                alt="Homebanner"
              />
              <Text pt="10px">STEP 1</Text>
              <Heading py="10px" fontSize="20px">
                Download
              </Heading>
              <Text textAlign="center">
                Stacks Is A Production-Ready Library Of Stackable Content Blocks
                Built In React Native.
              </Text>
              <Image
                position="absolute"
                mt="-150px"
                zIndex="10"
                ml="370px"
                objectFit="cover"
                src="/image/linerr.png"
                alt="Homebanner"
              />
            </Flex>
            <Flex
              align="center"
              justify="center"
              w="21%"
              direction="column"
              position="relative"
            >
              <Image
                objectFit="cover"
                src="/image/weber2.png"
                alt="Homebanner"
              />
              <Text pt="10px">STEP 2</Text>
              <Heading py="10px" fontSize="20px">
                Connect Wallet
              </Heading>
              <Text textAlign="center">
                Stacks Is A Production-Ready Library Of Stackable Content Blocks
                Built In React Native.
              </Text>
              <Image
                position="absolute"
                zIndex="10"
                mt="-150px"
                ml="370px"
                objectFit="cover"
                src="/image/linerr.png"
                alt="Homebanner"
              />
            </Flex>
            <Flex
              align="center"
              justify="center"
              w="21%"
              direction="column"
              position="relative"
            >
              <Image
                objectFit="cover"
                src="/image/weber3.png"
                alt="Homebanner"
              />
              <Text pt="10px">STEP 3</Text>
              <Heading py="10px" fontSize="20px">
                Start Trading
              </Heading>
              <Text textAlign="center">
                Stacks Is A Production-Ready Library Of Stackable Content Blocks
                Built In React Native.
              </Text>
              <Image
                position="absolute"
                zIndex="10"
                mt="-150px"
                ml="370px"
                objectFit="cover"
                src="/image/linerr.png"
                alt="Homebanner"
              />
            </Flex>
            <Flex
              align="center"
              justify="center"
              w="21%"
              direction="column"
              position="relative"
            >
              <Image
                objectFit="cover"
                src="/image/weber4.png"
                alt="Homebanner"
              />
              <Text pt="10px">STEP 4</Text>
              <Heading py="10px" fontSize="20px">
                Start Trading
              </Heading>
              <Text textAlign="center">
                Stacks Is A Production-Ready Library Of Stackable Content Blocks
                Built In React Native.
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Box>
      <Box w="80%" m="30px auto" color="white">
        <Flex align="center" w="100%" direction="column">
          <Heading pt="20px">Learn And Earn</Heading>
          <Text py="20px" w="30%" textAlign="center" fontSize="22px">
            Stacks is a production-ready library of stackable content blocks
            built in React Native.
          </Text>
          <Flex
            w="100%"
            py="30px"
            justify="space-between"
            minH="500px"
            // bgColor="blue"
          >
            <Flex
              maxH="80%"
              direction="column"
              w="30%"
              borderTopRadius="20px"
              // border="1px solid"
            >
              <Box
                h="50%"
                borderTopRadius="20px"
                backgroundImage="url('/image/vidddd.jpg')"
                backgroundPosition="center"
                backgroundSize="cover"
                backgroundRepeat="no-repeat"
                w="100%"
                bgColor="pink"
              >
                <AspectRatio w="50px" top="20" m="auto" ratio={1}>
                  <iframe
                    title="naruto"
                    src="https://www.youtube.com/embed/QhBnZ6NPOY0"
                    allowFullScreen
                  />
                </AspectRatio>
              </Box>
              <Box
                p="5px"
                bgColor="#3772ff"
                w="fit-content"
                my="10px"
                borderRadius="3px"
              >
                LEARN & EARN
              </Box>
              <Heading fontSize="25px" py="10px">
                Learn about UI8 coin and earn an All-Access Pass
              </Heading>
              <Flex justify="space-between">
                <Flex w="30%" justify="space-between" align="center">
                  <Icon color="whatsapp.300" as={FaCircle} />
                  <Text>Floyd Buckridge</Text>
                </Flex>
                <Text>Feb 03, 2021</Text>
              </Flex>
            </Flex>

            <Flex maxH="80%" direction="column" w="30%" borderTopRadius="20px">
              <Box
                h="50%"
                borderTopRadius="20px"
                backgroundImage="url('/image/viidaa.jpg')"
                backgroundPosition="center"
                backgroundSize="cover"
                backgroundRepeat="no-repeat"
                w="100%"
                bgColor="pink"
              >
                <AspectRatio w="50px" top="20" m="auto" ratio={1}>
                  <iframe
                    title="naruto"
                    src="https://www.youtube.com/embed/QhBnZ6NPOY0"
                    allowFullScreen
                  />
                </AspectRatio>
              </Box>
              <Box
                p="5px"
                bgColor="#3772ff"
                w="fit-content"
                my="10px"
                borderRadius="3px"
              >
                LEARN & EARN
              </Box>
              <Heading fontSize="25px" py="10px">
                Learn about UI8 coin and earn an All-Access Pass
              </Heading>
              <Flex justify="space-between">
                <Flex w="30%" justify="space-between" align="center">
                  <Icon color="whatsapp.300" as={FaCircle} />
                  <Text>Floyd Buckridge</Text>
                </Flex>
                <Text>Feb 03, 2021</Text>
              </Flex>
            </Flex>
            <Flex maxH="80%" direction="column" w="30%" borderTopRadius="20px">
              <Box
                h="50%"
                borderTopRadius="20px"
                backgroundImage="url('/image/viidaa.jpg')"
                backgroundPosition="center"
                backgroundSize="cover"
                backgroundRepeat="no-repeat"
                w="100%"
                bgColor="pink"
              >
                <AspectRatio w="50px" top="20" m="auto" ratio={1}>
                  <iframe
                    title="naruto"
                    src="https://www.youtube.com/embed/QhBnZ6NPOY0"
                    allowFullScreen
                  />
                </AspectRatio>
              </Box>
              <Box
                p="5px"
                bgColor="#3772ff"
                w="fit-content"
                my="10px"
                borderRadius="3px"
              >
                LEARN & EARN
              </Box>
              <Heading fontSize="25px" py="10px">
                Learn about UI8 coin and earn an All-Access Pass
              </Heading>
              <Flex justify="space-between">
                <Flex w="30%" justify="space-between" align="center">
                  <Icon color="whatsapp.300" as={FaCircle} />
                  <Text>Floyd Buckridge</Text>
                </Flex>
                <Text>Feb 03, 2021</Text>
              </Flex>
            </Flex>
          </Flex>
          <Box
            px="20px"
            py="5px"
            border="1px solid"
            w="fit-content"
            borderRadius="20px"
          >
            Load More
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Home2;

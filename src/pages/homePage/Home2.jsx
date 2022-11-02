import { useState } from "react";
import Tableer from "../../components/table";
import {
  Box,
  Flex,
  Icon,
  Image,
  Text,
  Heading,
  useColorModeValue,
  AspectRatio,
  Link,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import { FaArrowUp, FaCircle } from "react-icons/fa";

const Home2 = () => {
  const bg = useColorModeValue("#141416", "#FFFFFF");
  const bgx = useColorModeValue("#141416", "#f6f6f6");
  const bgSub = useColorModeValue("#17181C", "#f6f6f6");
  const bgSubc = useColorModeValue("#17181C", "#E2E2E2");
  const bgSubcc = useColorModeValue("#17181C", "#ffffff");
  const headerColor = useColorModeValue("#FFFFFF", "#23262F");
  const [red, setRed] = useState(false);
  const [actve, isactive] = useState(false);

  const ShowBg = function () {
    setRed((prev) => prev == true);
    console.log(red);
  };

  const ShowBgs = function () {
    isactive((prev) => !prev);
    // if (red && isactive) {

    // }
    console.log(actve);
  };

  return (
    <Box width="100%" pt="0px" minH="100vh" bg={bg}>
      <Box w="100%" minH="100px" bg={bgx}>
        <Box
          pt={"50px"}
          w={{ base: "100%", lg: "90%", xl: "80%" }}
          minH="100px"
          color={headerColor}
          m="auto"
        >
          <Flex
            direction={{ base: "column", lg: "row", xl: "row" }}
            w="100%"
            justify="space-between"
            minH="700px"
          >
            <Box h="90%" w={{ base: "100%", lg: "45%", xl: "45%" }} pt="30px">
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
            <Flex
              align="center"
              h="90%"
              w={{ base: "100%", lg: "50%", xl: "50%" }}
            >
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
        mt={{ base: "0", lg: "-100px", xl: "-100px" }}
        mx="auto"
        px="20px"
        direction={{ base: "column", lg: "row", xl: "row" }}
        borderRadius="30px"
        bg={bgSubcc}
        w={{ base: "none", lg: "90%", xl: "75%" }}
        align="center"
        justify="space-around"
      >
        <Flex
          align="center"
          justify="center"
          direction="column"
          // bgColor={"violet"}
          w={{ base: "90%", lg: "24%", xl: "24%" }}
          h="190px"
          // bg={bgSubc}
        >
          <Flex justify="space-between" w="90%">
            <Flex
              // bgColor={"green"}
              justify="space-between"
              align="center"
              direction="column"
              w={{ base: "30%", lg: "39%", xl: "30%" }}
            >
              <Image
                objectFit="cover"
                src="/image/Bitcoin.png"
                alt="Homebanner"
              />
              <Text p="13px" fontWeight="bold" color={headerColor}>
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
          <Flex p="13px" justify="space-between" w="75%">
            <Heading fontSize="22px" fontWeight="bold" color={headerColor}>
              USD 53,260.20
            </Heading>
            <Text fontSize="14px" color={headerColor}>
              BTC
            </Text>
          </Flex>
        </Flex>
        <Flex
          align="center"
          justify="center"
          direction="column"
          w={{ base: "90%", lg: "24%", xl: "24%" }}
          h="190px"
          bg={bgSubc}
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
              <Text p="13px" fontWeight="bold" color={headerColor}>
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
            <Heading fontSize="22px" fontWeight="bold" color={headerColor}>
              USD 53,260.20
            </Heading>
            <Text fontSize="14px" color={headerColor}>
              ETH
            </Text>
          </Flex>
        </Flex>
        <Flex
          align="center"
          justify="center"
          direction="column"
          w={{ base: "90%", lg: "24%", xl: "24%" }}
          h="190px"
          bg={bgSubc}
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
              <Text p="13px" fontWeight="bold" color={headerColor}>
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
            <Heading fontSize="22px" fontWeight="bold" color={headerColor}>
              USD 53,260.20
            </Heading>
            <Text fontSize="14px" color={headerColor}>
              USDT
            </Text>
          </Flex>
        </Flex>
        <Flex
          align="center"
          justify="center"
          direction="column"
          w={{ base: "90%", lg: "24%", xl: "24%" }}
          h="190px"
          bg={bgSubc}
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
              <Text p="13px" fontWeight="bold" color={headerColor}>
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
            <Heading fontSize="22px" fontWeight="bold" color={headerColor}>
              USD 53,260.20
            </Heading>
            <Text fontSize="14px" color={headerColor}>
              BNB
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Box
        w={{ base: "none", lg: "90%", xl: "80%" }}
        m="30px auto"
        minH="500px"
      >
        <Flex
          w="100%"
          minH="600px"
          align="center"
          justify="space-between"
          direction={{ base: "column", lg: "row", xl: "row" }}
        >
          <Flex
            w={{ base: "100%", lg: "46%", xl: "46%" }}
            minH="600px"
            direction={{ base: "column", lg: "row", xl: "row" }}
          >
            <Flex
              direction="column"
              justify="space-between"
              maxH="100%"
              align="center"
              w={{ base: "100%", lg: "50%", xl: "50%" }}
              // bgColor={"red"}
            >
              <Flex
                align="center"
                direction="column"
                color={headerColor}
                bg={bgSub}
                pt="35px"
                w="100%"
                h="46%"
                my={{ base: "10px", lg: "0", xl: "0" }}
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
                color={headerColor}
                bg={bgSub}
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
            <Flex
              align="center"
              w={{ base: "100%", lg: "50%", xl: "50%" }}
              direction="row-reverse"
              maxH="50%"
            >
              <Flex
                align="center"
                direction="column"
                color={headerColor}
                bg={bgSub}
                pt="35px"
                w={{ base: "100%", lg: "90%", xl: "90%" }}
                my={{ base: "10px", lg: "0", xl: "0" }}
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
            w={{ base: "95%", lg: "48%", xl: "48%" }}
            color={headerColor}
            align="center"
            minH="600px"
          >
            <Box minH="30px" w="100%">
              <Heading
                pt="20px"
                fontSize={{ base: "29px", lg: "45px", xl: "50px" }}
              >
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
      <Box
        w={{ base: "none", lg: "90%", xl: "80%" }}
        m="30px auto"
        minH="500px"
        bgColor={bg}
      >
        <Flex color="white" justify="space-between" w="100%" align="center">
          <Heading fontSize="42px" py={"10px"}>
            Market Update
          </Heading>
          <Text fontSize="20px">
            <Link>See All Coins</Link>
          </Text>
        </Flex>
        <Flex h="50px" align="center" color={headerColor} w="100%">
          <UnorderedList>
            <Flex
              wrap="wrap"
              overflowX={"hidden"}
              justify="space-around"
              w="100%"
              align="center"
            >
              <ListItem
                className="btn-focus"
                mx="10px"
                p="3px 10px"
                width="fit-content"
                borderRadius="30px"
                border="1px solid"
                display="block"
                onMouseEnter={() => ShowBg()}
                onClick={() => ShowBgs()}
                style={{
                  backgroundColor: actve == true && red == true ? "red" : "",
                }}
              >
                Crypto
              </ListItem>
              <ListItem
                mx="10px"
                p="3px 10px"
                border="1px solid"
                width="fit-content"
                borderRadius="30px"
                display="block"
              >
                Virtual Land
              </ListItem>{" "}
              <ListItem
                mx="10px"
                p="3px 10px"
                border="1px solid"
                width="fit-content"
                borderRadius="30px"
                display="block"
              >
                Metaverse
              </ListItem>{" "}
              <ListItem
                mx="10px"
                p="3px 10px"
                border="1px solid"
                width="fit-content"
                borderRadius="30px"
                display="block"
              >
                NFT Marketplace
              </ListItem>{" "}
              <ListItem
                mx="10px"
                p="3px 10px"
                border="1px solid"
                width="fit-content"
                borderRadius="30px"
                display="block"
              >
                Token
              </ListItem>{" "}
              <ListItem
                mx="10px"
                p="3px 10px"
                border="1px solid"
                width="fit-content"
                borderRadius="30px"
                display="block"
              >
                NFTs
              </ListItem>{" "}
              <ListItem
                mx="10px"
                p="3px 10px"
                border="1px solid"
                width="fit-content"
                borderRadius="30px"
                display="block"
              >
                Bitcoin
              </ListItem>{" "}
              <ListItem
                mx="10px"
                p="3px 10px"
                border="1px solid"
                width="fit-content"
                borderRadius="30px"
                display="block"
              >
                Arts
              </ListItem>
            </Flex>
          </UnorderedList>
        </Flex>
        <Tableer />
      </Box>
      <Box
        w={{ base: "none", lg: "100%", xl: "80%" }}
        m="30px auto"
        minH="600px"
      >
        <Flex
          w="100%"
          justify="space-between"
          direction={{ base: "column", lg: "row", xl: "row" }}
          minH="600px"
        >
          <Flex
            maxH="100%"
            backgroundImage="url('/image/Globaly.png')"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            w={{ base: "100", lg: "45%", xl: "45%" }}
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
          <Box width="50%" color={headerColor}>
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
              color={headerColor}
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
      <Box w="80%" m="30px auto" color={headerColor}>
        <Flex align="center" w="100%" direction="column">
          <Heading pt="20px">How It Works</Heading>
          <Text py="20px" w="40%" textAlign="center" fontSize="22px">
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
                ml={{ base: "none", lg: "250px", xl: "370px" }}
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
                ml={{ base: "none", lg: "250px", xl: "370px" }}
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
                ml={{ base: "none", lg: "250px", xl: "370px" }}
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
      <Box w="80%" m="30px auto" color={headerColor}>
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
                <Flex
                  w={{ base: "none", lg: "50%", xl: "150px" }}
                  justify="space-between"
                  align="center"
                >
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
                <Flex
                  w={{ base: "none", lg: "50%", xl: "150px" }}
                  justify="space-between"
                  align="center"
                >
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
                <Flex
                  w={{ base: "none", lg: "50%", xl: "150px" }}
                  justify="space-between"
                  align="center"
                >
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

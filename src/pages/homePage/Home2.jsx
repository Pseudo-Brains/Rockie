import {
  Box,
  Flex,
  Icon,
  Image,
  Text,
  useColorMode,
  Circle,
  Button,
  Heading,
} from "@chakra-ui/react";
import { FaArrowUp } from "react-icons/fa";

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
                src="/image/Ether.png"
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
              <Image objectFit="cover" src="/image/BNB.png" alt="Homebanner" />
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
    </Box>
  );
};

export default Home2;

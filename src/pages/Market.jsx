import React, { useEffect , useState} from "react";
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
  transform,
  Button,
} from "@chakra-ui/react";
import { FaArrowUp, FaStar, FaCircle } from "react-icons/fa";
import { GoArrowUp } from "react-icons/go";

function Market() {
  
    const [links,changeLinks] = useState([
        {id:1,name:"Crypto"},
        {id:2,name:"DeFi"},
        {id:3,name:"BSC"},
        {id:4,name:"NFT"},
        {id:5,name:"Metaverse"},
        {id:6,name:"Polkadot"},
        {id:7,name:"Solana"},
        {id:8,name:"Opensea"},
        {id:9,name:"Makersplace"},
    ])

  return (
    <Box bg="#18191d">
      <Flex
        justify="space-between"
        p={["100px 20px", "100px 20px", "100px 40px"]}
        h="auto"
        direction={["column", "column", "row"]}
      >
        <Box>
          <Text
            color="#fff"
            fontSize={["57px", "57px", "87px"]}
            pr={["50px", "50px", "200px"]}
            fontWeight={500}
          >
            Today’s Cryptocurrency prices
          </Text>
          <Text
            fontSize="27px"
            m={["40px 0px", "40px 0px", "20px 0px"]}
            color="#b1b5c3"
            fontWeight={500}
          >
            The global crypto market cap is{" "}
            <Text as="span" color="#fff">
              $1.86T
            </Text>
          </Text>
        </Box>
        <Image src="/image/banner-04.png" />
      </Flex>
      <Box as="div" w="100%" h="400px" m="20px 0px" bg="#141416" pos="relative">
        <Box
          pos="absolute"
          as="div"
          w="97%"
          top="-20%"
          left="50%"
          transform="translateX(-50%)"
          h="auto"
          borderRadius="20px"
          backdropFilter="blur(4px)"
          bg=" #18191d"
          border=" 1px solid #23262f"
          boxShadow=" 0 64px 64px -48px hsl(0deg 0% 6% / 10%)"
          p="40px 70px"
        >
          <Flex
            as="ul"
            className="links"
            w="100%"
            h="70px"
            align="center"
            justify="left"
            wrap="wrap"
            gap="0px 40px"
            borderBottom="1px solid #23262f"
            color="#fff"
          >
            {links && links.map((link)=>(
               <Box
               key={link.id}
               as="li"
               p="10px 37px"
               borderRadius="20px"
            //    bg="#3772ff"
               listStyleType="none"
               cursor="pointer"
               fontSize="12px"
             >
               {link.name}
             </Box>  
            ))}
           
          </Flex>
          <Flex
            as="div"
            className="box"
            w="100%"
            h="auto"
            align="center"
            justify="left"
            wrap={["wrap","wrap","noWrap"]}
            gap="0px 70px"
            //    border="1px solid #23262f"
            color="#fff"
            m="20px 0px"
            mt="30px"
          >
            <Flex
              w={["90%", "90%", "25%"]}
              borderRadius="10px"
              h="170px"
              bg="#141416"
              pos="relative"
              p="10px 20px"
              _before={{
                pos: "absolute",
                content: "' '",
                h: "100%",
                borderLeft: "1px solid #23262f",
                right: "-10%",
              }}
              cursor="pointer"
              _hover={{
                bg: "transparent",
              }}
            >
              <Box as="div" className="left">
                <Image src="/image/download (33).png" />
                <Text as="h2" fontSize="20px" m="20px 0px">
                  Bitcoin
                </Text>
                <Text
                  as="h3"
                  fontSize="30px"
                  fontWeight={500}
                  whiteSpace="nowrap"
                >
                  USD 53,260.20
                </Text>
              </Box>

              <Box as="div" className="left" textAlign="right">
                <Image src="/image/chartss.png" />
                <Text
                  borderRadius=" 24px"
                  color="#fff"
                  display="inline-block"
                  fontSize="16px"
                  fontWeight="700"
                  mb="25px"
                  mt="6px"
                  p=" 4px 9px 3px 10px"
                  bg="#58bd7d"
                  m="20px 0px"
                >
                  <Flex align="center">
                    {" "}
                    <GoArrowUp fontSize="17px" mr="2px" display="block" />
                    7.2%
                  </Flex>
                </Text>
                <Text as="h2" fontSize="20px" m="20px 0px">
                  BTC
                </Text>
              </Box>
            </Flex>
            
            <Flex
              w={["90%", "90%", "25%"]}
              borderRadius="10px"
              h="170px"
              bg="#141416"
              pos="relative"
              p="10px 20px"
              _before={{
                pos: "absolute",
                content: "' '",
                h: "100%",
                borderLeft: "1px solid #23262f",
                right: "-10%",
              }}
              cursor="pointer"
              _hover={{
                bg: "transparent",
              }}
            >
              <Box as="div" className="left">
                <Image src="/image/Ether7.png" />
                <Text as="h2" fontSize="20px" m="20px 0px">
                  Etherum
                </Text>
                <Text
                  as="h3"
                  fontSize="30px"
                  fontWeight={500}
                  whiteSpace="nowrap"
                >
                  USD 53,260.20
                </Text>
              </Box>

              <Box as="div" className="left" textAlign="right">
                <Image src="/image/chartsRed.png" />
                <Text
                  borderRadius=" 24px"
                  color="#fff"
                  display="inline-block"
                  fontSize="16px"
                  fontWeight="700"
                  mb="25px"
                  mt="6px"
                  p=" 4px 9px 3px 10px"
                  bg="#d33535"
                  m="20px 0px"
                >
                  <Flex align="center">
                    {" "}
                    <GoArrowUp fontSize="17px" mr="2px" display="block" />
                    7.2%
                  </Flex>
                </Text>
                <Text as="h2" fontSize="20px" m="20px 0px">
                  ETH
                </Text>
              </Box>
            </Flex>
            
            <Flex
              w={["90%", "90%", "25%"]}
              borderRadius="10px"
              h="170px"
              bg="#141416"
              pos="relative"
              p="10px 20px"
              _before={{
                pos: "absolute",
                content: "' '",
                h: "100%",
                borderLeft: "1px solid #23262f",
                right: "-10%",
              }}
              cursor="pointer"
              _hover={{
                bg: "transparent",
              }}
            >
              <Box as="div" className="left">
                <Image src="/image/tester.png" />
                <Text as="h2" fontSize="20px" m="20px 0px">
                Tether
                </Text>
                <Text
                  as="h3"
                  fontSize="30px"
                  fontWeight={500}
                  whiteSpace="nowrap"
                >
                  USD 53,260.20
                </Text>
              </Box>

              <Box as="div" className="left" textAlign="right">
                <Image src="/image/chartss.png" />
                <Text
                  borderRadius=" 24px"
                  color="#fff"
                  display="inline-block"
                  fontSize="16px"
                  fontWeight="700"
                  mb="25px"
                  mt="6px"
                  p=" 4px 9px 3px 10px"
                  bg="#58bd7d"
                  m="20px 0px"
                >
                  <Flex align="center">
                    {" "}
                    <GoArrowUp fontSize="17px" mr="2px" display="block" />
                    7.2%
                  </Flex>
                </Text>
                <Text as="h2" fontSize="20px" m="20px 0px">
                  USTDT
                </Text>
              </Box>
            </Flex>
            
            <Flex
              w={["90%", "90%", "25%"]}
              borderRadius="10px"
              h="170px"
              bg="#141416"
              pos="relative"
              p="10px 20px"
              _before={{
                pos: "absolute",
                content: "' '",
                h: "100%",
                borderLeft: "1px solid #23262f",
                right: "-10%",
              }}
              cursor="pointer"
              _hover={{
                bg: "transparent",
              }}
            >
              <Box as="div" className="left">
                <Image src="/image/bdb2.png" />
                <Text as="h2" fontSize="20px" m="20px 0px">
                  BNB
                </Text>
                <Text
                  as="h3"
                  fontSize="30px"
                  fontWeight={500}
                  whiteSpace="nowrap"
                >
                  USD 53,260.20
                </Text>
              </Box>

              <Box as="div" className="left" textAlign="right">
                <Image src="/image/chartss.png" />
                <Text
                  borderRadius=" 24px"
                  color="#fff"
                  display="inline-block"
                  fontSize="16px"
                  fontWeight="700"
                  mb="25px"
                  mt="6px"
                  p=" 4px 9px 3px 10px"
                  bg="#58bd7d"
                  m="20px 0px"
                >
                  <Flex align="center">
                    {" "}
                    <GoArrowUp fontSize="17px" mr="2px" display="block" />
                    7.2%
                  </Flex>
                </Text>
                <Text as="h2" fontSize="20px" m="20px 0px">
                  BNB
                </Text>
              </Box>
            </Flex>
          
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}

export default Market;



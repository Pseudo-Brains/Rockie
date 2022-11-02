import React, { useEffect, useState } from "react";
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
import { FaArrowUp, FaCircle } from "react-icons/fa";
import { AiOutlineStar, AiFillCheckCircle } from "react-icons/ai";
import { GoArrowUp } from "react-icons/go";
import { NavLink } from "react-router-dom";

function Market() {
  const [links, changeLinks] = useState([
    { id: 1, name: "Crypto" },
    { id: 2, name: "DeFi" },
    { id: 3, name: "BSC" },
    { id: 4, name: "NFT" },
    { id: 5, name: "Metaverse" },
    { id: 6, name: "Polkadot" },
    { id: 7, name: "Solana" },
    { id: 8, name: "Opensea" },
    { id: 9, name: "Makersplace" },
  ]);

  return (
    <Box bg="#141416">
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
      <Box
        as="div"
        w="100%"
        h={["auto", "auto", "400px"]}
        mt="20px"
        bg="#141416"
        pos="relative"
      >
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
            {links &&
              links.map((link) => (
                <NavLink
                  to={`market/${link.name}`}
                  key={link.id}
                  as="li"
                  style={{
                    padding: "10px 37px",
                    borderRadius: "20px",
                    // backgroundColor:"#3772ff",
                    listStyleType: "none",
                    cursor: "pointer",
                    fontSize: "12px",
                  }}
                  className="mLinks"
                >
                  {link.name}
                </NavLink>
              ))}
          </Flex>
          <Flex
            as="div"
            className="box"
            w="100%"
            h="auto"
            align="center"
            justify="left"
            wrap={["wrap", "wrap", "noWrap"]}
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

      <Box
        bg="#141416"
        w="95%"
        m="0px auto"
        h="auto"
        p="40px 0px"
        boxShadow="0px 0px 3px 0px rgba(19, 19, 21,1);"
        // borderRadius="20px"
      >
        <Flex
          w="100%"
          h="80px"
          borderRadius="20px 20px 0px 0px"
          bg="#222630"
          align="center"
          gap="0px 40px"
          p=" 0px 2%"
          fontSize="20px"
          color="#777e90"
        >
          <Flex
            align="Center"
            justify="center"
            h="100%"
            p="0px 40px"
            // bg="#3772ff"
          >
            Favorites
          </Flex>
          <Flex
            align="Center"
            justify="center"
            h="100%"
            p="0px 40px"
            bg="#3772ff"
            color="#fff"
          >
            Derivatives
          </Flex>
          <Flex
            align="Center"
            justify="center"
            h="100%"
            p="0px 40px"
            // bg="#3772ff"
          >
            Sports
          </Flex>
        </Flex>

        <Flex
          as="ul"
          w="100%"
          h="50px"
          borderRadius="20px 20px 0px 0px"
          // bg="#222630"
          align="center"
          gap="0px 40px"
          m="10px 0"
          p=" 0px 2%"
          fontSize="20px"
          color="#fff"
          fontWeight="500"
        >
          <Flex
            align="Center"
            justify="center"
            h="100%"
            p="0px 10px"
            fontSize="17px"
            color="#fff"
            borderBottom="2px solid #3772ff"
          >
            All
          </Flex>
          <Flex
            align="Center"
            justify="center"
            h="100%"
            p="0px 10px"
            fontSize="17px"
            color="#777e90"
            // borderBottom="2px solid #3772ff"
          >
            Inverse Perpetual
          </Flex>
          <Flex
            align="Center"
            justify="center"
            h="100%"
            p="0px 10px"
            fontSize="17px"
            color="#777e90"
            // borderBottom="2px solid #3772ff"
          >
            USDT Perpetual
          </Flex>
          <Flex
            align="Center"
            justify="center"
            h="100%"
            p="0px 10px"
            fontSize="17px"
            color="#777e90"
            // borderBottom="2px solid #3772ff"
          >
            Inserve Futures
          </Flex>
        </Flex>

        <Flex
          as="ul"
          w="100%"
          h="60px"
          borderRadius="20px 20px 0px 0px"
          align="center"
          gap="0px 40px"
          m="30px 0"
          p="10px 5%"
          fontSize="20px"
          color="#fff"
          fontWeight="500"
        >
          <Flex
            align="Center"
            justify="center"
            h="100%"
            p="0px 20px"
            fontSize="17px"
            borderRadius="20px"
            color="#fff"
            bg="#3772ff"
            cursor="pointer"
          >
            Hot
          </Flex>
          <Flex
            align="Center"
            justify="center"
            h="100%"
            p="0px 10px"
            fontSize="17px"
            color="#777e90"
            // borderBottom="2px solid #3772ff"
            cursor="pointer"
          >
            New
          </Flex>
          <Flex
            align="Center"
            justify="center"
            h="100%"
            p="0px 10px"
            fontSize="17px"
            color="#777e90"
            cursor="pointer"
            // borderBottom="2px solid #3772ff"
          >
            DeFi
          </Flex>
          <Flex
            align="Center"
            justify="center"
            h="100%"
            p="0px 10px"
            fontSize="17px"
            color="#777e90"
            cursor="pointer"
            // borderBottom="2px solid #3772ff"
          >
            Spot
          </Flex>
        </Flex>

        {/* Table */}
        <TableContainer p="20px 40px">
          <Table variant="simple">
            <Thead fontWieght="500">
              <Tr borderBottom="2px solid #fff">
                <Th>#</Th>
                <Th>Trading Paris</Th>
                <Th>Last Traded</Th>
                <Th>24H Change%</Th>
                <Th>24H Hight</Th>
                <Th>24H Low</Th>
                <Th>24H Turnover</Th>
                <Th>Chart</Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody m="20px 0px" borderTop="4px solid #fff" p="10px 0px">
              <Tr
                border="none"
                borderBottom="1px solid #23262f"
                borderColor="#23262f"
                cursor="pointer"
                _hover={{
                  bg: "#171E2E",
                }}
                className="row"
              >
                <Td color="#fff" fontSize="20px" h="100px" border="none">
                  <Flex gap="0px 10px" align="center">
                    <AiOutlineStar color="#777e90" fontSize="30px" />
                    <Text> 1 </Text>
                  </Flex>
                </Td>
                <Td color="#fff" fontSize="20px" h="100px" border="none">
                  <Flex gap="0px 10px" align="center">
                    <Image src="/image/Btc.png" />
                    <Text
                      color="#fff"
                      cursor="pionter"
                      _hover={{
                        color: "#0d6efd",
                      }}
                    >
                      Bitcoin
                    </Text>
                    <Text color="#777e90">BTC</Text>
                  </Flex>
                </Td>
                <Td
                  color="#fff"
                  fontSize="20px"
                  h="100px"
                  isnumeric
                  fontWeight="500"
                  border="none"
                >
                  2.236
                </Td>
                <Td
                  color="#58bd7d"
                  fontSize="20px"
                  h="100px"
                  isnumeric
                  fontWeight="500"
                  border="none"
                >
                  -3.33%
                </Td>
                <Td
                  color="#fff"
                  fontSize="20px"
                  h="100px"
                  isnumeric
                  fontWeight="500"
                  border="none"
                >
                  62,749.00
                </Td>
                <Td
                  color="#fff"
                  fontSize="20px"
                  h="100px"
                  isnumeric
                  fontWeight="500"
                  border="none"
                >
                  57,600.00
                </Td>
                <Td
                  color="#fff"
                  fontSize="20px"
                  h="100px"
                  isnumeric
                  fontWeight="500"
                  border="none"
                >
                  5.04B(USD)
                </Td>
                <Td color="#fff" fontSize="20px" h="100px" border="none">
                  <Image src="/image/chart2.png" />
                </Td>
                <Td color="#fff" fontSize="20px" h="100px" border="none">
                  <Text
                    fontSize="12px"
                    p="10px 10px 10px 20px"
                    borderRadius="20px"
                    border="1px solid #fff"
                    //  bg="#3772ff"
                    className="btn-hover"
                  >
                    Trade
                  </Text>
                </Td>
              </Tr>
              <Tr
                border="none"
                borderBottom="1px solid #23262f"
                borderColor="#23262f"
                cursor="pointer"
                _hover={{
                  bg: "#171E2E",
                }}
                className="row"
              >
                <Td color="#fff" fontSize="20px" h="100px" border="none">
                  <Flex gap="0px 10px" align="center">
                    <AiOutlineStar color="#777e90" fontSize="30px" />
                    <Text> 2 </Text>
                  </Flex>
                </Td>
                <Td color="#fff" fontSize="20px" h="100px" border="none">
                  <Flex gap="0px 10px" align="center">
                    <Image src="/image/Ether.png" />
                    <Text
                      color="#fff"
                      cursor="pionter"
                      _hover={{
                        color: "#0d6efd",
                      }}
                    >
                      Ethereum
                    </Text>
                    <Text color="#777e90">ETH</Text>
                  </Flex>
                </Td>
                <Td
                  color="#fff"
                  fontSize="20px"
                  h="100px"
                  isnumeric
                  fontWeight="500"
                  border="none"
                >
                  2.236
                </Td>
                <Td
                  color="#58bd7d"
                  fontSize="20px"
                  h="100px"
                  isnumeric
                  fontWeight="500"
                  border="none"
                >
                  -3.33%
                </Td>
                <Td
                  color="#fff"
                  fontSize="20px"
                  h="100px"
                  isnumeric
                  fontWeight="500"
                  border="none"
                >
                  62,749.00
                </Td>
                <Td
                  color="#fff"
                  fontSize="20px"
                  h="100px"
                  isnumeric
                  fontWeight="500"
                  border="none"
                >
                  57,600.00
                </Td>
                <Td
                  color="#fff"
                  fontSize="20px"
                  h="100px"
                  isnumeric
                  fontWeight="500"
                  border="none"
                >
                  5.04B(USD)
                </Td>
                <Td color="#fff" fontSize="20px" h="100px" border="none">
                  <Image src="/image/chart-bit.png" />
                </Td>
                <Td color="#fff" fontSize="20px" h="100px" border="none">
                  <Text
                    fontSize="12px"
                    p="10px 10px 10px 20px"
                    borderRadius="20px"
                    border="1px solid #fff"
                    //  bg="#3772ff"
                    className="btn-hover"
                  >
                    Trade
                  </Text>
                </Td>
              </Tr>
              <Tr
                border="none"
                borderBottom="1px solid #23262f"
                borderColor="#23262f"
                cursor="pointer"
                _hover={{
                  bg: "#171E2E",
                }}
                className="row"
              >
                <Td color="#fff" fontSize="20px" h="100px" border="none">
                  <Flex gap="0px 10px" align="center">
                    <AiOutlineStar color="#777e90" fontSize="30px" />
                    <Text> 3 </Text>
                  </Flex>
                </Td>
                <Td color="#fff" fontSize="20px" h="100px" border="none">
                  <Flex gap="0px 10px" align="center">
                    <Image src="/image/BNB.png" />
                    <Text
                      color="#fff"
                      cursor="pionter"
                      _hover={{
                        color: "#0d6efd",
                      }}
                    >
                      Binance
                    </Text>
                    <Text color="#777e90">BNB</Text>
                  </Flex>
                </Td>
                <Td
                  color="#fff"
                  fontSize="20px"
                  h="100px"
                  isnumeric
                  fontWeight="500"
                  border="none"
                >
                  2.236
                </Td>
                <Td
                  color="#58bd7d"
                  fontSize="20px"
                  h="100px"
                  isnumeric
                  fontWeight="500"
                  border="none"
                >
                  -3.33%
                </Td>
                <Td
                  color="#fff"
                  fontSize="20px"
                  h="100px"
                  isnumeric
                  fontWeight="500"
                  border="none"
                >
                  62,749.00
                </Td>
                <Td
                  color="#fff"
                  fontSize="20px"
                  h="100px"
                  isnumeric
                  fontWeight="500"
                  border="none"
                >
                  57,600.00
                </Td>
                <Td
                  color="#fff"
                  fontSize="20px"
                  h="100px"
                  isnumeric
                  fontWeight="500"
                  border="none"
                >
                  5.04B(USD)
                </Td>
                <Td color="#fff" fontSize="20px" h="100px" border="none">
                  <Image src="/image/chartss.png" />
                </Td>
                <Td color="#fff" fontSize="20px" h="100px" border="none">
                  <Text
                    fontSize="12px"
                    p="10px 10px 10px 20px"
                    borderRadius="20px"
                    border="1px solid #fff"
                    //  bg="#3772ff"
                    className="btn-hover"
                  >
                    Trade
                  </Text>
                </Td>
              </Tr>
              <Tr
                border="none"
                borderBottom="1px solid #23262f"
                borderColor="#23262f"
                cursor="pointer"
                _hover={{
                  bg: "#171E2E",
                }}
                className="row"
              >
                <Td color="#fff" fontSize="20px" h="100px" border="none">
                  <Flex gap="0px 10px" align="center">
                    <AiOutlineStar color="#777e90" fontSize="30px" />
                    <Text> 4 </Text>
                  </Flex>
                </Td>
                <Td color="#fff" fontSize="20px" h="100px" border="none">
                  <Flex gap="0px 10px" align="center">
                    <Image src="/image/Teth.png" />
                    <Text
                      color="#fff"
                      cursor="pionter"
                      _hover={{
                        color: "#0d6efd",
                      }}
                    >
                      Tether
                    </Text>
                    <Text color="#777e90">USTD</Text>
                  </Flex>
                </Td>
                <Td
                  color="#fff"
                  fontSize="20px"
                  h="100px"
                  isnumeric
                  fontWeight="500"
                  border="none"
                >
                  2.236
                </Td>
                <Td
                  color="#58bd7d"
                  fontSize="20px"
                  h="100px"
                  isnumeric
                  fontWeight="500"
                  border="none"
                >
                  -3.33%
                </Td>
                <Td
                  color="#fff"
                  fontSize="20px"
                  h="100px"
                  isnumeric
                  fontWeight="500"
                  border="none"
                >
                  62,749.00
                </Td>
                <Td
                  color="#fff"
                  fontSize="20px"
                  h="100px"
                  isnumeric
                  fontWeight="500"
                  border="none"
                >
                  57,600.00
                </Td>
                <Td
                  color="#fff"
                  fontSize="20px"
                  h="100px"
                  isnumeric
                  fontWeight="500"
                  border="none"
                >
                  5.04B(USD)
                </Td>
                <Td color="#fff" fontSize="20px" h="100px" border="none">
                  <Image src="/image/downchart.png" />
                </Td>
                <Td color="#fff" fontSize="20px" h="100px" border="none">
                  <Text
                    fontSize="12px"
                    p="10px 10px 10px 20px"
                    borderRadius="20px"
                    border="1px solid #fff"
                    //  bg="#3772ff"
                    className="btn-hover"
                  >
                    Trade
                  </Text>
                </Td>
              </Tr>
              <Tr
                border="none"
                borderBottom="1px solid #23262f"
                borderColor="#23262f"
                cursor="pointer"
                _hover={{
                  bg: "#171E2E",
                }}
                className="row"
              >
                <Td color="#fff" fontSize="20px" h="100px" border="none">
                  <Flex gap="0px 10px" align="center">
                    <AiOutlineStar color="#777e90" fontSize="30px" />
                    <Text> 5 </Text>
                  </Flex>
                </Td>
                <Td color="#fff" fontSize="20px" h="100px" border="none">
                  <Flex gap="0px 10px" align="center">
                    <Image src="/image/solana.png" />
                    <Text
                      color="#fff"
                      cursor="pionter"
                      _hover={{
                        color: "#0d6efd",
                      }}
                    >
                      Solana
                    </Text>
                    <Text color="#777e90">SOL</Text>
                  </Flex>
                </Td>
                <Td
                  color="#fff"
                  fontSize="20px"
                  h="100px"
                  isnumeric
                  fontWeight="500"
                  border="none"
                >
                  2.236
                </Td>
                <Td
                  color="#58bd7d"
                  fontSize="20px"
                  h="100px"
                  isnumeric
                  fontWeight="500"
                  border="none"
                >
                  -3.33%
                </Td>
                <Td
                  color="#fff"
                  fontSize="20px"
                  h="100px"
                  isnumeric
                  fontWeight="500"
                  border="none"
                >
                  62,749.00
                </Td>
                <Td
                  color="#fff"
                  fontSize="20px"
                  h="100px"
                  isnumeric
                  fontWeight="500"
                  border="none"
                >
                  57,600.00
                </Td>
                <Td
                  color="#fff"
                  fontSize="20px"
                  h="100px"
                  isnumeric
                  fontWeight="500"
                  border="none"
                >
                  5.04B(USD)
                </Td>
                <Td color="#fff" fontSize="20px" h="100px" border="none">
                  <Image src="/image/downchart.png" />
                </Td>
                <Td color="#fff" fontSize="20px" h="100px" border="none">
                  <Text
                    fontSize="12px"
                    p="10px 10px 10px 20px"
                    borderRadius="20px"
                    border="1px solid #fff"
                    //  bg="#3772ff"
                    className="btn-hover"
                  >
                    Trade
                  </Text>
                </Td>
              </Tr>
              <Tr
                border="none"
                borderBottom="1px solid #23262f"
                borderColor="#23262f"
                cursor="pointer"
                _hover={{
                  bg: "#171E2E",
                }}
                className="row"
              >
                <Td color="#fff" fontSize="20px" h="100px" border="none">
                  <Flex gap="0px 10px" align="center">
                    <AiOutlineStar color="#777e90" fontSize="30px" />
                    <Text> 6 </Text>
                  </Flex>
                </Td>
                <Td color="#fff" fontSize="20px" h="100px" border="none">
                  <Flex gap="0px 10px" align="center">
                    <Image src="/image/download (45).png" />
                    <Text
                      color="#fff"
                      cursor="pionter"
                      _hover={{
                        color: "#0d6efd",
                      }}
                    >
                      XRP
                    </Text>
                    <Text color="#777e90">XRP</Text>
                  </Flex>
                </Td>
                <Td
                  color="#fff"
                  fontSize="20px"
                  h="100px"
                  isnumeric
                  fontWeight="500"
                  border="none"
                >
                  2.236
                </Td>
                <Td
                  color="#58bd7d"
                  fontSize="20px"
                  h="100px"
                  isnumeric
                  fontWeight="500"
                  border="none"
                >
                  -3.33%
                </Td>
                <Td
                  color="#fff"
                  fontSize="20px"
                  h="100px"
                  isnumeric
                  fontWeight="500"
                  border="none"
                >
                  62,749.00
                </Td>
                <Td
                  color="#fff"
                  fontSize="20px"
                  h="100px"
                  isnumeric
                  fontWeight="500"
                  border="none"
                >
                  57,600.00
                </Td>
                <Td
                  color="#fff"
                  fontSize="20px"
                  h="100px"
                  isnumeric
                  fontWeight="500"
                  border="none"
                >
                  5.04B(USD)
                </Td>
                <Td color="#fff" fontSize="20px" h="100px" border="none">
                  <Image src="/image/chart-bit.png" />
                </Td>
                <Td color="#fff" fontSize="20px" h="100px" border="none">
                  <Text
                    fontSize="12px"
                    p="10px 10px 10px 20px"
                    borderRadius="20px"
                    border="1px solid #fff"
                    //  bg="#3772ff"
                    className="btn-hover"
                  >
                    Trade
                  </Text>
                </Td>
              </Tr>
              <Tr
                border="none"
                borderBottom="1px solid #23262f"
                borderColor="#23262f"
                cursor="pointer"
                _hover={{
                  bg: "#171E2E",
                }}
                className="row"
              >
                <Td color="#fff" fontSize="20px" h="100px" border="none">
                  <Flex gap="0px 10px" align="center">
                    <AiOutlineStar color="#777e90" fontSize="30px" />
                    <Text> 7 </Text>
                  </Flex>
                </Td>
                <Td color="#fff" fontSize="20px" h="100px" border="none">
                  <Flex gap="0px 10px" align="center">
                    <Image src="/image/Xrp.png" />
                    <Text
                      color="#fff"
                      cursor="pionter"
                      _hover={{
                        color: "#0d6efd",
                      }}
                    >
                      XRP
                    </Text>
                    <Text color="#777e90">XRP</Text>
                  </Flex>
                </Td>
                <Td
                  color="#fff"
                  fontSize="20px"
                  h="100px"
                  isnumeric
                  fontWeight="500"
                  border="none"
                >
                  2.236
                </Td>
                <Td
                  color="#58bd7d"
                  fontSize="20px"
                  h="100px"
                  isnumeric
                  fontWeight="500"
                  border="none"
                >
                  -3.33%
                </Td>
                <Td
                  color="#fff"
                  fontSize="20px"
                  h="100px"
                  isnumeric
                  fontWeight="500"
                  border="none"
                >
                  62,749.00
                </Td>
                <Td
                  color="#fff"
                  fontSize="20px"
                  h="100px"
                  isnumeric
                  fontWeight="500"
                  border="none"
                >
                  57,600.00
                </Td>
                <Td
                  color="#fff"
                  fontSize="20px"
                  h="100px"
                  isnumeric
                  fontWeight="500"
                  border="none"
                >
                  5.04B(USD)
                </Td>
                <Td color="#fff" fontSize="20px" h="100px" border="none">
                  <Image src="/image/chartss.png" />
                </Td>
                <Td color="#fff" fontSize="20px" h="100px" border="none">
                  <Text
                    fontSize="12px"
                    p="10px 10px 10px 20px"
                    borderRadius="20px"
                    border="1px solid #fff"
                    //  bg="#3772ff"
                    className="btn-hover"
                  >
                    Trade
                  </Text>
                </Td>
              </Tr>
              <Tr
                border="none"
                borderBottom="1px solid #23262f"
                borderColor="#23262f"
                cursor="pointer"
                _hover={{
                  bg: "#171E2E",
                }}
                className="row"
              >
                <Td color="#fff" fontSize="20px" h="100px" border="none">
                  <Flex gap="0px 10px" align="center">
                    <AiOutlineStar color="#777e90" fontSize="30px" />
                    <Text> 8 </Text>
                  </Flex>
                </Td>
                <Td color="#fff" fontSize="20px" h="100px" border="none">
                  <Flex gap="0px 10px" align="center">
                    <Image src="/image/cardano.png" />
                    <Text
                      color="#fff"
                      cursor="pionter"
                      _hover={{
                        color: "#0d6efd",
                      }}
                    >
                      Cardano
                    </Text>
                    <Text color="#777e90">ADA</Text>
                  </Flex>
                </Td>
                <Td
                  color="#fff"
                  fontSize="20px"
                  h="100px"
                  isnumeric
                  fontWeight="500"
                  border="none"
                >
                  2.236
                </Td>
                <Td
                  color="#58bd7d"
                  fontSize="20px"
                  h="100px"
                  isnumeric
                  fontWeight="500"
                  border="none"
                >
                  -3.33%
                </Td>
                <Td
                  color="#fff"
                  fontSize="20px"
                  h="100px"
                  isnumeric
                  fontWeight="500"
                  border="none"
                >
                  62,749.00
                </Td>
                <Td
                  color="#fff"
                  fontSize="20px"
                  h="100px"
                  isnumeric
                  fontWeight="500"
                  border="none"
                >
                  57,600.00
                </Td>
                <Td
                  color="#fff"
                  fontSize="20px"
                  h="100px"
                  isnumeric
                  fontWeight="500"
                  border="none"
                >
                  5.04B(USD)
                </Td>
                <Td color="#fff" fontSize="20px" h="100px" border="none">
                  <Image src="/image/chartss.png" />
                </Td>
                <Td color="#fff" fontSize="20px" h="100px" border="none">
                  <Text
                    fontSize="12px"
                    p="10px 10px 10px 20px"
                    borderRadius="20px"
                    border="1px solid #fff"
                    //  bg="#3772ff"
                    className="btn-hover"
                  >
                    Trade
                  </Text>
                </Td>
              </Tr>
              <Tr
                border="none"
                borderBottom="1px solid #23262f"
                borderColor="#23262f"
                cursor="pointer"
                _hover={{
                  bg: "#171E2E",
                }}
                className="row"
              >
                <Td color="#fff" fontSize="20px" h="100px" border="none">
                  <Flex gap="0px 10px" align="center">
                    <AiOutlineStar color="#777e90" fontSize="30px" />
                    <Text> 9 </Text>
                  </Flex>
                </Td>
                <Td color="#fff" fontSize="20px" h="100px" border="none">
                  <Flex gap="0px 10px" align="center">
                    <Image src="/image/Btc.png" />
                    <Text
                      color="#fff"
                      cursor="pionter"
                      _hover={{
                        color: "#0d6efd",
                      }}
                    >
                      Bitcoin
                    </Text>
                    <Text color="#777e90">BTC</Text>
                  </Flex>
                </Td>
                <Td
                  color="#fff"
                  fontSize="20px"
                  h="100px"
                  isnumeric
                  fontWeight="500"
                  border="none"
                >
                  2.236
                </Td>
                <Td
                  color="#58bd7d"
                  fontSize="20px"
                  h="100px"
                  isnumeric
                  fontWeight="500"
                  border="none"
                >
                  -3.33%
                </Td>
                <Td
                  color="#fff"
                  fontSize="20px"
                  h="100px"
                  isnumeric
                  fontWeight="500"
                  border="none"
                >
                  62,749.00
                </Td>
                <Td
                  color="#fff"
                  fontSize="20px"
                  h="100px"
                  isnumeric
                  fontWeight="500"
                  border="none"
                >
                  57,600.00
                </Td>
                <Td
                  color="#fff"
                  fontSize="20px"
                  h="100px"
                  isnumeric
                  fontWeight="500"
                  border="none"
                >
                  5.04B(USD)
                </Td>
                <Td color="#fff" fontSize="20px" h="100px" border="none">
                  <Image src="/image/chart2.png" />
                </Td>
                <Td color="#fff" fontSize="20px" h="100px" border="none">
                  <Text
                    fontSize="12px"
                    p="10px 10px 10px 20px"
                    borderRadius="20px"
                    border="1px solid #fff"
                    //  bg="#3772ff"
                    className="btn-hover"
                  >
                    Trade
                  </Text>
                </Td>
              </Tr>
              <Tr
                border="none"
                borderBottom="1px solid #23262f"
                borderColor="#23262f"
                cursor="pointer"
                _hover={{
                  bg: "#171E2E",
                }}
                className="row"
              >
                <Td color="#fff" fontSize="20px" h="100px" border="none">
                  <Flex gap="0px 10px" align="center">
                    <AiOutlineStar color="#777e90" fontSize="30px" />
                    <Text> 10 </Text>
                  </Flex>
                </Td>
                <Td color="#fff" fontSize="20px" h="100px" border="none">
                  <Flex gap="0px 10px" align="center">
                    <Image src="/image/Ether.png" />
                    <Text
                      color="#fff"
                      cursor="pionter"
                      _hover={{
                        color: "#0d6efd",
                      }}
                    >
                      Ethereum
                    </Text>
                    <Text color="#777e90">ETH</Text>
                  </Flex>
                </Td>
                <Td
                  color="#fff"
                  fontSize="20px"
                  h="100px"
                  isnumeric
                  fontWeight="500"
                  border="none"
                >
                  2.236
                </Td>
                <Td
                  color="#58bd7d"
                  fontSize="20px"
                  h="100px"
                  isnumeric
                  fontWeight="500"
                  border="none"
                >
                  -3.33%
                </Td>
                <Td
                  color="#fff"
                  fontSize="20px"
                  h="100px"
                  isnumeric
                  fontWeight="500"
                  border="none"
                >
                  62,749.00
                </Td>
                <Td
                  color="#fff"
                  fontSize="20px"
                  h="100px"
                  isnumeric
                  fontWeight="500"
                  border="none"
                >
                  57,600.00
                </Td>
                <Td
                  color="#fff"
                  fontSize="20px"
                  h="100px"
                  isnumeric
                  fontWeight="500"
                  border="none"
                >
                  5.04B(USD)
                </Td>
                <Td color="#fff" fontSize="20px" h="100px" border="none">
                  <Image src="/image/chart-bit.png" />
                </Td>
                <Td color="#fff" fontSize="20px" h="100px" border="none">
                  <Text
                    fontSize="12px"
                    p="10px 10px 10px 20px"
                    borderRadius="20px"
                    border="1px solid #fff"
                    //  bg="#3772ff"
                    className="btn-hover"
                  >
                    Trade
                  </Text>
                </Td>
              </Tr>
              <Tr
                border="none"
                borderBottom="1px solid #23262f"
                borderColor="#23262f"
                cursor="pointer"
                _hover={{
                  bg: "#171E2E",
                }}
                className="row"
              >
                <Td color="#fff" fontSize="20px" h="100px" border="none">
                  <Flex gap="0px 10px" align="center">
                    <AiOutlineStar color="#777e90" fontSize="30px" />
                    <Text> 11 </Text>
                  </Flex>
                </Td>
                <Td color="#fff" fontSize="20px" h="100px" border="none">
                  <Flex gap="0px 10px" align="center">
                    <Image src="/image/BNB.png" />
                    <Text
                      color="#fff"
                      cursor="pionter"
                      _hover={{
                        color: "#0d6efd",
                      }}
                    >
                      Binance
                    </Text>
                    <Text color="#777e90">BNB</Text>
                  </Flex>
                </Td>
                <Td
                  color="#fff"
                  fontSize="20px"
                  h="100px"
                  isnumeric
                  fontWeight="500"
                  border="none"
                >
                  2.236
                </Td>
                <Td
                  color="#58bd7d"
                  fontSize="20px"
                  h="100px"
                  isnumeric
                  fontWeight="500"
                  border="none"
                >
                  -3.33%
                </Td>
                <Td
                  color="#fff"
                  fontSize="20px"
                  h="100px"
                  isnumeric
                  fontWeight="500"
                  border="none"
                >
                  62,749.00
                </Td>
                <Td
                  color="#fff"
                  fontSize="20px"
                  h="100px"
                  isnumeric
                  fontWeight="500"
                  border="none"
                >
                  57,600.00
                </Td>
                <Td
                  color="#fff"
                  fontSize="20px"
                  h="100px"
                  isnumeric
                  fontWeight="500"
                  border="none"
                >
                  5.04B(USD)
                </Td>
                <Td color="#fff" fontSize="20px" h="100px" border="none">
                  <Image src="/image/chartss.png" />
                </Td>
                <Td color="#fff" fontSize="20px" h="100px" border="none">
                  <Text
                    fontSize="12px"
                    p="10px 10px 10px 20px"
                    borderRadius="20px"
                    border="1px solid #fff"
                    //  bg="#3772ff"
                    className="btn-hover"
                  >
                    Trade
                  </Text>
                </Td>
              </Tr>
              <Tr
                border="none"
                borderBottom="1px solid #23262f"
                borderColor="#23262f"
                cursor="pointer"
                _hover={{
                  bg: "#171E2E",
                }}
                className="row"
              >
                <Td color="#fff" fontSize="20px" h="100px" border="none">
                  <Flex gap="0px 10px" align="center">
                    <AiOutlineStar color="#777e90" fontSize="30px" />
                    <Text> 12 </Text>
                  </Flex>
                </Td>
                <Td color="#fff" fontSize="20px" h="100px" border="none">
                  <Flex gap="0px 10px" align="center">
                    <Image src="/image/Teth.png" />
                    <Text
                      color="#fff"
                      cursor="pionter"
                      _hover={{
                        color: "#0d6efd",
                      }}
                    >
                      Tether
                    </Text>
                    <Text color="#777e90">USTD</Text>
                  </Flex>
                </Td>
                <Td
                  color="#fff"
                  fontSize="20px"
                  h="100px"
                  isnumeric
                  fontWeight="500"
                  border="none"
                >
                  2.236
                </Td>
                <Td
                  color="#58bd7d"
                  fontSize="20px"
                  h="100px"
                  isnumeric
                  fontWeight="500"
                  border="none"
                >
                  -3.33%
                </Td>
                <Td
                  color="#fff"
                  fontSize="20px"
                  h="100px"
                  isnumeric
                  fontWeight="500"
                  border="none"
                >
                  62,749.00
                </Td>
                <Td
                  color="#fff"
                  fontSize="20px"
                  h="100px"
                  isnumeric
                  fontWeight="500"
                  border="none"
                >
                  57,600.00
                </Td>
                <Td
                  color="#fff"
                  fontSize="20px"
                  h="100px"
                  isnumeric
                  fontWeight="500"
                  border="none"
                >
                  5.04B(USD)
                </Td>
                <Td color="#fff" fontSize="20px" h="100px" border="none">
                  <Image src="/image/downchart.png" />
                </Td>
                <Td color="#fff" fontSize="20px" h="100px" border="none">
                  <Text
                    fontSize="12px"
                    p="10px 10px 10px 20px"
                    borderRadius="20px"
                    border="1px solid #fff"
                    //  bg="#3772ff"
                    className="btn-hover"
                  >
                    Trade
                  </Text>
                </Td>
              </Tr>
              <Tr
                border="none"
                borderBottom="1px solid #23262f"
                borderColor="#23262f"
                cursor="pointer"
                _hover={{
                  bg: "#171E2E",
                }}
                className="row"
              >
                <Td color="#fff" fontSize="20px" h="100px" border="none">
                  <Flex gap="0px 10px" align="center">
                    <AiOutlineStar color="#777e90" fontSize="30px" />
                    <Text> 13 </Text>
                  </Flex>
                </Td>
                <Td color="#fff" fontSize="20px" h="100px" border="none">
                  <Flex gap="0px 10px" align="center">
                    <Image src="/image/solana.png" />
                    <Text
                      color="#fff"
                      cursor="pionter"
                      _hover={{
                        color: "#0d6efd",
                      }}
                    >
                      Solana
                    </Text>
                    <Text color="#777e90">SOL</Text>
                  </Flex>
                </Td>
                <Td
                  color="#fff"
                  fontSize="20px"
                  h="100px"
                  isnumeric
                  fontWeight="500"
                  border="none"
                >
                  2.236
                </Td>
                <Td
                  color="#58bd7d"
                  fontSize="20px"
                  h="100px"
                  isnumeric
                  fontWeight="500"
                  border="none"
                >
                  -3.33%
                </Td>
                <Td
                  color="#fff"
                  fontSize="20px"
                  h="100px"
                  isnumeric
                  fontWeight="500"
                  border="none"
                >
                  62,749.00
                </Td>
                <Td
                  color="#fff"
                  fontSize="20px"
                  h="100px"
                  isnumeric
                  fontWeight="500"
                  border="none"
                >
                  57,600.00
                </Td>
                <Td
                  color="#fff"
                  fontSize="20px"
                  h="100px"
                  isnumeric
                  fontWeight="500"
                  border="none"
                >
                  5.04B(USD)
                </Td>
                <Td color="#fff" fontSize="20px" h="100px" border="none">
                  <Image src="/image/downchart.png" />
                </Td>
                <Td color="#fff" fontSize="20px" h="100px" border="none">
                  <Text
                    fontSize="12px"
                    p="10px 10px 10px 20px"
                    borderRadius="20px"
                    border="1px solid #fff"
                    //  bg="#3772ff"
                    className="btn-hover"
                  >
                    Trade
                  </Text>
                </Td>
              </Tr>
              <Tr
                border="none"
                borderBottom="1px solid #23262f"
                borderColor="#23262f"
                cursor="pointer"
                _hover={{
                  bg: "#171E2E",
                }}
                className="row"
              >
                <Td color="#fff" fontSize="20px" h="100px" border="none">
                  <Flex gap="0px 10px" align="center">
                    <AiOutlineStar color="#777e90" fontSize="30px" />
                    <Text> 14 </Text>
                  </Flex>
                </Td>
                <Td color="#fff" fontSize="20px" h="100px" border="none">
                  <Flex gap="0px 10px" align="center">
                    <Image src="/image/download (45).png" />
                    <Text
                      color="#fff"
                      cursor="pionter"
                      _hover={{
                        color: "#0d6efd",
                      }}
                    >
                      XRP
                    </Text>
                    <Text color="#777e90">XRP</Text>
                  </Flex>
                </Td>
                <Td
                  color="#fff"
                  fontSize="20px"
                  h="100px"
                  isnumeric
                  fontWeight="500"
                  border="none"
                >
                  2.236
                </Td>
                <Td
                  color="#58bd7d"
                  fontSize="20px"
                  h="100px"
                  isnumeric
                  fontWeight="500"
                  border="none"
                >
                  -3.33%
                </Td>
                <Td
                  color="#fff"
                  fontSize="20px"
                  h="100px"
                  isnumeric
                  fontWeight="500"
                  border="none"
                >
                  62,749.00
                </Td>
                <Td
                  color="#fff"
                  fontSize="20px"
                  h="100px"
                  isnumeric
                  fontWeight="500"
                  border="none"
                >
                  57,600.00
                </Td>
                <Td
                  color="#fff"
                  fontSize="20px"
                  h="100px"
                  isnumeric
                  fontWeight="500"
                  border="none"
                >
                  5.04B(USD)
                </Td>
                <Td color="#fff" fontSize="20px" h="100px" border="none">
                  <Image src="/image/chart-bit.png" />
                </Td>
                <Td color="#fff" fontSize="20px" h="100px" border="none">
                  <Text
                    fontSize="12px"
                    p="10px 10px 10px 20px"
                    borderRadius="20px"
                    border="1px solid #fff"
                    //  bg="#3772ff"
                    className="btn-hover"
                  >
                    Trade
                  </Text>
                </Td>
              </Tr>
              <Tr
                border="none"
                borderBottom="1px solid #23262f"
                borderColor="#23262f"
                cursor="pointer"
                _hover={{
                  bg: "#171E2E",
                }}
                className="row"
              >
                <Td color="#fff" fontSize="20px" h="100px" border="none">
                  <Flex gap="0px 10px" align="center">
                    <AiOutlineStar color="#777e90" fontSize="30px" />
                    <Text> 15 </Text>
                  </Flex>
                </Td>
                <Td color="#fff" fontSize="20px" h="100px" border="none">
                  <Flex gap="0px 10px" align="center">
                    <Image src="/image/Xrp.png" />
                    <Text
                      color="#fff"
                      cursor="pionter"
                      _hover={{
                        color: "#0d6efd",
                      }}
                    >
                      XRP
                    </Text>
                    <Text color="#777e90">XRP</Text>
                  </Flex>
                </Td>
                <Td
                  color="#fff"
                  fontSize="20px"
                  h="100px"
                  isnumeric
                  fontWeight="500"
                  border="none"
                >
                  2.236
                </Td>
                <Td
                  color="#58bd7d"
                  fontSize="20px"
                  h="100px"
                  isnumeric
                  fontWeight="500"
                  border="none"
                >
                  -3.33%
                </Td>
                <Td
                  color="#fff"
                  fontSize="20px"
                  h="100px"
                  isnumeric
                  fontWeight="500"
                  border="none"
                >
                  62,749.00
                </Td>
                <Td
                  color="#fff"
                  fontSize="20px"
                  h="100px"
                  isnumeric
                  fontWeight="500"
                  border="none"
                >
                  57,600.00
                </Td>
                <Td
                  color="#fff"
                  fontSize="20px"
                  h="100px"
                  isnumeric
                  fontWeight="500"
                  border="none"
                >
                  5.04B(USD)
                </Td>
                <Td color="#fff" fontSize="20px" h="100px" border="none">
                  <Image src="/image/chartss.png" />
                </Td>
                <Td color="#fff" fontSize="20px" h="100px" border="none">
                  <Text
                    fontSize="12px"
                    p="10px 10px 10px 20px"
                    borderRadius="20px"
                    border="1px solid #fff"
                    //  bg="#3772ff"
                    className="btn-hover"
                  >
                    Trade
                  </Text>
                </Td>
              </Tr>
              <Tr
                border="none"
                borderBottom="1px solid #23262f"
                borderColor="#23262f"
                cursor="pointer"
                _hover={{
                  bg: "#171E2E",
                }}
                className="row"
              >
                <Td color="#fff" fontSize="20px" h="100px" border="none">
                  <Flex gap="0px 10px" align="center">
                    <AiOutlineStar color="#777e90" fontSize="30px" />
                    <Text> 16 </Text>
                  </Flex>
                </Td>
                <Td color="#fff" fontSize="20px" h="100px" border="none">
                  <Flex gap="0px 10px" align="center">
                    <Image src="/image/cardano.png" />
                    <Text
                      color="#fff"
                      cursor="pionter"
                      _hover={{
                        color: "#0d6efd",
                      }}
                    >
                      Cardano
                    </Text>
                    <Text color="#777e90">ADA</Text>
                  </Flex>
                </Td>
                <Td
                  color="#fff"
                  fontSize="20px"
                  h="100px"
                  isnumeric
                  fontWeight="500"
                  border="none"
                >
                  2.236
                </Td>
                <Td
                  color="#58bd7d"
                  fontSize="20px"
                  h="100px"
                  isnumeric
                  fontWeight="500"
                  border="none"
                >
                  -3.33%
                </Td>
                <Td
                  color="#fff"
                  fontSize="20px"
                  h="100px"
                  isnumeric
                  fontWeight="500"
                  border="none"
                >
                  62,749.00
                </Td>
                <Td
                  color="#fff"
                  fontSize="20px"
                  h="100px"
                  isnumeric
                  fontWeight="500"
                  border="none"
                >
                  57,600.00
                </Td>
                <Td
                  color="#fff"
                  fontSize="20px"
                  h="100px"
                  isnumeric
                  fontWeight="500"
                  border="none"
                >
                  5.04B(USD)
                </Td>
                <Td color="#fff" fontSize="20px" h="100px" border="none">
                  <Image src="/image/chartss.png" />
                </Td>
                <Td color="#fff" fontSize="20px" h="100px" border="none">
                  <Text
                    fontSize="12px"
                    p="10px 10px 10px 20px"
                    borderRadius="20px"
                    border="1px solid #fff"
                    //  bg="#3772ff"
                    className="btn-hover"
                  >
                    Trade
                  </Text>
                </Td>
              </Tr>
              <Tr
                border="none"
                borderBottom="1px solid #23262f"
                borderColor="#23262f"
                cursor="pointer"
                _hover={{
                  bg: "#171E2E",
                }}
                className="row"
              >
                <Td color="#fff" fontSize="20px" h="100px" border="none">
                  <Flex gap="0px 10px" align="center">
                    <AiOutlineStar color="#777e90" fontSize="30px" />
                    <Text> 17 </Text>
                  </Flex>
                </Td>
                <Td color="#fff" fontSize="20px" h="100px" border="none">
                  <Flex gap="0px 10px" align="center">
                    <Image src="/image/Btc.png" />
                    <Text
                      color="#fff"
                      cursor="pionter"
                      _hover={{
                        color: "#0d6efd",
                      }}
                    >
                      Bitcoin
                    </Text>
                    <Text color="#777e90">BTC</Text>
                  </Flex>
                </Td>
                <Td
                  color="#fff"
                  fontSize="20px"
                  h="100px"
                  isnumeric
                  fontWeight="500"
                  border="none"
                >
                  2.236
                </Td>
                <Td
                  color="#58bd7d"
                  fontSize="20px"
                  h="100px"
                  isnumeric
                  fontWeight="500"
                  border="none"
                >
                  -3.33%
                </Td>
                <Td
                  color="#fff"
                  fontSize="20px"
                  h="100px"
                  isnumeric
                  fontWeight="500"
                  border="none"
                >
                  62,749.00
                </Td>
                <Td
                  color="#fff"
                  fontSize="20px"
                  h="100px"
                  isnumeric
                  fontWeight="500"
                  border="none"
                >
                  57,600.00
                </Td>
                <Td
                  color="#fff"
                  fontSize="20px"
                  h="100px"
                  isnumeric
                  fontWeight="500"
                  border="none"
                >
                  5.04B(USD)
                </Td>
                <Td color="#fff" fontSize="20px" h="100px" border="none">
                  <Image src="/image/chart2.png" />
                </Td>
                <Td color="#fff" fontSize="20px" h="100px" border="none">
                  <Text
                    fontSize="12px"
                    p="10px 10px 10px 20px"
                    borderRadius="20px"
                    border="1px solid #fff"
                    //  bg="#3772ff"
                    className="btn-hover"
                  >
                    Trade
                  </Text>
                </Td>
              </Tr>
              <Tr
                border="none"
                borderBottom="1px solid #23262f"
                borderColor="#23262f"
                cursor="pointer"
                _hover={{
                  bg: "#171E2E",
                }}
                className="row"
              >
                <Td color="#fff" fontSize="20px" h="100px" border="none">
                  <Flex gap="0px 10px" align="center">
                    <AiOutlineStar color="#777e90" fontSize="30px" />
                    <Text> 18 </Text>
                  </Flex>
                </Td>
                <Td color="#fff" fontSize="20px" h="100px" border="none">
                  <Flex gap="0px 10px" align="center">
                    <Image src="/image/Ether.png" />
                    <Text
                      color="#fff"
                      cursor="pionter"
                      _hover={{
                        color: "#0d6efd",
                      }}
                    >
                      Ethereum
                    </Text>
                    <Text color="#777e90">ETH</Text>
                  </Flex>
                </Td>
                <Td
                  color="#fff"
                  fontSize="20px"
                  h="100px"
                  isnumeric
                  fontWeight="500"
                  border="none"
                >
                  2.236
                </Td>
                <Td
                  color="#58bd7d"
                  fontSize="20px"
                  h="100px"
                  isnumeric
                  fontWeight="500"
                  border="none"
                >
                  -3.33%
                </Td>
                <Td
                  color="#fff"
                  fontSize="20px"
                  h="100px"
                  isnumeric
                  fontWeight="500"
                  border="none"
                >
                  62,749.00
                </Td>
                <Td
                  color="#fff"
                  fontSize="20px"
                  h="100px"
                  isnumeric
                  fontWeight="500"
                  border="none"
                >
                  57,600.00
                </Td>
                <Td
                  color="#fff"
                  fontSize="20px"
                  h="100px"
                  isnumeric
                  fontWeight="500"
                  border="none"
                >
                  5.04B(USD)
                </Td>
                <Td color="#fff" fontSize="20px" h="100px" border="none">
                  <Image src="/image/chart-bit.png" />
                </Td>
                <Td color="#fff" fontSize="20px" h="100px" border="none">
                  <Text
                    fontSize="12px"
                    p="10px 10px 10px 20px"
                    borderRadius="20px"
                    border="1px solid #fff"
                    //  bg="#3772ff"
                    className="btn-hover"
                  >
                    Trade
                  </Text>
                </Td>
              </Tr>
              <Tr
                border="none"
                borderBottom="1px solid #23262f"
                borderColor="#23262f"
                cursor="pointer"
                _hover={{
                  bg: "#171E2E",
                }}
                className="row"
              >
                <Td color="#fff" fontSize="20px" h="100px" border="none">
                  <Flex gap="0px 10px" align="center">
                    <AiOutlineStar color="#777e90" fontSize="30px" />
                    <Text> 19 </Text>
                  </Flex>
                </Td>
                <Td color="#fff" fontSize="20px" h="100px" border="none">
                  <Flex gap="0px 10px" align="center">
                    <Image src="/image/BNB.png" />
                    <Text
                      color="#fff"
                      cursor="pionter"
                      _hover={{
                        color: "#0d6efd",
                      }}
                    >
                      Binance
                    </Text>
                    <Text color="#777e90">BNB</Text>
                  </Flex>
                </Td>
                <Td
                  color="#fff"
                  fontSize="20px"
                  h="100px"
                  isnumeric
                  fontWeight="500"
                  border="none"
                >
                  2.236
                </Td>
                <Td
                  color="#58bd7d"
                  fontSize="20px"
                  h="100px"
                  isnumeric
                  fontWeight="500"
                  border="none"
                >
                  -3.33%
                </Td>
                <Td
                  color="#fff"
                  fontSize="20px"
                  h="100px"
                  isnumeric
                  fontWeight="500"
                  border="none"
                >
                  62,749.00
                </Td>
                <Td
                  color="#fff"
                  fontSize="20px"
                  h="100px"
                  isnumeric
                  fontWeight="500"
                  border="none"
                >
                  57,600.00
                </Td>
                <Td
                  color="#fff"
                  fontSize="20px"
                  h="100px"
                  isnumeric
                  fontWeight="500"
                  border="none"
                >
                  5.04B(USD)
                </Td>
                <Td color="#fff" fontSize="20px" h="100px" border="none">
                  <Image src="/image/chartss.png" />
                </Td>
                <Td color="#fff" fontSize="20px" h="100px" border="none">
                  <Text
                    fontSize="12px"
                    p="10px 10px 10px 20px"
                    borderRadius="20px"
                    border="1px solid #fff"
                    //  bg="#3772ff"
                    className="btn-hover"
                  >
                    Trade
                  </Text>
                </Td>
              </Tr>
              <Tr
                border="none"
                borderBottom="1px solid #23262f"
                borderColor="#23262f"
                cursor="pointer"
                _hover={{
                  bg: "#171E2E",
                }}
                className="row"
              >
                <Td color="#fff" fontSize="20px" h="100px" border="none">
                  <Flex gap="0px 10px" align="center">
                    <AiOutlineStar color="#777e90" fontSize="30px" />
                    <Text> 20 </Text>
                  </Flex>
                </Td>
                <Td color="#fff" fontSize="20px" h="100px" border="none">
                  <Flex gap="0px 10px" align="center">
                    <Image src="/image/Teth.png" />
                    <Text
                      color="#fff"
                      cursor="pionter"
                      _hover={{
                        color: "#0d6efd",
                      }}
                    >
                      Tether
                    </Text>
                    <Text color="#777e90">USTD</Text>
                  </Flex>
                </Td>
                <Td
                  color="#fff"
                  fontSize="20px"
                  h="100px"
                  isnumeric
                  fontWeight="500"
                  border="none"
                >
                  2.236
                </Td>
                <Td
                  color="#58bd7d"
                  fontSize="20px"
                  h="100px"
                  isnumeric
                  fontWeight="500"
                  border="none"
                >
                  -3.33%
                </Td>
                <Td
                  color="#fff"
                  fontSize="20px"
                  h="100px"
                  isnumeric
                  fontWeight="500"
                  border="none"
                >
                  62,749.00
                </Td>
                <Td
                  color="#fff"
                  fontSize="20px"
                  h="100px"
                  isnumeric
                  fontWeight="500"
                  border="none"
                >
                  57,600.00
                </Td>
                <Td
                  color="#fff"
                  fontSize="20px"
                  h="100px"
                  isnumeric
                  fontWeight="500"
                  border="none"
                >
                  5.04B(USD)
                </Td>
                <Td color="#fff" fontSize="20px" h="100px" border="none">
                  <Image src="/image/downchart.png" />
                </Td>
                <Td color="#fff" fontSize="20px" h="100px" border="none">
                  <Text
                    fontSize="12px"
                    p="10px 10px 10px 20px"
                    borderRadius="20px"
                    border="1px solid #fff"
                    //  bg="#3772ff"
                    className="btn-hover"
                  >
                    Trade
                  </Text>
                </Td>
              </Tr>
              <Tr
                border="none"
                borderBottom="1px solid #23262f"
                borderColor="#23262f"
                cursor="pointer"
                _hover={{
                  bg: "#171E2E",
                }}
                className="row"
              >
                <Td color="#fff" fontSize="20px" h="100px" border="none">
                  <Flex gap="0px 10px" align="center">
                    <AiOutlineStar color="#777e90" fontSize="30px" />
                    <Text> 21 </Text>
                  </Flex>
                </Td>
                <Td color="#fff" fontSize="20px" h="100px" border="none">
                  <Flex gap="0px 10px" align="center">
                    <Image src="/image/cardano.png" />
                    <Text
                      color="#fff"
                      cursor="pionter"
                      _hover={{
                        color: "#0d6efd",
                      }}
                    >
                      Cardano
                    </Text>
                    <Text color="#777e90">ADA</Text>
                  </Flex>
                </Td>
                <Td
                  color="#fff"
                  fontSize="20px"
                  h="100px"
                  isnumeric
                  fontWeight="500"
                  border="none"
                >
                  2.236
                </Td>
                <Td
                  color="#58bd7d"
                  fontSize="20px"
                  h="100px"
                  isnumeric
                  fontWeight="500"
                  border="none"
                >
                  -3.33%
                </Td>
                <Td
                  color="#fff"
                  fontSize="20px"
                  h="100px"
                  isnumeric
                  fontWeight="500"
                  border="none"
                >
                  62,749.00
                </Td>
                <Td
                  color="#fff"
                  fontSize="20px"
                  h="100px"
                  isnumeric
                  fontWeight="500"
                  border="none"
                >
                  57,600.00
                </Td>
                <Td
                  color="#fff"
                  fontSize="20px"
                  h="100px"
                  isnumeric
                  fontWeight="500"
                  border="none"
                >
                  5.04B(USD)
                </Td>
                <Td color="#fff" fontSize="20px" h="100px" border="none">
                  <Image src="/image/chartss.png" />
                </Td>
                <Td color="#fff" fontSize="20px" h="100px" border="none">
                  <Text
                    fontSize="12px"
                    p="10px 10px 10px 20px"
                    borderRadius="20px"
                    border="1px solid #fff"
                    //  bg="#3772ff"
                    className="btn-hover"
                  >
                    Trade
                  </Text>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Box>

      <Box as="div" p="70px 0px" textAlign="Center" >
        <Text as="h1" color="#fff" fontSize="60px" fontWeight={500}>
          Learn And Earn
        </Text>
        <Text
          as="h1"
          color="#777e90"
          fontSize="25px"
          fontWeight={500}
          m="20px auto"
          w="35%"
        >
          Stacks is a production-ready library of stackable content blocks built
          in React Native.
        </Text>
        <Flex
          as="div"
          p="0px 20px"
          direction={["column", "column", "row"]}
          justify="space-between"
        >
          <Flex
            gap="10px 20px"
            direction="column"
            align="center"
            m="40px 0px"
            w={["100%", "100%", "30%"]}
            // border="2px solid #fff"
          >
            <Box
              w="100%"
              h="auto"
              borderRadius="10px"
              pos="relative"
              display="flex"
              alignItems="center"
            >
              <Image
                src="/image/blog-01.jpg"
                w="100%"
                borderTopRightRadius="10px"
                borderTopRadius="10px"
              />
              <Link
                w="70px"
                h="70px"
                borderRadius="50%"
                bg="#e5e5e5"
                pos="absolute"
                top="50%"
                left="50%"
                display="flex"
                alignItems="center"
                justifyContent="center"
                transform="translate(-50%,-50%)"
              >
                <Image src="/image/svg9.svg" w="25%" />
              </Link>
            </Box>
            <Box w="100%">
              <Link
                href="#"
                color="#fff"
                w="150px"
                h="45px"
                display="flex"
                alignItems="center"
                justifyContent="center"
                border="2px solid #23262f"
                fontSize={["15px", "15px", "15px"]}
                bg="#3772ff"
                fontWeight={500}
                _hover={{ textDecoration: "none" }}
                pos="relative"
              >
                Learn & Earn
              </Link>
              <Link
                as="a"
                display="block"
                m="20px 0px"
                fontSize="25px"
                fontWeight={500}
                color="#fff"
                textAlign="left"
                _hover={{ textDecoration: "none", color: "#3772ff" }}
              >
                Learn about UI8 coin and earn an All-Access Pass
              </Link>
              <Flex justify="space-between" align="center">
                <Link
                  display="flex"
                  alignItems="center"
                  gap="0px 20px"
                  color="#fff"
                  _hover={{
                    textDecoration: "none",
                    color: "#3772ff",
                  }}
                  fontWeight={500}
                >
                  <AiFillCheckCircle fontSize="30px" color="#fff" />
                  Floyd Buckridge
                </Link>
                <Text
                  as="p"
                  color="#fff"
                  fontWeight={500}
                  cursor="pointer"
                  _hover={{
                    color: "#3772ff",
                  }}
                >
                  Feb 03, 2021
                </Text>
              </Flex>
            </Box>
          </Flex>
          <Flex
            gap="10px 20px"
            direction="column"
            align="center"
            m="40px 0px"
            w={["100%", "100%", "30%"]}
            // border="2px solid #fff"
          >
            <Box
              w="100%"
              h="auto"
              borderRadius="10px"
              pos="relative"
              display="flex"
              alignItems="center"
            >
              <Image
                src="/image/blog-01.jpg"
                w="100%"
                borderTopRightRadius="10px"
                borderTopRadius="10px"
              />
              <Link
                w="70px"
                h="70px"
                borderRadius="50%"
                bg="#e5e5e5"
                pos="absolute"
                top="50%"
                left="50%"
                display="flex"
                alignItems="center"
                justifyContent="center"
                transform="translate(-50%,-50%)"
              >
                <Image src="/image/svg9.svg" w="25%" />
              </Link>
            </Box>
            <Box w="100%">
              <Link
                href="#"
                color="#fff"
                w="150px"
                h="45px"
                display="flex"
                alignItems="center"
                justifyContent="center"
                border="2px solid #23262f"
                fontSize={["15px", "15px", "15px"]}
                bg="#3772ff"
                fontWeight={500}
                _hover={{ textDecoration: "none" }}
                pos="relative"
              >
                Learn & Earn
              </Link>
              <Link
                as="a"
                display="block"
                m="20px 0px"
                fontSize="25px"
                fontWeight={500}
                color="#fff"
                textAlign="left"
                _hover={{ textDecoration: "none", color: "#3772ff" }}
              >
                Learn about UI8 coin and earn an All-Access Pass
              </Link>
              <Flex justify="space-between" align="center">
                <Link
                  display="flex"
                  alignItems="center"
                  gap="0px 20px"
                  color="#fff"
                  _hover={{
                    textDecoration: "none",
                    color: "#3772ff",
                  }}
                  fontWeight={500}
                >
                  <AiFillCheckCircle fontSize="30px" color="#fff" />
                  Floyd Buckridge
                </Link>
                <Text
                  as="p"
                  color="#fff"
                  fontWeight={500}
                  cursor="pointer"
                  _hover={{
                    color: "#3772ff",
                  }}
                >
                  Feb 03, 2021
                </Text>
              </Flex>
            </Box>
          </Flex>
          <Flex
            gap="10px 20px"
            direction="column"
            align="center"
            m="40px 0px"
            w={["100%", "100%", "30%"]}
            // border="2px solid #fff"
          >
            <Box
              w="100%"
              h="auto"
              borderRadius="10px"
              pos="relative"
              display="flex"
              alignItems="center"
            >
              <Image
                src="/image/blog-01.jpg"
                w="100%"
                borderTopRightRadius="10px"
                borderTopRadius="10px"
              />
              <Link
                w="70px"
                h="70px"
                borderRadius="50%"
                bg="#e5e5e5"
                pos="absolute"
                top="50%"
                left="50%"
                display="flex"
                alignItems="center"
                justifyContent="center"
                transform="translate(-50%,-50%)"
              >
                <Image src="/image/svg9.svg" w="25%" />
              </Link>
            </Box>
            <Box w="100%">
              <Link
                href="#"
                color="#fff"
                w="150px"
                h="45px"
                display="flex"
                alignItems="center"
                justifyContent="center"
                border="2px solid #23262f"
                fontSize={["15px", "15px", "15px"]}
                bg="#3772ff"
                fontWeight={500}
                _hover={{ textDecoration: "none" }}
                pos="relative"
              >
                Learn & Earn
              </Link>
              <Link
                as="a"
                display="block"
                m="20px 0px"
                fontSize="25px"
                fontWeight={500}
                color="#fff"
                textAlign="left"
                _hover={{ textDecoration: "none", color: "#3772ff" }}
              >
                Learn about UI8 coin and earn an All-Access Pass
              </Link>
              <Flex justify="space-between" align="center">
                <Link
                  display="flex"
                  alignItems="center"
                  gap="0px 20px"
                  color="#fff"
                  _hover={{
                    textDecoration: "none",
                    color: "#3772ff",
                  }}
                  fontWeight={500}
                >
                  <AiFillCheckCircle fontSize="30px" color="#fff" />
                  Floyd Buckridge
                </Link>
                <Text
                  as="p"
                  color="#fff"
                  fontWeight={500}
                  cursor="pointer"
                  _hover={{
                    color: "#3772ff",
                  }}
                >
                  Feb 03, 2021
                </Text>
              </Flex>
            </Box>
          </Flex>
        </Flex>
        <Link
        display="flex"
        alignItems="center"
        justifyContent="Center"
        gap="0px 10px"
        m="40px auto"
        w="150px"
        h="50px"
        borderRadius="25px"
        border="3px solid #222630"
        >
        <Image
        w="20px"
        src="/image/load.svg"
        />
        <Text
        color="#fff"
        >Load more </Text>
        </Link>
      </Box>
    </Box>
  );
}

export default Market;

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
  useColorMode,
} from "@chakra-ui/react";
import "../main.css";
import { motion } from "framer-motion";
import "swiper/css";
import useGetCoins from "../Redux/market/actions";
import { useInView } from "react-intersection-observer";
import { CoinDetail } from "./CoinDetail";

export const ListOfTop4Coins = () => {
  const TextColor = useColorModeValue("#FFFFFF", "#969BA9");
  const bgTr = useColorModeValue("#17181C", "#FFFFFF");

  const { ref: myRef, inView: myElementIsVisible } = useInView();

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
  const { coinsList } = useGetCoins();

  return (
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
      initial={myElementIsVisible ? "" : { y: "80%", opacity: 0 }}
      animate={myElementIsVisible ? "" : { y: "0%", opacity: 1 }}
      transition={{
        type: "Tween",
        bounce: 2.5,
        duration: 6,
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
          {/* <Box
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
          </Box> */}
          {coinsList.map((item) => {
            let name = item.name;
            if (
              name === "Bitcoin" ||
              name === "Ethereum" ||
              name === "Tether" ||
              name === "BNB"
            ) {
              console.log(item);
              return <CoinDetail data={item} />;
              //   return <TopCoinDetail data={item} />;
            }
          })}

          {/* dydihjk */}
        </Flex>
      </Box>
    </Box>
  );
};

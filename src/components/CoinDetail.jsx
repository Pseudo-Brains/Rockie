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
  useColorMode,
} from "@chakra-ui/react";
import "../main.css";

export const CoinDetail = ({ data }) => {
  // const { colorMode, toggleColorMode } = useColorMode();

  const TextColor = useColorModeValue("#FFFFFF", "#969BA9");

  const bgTrSub = useColorModeValue("#131315", "#FFFFFF");
  // Function

  return (
    <Box
      w={{ base: "95%", md: "46%", lg: "24%" }}
      bg={bgTrSub}
      mb="2"
      _hover={{ boxShadow: "xl" }}
      px="9"
      py="8"
      borderRadius={"lg"}
    >
      <HStack spacing={"3"}>
        <Image
          boxSize={"50px"}
          objectFit="contain"
          src={data.image}
          alt="OurPartner1"
        />
        <Text color={TextColor} fontSize="20">
          {" "}
          {data.name}
        </Text>
        <Text color={"#9497A3"} fontSize="24">
          {" "}
          BTC/USD
        </Text>
      </HStack>
      <HStack mb="2">
        <Text color={TextColor} fontSize="4xl">
          USD {data.current_price}
        </Text>
      </HStack>
      <HStack>
        <Text color={TextColor} fontSize="lg" fontWeight={"thin"}>
          $ {data.market_cap}
        </Text>{" "}
        <Text
          color={TextColor}
          bg="red.500"
          px={"2"}
          py="0.5"
          borderRadius="full"
        >
          {data.market_cap_change_percentage_24h}%
        </Text>
      </HStack>
    </Box>
  );
};

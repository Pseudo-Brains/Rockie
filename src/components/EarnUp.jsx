import React, { useMemo } from "react";
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
  WrapItem,
  Avatar,
  AvatarBadge,
  AvatarGroup,
} from "@chakra-ui/react";
import "../main.css";

function EarnUp() {
  const bg = useColorModeValue("#141416", "#FFFFFF");
  const bgSub = useColorModeValue("#17181C", "#FFFFFF");

  const headerColor = useColorModeValue("#FFFFFF", "#23262F");
  const TextColor = useColorModeValue("#FFFFFF", "#969BA9");
  return (
    <Box bg={bgSub} w="100%">
      <Stack py="4" px="8" maxW="1450px" w="100%" m="auto">
        <Flex
          flexDir={{ base: "column", md: "row", lg: "row" }}
          justify="space-between"
          alignItems={"center"}
        >
          <VStack
            alignItems={"flex-start"}
            w={{ base: "100%", md: "80%", lg: "80%" }}
          >
            <Heading color={headerColor} textAlign="left" fontSize="4xl">
              Earn up to $25 worth of crypto
            </Heading>
            <Text textAlign="left" color={headerColor} fontSize="1.2rem">
              Discover How Specific Cryptocurrencies Work — And Get A Bit Of
              Each Crypto To Try Out For Yourself.
            </Text>
          </VStack>
          <Spacer />
          <VStack alignItems={"center"} justify="center" py="8">
            <Button
              borderRadius={"full"}
              py="8"
              px="10"
              bg="#E4DFFD"
              color={"black"}
              _hover={{ bg: "#23262F", color: "white" }}
              fontSize="2xl"
            >
              Create Account
            </Button>
          </VStack>
        </Flex>
      </Stack>
    </Box>
  );
}

export default EarnUp;

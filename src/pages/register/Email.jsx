import React from "react";
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";

export default function Email() {
  return (
    <Box textAlign="center">
      <FormControl>
        <Box mt="15px">
          <FormLabel
            fontFamily="sans-serif"
            fontWeight="bold"
            color="gray.400"
            fontSize="2xl"
            mx={["0px", "0px", "350px"]}
          >
            Email/ID
          </FormLabel>
          <Input
            color="black"
            type="text"
            width={["100%", "100%", "50%"]}
            bg="white"
            h="50px"
            placeholder=" Please fill in the email form"
            _placeholder={{ color: "black" }}
          />
        </Box>

        <Box mt="15px">
          <FormLabel
            fontFamily="sans-serif"
            fontWeight="bold"
            color="gray.400"
            fontSize="2xl"
            mx={["0px", "0px", "350px"]}
          >
            <Flex align="center">
              Password
              <Text ml="5px" color="red" fontSize={["10px", "10px", "15px"]}>
                (8 Or More Characters, Including Numbers And Special Characters)
              </Text>
            </Flex>
          </FormLabel>
          <VStack mb="20px">
            <Input
              color="black"
              type="text"
              w={["100%", "100%", "50%"]}
              bg="white"
              h="50px"
              placeholder=" Please enter a password"
              _placeholder={{ color: "black" }}
            />
            <Input
              color="black"
              type="text"
              w={["100%", "100%", "50%"]}
              bg="white"
              h="50px"
              placeholder=" Please re-enter your password"
              _placeholder={{ color: "black" }}
            />
          </VStack>
          <FormLabel
            fontFamily="sans-serif"
            fontWeight="bold"
            color="gray.400"
            fontSize="2xl"
            mx={["0px", "0px", "350px"]}
          >
            Nickname
            <span style={{ color: "red", fontSize: "15px" }}>
              (Excluding Special Characters)
            </span>
          </FormLabel>
          <VStack mb="20px">
            <Input
              color="black"
              type="text"
              w={["100%", "100%", "50%"]}
              bg="white"
              h="50px"
              placeholder=" Enter a nickname"
              _placeholder={{ color: "black" }}
            />
          </VStack>
          <FormLabel
            fontFamily="sans-serif"
            fontWeight="bold"
            color="gray.400"
            fontSize="2xl"
            mx={["0px", "0px", "350px"]}
          >
            Country
          </FormLabel>
          <VStack mb="20px">
            <Input
              color="black"
              type="text"
              w={["100%", "100%", "50%"]}
              bg="white"
              h="50px"
              placeholder=" Enter your Country"
              _placeholder={{ color: "black" }}
            />
          </VStack>
          <FormLabel
            fontFamily="sans-serif"
            fontWeight="bold"
            color="gray.400"
            fontSize="2xl"
            mx={["0px", "0px", "350px"]}
          >
            Phone
            <span style={{ color: "red", fontSize: "15px" }}>
              (Enter Numbers Only)
            </span>
          </FormLabel>
          <VStack mb="20px">
            <Input
              color="black"
              type="text"
              w={["100%", "100%", "50%"]}
              bg="white"
              h="50px"
              placeholder=" Your Phone Number"
              _placeholder={{ color: "black" }}
            />
          </VStack>
          <FormLabel
            fontFamily="sans-serif"
            fontWeight="bold"
            color="gray.400"
            fontSize="2xl"
            mx={["0px", "0px", "350px"]}
          >
            UID Code
          </FormLabel>
          <VStack mb="20px">
            <Input
              color="black"
              type="text"
              w={["100%", "100%", "50%"]}
              bg="white"
              h="50px"
              placeholder=" Please enter your invitation code"
              _placeholder={{ color: "black" }}
            />
          </VStack>
        </Box>

        <Box
          mt="15px"
          borderRadius="full"
          w={["100%", "100%", "50%"]}
          h="50px"
          bg="#3772ff"
          mx={["0px", "0px", "350px"]}
          textAlign="center"
          pt="12px"
        >
          <Text fontFamily="sans-serif" fontWeight="bold" cursor="pointer">
            Pre-Registration
          </Text>
        </Box>
      </FormControl>
    </Box>
  );
}

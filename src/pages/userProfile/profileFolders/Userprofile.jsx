import { useState } from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FaToggleOn } from "react-icons/fa";

export default function Userprofile() {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLasttName] = useState("Smith");
  const [email, setEmail] = useState("johnsmith@example.com");

  return (
    <Box px="50px" pb="40px">
      <Heading as="h1" fontFamily="sans-serif" mb="10px">
        User Profile
      </Heading>
      <Text fontSize="2xl" fontWeight="bold" fontFamily="sans-serif">
        Information
      </Text>

      <FormControl mt="40px">
        <HStack
          wrap={["wrap", "wrap", "nowrap"]}
          // border="2px solid #fff"
        >
          <Box w={["100%", "100%", "50%"]}>
            <Input
              type="text"
              w="100%"
              h="50px"
              bg="gray.900"
              mt={["20px", "20px", "0px"]}
              value={firstName}
            />
          </Box>

          <Box w={["100%", "100%", "50%"]}>
            <Input
              type="text"
              w="100%"
              h="50px"
              bg="gray.900"
              mt={["20px", "20px", "0px"]}
              value={lastName}
            />
          </Box>
        </HStack>

        <Flex mt="15px" gap="10px" w="100%"  wrap="wrap">
          <Input
            type="text"
            w={["100%","100%","48%"]}
            h="50px"
            bg="gray.900"
            border="none"
            value={email}
          />

          <HStack spacing="10px" w={["100%","100%","50%"]}>
            <Select w="30%" h="50px" bg="gray.900" border="none">
              <option value="+1">+1</option>
              <option value="+1">+234</option>
              <option value="+1">+44</option>
              <option value="+1">+87</option>
            </Select>

            <Input
              type="number"
              placeholder=" Your Phone Number"
              maxW="100%"
              h="50px"
              bg="gray.900"
              border="none"
            />
          </HStack>
        </Flex>

        <Flex mt="15px" w="100%"  wrap={["wrap","wrap","noWrap"]} gap="20px">
          <Select h="50px" w={["100%","100%","48%"]} bg="gray.900" border="none">
            <option value="nigerian">Nigerian</option>
            <option value="south-korean">South-Korean</option>
            <option value="american">American</option>
            <option value="italian">Italian</option>
          </Select>

          <HStack w={["100%","100%","50%"]}>
            <Select h="50px" bg="gray.900" border="none">
              <option value="male">Male</option>
              <option value="female">Female</option>
            </Select>

            <Input
              type="text"
              placeholder=" DD/MM/YYYY"
              maxW="100%"
              h="50px"
              bg="gray.900"
              border="none"
            />
          </HStack>
        </Flex>
      </FormControl>

      <Text fontSize="2xl" mt="20px" fontFamily="sans-serif" fontWeight="bold">
        Features
      </Text>

      <Flex justify="space-between" gap="50px" direction={["column","column","row"]}>
        <Box w="100%">
          <Text
            fontSize="1xl"
            mt="20px"
            mb="10px"
            fontFamily="sans-serif"
            fontWeight="bold"
          >
            Level 1
          </Text>

          <Box borderTop="1px" borderColor="gray.700">
            <Stack as="ul">
              <Flex align="center" justify="space-between" mt="5px">
                <Text fontFamily="sans-serif" fontSize="12px" fontWeight="bold">
                  Deposit assests
                </Text>
                <FaToggleOn fontSize="30px" bg="green.900" />
              </Flex>

              <Flex align="center" justify="space-between" mt="5px">
                <Text fontFamily="sans-serif" fontSize="12px" fontWeight="bold">
                  Withdraw assests
                </Text>
                <Text fontFamily="sans-serif" fontSize="12px">
                  Enabled $1,000,000/day
                </Text>
              </Flex>

              <Flex align="center" justify="space-between" mt="5px">
                <Text fontFamily="sans-serif" fontSize="12px" fontWeight="bold">
                  Card Purchases
                </Text>
                <FaToggleOn fontSize="30px" bg="green.900" />
              </Flex>

              <Flex align="center" justify="space-between" mt="5px">
                <Text fontFamily="sans-serif" fontSize="12px" fontWeight="bold">
                  Bank Deposit
                </Text>
                <FaToggleOn fontSize="30px" bg="green.900" />
              </Flex>
            </Stack>
          </Box>

          <Button borderRadius="full" h="50px" mt="20px" bg="#3772FF">
            <Text fontFamily="sans-serif">Update Profile</Text>
          </Button>
        </Box>

        {/* level 2 */}
        <Box w="100%">
          <Text
            fontSize="1xl"
            mt="20px"
            mb="10px"
            fontFamily="sans-serif"
            fontWeight="bold"
          >
            Level 2
          </Text>

          <Box borderTop="1px" borderColor="gray.700">
            <Stack as="ul">
              <Flex align="center" justify="space-between" mt="5px">
                <Text fontFamily="sans-serif" fontSize="12px" fontWeight="bold">
                  Fiat and Spot Wallet
                </Text>
                <FaToggleOn fontSize="30px" bg="green.900" />
              </Flex>

              <Flex align="center" justify="space-between" mt="5px">
                <Text fontFamily="sans-serif" fontSize="12px" fontWeight="bold">
                  Margin Wallet
                </Text>
                <Text fontFamily="sans-serif" fontSize="12px">
                  Enabled 100x Leverage
                </Text>
              </Flex>
            </Stack>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}

import {
  Box,
  Flex,
  HStack,
  useColorModeValue,
  Text,
  Heading,
  Button,
} from "@chakra-ui/react";
import "../main.css";

import { Link } from "react-router-dom";
import { useMemo } from "react";

function SubHeader(props) {
  const bg = useColorModeValue("#141416", "#FFFFFF");
  const bgSub = useColorModeValue("#17181C", "#FFFFFF");
  const InputColor = useColorModeValue("#222630", "#FFFFFF");
  const headerColor = useColorModeValue("#FFFFFF", "#23262F");
  const bgFormcolor = useColorModeValue("#18191D", "#F7F7F7");
  const TextColor = useColorModeValue("#FFFFFF", "#969BA9");
  return (
    <Box
      px="10"
      py="14"
      bg={bgFormcolor}
      justifyContent="center"
      display={"flex"}
      w="100%"
    >
      <Box maxW={"1450px"} w="100%" m="auto">
        <Flex
          justify={"space-between"}
          alignItems={{ base: "center", md: "flex-start" }}
          flexDir={{ base: "column", md: "column", lg: "row" }}
        >
          <Heading fontSize={"5xl"} color={headerColor}>
            {props.title}
          </Heading>

          <HStack>
            <Button
              className="btn-style"
              color={"#AAAEBD"}
              _hover={{ bg: "transparent", color: "white" }}
              bg="transparent"
            >
              <Link to="/">Home</Link>
            </Button>
            <Text fontSize={"1xl"} color="#AAAEBD">
              / Buy Crypto
            </Text>
          </HStack>
        </Flex>
      </Box>
    </Box>
  );
}

export default SubHeader;

import React from "react";
import SubHeader from "../../components/SubHeader";
import EarnUp from "../../components/EarnUp";
import {
  Box,
  useColorModeValue,
  Flex,
  Icon,
  Heading,
  Text,
  Image,
} from "@chakra-ui/react";
import { FaCircle } from "react-icons/fa";

const BlogGridV1 = () => {
  const bg = useColorModeValue("#141416", "#FFFFFF");
  const TextColor = useColorModeValue("#FFFFFF", "#969BA9");
  const headerColor = useColorModeValue("#FFFFFF", "#23262F");
  return (
    <Box width="100%" pt="50px" minH="600px" bg={bg}>
      <Box>
        <SubHeader title={"Blog Grid"} />
      </Box>
      <Flex
        w="80%"
        minH="600px"
        justify="space-between"
        color={headerColor}
        m="auto"
        bg={bg}
      >
        <Flex wrap="wrap" w="100%">
          <Flex minH="10px" m="auto" direction="column" w="30%">
            <Image
              borderTopRadius="20px"
              w="100%"
              objectFit="cover"
              src="/image/vidddd.jpg"
              alt="Homebanner"
            />
            <Box
              w="fit-content"
              px="20px"
              py="5px"
              borderRadius="5px"
              my="10px"
              bgColor="#5184ff"
            >
              Learn & Earn
            </Box>
            <Heading py="10px" fontSize="20px">
              Learn about UI8 coin and earn an All-Access Pass
            </Heading>
            <Flex w="90%" justify="space-between" align="center">
              <Flex w="35%" align="center" justify="space-between">
                <Icon as={FaCircle} />
                <Text>Floyd Buckridge</Text>
              </Flex>
              <Text>Feb 03, 2021</Text>{" "}
            </Flex>
          </Flex>
          <Flex minH="10px" m="auto" direction="column" w="30%">
            <Image
              borderTopRadius="20px"
              w="100%"
              objectFit="cover"
              src="/image/vidddd.jpg"
              alt="Homebanner"
            />
            <Box
              w="fit-content"
              px="20px"
              py="5px"
              borderRadius="5px"
              my="10px"
              bgColor="#5184ff"
            >
              Learn & Earn
            </Box>
            <Heading py="10px" fontSize="20px">
              Learn about UI8 coin and earn an All-Access Pass
            </Heading>
            <Flex w="90%" justify="space-between" align="center">
              <Flex w="35%" align="center" justify="space-between">
                <Icon as={FaCircle} />
                <Text>Floyd Buckridge</Text>
              </Flex>
              <Text>Feb 03, 2021</Text>{" "}
            </Flex>
          </Flex>
          <Flex minH="10px" m="auto" direction="column" w="30%">
            <Image
              borderTopRadius="20px"
              w="100%"
              objectFit="cover"
              src="/image/vidddd.jpg"
              alt="Homebanner"
            />
            <Box
              w="fit-content"
              px="20px"
              py="5px"
              borderRadius="5px"
              my="10px"
              bgColor="#5184ff"
            >
              Learn & Earn
            </Box>
            <Heading py="10px" fontSize="20px">
              Learn about UI8 coin and earn an All-Access Pass
            </Heading>
            <Flex w="90%" justify="space-between" align="center">
              <Flex w="35%" align="center" justify="space-between">
                <Icon as={FaCircle} />
                <Text>Floyd Buckridge</Text>
              </Flex>
              <Text>Feb 03, 2021</Text>{" "}
            </Flex>
          </Flex>
          <Flex minH="10px" m="auto" direction="column" w="30%">
            <Image
              borderTopRadius="20px"
              w="100%"
              objectFit="cover"
              src="/image/vidddd.jpg"
              alt="Homebanner"
            />
            <Box
              w="fit-content"
              px="20px"
              py="5px"
              borderRadius="5px"
              my="10px"
              bgColor="#5184ff"
            >
              Learn & Earn
            </Box>
            <Heading py="10px" fontSize="20px">
              Learn about UI8 coin and earn an All-Access Pass
            </Heading>
            <Flex w="90%" justify="space-between" align="center">
              <Flex w="35%" align="center" justify="space-between">
                <Icon as={FaCircle} />
                <Text>Floyd Buckridge</Text>
              </Flex>
              <Text>Feb 03, 2021</Text>{" "}
            </Flex>
          </Flex>
          <Flex minH="10px" m="auto" direction="column" w="30%">
            <Image
              borderTopRadius="20px"
              w="100%"
              objectFit="cover"
              src="/image/vidddd.jpg"
              alt="Homebanner"
            />
            <Box
              w="fit-content"
              px="20px"
              py="5px"
              borderRadius="5px"
              my="10px"
              bgColor="#5184ff"
            >
              Learn & Earn
            </Box>
            <Heading py="10px" fontSize="20px">
              Learn about UI8 coin and earn an All-Access Pass
            </Heading>
            <Flex w="90%" justify="space-between" align="center">
              <Flex w="35%" align="center" justify="space-between">
                <Icon as={FaCircle} />
                <Text>Floyd Buckridge</Text>
              </Flex>
              <Text>Feb 03, 2021</Text>{" "}
            </Flex>
          </Flex>
          <Flex minH="10px" m="auto" direction="column" w="30%">
            <Image
              borderTopRadius="20px"
              w="100%"
              objectFit="cover"
              src="/image/vidddd.jpg"
              alt="Homebanner"
            />
            <Box
              w="fit-content"
              px="20px"
              py="5px"
              borderRadius="5px"
              my="10px"
              bgColor="#5184ff"
            >
              Learn & Earn
            </Box>
            <Heading py="10px" fontSize="20px">
              Learn about UI8 coin and earn an All-Access Pass
            </Heading>
            <Flex w="90%" justify="space-between" align="center">
              <Flex w="35%" align="center" justify="space-between">
                <Icon as={FaCircle} />
                <Text>Floyd Buckridge</Text>
              </Flex>
              <Text>Feb 03, 2021</Text>{" "}
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Box>
        <EarnUp />
      </Box>
    </Box>
  );
};

export default BlogGridV1;

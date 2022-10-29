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
const BlogGridV2 = () => {
  const bg = useColorModeValue("#141416", "#FFFFFF");
  const TextColor = useColorModeValue("#FFFFFF", "#969BA9");
  return (
    <Box width="100%" pt="50px" minH="600px" bg={bg}>
      <Box>
        <SubHeader title={"Blog Default"} />
      </Box>
      <Box
        w="80%"
        minH="600px"
        justify="space-between"
        color={TextColor}
        m="auto"
        pt="50px"
        bg={bg}
      >
        <Flex w="100%" justify="space-between" h="400px">
          <Image
            borderTopLeftRadius="30px"
            w="45%"
            objectFit="cover"
            src="/image/vidddd.jpg"
            alt="Homebanner"
          />
          <Flex justify="center" direction="column" h="100%" w="45%">
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
            <Heading py="10px">
              Learn about UI8 coin and earn an All-Access Pass
            </Heading>
            <Flex w="50%" justify="space-between" align="center">
              <Flex w="40%" align="center" py="20px" justify="space-between">
                <Icon as={FaCircle} />
                <Text>Floyd Buckridge</Text>
              </Flex>
              <Text>Feb 03, 2021</Text>
            </Flex>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Consectetur nibh curabitur sit in adipiscing purus ut sem. Donec
              nulla sem rhoncus dolor aliquam.
            </Text>
            <Text py="10px">Read More</Text>
          </Flex>
        </Flex>
        <Flex my="10px" align="center" justify="center">
          sgsgsg
        </Flex>
        <Flex wrap="wrap" w="100%" pt="30px">
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
      </Box>
      <Box>
        <EarnUp />
      </Box>
    </Box>
  );
};

export default BlogGridV2;

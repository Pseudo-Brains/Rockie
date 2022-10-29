import React from "react";
import SubHeader from "../../components/SubHeader";
import EarnUp from "../../components/EarnUp";
import {
  Box,
  useColorModeValue,
  Input,
  Flex,
  InputGroup,
  Icon,
  InputLeftElement,
  Heading,
  Text,
  Image,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import { FaSearch, FaCircle } from "react-icons/fa";

const BlogList = () => {
  const bg = useColorModeValue("#141416", "#FFFFFF");
  const TextColor = useColorModeValue("#FFFFFF", "#969BA9");
  return (
    <Box width="100%" pt="50px" minH="100vh" bg={bg}>
      <Box>
        <SubHeader title={"Blog List"} />
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
        <Flex position="relative" direction="column" minH="900px">
          <Image
            borderTopLeftRadius="10px"
            w="100%"
            h="700px"
            objectFit="cover"
            src="/image/caaart.jpg"
            alt="Homebanner"
          />
          <Flex
            w="65%"
            mx="auto"
            mt="-60px"
            direction="column"
            justify="center"
            align="center"
            bgColor="#222630"
            borderRadius="25px"
            h="300px"
          >
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
            <Flex w="30%" justify="space-between" align="center">
              <Flex w="60%" align="center" py="20px" justify="space-between">
                <Icon as={FaCircle} />
                <Text>Floyd Buckridge</Text>
              </Flex>
              <Text>Feb 03, 2021</Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex>djdjdj</Flex>
        <Flex width="100%" justify="space-between" pt="50px">
          <Flex
            w="70%"
            direction="column"
            justify="space-between"
            pt="60px"
            minH="400px"
          >
            <Flex my="20px" justify="space-between">
              <Image
                w="46%"
                objectFit="cover"
                src="/image/vidddd.jpg"
                alt="Homebanner"
              />
              <Flex justify="center" direction="column" h="100%" w="47%">
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
                <Heading py="10px" fontSize="25px">
                  Learn about UI8 coin and earn an All-Access Pass
                </Heading>
                <Flex w="70%" justify="space-between" align="center">
                  <Flex
                    w="40%"
                    align="center"
                    py="20px"
                    justify="space-between"
                  >
                    <Icon as={FaCircle} />
                    <Text>Floyd Buckridge</Text>
                  </Flex>
                  <Text>Feb 03, 2021</Text>
                </Flex>
                <Text>
                  Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.
                  Facilisi Id Vestibulum Sem At Sed Neque.
                </Text>
                <Text py="10px">Read More</Text>
              </Flex>
            </Flex>
            <Flex my="20px" justify="space-between">
              <Image
                w="46%"
                objectFit="cover"
                src="/image/vidddd.jpg"
                alt="Homebanner"
              />
              <Flex justify="center" direction="column" h="100%" w="47%">
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
                <Heading py="10px" fontSize="25px">
                  Learn about UI8 coin and earn an All-Access Pass
                </Heading>
                <Flex w="70%" justify="space-between" align="center">
                  <Flex
                    w="40%"
                    align="center"
                    py="20px"
                    justify="space-between"
                  >
                    <Icon as={FaCircle} />
                    <Text>Floyd Buckridge</Text>
                  </Flex>
                  <Text>Feb 03, 2021</Text>
                </Flex>
                <Text>
                  Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.
                  Facilisi Id Vestibulum Sem At Sed Neque.
                </Text>
                <Text py="10px">Read More</Text>
              </Flex>
            </Flex>
            <Flex my="20px" justify="space-between">
              <Image
                w="46%"
                objectFit="cover"
                src="/image/vidddd.jpg"
                alt="Homebanner"
              />
              <Flex justify="center" direction="column" h="100%" w="47%">
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
                <Heading py="10px" fontSize="25px">
                  Learn about UI8 coin and earn an All-Access Pass
                </Heading>
                <Flex w="70%" justify="space-between" align="center">
                  <Flex
                    w="40%"
                    align="center"
                    py="20px"
                    justify="space-between"
                  >
                    <Icon as={FaCircle} />
                    <Text>Floyd Buckridge</Text>
                  </Flex>
                  <Text>Feb 03, 2021</Text>
                </Flex>
                <Text>
                  Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.
                  Facilisi Id Vestibulum Sem At Sed Neque.
                </Text>
                <Text py="10px">Read More</Text>
              </Flex>
            </Flex>
            <Flex my="20px" justify="space-between">
              <Image
                w="46%"
                objectFit="cover"
                src="/image/vidddd.jpg"
                alt="Homebanner"
              />
              <Flex justify="center" direction="column" h="100%" w="47%">
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
                <Heading py="10px" fontSize="25px">
                  Learn about UI8 coin and earn an All-Access Pass
                </Heading>
                <Flex w="70%" justify="space-between" align="center">
                  <Flex
                    w="40%"
                    align="center"
                    py="20px"
                    justify="space-between"
                  >
                    <Icon as={FaCircle} />
                    <Text>Floyd Buckridge</Text>
                  </Flex>
                  <Text>Feb 03, 2021</Text>
                </Flex>
                <Text>
                  Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.
                  Facilisi Id Vestibulum Sem At Sed Neque.
                </Text>
                <Text py="10px">Read More</Text>
              </Flex>
            </Flex>
          </Flex>

          <Flex w="20%" direction="column">
            <InputGroup w="80%" m="10px">
              <InputLeftElement
                pointerEvents="none"
                children={<Icon as={FaSearch} color="gray.300" />}
              />
              <Input borderRadius="30px" type="tel" placeholder="Search Post" />
            </InputGroup>
            <Box>
              <Heading px="5px" py="15px" fontSize="25px">
                Category
              </Heading>
              <UnorderedList>
                <ListItem py="11px" fontSize="20px" display="block">
                  Blockchain
                </ListItem>
                <ListItem py="11px" fontSize="20px" display="block">
                  Technology
                </ListItem>
                <ListItem py="11px" fontSize="20px" display="block">
                  Community
                </ListItem>
                <ListItem py="11px" fontSize="20px" display="block">
                  Learn & Earn
                </ListItem>
              </UnorderedList>
            </Box>
            <Box>
              <Heading py="15px" fontSize="25px">
                Recent Post
              </Heading>
              <Flex
                height="100px"
                align="center"
                justify="space-between"
                px="10px"
                py="10px"
              >
                <Image
                  borderRadius="10px"
                  h="90%"
                  w="20%"
                  objectFit="cover"
                  src="/image/vidddd.jpg"
                  alt="Homebanner"
                />
                <Box w="70%">
                  <Text>LEARN & EARN</Text>
                  <Text>Learn About UI8 Coin And Earn An All-Access Pass</Text>
                </Box>
              </Flex>
              <Flex
                py="10px"
                height="100px"
                align="center"
                justify="space-between"
                px="10px"
              >
                <Image
                  borderRadius="10px"
                  h="90%"
                  w="20%"
                  objectFit="cover"
                  src="/image/vidddd.jpg"
                  alt="Homebanner"
                />
                <Box w="70%">
                  <Text>LEARN & EARN</Text>
                  <Text>Learn About UI8 Coin And Earn An All-Access Pass</Text>
                </Box>
              </Flex>
              <Flex
                py="10px"
                height="100px"
                align="center"
                justify="space-between"
                px="10px"
              >
                <Image
                  borderRadius="10px"
                  h="90%"
                  w="20%"
                  objectFit="cover"
                  src="/image/vidddd.jpg"
                  alt="Homebanner"
                />
                <Box w="70%">
                  <Text>LEARN & EARN</Text>
                  <Text>Learn About UI8 Coin And Earn An All-Access Pass</Text>
                </Box>
              </Flex>
            </Box>
            {/* <Box> */}
            <Heading py="15px" fontSize="25px">
              Popular Tags
            </Heading>
            <Flex>
              <UnorderedList>
                <Flex wrap="wrap" w="50%">
                  <ListItem
                    m="3px"
                    p="3px 10px"
                    width="fit-content"
                    borderRadius="30px"
                    display="block"
                  >
                    Crypto
                  </ListItem>
                  <ListItem
                    m="3px"
                    p="3px 10px"
                    border="1px solid"
                    width="fit-content"
                    borderRadius="30px"
                    display="block"
                  >
                    Virtual Land
                  </ListItem>{" "}
                  <ListItem
                    m="3px"
                    p="3px 10px"
                    border="1px solid"
                    width="fit-content"
                    borderRadius="30px"
                    display="block"
                  >
                    Metaverse
                  </ListItem>{" "}
                  <ListItem
                    m="3px"
                    p="3px 10px"
                    border="1px solid"
                    width="fit-content"
                    borderRadius="30px"
                    display="block"
                  >
                    NFT Marketplace
                  </ListItem>{" "}
                  <ListItem
                    m="3px"
                    p="3px 10px"
                    border="1px solid"
                    width="fit-content"
                    borderRadius="30px"
                    display="block"
                  >
                    Token
                  </ListItem>{" "}
                  <ListItem
                    m="3px"
                    p="3px 10px"
                    border="1px solid"
                    width="fit-content"
                    borderRadius="30px"
                    display="block"
                  >
                    NFTs
                  </ListItem>{" "}
                  <ListItem
                    m="3px"
                    p="3px 10px"
                    border="1px solid"
                    width="fit-content"
                    borderRadius="30px"
                    display="block"
                  >
                    Bitcoin
                  </ListItem>{" "}
                  <ListItem
                    m="3px"
                    p="3px 10px"
                    border="1px solid"
                    width="fit-content"
                    borderRadius="30px"
                    display="block"
                  >
                    Arts
                  </ListItem>
                </Flex>
              </UnorderedList>
            </Flex>
          </Flex>
        </Flex>
      </Box>
      <EarnUp />
    </Box>
  );
};

export default BlogList;

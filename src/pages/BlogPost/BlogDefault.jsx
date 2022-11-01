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
const Blogdefault = () => {
  const bg = useColorModeValue("#141416", "#FFFFFF");
  const TextColor = useColorModeValue("#FFFFFF", "#969BA9");
  const headerColor = useColorModeValue("#FFFFFF", "#23262F");

  return (
    <Box width="100%" pt="50px" minH="100vh" bg={bg}>
      <Box>
        <SubHeader title={"Blog Default"} />
      </Box>
      <Flex
        w="80%"
        minH="600px"
        justify="space-between"
        color={headerColor}
        m="auto"
        bg={bg}
      >
        <Box w="30%" minH="100px" pt="60px">
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
          <Box>
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
          </Box>
        </Box>
        <Box w="75%" minH="300px" pt="60px">
          <Flex minH="30%" m="auto" direction="column" w="95%">
            <Image
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
              my="30px"
              bgColor="#5184ff"
            >
              Learn & Earn
            </Box>
            <Heading py="15px">
              Learn about UI8 coin and earn an All-Access Pass
            </Heading>
            <Flex w="23%" justify="space-between" align="center">
              <Icon as={FaCircle} />
              <Text>Floyd Buckridge</Text>
              <Text>Feb 03, 2021</Text>{" "}
            </Flex>
            <Text fontSize="20px" py="15px">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Consectetur nibh curabitur sit in adipiscing purus ut sem. Donec
              nulla sem rhoncus dolor aliquam.
            </Text>
            <Text>Read More</Text>
          </Flex>
          <Flex minH="30%" m="auto" direction="column" w="95%">
            <Image
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
              my="30px"
              bgColor="#5184ff"
            >
              Learn & Earn
            </Box>
            <Heading py="15px">
              Learn about UI8 coin and earn an All-Access Pass
            </Heading>
            <Flex w="23%" justify="space-between" align="center">
              <Icon as={FaCircle} />
              <Text>Floyd Buckridge</Text>
              <Text>Feb 03, 2021</Text>{" "}
            </Flex>
            <Text fontSize="20px" py="15px">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Consectetur nibh curabitur sit in adipiscing purus ut sem. Donec
              nulla sem rhoncus dolor aliquam.
            </Text>
            <Text>Read More</Text>
          </Flex>
          <Flex minH="30%" m="auto" direction="column" w="95%">
            <Image
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
              my="30px"
              bgColor="#5184ff"
            >
              Learn & Earn
            </Box>
            <Heading py="15px">
              Learn about UI8 coin and earn an All-Access Pass
            </Heading>
            <Flex w="23%" justify="space-between" align="center">
              <Icon as={FaCircle} />
              <Text>Floyd Buckridge</Text>
              <Text>Feb 03, 2021</Text>{" "}
            </Flex>
            <Text fontSize="20px" py="15px">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Consectetur nibh curabitur sit in adipiscing purus ut sem. Donec
              nulla sem rhoncus dolor aliquam.
            </Text>
            <Text>Read More</Text>
          </Flex>
        </Box>
      </Flex>

      <Box>
        <EarnUp />
      </Box>
    </Box>
  );
};

export default Blogdefault;

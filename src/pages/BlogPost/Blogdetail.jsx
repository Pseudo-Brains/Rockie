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
import { FaCircle, FaSearch } from "react-icons/fa";
const Blogdetail = () => {
  const bg = useColorModeValue("#141416", "#FFFFFF");
  const TextColor = useColorModeValue("#FFFFFF", "#969BA9");
  const headerColor = useColorModeValue("#FFFFFF", "#23262F");

  return (
    <Box as="div" width="100%" pt="0px" minH="100px" bgColor={bg}>
      <Box>
        <SubHeader title={"Blog Detail"} />
      </Box>
      <Flex
        as="div"
        w="80%"
        minH="2000px"
        justify="space-between"
        color={headerColor}
        m="auto"
        pt="100px"
        bg={bg}
      >
        <Box w="65%" bg={bg}>
          <Heading fontSize="45px">
            Virtual Land In The Metaverse Is Selling For Millions Of Dollars
          </Heading>
          <Flex w="100%" align="center" py="30px" justify="space-between">
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
            <Flex w="15%" justify="space-between" align="center">
              <Icon as={FaCircle} />
              <Text>Floyd Buckridge</Text>
            </Flex>
          </Flex>
          <Flex
            w="100%"
            // align="center"
            minh="40px"
            my="10px"
            direction="column"
          >
            <Heading py="10px">What is the Metaverse?</Heading>
            <Text pb="20px" fontSize="20px">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere
              sed nec, vestibulum odio diam amet. In massa auctor integer est.
              Morbi viverra neque sagittis varius. Ornare in nibh dui ornare
              mattis vel. Volutpat aenean enim sit cras egestas diam volutpat
              integer est. Ornare in odio lorem pharetra tempor, neque sit.
              Lacus fermentum urna tellus vulputate aliquam nullam amet,
              posuere. Magna ligula et ut sagittis interdum duis. Ut sed
              tristique tempor nibh bibendum accumsan, fringilla. Eget rhoncus
              in hendrerit nascetur odio consectetur enim tristique. In
              porttitor.
            </Text>
            <Image
              borderRadius="10px"
              h="90%"
              objectFit="cover"
              src="/image/vidddd.jpg"
              alt="Homebanner"
            />
          </Flex>{" "}
          <Flex w="100%" minh="40px" my="10px" direction="column">
            <Heading py="10px">What is the Metaverse?</Heading>
            <Text pb="20px" fontSize="20px">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere
              sed nec, vestibulum odio diam amet. In massa auctor integer est.
              Morbi viverra neque sagittis varius. Ornare in nibh dui ornare
              mattis vel. Volutpat aenean enim sit cras egestas diam volutpat
              integer est. Ornare in odio lorem pharetra tempor, neque sit.
              Lacus fermentum urna tellus vulputate aliquam nullam amet,
              posuere. Magna ligula et ut sagittis interdum duis. Ut sed
              tristique tempor nibh bibendum accumsan, fringilla. Eget rhoncus
              in hendrerit nascetur odio consectetur enim tristique. In
              porttitor.
            </Text>
            <Image
              borderRadius="10px"
              h="90%"
              objectFit="cover"
              src="/image/vidddd.jpg"
              alt="Homebanner"
            />
          </Flex>
          <Flex w="100%" minh="40px" my="10px" direction="column">
            <Heading py="10px">What is the Metaverse?</Heading>
            <Text pb="20px" fontSize="20px">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere
              sed nec, vestibulum odio diam amet. In massa auctor integer est.
              Morbi viverra neque sagittis varius. Ornare in nibh dui ornare
              mattis vel. Volutpat aenean enim sit cras egestas diam volutpat
              integer est. Ornare in odio lorem pharetra tempor, neque sit.
              Lacus fermentum urna tellus vulputate aliquam nullam amet,
              posuere. Magna ligula et ut sagittis interdum duis. Ut sed
              tristique tempor nibh bibendum accumsan, fringilla. Eget rhoncus
              in hendrerit nascetur odio consectetur enim tristique. In
              porttitor.
            </Text>
            <Image
              borderRadius="10px"
              h="90%"
              objectFit="cover"
              src="/image/vidddd.jpg"
              alt="Homebanner"
            />
          </Flex>
        </Box>
        <Flex w="28%" direction="column">
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
      <EarnUp />
    </Box>
  );
};

export default Blogdetail;

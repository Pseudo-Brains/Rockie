import React from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  HStack,
  useColorModeValue,
  Button,
  Image,
} from "@chakra-ui/react";

function Home1() {
  const bg = useColorModeValue("#141416", "#FFFFFF");
  const headerColor = useColorModeValue("#FFFFFF", "#23262F");
  const TextColor = useColorModeValue("#FFFFFF", "#969BA9");
  return (
    <Box bg={bg}>
      <Box>
        <Flex flexDir={{ base: "column", md: "column", lg: "row" }}>
          <Box w={{ base: "100%", md: "100%", lg: "50%" }}>
            <Heading color={headerColor}>
              Buy & Sell Digital Assets In The Rockie
            </Heading>
            <Text color={"#AEB2C0"}>
              Coin rockie is the easiest, safest, and fastest way to buy & sell
              crypto asset exchange.
            </Text>
            <Button colorScheme="blue">Get Started Now</Button>
            <Heading>Our Partners</Heading>
            <HStack w={"80%"}>
              <Image
                objectFit="cover"
                src="/image/OurPartners1.png"
                alt="OurPartner1"
              />
              <Image
                objectFit="cover"
                src={"/image/OurPartners2.png"}
                alt="OurPartner2"
              />
              <Image
                objectFit="cover"
                src={"/image/OurPartners3.png"}
                alt="OurPartner3"
              />
            </HStack>
          </Box>
          <Box w={{ base: "100%", md: "100%", lg: "50%" }}></Box>
        </Flex>
      </Box>

      {/* end of box 1 */}
    </Box>
  );
}

export default Home1;

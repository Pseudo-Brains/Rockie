import React, { useEffect } from "react";
import {
  Box,
  Flex,
  Icon,
  Image,
  Text,
  Heading,
  Table,
  Thead,
  Tbody,
  AspectRatio,
  Tr,
  Th,
  Td,
  TableContainer,
  Link,
  transform,
} from "@chakra-ui/react";
import { FaArrowUp, FaStar, FaCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Home3 = () => {
  const { ref: myRef, inView: myElementIsVisible } = useInView();
  const { ref: myRef2, inView: myElementIsVisible2 } = useInView();
  const { ref: myRef3, inView: myElementIsVisible3 } = useInView();
  // useEffect(()=>{
  //  console.log(myElementIsVisible);
  // },[useInView])
  return (
    <React.Fragment>
      <Box
        as="header"
        w="100%"
        h="auto"
        pb="30px"
        bgColor="#141416"
        textAlign="center"
        pt="70px"
      >
        <Text
          color="#fff"
          fontSize={["30px", "40px", "65px"]}
          letterSpacing=" -1.2px"
          lineHeight={["50px", "50px", "75px"]}
          fontWeight="500"
          p={[" 0px 0px", " 0px 0px", " 0px 500px"]}
          mb="24px"
        >
          Learn, buy & sell crypto easily
        </Text>
        <Text
          color="#b1b5c3"
          fontSize={["17px", "20px", "20px"]}
          p={["0 70px", "0 70px", " 0px 600px"]}
          letterSpacing=" -0.2px"
          mb="50px"
        >
          Rockie is the easiest place to buy and sell cryptocurrency. Sign up
          and get started today.
        </Text>
        <Link
          href="#"
          bg="#3772ff"
          color="#fff"
          p="13px 43px"
          borderRadius="90px"
          fontSize={["14px", "14px", "14px"]}
          _hover={{ bg: "gray", textDecoration: "none" }}
          pos="relative"
        >
          Start trading
        </Link>
        <Image src="/image/banner02.png" m="0px auto" />
      </Box>

      <Box
        ref={myRef}
        as="section"
        w="100%"
        h="auto"
        bg="#18191d"
        display="flex"
        align="center"
        justify="space-between"
        flexWrap="wrap"
        position="relative"
        p="50px 0"
        pb={["300px", "300px", "70px"]}
        gap="20px"
        boxShadow="0 14px 64px 0 hsl(0deg 0% 6% / 10%)"
        overflowY="hidden"
      >
        {/* InnerBox */}
        <Box
          as={motion.div}
          w={["100%", "100%", "47%"]}
          textAlign="left"
          pl="20px"
          color="#fff"
          className="firstBox"
          initial={myElementIsVisible ? "" : { y: "0%", opacity: 1 }}
          animate={myElementIsVisible ? "" : { y: "100%", opacity: 0 }}
          transition={{
            type: "spring",
            bounce: 2.5,
            duration: 7,
            delay: 2,
          }}
        >
          <Text as="h1" fontSize={["30px", "30px", "50px"]} pb="10px">
            Why Choose Rockie
          </Text>
          <Text
            as="h2"
            fontSize={["14px", "14px", "17px"]}
            pr={["0px", "0px", "300px"]}
            color="#b1b5c3"
          >
            Rockie has a variety of features that make it the best place to
            start trading
          </Text>
          <Box
            w="100%"
            h="auto"
            p="20px 30px"
            bg="#141416"
            m="30px 0"
            borderRadius="10px"
            display="flex"
            alignItems="center"
            cursor="pointer"
          >
            <Box
              p="35px"
              bg="rgba(211,53,53,.1);"
              borderRadius="10px"
              mr="20px"
            >
              <Image src="/image/pottiff.png" />
            </Box>
            <Box>
              <Text
                as="h3"
                mb="10px"
                color="#fff"
                fontSize={["none", "none", "20px"]}
              >
                Manage your portfolio
              </Text>
              <Text
                as="p"
                color="#b1b5c3"
                fontSize={["14px", "14px", "15px"]}
                x
              >
                Buy And Sell Popular Digital Currencies, Keep Track Of Them In
                The One Place.
              </Text>
            </Box>
          </Box>
          <Box
            w="100%"
            h="auto"
            p="20px 30px"
            m="30px 0"
            borderRadius="10px"
            display="flex"
            alignItems="center"
            cursor="pointer"
            _hover={{
              bg: "#141416",
              boxShadow: "0 14px 64px 0 hsl(0deg 0% 6% / 10%)",
            }}
          >
            <Box
              p="35px"
              bg="rgba(88,189,125,.1);"
              borderRadius="10px"
              mr="20px"
            >
              <Image src="/image/vauuul.png" />
            </Box>
            <Box>
              <Text
                as="h3"
                mb="10px"
                color="#fff"
                fontSize={["none", "none", "20px"]}
              >
                Recurring buys
              </Text>
              <Text as="p" color="#b1b5c3" fontSize={["14px", "14px", "15px"]}>
                Invest In Cryptocurrency Slowly Over Time By Scheduling Buys
                Daily, Weekly, Or Monthly.
              </Text>
            </Box>
          </Box>
          <Box
            w="100%"
            h="auto"
            p="20px 30px"
            m="30px 0"
            borderRadius="10px"
            display="flex"
            alignItems="center"
            cursor="pointer"
            _hover={{
              bg: "#141416",
              boxShadow: "0 14px 64px 0 hsl(0deg 0% 6% / 10%)",
            }}
          >
            <Box
              p="35px"
              bg="rgba(55,114,255,.1);"
              borderRadius="10px"
              mr="20px"
            >
              <Image src="/image/mobbil.png" />
            </Box>
            <Box>
              <Text
                as="h3"
                mb="10px"
                color="#fff"
                fontSize={["none", "none", "20px"]}
              >
                Mobile apps
              </Text>
              <Text as="p" color="#b1b5c3" fontSize={["14px", "14px", "15px"]}>
                Stay On Top Of The Markets With The Cryptolly App For Android Or
                IOS.
              </Text>
            </Box>
          </Box>
        </Box>
        {/* InnerBox1 */}
        <Box
          as="div"
          className="box"
          w={["100%", "100%", "50%"]}
          display="flex"
          justifyContent="flex-end"
          alignItems="center"
          // border="2px solid #fff"
          mt={["100px", "100px", "0px"]}
        >
          <Box
            as="div"
            className="innerBox"
            w={["100%", "100%", "57%"]}
            h="400px"
            borderRadius="15px"
            bg="#1B2234"
            position="relative"
          >
            {/* reaction */}
            <Box
              as="div"
              className="reaction"
              pos="absolute"
              w={["90%", "90%", "100%"]}
              h="150px"
              bg="#23262f"
              zIndex={3}
              top="-70px"
              left={["0%", "5%", "-20%"]}
              borderRadius="10px"
              textAlign="center"
              p="20px 0px"
              pt="30px"
            >
              <Text color="#fff" mb="20px">
                How was your experience
              </Text>
              <Flex>
                <Image m="auto" src="/image/download (16).png" />
                <Image m="auto" src="/image/download (18).png" />
                <Image m="auto" src="/image/download (19).png" />
                <Image m="auto" src="/image/download (20).png" />
                <Image m="auto" src="/image/download (21).png" />
              </Flex>
            </Box>
            <Image
              src="/image/arrow.png"
              pos="absolute"
              zIndex={4}
              left="-40%"
              top="50px"
            />
            {/* Btc */}
            <Box
              as="div"
              className="btc"
              pos="absolute"
              w={["90%", "90%", "100%"]}
              h="100px"
              bg="#23262f"
              zIndex={3}
              top="50%"
              transform="translateY(-50%)"
              left={["5%", "5%", "-60%"]}
              borderRadius="10px"
              p=" 0px 20px"
            >
              <Flex p="0 10px" h="100%" w="100%" align="center">
                <Image src="/image/btc3.png" />
                <Box
                  as="div"
                  display="flex"
                  flexDirection="column"
                  p=" 0 10px"
                  color="#fff"
                  ml="10px"
                >
                  <Text fontSize="20px">BTC</Text>
                  <Text fontSize="10px" opacity="0.7">
                    +1.467%
                  </Text>
                </Box>
                {/*  */}
                <Box
                  as="div"
                  display="flex"
                  flexDirection="column"
                  p=" 0 10px"
                  color="#fff"
                  ml="auto"
                >
                  <Text fontSize="14px">$56,623.54</Text>
                  <Image src="/image/download (9).png" />
                </Box>
              </Flex>
            </Box>
            {/* profile */}
            <Box
              as="div"
              className="profile"
              pos="absolute"
              w={["90%", "90%", "70%"]}
              h="370px"
              bg="#23262f"
              zIndex={3}
              bottom={["-250px", "-250px", "-75px"]}
              right={["5%", "5%", "-5%"]}
              borderRadius="10px"
              p="20px 0px"
              color="#fff"
              overflow="hidden"
            >
              <Image src="/image/user.JPG" borderRadius="50%" m=" 10px auto" />
              <Text as="h3" fontSize="15px">
                Esther Howard
              </Text>
              <Text as="p" fontSize="12px" opacity="0.7">
                estherhoward01@gmail.com
              </Text>
              <Box
                as="div"
                m="10px 0"
                ml={["9px", "9px", "30px"]}
                w={["97%", "97%", "100%"]}
                h="170px"
                bg="linear-gradient(216.56deg,#383fde 5.32%,#8444d5 94.32%)"
                borderRadius="10px"
                textAlign="left"
                p="10px"
                pb="0px"
              >
                <Text>Portfolio</Text>
                <Text m="7px 0px ">Balance</Text>
                <Flex m="7px 0px">
                  <Text fontSize="17px" fontWeight="500">
                    $2,509.75
                  </Text>
                  <Text fontSize="14px" p=" 0px 10px" pt="5px">
                    +9.77%
                  </Text>
                </Flex>
                <Flex>
                  <Link
                    p="10px "
                    border="1px solid #fff"
                    borderRadius="15px"
                    m="10px 0px"
                    mt="10px"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    width="30%"
                    fontSize="8px"
                    _hover={{
                      textDecoration: "none",
                      bg: "#fff",
                      color: "#23262f",
                      border: "none",
                    }}
                  >
                    Deposit
                  </Link>
                  <Link
                    p="10px "
                    border="1px solid #fff"
                    borderRadius="15px"
                    m="10px 10px"
                    mt="10px"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    width="30%"
                    fontSize="8px"
                    _hover={{
                      textDecoration: "none",
                      bg: "#fff",
                      color: "#23262f",
                      border: "none",
                    }}
                  >
                    Withdraw
                  </Link>
                </Flex>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        as="section"
        h="auto"
        w="100%"
        bg="#141416"
        p="100px 20px"
        ref={myRef2}
        overflow="hidden"
      >
        <Flex justify="space-between" flexWrap="wrap">
          <Image src="/image/trading.png" mb={["30px", "30px", "0px"]} />
          <Box
            as={motion.div}
            color="#fff"
            ml="20px"
            w={["100%", "100%", "40%"]}
            initial={myElementIsVisible2 ? "" : { y: "0%", opacity: 1 }}
            animate={myElementIsVisible2 ? "" : { y: "100%", opacity: 0 }}
            transition={{
              type: "spring",
              bounce: 2.5,
              duration: 7,
              delay: 2,
            }}
          >
            <Text fontSize="50px" fontWeight={500}>
              3 Steps Easy Trading
            </Text>
            <Text
              mt="5px"
              fontSize="17px"
              opacity="0.7"
              pr={["10px", "10px", "200px"]}
              pb="20px"
            >
              Rookie has a variety of features that make it the best place to
              start trading
            </Text>
            <Flex as="div" className="row" w="100%" h="150px" m="10px 0px">
              <Image src="/image/step1.png" />
              <Box as="div">
                <Text as="h2" fontSize="14px" opacity={0.7}>
                  STEP 1
                </Text>
                <Text as="h3" fontSize="14px" m="10px 0px">
                  Download
                </Text>
                <Text
                  as="p"
                  opacity={0.7}
                  fontSize="14px"
                  pr={["10px", "10px", "100px"]}
                >
                  Stacks is A Production-Ready Library Of Stackable Content
                  Blocks Built In React Native
                </Text>
              </Box>
            </Flex>
            <Flex as="div" className="row" w="100%" h="150px" m="10px 0px">
              <Image src="/image/step2.png" />
              <Box as="div">
                <Text as="h2" fontSize="14px" opacity={0.7}>
                  STEP 2
                </Text>
                <Text as="h3" fontSize="14px" m="10px 0px">
                  Connect Wallet
                </Text>
                <Text
                  as="p"
                  opacity={0.7}
                  fontSize="14px"
                  pr={["10px", "10px", "100px"]}
                >
                  Stacks is A Production-Ready Library Of Stackable Content
                  Blocks Built In React Native
                </Text>
              </Box>
            </Flex>
            <Flex as="div" className="row" w="100%" h="150px" m="10px 0px">
              <Image src="/image/step3.png" />
              <Box as="div">
                <Text as="h2" fontSize="14px" opacity={0.7}>
                  STEP 3
                </Text>
                <Text as="h3" fontSize="14px" m="10px 0px">
                  Start Trading
                </Text>
                <Text
                  as="p"
                  opacity={0.7}
                  fontSize="14px"
                  pr={["10px", "10px", "100px"]}
                >
                  Stacks is A Production-Ready Library Of Stackable Content
                  Blocks Built In React Native
                </Text>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Box>

      <Box
        ref={myRef3}
        as="Section"
        bg="#18191d"
        w="100%"
        h="auto"
        color="#fff"
        p="100px 0px"
        textAlign="Center"
      >
        <Text as="h1" fontSize="65px" fontWeight={500}>
          The Number's Don't Lie
        </Text>
        <Text
          as="p"
          w={["90%", "90%", "50%"]}
          m="10px auto"
          opacity={0.7}
          fontSize="17px"
          mb="60px"
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum qui
          cum aut possimus nostrum in perferendis incidunt accusantium?
          Pariatur, sunt.
        </Text>
        <Flex
          as={motion.div}
          w={["95%", "95%", "60%"]}
          h="auto"
          bg="#23262f"
          m="40px auto"
          borderRadius="15px"
          position="relative"
          justifyContent="space-between"
          align="center"
          wrap="wrap"
          p="50px 70px"
          initial={myElementIsVisible3 ? "" : { y: "0%", opacity: 1 }}
          animate={myElementIsVisible3 ? "" : { y: "100%", opacity: 0 }}
          transition={{
            type: "tween",
            bounce: 2.5,
            duration: 7,
            delay: 2,
          }}
        >
          <Flex direction="column">
            <Flex>
              <Image w="20px" src="/image/svg6.svg" />
              <Text m="0px 7px" fontSize="25px" opacity={0.7}>
                Trades per day
              </Text>
            </Flex>
            <Text m="0px 0px" fontSize="50px" fontWeight={500} textAlign="left">
              20m+
            </Text>
          </Flex>

          <Flex direction="column">
            <Flex>
              <Image w="20px" src="/image/svg7.svg" />
              <Text m="0px 7px" fontSize="25px" opacity={0.7}>
                Digital assests
              </Text>
            </Flex>
            <Text m="0px 0px" fontSize="50px" fontWeight={500} textAlign="left">
              100m+
            </Text>
          </Flex>
          <Flex direction="column" m={["20px auto", "20px auto", "0px 0px"]}>
            <Flex>
              <Image w="20px" src="/image/svg8.svg" />
              <Text m="0px 7px" fontSize="25px" opacity={0.7}>
                Happy users
              </Text>
            </Flex>
            <Text m="0px 0px" fontSize="50px" fontWeight={500} textAlign="left">
              10m+
            </Text>
          </Flex>
          {/* absolute */}
          <Image pos="absolute" left="-2.5%" src="/image/Btc4.png" />
          <Image
            pos="absolute"
            bottom="-10%"
            right="-3.5%"
            src="/image/pie.png"
          />
          <Image
            pos="absolute"
            bottom={["-25%", "-25%", "-37%"]}
            left="25%"
            src="/image/good.png"
          />
          <Image pos="absolute" top="-55%" right="-10%" src="/image/dot.png" />
        </Flex>
      </Box>

      <Flex
        as="section"
        w="100%"
        h="auto"
        p="40px 20px"
        bg="#141416"
        display="flex"
        flexWrap="wrap"
      >
        <Box as="div" w={["100%", "100%", "50%"]} color="#fff">
          <Text
            as="h1"
            fontSize="50px"
            pl={["0px", "0px", "50px"]}
            fontWeight={500}
            m="10px 0px"
          >
            What Our Customers Say
          </Text>
          <Text>
            <Text
              textAlign="center"
              as="h2"
              opacity={0.7}
              fontSize="22px"
              p={["0px", "0px", " 0px 70px"]}
              pr={["0px", "0px", " 200px"]}
              m="10px 0px"
            >
              Our customers from all over the world share their lovely words
              about us
            </Text>
          </Text>
          <Box
            as="div"
            w="97%"
            h="auto"
            m="20px 0px"
            borderRadius="15px"
            bg="#222630"
            p="50px 50px"
            textAlign={["left", "left", "center"]}
            display="flex"
            overflow="hidden"
            cursor="pointer"
          >
            <Swiper slidesPerView={1} spaceBetween={200}>
              <SwiperSlide>
                <Box w="100%" flexShrink={0}>
                  <Text as="h2" fontSize="30px" fontWeight={500} m="10px 0px">
                    “Trading crypto has never been so easy.”
                  </Text>
                  <Text
                    as="p"
                    fontSize="20px"
                    m="20px 0px"
                    lineHeight="35px"
                    opacity={0.7}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi
                    non viverra eros purus. Turpis ac scelerisque blandit mauris
                    ut senectus nibh. Pretium cras sit non at amet velit id in.
                  </Text>
                  <Flex mt="40px">
                    <Image src="/image/download (8).png" />
                    <Text ml="20px" mt="10px" fontSize="20px" fontWeight={500}>
                      Marvin McKinney
                    </Text>
                    <Image src="/image/req.png" h="40px" w="40px" ml="auto" />
                  </Flex>
                </Box>
              </SwiperSlide>
              <SwiperSlide>
                <Box w="100%" flexShrink={0}>
                  <Text as="h2" fontSize="30px" fontWeight={500} m="10px 0px">
                    “Trading crypto has never been so easy.”
                  </Text>
                  <Text
                    as="p"
                    fontSize="20px"
                    m="20px 0px"
                    lineHeight="35px"
                    opacity={0.7}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi
                    non viverra eros purus. Turpis ac scelerisque blandit mauris
                    ut senectus nibh. Pretium cras sit non at amet velit id in.
                  </Text>
                  <Flex mt="40px">
                    <Image src="/image/download (11).png" />
                    <Text ml="20px" mt="10px" fontSize="20px" fontWeight={500}>
                      Marvin McKinney
                    </Text>
                    <Image src="/image/req.png" h="40px" w="40px" ml="auto" />
                  </Flex>
                </Box>
              </SwiperSlide>
              <SwiperSlide>
                <Box w="100%" flexShrink={0}>
                  <Text as="h2" fontSize="30px" fontWeight={500} m="10px 0px">
                    “Trading crypto has never been so easy.”
                  </Text>
                  <Text
                    as="p"
                    fontSize="20px"
                    m="20px 0px"
                    lineHeight="35px"
                    opacity={0.7}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi
                    non viverra eros purus. Turpis ac scelerisque blandit mauris
                    ut senectus nibh. Pretium cras sit non at amet velit id in.
                  </Text>
                  <Flex mt="40px">
                    <Image src="/image/download (12).png" />
                    <Text ml="20px" mt="10px" fontSize="20px" fontWeight={500}>
                      Marvin McKinney
                    </Text>
                    <Image src="/image/req.png" h="40px" w="40px" ml="auto" />
                  </Flex>
                </Box>
              </SwiperSlide>
            </Swiper>
          </Box>
        </Box>
        <Box
          w={["100%", "100%", "50%"]}
          h="570px"
          mt={["20px", "20px", "0px"]}
          // border="2px solid #fff"
          bgImage="url('/image/testimonials.png')"
          bgPosition="right"
          bgSize="contain"
          pos="relative"
        >
          <Box
            pos="absolute"
            top="20%"
            left="9%"
            _before={{
              pos: "absolute",
              content: "' '",
              w: "120%",
              h: "120%",
              bg: "#fff",
              zIndex: 2,
              borderRadius: "50%",
            }}
            _after={{
              pos: "absolute",
              content: "' '",
              w: "17px",
              h: "17px",
              bg: "#fff",
              zIndex: 4,
              borderRadius: "50%",
              clipPath: "polygon(100% 0 , 100% 100% , 0 50%)",
              transform: "rotate(-90deg)",
              mb: "-70px",
            }}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Image src="/image/download (11).png" pos="relative" zIndex={3} />
          </Box>
          <Box
            pos="absolute"
            top="20%"
            right="9%"
            _before={{
              pos: "absolute",
              content: "' '",
              w: "120%",
              h: "120%",
              bg: "#fff",
              zIndex: 2,
              borderRadius: "50%",
            }}
            _after={{
              pos: "absolute",
              content: "' '",
              w: "17px",
              h: "17px",
              bg: "#fff",
              zIndex: 4,
              borderRadius: "50%",
              clipPath: "polygon(100% 0 , 100% 100% , 0 50%)",
              transform: "rotate(-90deg)",
              mb: "-70px",
            }}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Image src="/image/download (13).png" pos="relative" zIndex={3} />
          </Box>
          <Box
            pos="absolute"
            top="50%"
            right="10%"
            _before={{
              pos: "absolute",
              content: "' '",
              w: "120%",
              h: "120%",
              bg: "#fff",
              zIndex: 2,
              borderRadius: "50%",
            }}
            _after={{
              pos: "absolute",
              content: "' '",
              w: "17px",
              h: "17px",
              bg: "#fff",
              zIndex: 4,
              borderRadius: "50%",
              clipPath: "polygon(100% 0 , 100% 100% , 0 50%)",
              transform: "rotate(-90deg)",
              mb: "-70px",
            }}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Image src="/image/download (12).png" pos="relative" zIndex={3} />
          </Box>
          <Box
            pos="absolute"
            top="40%"
            right="50%"
            _before={{
              pos: "absolute",
              content: "' '",
              w: "120%",
              h: "120%",
              bg: "#fff",
              zIndex: 2,
              borderRadius: "50%",
            }}
            _after={{
              pos: "absolute",
              content: "' '",
              w: "17px",
              h: "17px",
              bg: "#fff",
              zIndex: 4,
              borderRadius: "50%",
              clipPath: "polygon(100% 0 , 100% 100% , 0 50%)",
              transform: "rotate(-90deg)",
              mb: "-70px",
            }}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Image src="/image/download (8).png" pos="relative" zIndex={3} />
          </Box>
          <Box
            pos="absolute"
            top="0%"
            left="30%"
            _before={{
              pos: "absolute",
              content: "' '",
              w: "120%",
              h: "120%",
              bg: "#fff",
              zIndex: 2,
              borderRadius: "50%",
            }}
            _after={{
              pos: "absolute",
              content: "' '",
              w: "17px",
              h: "17px",
              bg: "#fff",
              zIndex: 4,
              borderRadius: "50%",
              clipPath: "polygon(100% 0 , 100% 100% , 0 50%)",
              transform: "rotate(-90deg)",
              mb: "-70px",
            }}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Image src="/image/download (14).png" pos="relative" zIndex={3} />
          </Box>
          <Box
            pos="absolute"
            top="40%"
            left="15%"
            _before={{
              pos: "absolute",
              content: "' '",
              w: "120%",
              h: "120%",
              bg: "#fff",
              zIndex: 2,
              borderRadius: "50%",
            }}
            _after={{
              pos: "absolute",
              content: "' '",
              w: "17px",
              h: "17px",
              bg: "#fff",
              zIndex: 4,
              borderRadius: "50%",
              clipPath: "polygon(100% 0 , 100% 100% , 0 50%)",
              transform: "rotate(-90deg)",
              mb: "-70px",
            }}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Image src="/image/download (14).png" pos="relative" zIndex={3} />
          </Box>
          <Box
            pos="absolute"
            bottom="20%"
            left="25%"
            _before={{
              pos: "absolute",
              content: "' '",
              w: "120%",
              h: "120%",
              bg: "#fff",
              zIndex: 2,
              borderRadius: "50%",
            }}
            _after={{
              pos: "absolute",
              content: "' '",
              w: "17px",
              h: "17px",
              bg: "#fff",
              zIndex: 4,
              borderRadius: "50%",
              clipPath: "polygon(100% 0 , 100% 100% , 0 50%)",
              transform: "rotate(-90deg)",
              mb: "-70px",
            }}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Image src="/image/download (14).png" pos="relative" zIndex={3} />
          </Box>
        </Box>
      </Flex>

      <Box
        as="div"
        w="100%"
        h="auto"
        bg="#18191d"
        p={[" 40px 15px", " 40px 15px", " 40px 100px"]}
      >
        <Flex
          w="100%"
          h="auto"
          justify="space-between"
          align="center"
          flexWrap="wrap"
        >
          <Image src="/image/sec.png" />

          <Box w={["100%", "100%", "35%"]} color="#fff">
            <Text as="h1" fontSize="50px" fontWeight={500}>
              Join Our Trading Global Community
            </Text>
            <Text as="p" opacity={0.8} fontSize="25px" mt="20px" mb="70px">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum sit
              amet, sagittis leo aliquam nunc etiam. Ac et mauris et nisi
              molestie.
            </Text>
            <Link
              href="#"
              bg="#3772ff"
              color="#fff"
              p="17px 60px"
              borderRadius="90px"
              fontSize={["14px", "14px", "14px"]}
              _hover={{ bg: "gray", textDecoration: "none" }}
              pos="relative"
              mt="40px"
            >
              Join now
            </Link>
          </Box>
        </Flex>
      </Box>

      <Box
        as="section"
        w="100%"
        h="auto"
        color="#fff"
        p="100px 20px"
        bg="#141416"
      >
        <Flex justify="space-between" alignItems="flex-end" p="10px 0px">
          <Flex direction="column">
            <Text as="h1" fontSize="50px" fontWeight={500} m="10px 0px">
              Learn And Earn
            </Text>
            <Text opacity={0.7} fontSize="20px">
              Stacks is a production-ready library of stackable <br />
              content blocks built in React Native.
            </Text>
          </Flex>
          <Link
            href="#"
            color="#fff"
            w="200px"
            h="60px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            border="2px solid #23262f"
            borderRadius="40px"
            fontSize={["15px", "15px", "15px"]}
            fontWeight={500}
            _hover={{ color: "#3772ff" }}
            pos="relative"
          >
            See all article
          </Link>
        </Flex>
        <Flex
          as="div"
          className="wrapper"
          direction={["column", "column", "row"]}
          justify="space-between"
        >
          <Flex
            as="div"
            w={["100%", "100%", "45%"]}
            className="box"
            direction="column"
          >
            <Box
              as="div"
              className="innerBox"
              bg="#18191d"
              w="100%"
              h="700px"
              borderRadius="15px"
              m="30px 0px"
              pos="relative"
            >
              <Image src="/image/blog.png" w="100%" />
              <Link
                w="70px"
                h="70px"
                borderRadius="50%"
                bg="#e5e5e5"
                pos="absolute"
                top="50%"
                left="50%"
                display="flex"
                alignItems="center"
                justifyContent="center"
                transform="translate(-50%,-50%)"
              >
                <Image src="/image/svg9.svg" w="25%" />
              </Link>
            </Box>
            <Box>
              <Flex w="100%" justify="space-between">
                <Link
                  href="#"
                  color="#fff"
                  w="150px"
                  h="45px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  border="2px solid #23262f"
                  fontSize={["15px", "15px", "15px"]}
                  bg="#3772ff"
                  fontWeight={500}
                  _hover={{ textDecoration: "none" }}
                  pos="relative"
                >
                  Learn & Earn
                </Link>
                <Link
                  href="#"
                  color="#fff"
                  w="200px"
                  h="60px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  border="2px solid #23262f"
                  borderRadius="40px"
                  fontSize={["15px", "15px", "15px"]}
                  fontWeight={500}
                  _hover={{ color: "#3772ff" }}
                  pos="relative"
                >
                  Learn more
                </Link>
              </Flex>
              <Link
                as="a"
                display="block"
                m="30px 0px"
                fontSize="40px"
                pr="100px"
                _hover={{ textDecoration: "none", color: "#3772ff" }}
              >
                Learn about UI8 coin and earn an All-Access Pass
              </Link>
              <Text as="p" color="#b1b5c3" fontSize="20px">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Facilisi id vestibulum sem
              </Text>
            </Box>
          </Flex>

          <Box as="div" w={["100%", "100%", "45%"]} className="box" h="auto">
            <Flex gap="10px 20px" align="center" m="40px 0px">
              <Box
                w="50%"
                h="300px"
                borderRadius="10px"
                bg="#18191d"
                pos="relative"
                display="flex"
                alignItems="center"
              >
                <Image src="/image/blog-01.jpg" w="100%" />
                <Link
                  w="70px"
                  h="70px"
                  borderRadius="50%"
                  bg="#e5e5e5"
                  pos="absolute"
                  top="50%"
                  left="50%"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  transform="translate(-50%,-50%)"
                >
                  <Image src="/image/svg9.svg" w="25%" />
                </Link>
              </Box>
              <Box w="50%">
                <Link
                  href="#"
                  color="#fff"
                  w="150px"
                  h="45px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  border="2px solid #23262f"
                  fontSize={["15px", "15px", "15px"]}
                  bg="#3772ff"
                  fontWeight={500}
                  _hover={{ textDecoration: "none" }}
                  pos="relative"
                >
                  Learn & Earn
                </Link>
                <Link
                  as="a"
                  display="block"
                  m="20px 0px"
                  fontSize="25px"
                  _hover={{ textDecoration: "none", color: "#3772ff" }}
                >
                  Learn about UI8 coin and earn an All-Access Pass
                </Link>
                <Text as="p" color="#b1b5c3" fontSize="17px">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Facilisi id vestibulum sem
                </Text>
              </Box>
            </Flex>
            <Flex gap="10px 20px" align="center" m="40px 0px">
              <Box
                w="50%"
                h="300px"
                borderRadius="10px"
                bg="#18191d"
                pos="relative"
                display="flex"
                alignItems="center"
              >
                <Image src="/image/blog-01.jpg" w="100%" />
                <Link
                  w="70px"
                  h="70px"
                  borderRadius="50%"
                  bg="#e5e5e5"
                  pos="absolute"
                  top="50%"
                  left="50%"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  transform="translate(-50%,-50%)"
                >
                  <Image src="/image/svg9.svg" w="25%" />
                </Link>
              </Box>
              <Box w="50%">
                <Link
                  href="#"
                  color="#fff"
                  w="150px"
                  h="45px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  border="2px solid #23262f"
                  fontSize={["15px", "15px", "15px"]}
                  bg="#3772ff"
                  fontWeight={500}
                  _hover={{ textDecoration: "none" }}
                  pos="relative"
                >
                  Learn & Earn
                </Link>
                <Link
                  as="a"
                  display="block"
                  m="20px 0px"
                  fontSize="25px"
                  _hover={{ textDecoration: "none", color: "#3772ff" }}
                >
                  Learn about UI8 coin and earn an All-Access Pass
                </Link>
                <Text as="p" color="#b1b5c3" fontSize="17px">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Facilisi id vestibulum sem
                </Text>
              </Box>
            </Flex>
            <Flex gap="10px 20px" align="center" m="40px 0px">
              <Box
                w="50%"
                h="300px"
                borderRadius="10px"
                bg="#18191d"
                pos="relative"
                display="flex"
                alignItems="center"
              >
                <Image src="/image/blog-01.jpg" w="100%" />
                <Link
                  w="70px"
                  h="70px"
                  borderRadius="50%"
                  bg="#e5e5e5"
                  pos="absolute"
                  top="50%"
                  left="50%"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  transform="translate(-50%,-50%)"
                >
                  <Image src="/image/svg9.svg" w="25%" />
                </Link>
              </Box>
              <Box w="50%">
                <Link
                  href="#"
                  color="#fff"
                  w="150px"
                  h="45px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  border="2px solid #23262f"
                  fontSize={["15px", "15px", "15px"]}
                  bg="#3772ff"
                  fontWeight={500}
                  _hover={{ textDecoration: "none" }}
                  pos="relative"
                >
                  Learn & Earn
                </Link>
                <Link
                  as="a"
                  display="block"
                  m="20px 0px"
                  fontSize="25px"
                  _hover={{ textDecoration: "none", color: "#3772ff" }}
                >
                  Learn about UI8 coin and earn an All-Access Pass
                </Link>
                <Text as="p" color="#b1b5c3" fontSize="17px">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Facilisi id vestibulum sem
                </Text>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </React.Fragment>
  );
};

export default Home3;

import {
  Box,
  Flex,
  Icon,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useColorModeValue,
  useColorMode,
  Circle,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaBell, FaMoon, FaUser, FaSun } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillCaretDown } from "react-icons/ai";
import { GrClose } from "react-icons/gr";

import { useState, useMemo } from "react";



const Nav = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [display, changeDisplay] = useState("none");
  const bg = useColorModeValue("#141416", "#FFFFFF");
  const TextColor = useColorModeValue("#FFFFFF", "Black");

  return (
    <Flex>
      <Flex
        color={TextColor}
        w="100%"
        position={"fixed"}
        zIndex="100"
        bg={bg}
        justify="space-between"
        h="50px"
      >
        <Flex
          // px="10px"
          w={{ base: "none", lg: "80%", xl: "1100px" }}
          h="100%"
          align={"center"}
          justify={{ base: "none", lg: "space-around", xl: "space-between" }}
        >
          <Flex w="13%" h="100%" pt="10px" align="center">
            {colorMode === "light" ? (
              <Image
                objectFit="cover"
                src="/image/rock-logo1.png"
                alt="logo"
                // boxSize={"160px"}
                // width={"230px"}
                // mx={"10px"}
              />
            ) : (
              <Image
                objectFit="cover"
                src="/image/rockie-logo.png"
                alt="logo"
                // boxSize={"160px"}
                width={"230px"}
                mb={"3"}
              />
            )}
          </Flex>
          <Flex
            fontWeight="extrabold"
            fontSize="17px"
            w="80%"
            display={{ base: "none", lg: "flex", xl: "flex" }}
            align="center"
            justify="space-between"
          >
            <Menu>
              <MenuButton fontWeight="700">Home</MenuButton>
              <MenuList
                bg={bg}
                border="none"
                mt="10px"
                // _hover={{ background: "none" }}
              >
                <MenuItem _hover={{ background: "none" }} fontSize="20px">
                  <Link to="/">Home</Link>
                </MenuItem>
                <MenuItem _hover={{ background: "none" }}>
                  <Link to="/home2">Home2</Link>
                </MenuItem>
                <MenuItem _hover={{ background: "none" }}>
                  <Link to="/home3">Home3</Link>
                </MenuItem>
              </MenuList>
            </Menu>
            <Menu>
              <MenuButton fontWeight="700">Buy Crypto Select</MenuButton>
              <MenuList
                bg={bg}
                border="none"
                mt="10px"
                // _hover={{ background: "none" }}
              >
                <MenuItem _hover={{ background: "none" }}>
                  <Link to="/buycryptoselect">Buy Crypto Select</Link>
                </MenuItem>
                <MenuItem _hover={{ background: "none" }}>
                  <Link to="/buycryptoconfirm">Buy Crypto Confirm</Link>
                </MenuItem>
                <MenuItem _hover={{ background: "none" }}>
                  <Link to="/buycryptodetails">Buy Crypto Details</Link>
                </MenuItem>
              </MenuList>
            </Menu>
            <Menu>
              <MenuButton fontWeight="700">Markets</MenuButton>
              <MenuList>
                <MenuItem>New Window</MenuItem>
                <MenuItem>Open Closed Tab</MenuItem>
                <MenuItem>Open File</MenuItem>
              </MenuList>
            </Menu>
            <Menu>
              <MenuButton fontWeight="700">Sell crypto</MenuButton>
              <MenuList>
                <MenuItem>New Window</MenuItem>
                <MenuItem>Open Closed Tab</MenuItem>
                <MenuItem>Open File</MenuItem>
              </MenuList>
            </Menu>
            <Menu>
              <MenuButton fontWeight="700">Blog</MenuButton>
              <MenuList
                bg={bg}
                border="none"
                mt="10px"
                // _hover={{ background: "none" }}
              >
                <MenuItem _hover={{ background: "none" }}>
                  <Link to="/blogdefault">Blog Default</Link>
                </MenuItem>
                <MenuItem _hover={{ background: "none" }}>
                  <Link to="/blogdefaultV1">Blog Grid v1</Link>
                </MenuItem>
                <MenuItem _hover={{ background: "none" }}>
                  <Link to="/blogdefaultV2">Blog Grid v2</Link>
                </MenuItem>
                <MenuItem _hover={{ background: "none" }}>
                  <Link to="/bloglist">Blog List</Link>
                </MenuItem>
                <MenuItem _hover={{ background: "none" }}>
                  <Link to="/blogdetail">Blog Details</Link>
                </MenuItem>
              </MenuList>
            </Menu>
            <Menu>
              <MenuButton fontWeight="700">BITUSDT</MenuButton>
              <MenuList>
                <MenuItem>New Window</MenuItem>
                <MenuItem>Open Closed Tab</MenuItem>
                <MenuItem>Open File</MenuItem>
              </MenuList>
            </Menu>
            <Menu>
              <MenuButton fontWeight="700">Pages</MenuButton>
              <MenuList>
                <MenuItem>New Window</MenuItem>
                <MenuItem>Open Closed Tab</MenuItem>
                <MenuItem>Open File</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
        <Flex
          align="center"
          justify="space-between"
          w={{ base: "none", lg: "10%", xl: "32%" }}
        >
          <Flex
            w="60%"
            h="100%"
            // bgColor={"red"}
            display={{ base: "none", lg: "none", xl: "flex" }}
            justify="space-between"
          >
            <Menu>
              <MenuButton>
                <Flex align="center">
                  Assets <Icon as={AiFillCaretDown} />
                </Flex>
              </MenuButton>
              <MenuList
                bg={bg}
                border="none"
                mt="10px"
                _hover={{ background: "none" }}
              >
                <MenuItem _hover={{ background: "none" }}>
                  <Link>Binance Visa Card</Link>
                </MenuItem>
                <MenuItem _hover={{ background: "none" }}>
                  <Link>Crypto Loans</Link>
                </MenuItem>
                <MenuItem _hover={{ background: "none" }}>
                  <Link to="/BlogdefaultV2">Binance Pay</Link>
                </MenuItem>
              </MenuList>
            </Menu>
            <Menu>
              <MenuButton>
                <Flex align="center">
                  Order & Trades <Icon as={AiFillCaretDown} />
                </Flex>
              </MenuButton>
              <MenuList>
                {/* MenuItems are not rendered unless Menu is open */}
                <MenuItem>New Window</MenuItem>
                <MenuItem>Open Closed Tab</MenuItem>
                <MenuItem>Open File</MenuItem>
              </MenuList>
            </Menu>
            <Menu>
              <MenuButton>
                <Flex align="center">
                  EN/USD <Icon as={AiFillCaretDown} />
                </Flex>
              </MenuButton>
              <MenuList>
                {/* MenuItems are not rendered unless Menu is open */}
                <MenuItem>New Window</MenuItem>
                <MenuItem>Open Closed Tab</MenuItem>
                <MenuItem>Open File</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
          <Icon
            display={{ base: "none", lg: "none", xl: "flex" }}
            as={FaBell}
          />
          <IconButton
            size="sm"
            display={{ base: "flex", lg: "none", xl: "none" }}
            as={GiHamburgerMenu}
            onClick={() => changeDisplay("flex")}
          />
          <Flex
            align="center"
            justify="space-between"
            w={{ base: "none", lg: "30%", xl: "33%" }}
            h="100%"
          >
            <Button p="0" bgColor={bg} _hover="none" onClick={toggleColorMode}>
              {colorMode === "light" ? (
                <Icon as={FaSun} />
              ) : (
                <Icon as={FaMoon} />
              )}
            </Button>
            <Box border="1px solid" borderRadius="30px" px="20px" py="5px">
              Wallet
            </Box>
            <Circle
              display={{ base: "none", lg: "none", xl: "flex" }}
              minH="80%"
              minW="20%"
              bgColor="green.500"
            >
              <Icon as={FaUser} />
            </Circle>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        width={"100vw"}
        h="100vh"
        position="fixed"
        bgColor={"red"}
        zIndex="500"
        top={"0"}
        left={"0"}
        display={display}
        overflowY="auto"
        direction={"column"}
      >
        <Flex justify={"flex-end"}>
          <IconButton
            mt={2}
            mr={10}
            size="sm"
            as={GrClose}
            onClick={() => changeDisplay("none")}
          />
        </Flex>
        <Flex
          direction={"column"}
          // bgColor="black"
          // zIndex="300"
          justify="space-around"
          width={"100%"}
          align={"center"}
        >
          <Menu>
            <MenuButton fontWeight="700">Home</MenuButton>
            <MenuList
              bg={bg}
              border="none"
              mt="10px"
              _hover={{ background: "none" }}
            >
              <MenuItem _hover={{ background: "none" }}>
                <Link to="/">Home1</Link>
              </MenuItem>
              <MenuItem _hover={{ background: "none" }}>
                <Link to="/home2">Home2</Link>
              </MenuItem>
              <MenuItem _hover={{ background: "none" }}>
                <Link to="/home3">Home3</Link>
              </MenuItem>
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton fontWeight="700">Buy Crypto Select</MenuButton>
            <MenuList
              bg={bg}
              border="none"
              mt="10px"
              _hover={{ background: "none" }}
            >
              <MenuItem _hover={{ background: "none" }}>
                <Link to="/buycryptoselect">Buy Crypto Select</Link>
              </MenuItem>
              <MenuItem _hover={{ background: "none" }}>
                <Link to="/buycryptoconfirm">Buy Crypto Confirm</Link>
              </MenuItem>
              <MenuItem _hover={{ background: "none" }}>
                <Link to="/buycryptodetails">Buy Crypto Details</Link>
              </MenuItem>
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton fontWeight="700">Markets</MenuButton>
            <MenuList>
              <MenuItem>New Window</MenuItem>
              <MenuItem>Open Closed Tab</MenuItem>
              <MenuItem>Open File</MenuItem>
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton fontWeight="700">Sell crypto</MenuButton>
            <MenuList>
              <MenuItem>New Window</MenuItem>
              <MenuItem>Open Closed Tab</MenuItem>
              <MenuItem>Open File</MenuItem>
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton fontWeight="700">Blog</MenuButton>
            <MenuList
              bg={bg}
              border="none"
              mt="10px"
              _hover={{ background: "none" }}
            >
              <MenuItem _hover={{ background: "none" }}>
                <Link to="/blogdefault">Blog Default</Link>
              </MenuItem>
              <MenuItem _hover={{ background: "none" }}>
                <Link to="/blogdefaultV1">Blog Grid v1</Link>
              </MenuItem>
              <MenuItem _hover={{ background: "none" }}>
                <Link to="/blogdefaultV2">Blog Grid v2</Link>
              </MenuItem>
              <MenuItem _hover={{ background: "none" }}>
                <Link to="/bloglist">Blog List</Link>
              </MenuItem>
              <MenuItem _hover={{ background: "none" }}>
                <Link to="/blogdetail">Blog Details</Link>
              </MenuItem>
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton fontWeight="700">BITUSDT</MenuButton>
            <MenuList>
              <MenuItem>New Window</MenuItem>
              <MenuItem>Open Closed Tab</MenuItem>
              <MenuItem>Open File</MenuItem>
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton fontWeight="700">Pages</MenuButton>
            <MenuList>
              <MenuItem><Link to='/profile'>User Profile</Link></MenuItem>
              <MenuItem><Link to='/login'>Login</Link></MenuItem>
              <MenuItem><Link to='/register'>Register</Link></MenuItem>
              <MenuItem><Link to='/contact'>Contact</Link></MenuItem>
              <MenuItem><Link to='/faq'>FAQs</Link></MenuItem>
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton>
              <Flex align="center">
                Assets <Icon as={AiFillCaretDown} />
              </Flex>
            </MenuButton>
            <MenuList
              bg={bg}
              border="none"
              mt="10px"
              _hover={{ background: "none" }}
            >
              <MenuItem _hover={{ background: "none" }}>
                <Link>Binance Visa Card</Link>
              </MenuItem>
              <MenuItem _hover={{ background: "none" }}>
                <Link>Crypto Loans</Link>
              </MenuItem>
              <MenuItem _hover={{ background: "none" }}>
                <Link to="/BlogdefaultV2">Binance Pay</Link>
              </MenuItem>
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton>
              <Flex align="center">
                Order & Trades <Icon as={AiFillCaretDown} />
              </Flex>
            </MenuButton>
            <MenuList>
              {/* MenuItems are not rendered unless Menu is open */}
              <MenuItem>New Window</MenuItem>
              <MenuItem>Open Closed Tab</MenuItem>
              <MenuItem>Open File</MenuItem>
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton>
              <Flex align="center">
                EN/USD <Icon as={AiFillCaretDown} />
              </Flex>
            </MenuButton>
            <MenuList>
              {/* MenuItems are not rendered unless Menu is open */}
              <MenuItem>New Window</MenuItem>
              <MenuItem>Open Closed Tab</MenuItem>
              <MenuItem>Open File</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Nav;

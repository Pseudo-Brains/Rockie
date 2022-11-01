import {
  Box,
  Flex,
  Icon,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Link,
  useColorModeValue,
  useColorMode,
  Circle,
  Button,
} from "@chakra-ui/react";
import { FaBell, FaMoon, FaUser, FaSun } from "react-icons/fa";
import { AiFillCaretDown } from "react-icons/ai";

const Nav = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("#141416", "#FFFFFF");
  const TextColor = useColorModeValue("#FFFFFF", "Black");

  return (
    <Flex color={TextColor} w="100%" bg={bg} justify="space-between" h="50px">
      <Flex px="10px" w="45%" h="100%" justify="space-between">
        <Flex w="13%" align="center">
          {colorMode === "light" ? (
            <Image
              objectFit="cover"
              src="/image/rock-logo1.png"
              alt="logo"
              // boxSize={"160px"}
              width={"230px"}
              mb={"3"}
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
        <Flex fontWeight="thin" w="80%" align="center" justify="space-between">
          <Menu>
            <MenuButton fontWeight="700">Home</MenuButton>
            <MenuList
              bg={bg}
              border="none"
              mt="10px"
              _hover={{ background: "none" }}
            >
              <MenuItem _hover={{ background: "none" }}>
                <Link href="/">Home1</Link>
              </MenuItem>
              <MenuItem _hover={{ background: "none" }}>
                <Link href="/home2">Home2</Link>
              </MenuItem>
              <MenuItem _hover={{ background: "none" }}>
                <Link href="/home3">Home3</Link>
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
                <Link href="/buycryptoselect">Buy Crypto Select</Link>
              </MenuItem>
              <MenuItem _hover={{ background: "none" }}>
                <Link href="/buycryptoconfirm">Buy Crypto Confirm</Link>
              </MenuItem>
              <MenuItem _hover={{ background: "none" }}>
                <Link href="/buycryptodetails">Buy Crypto Details</Link>
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
                <Link href="/blogdefault">Blog Default</Link>
              </MenuItem>
              <MenuItem _hover={{ background: "none" }}>
                <Link href="/blogdefaultV1">Blog Grid v1</Link>
              </MenuItem>
              <MenuItem _hover={{ background: "none" }}>
                <Link href="/blogdefaultV2">Blog Grid v2</Link>
              </MenuItem>
              <MenuItem _hover={{ background: "none" }}>
                <Link href="/bloglist">Blog List</Link>
              </MenuItem>
              <MenuItem _hover={{ background: "none" }}>
                <Link href="/blogdetail">Blog Details</Link>
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
      <Flex align="center" justify="space-between" w="32%">
        <Flex w="60%" h="100%" justify="space-between">
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
                <Link href="/BlogdefaultV2">Binance Pay</Link>
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
        <Icon as={FaBell} />
        <Flex align="center" justify="space-between" w="33%" h="100%">
          <Button p="0" bgColor={bg} _hover="none" onClick={toggleColorMode}>
            {colorMode === "light" ? <Icon as={FaSun} /> : <Icon as={FaMoon} />}
          </Button>
          <Box border="1px solid" borderRadius="30px" px="20px" py="5px">
            Wallet
          </Box>
          <Circle minH="80%" minW="20%" bgColor="green.500">
            <Icon as={FaUser} />
          </Circle>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Nav;

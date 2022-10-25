import {
  Box,
  Flex,
  Icon,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useColorMode,
  Circle,
  Button,
} from "@chakra-ui/react";
import { FaBell, FaMoon, FaUser, FaSun } from "react-icons/fa";
import { AiFillCaretDown } from "react-icons/ai";

const Nav = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex
      color="whiteAlpha.900"
      w="100%"
      bgColor={useColorMode[("#fffff", "#ffffff")]}
      justify="space-between"
      h="50px"
    >
      <Flex px="10px" w="45%" h="100%" justify="space-between">
        <Flex w="13%" align="center">
          <Image
            objectFit="cover"
            src="/image/rock-logo1.png"
            alt="Dan Abramov"
          />
        </Flex>
        <Flex fontWeight="thin" w="80%" align="center" justify="space-between">
          <Menu>
            <MenuButton fontWeight="700">Home</MenuButton>
            <MenuList>
              <MenuItem></MenuItem>
              <MenuItem>Open File</MenuItem>
              <MenuItem>Open File</MenuItem>
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton fontWeight="700">Buy Crypto</MenuButton>
            <MenuList>
              <MenuItem>New Window</MenuItem>
              <MenuItem>Open Closed Tab</MenuItem>
              <MenuItem>Open File</MenuItem>
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
            <MenuList>
              <MenuItem>New Window</MenuItem>
              <MenuItem>Open Closed Tab</MenuItem>
              <MenuItem>Open File</MenuItem>
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
            <MenuList>
              {/* MenuItems are not rendered unless Menu is open */}
              <MenuItem></MenuItem>
              <MenuItem>Open Closed Tab</MenuItem>
              <MenuItem>Open File</MenuItem>
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
          <Button
            p="0"
            bgColor="#141416"
            _hover="none"
            onClick={toggleColorMode}
          >
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

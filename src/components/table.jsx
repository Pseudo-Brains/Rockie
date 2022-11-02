import {
  Box,
  Flex,
  Icon,
  Image,
  Text,
  Table,
  Thead,
  Tbody,
  useColorModeValue,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";
import { useState, useMemo } from "react";
const Tableer = () => {
  const headerColor = useColorModeValue("#FFFFFF", "#23262F");
  return (
    <TableContainer>
      <Table size="lg" fontSize="20px" fontWeight="900">
        <Thead>
          <Tr>
            <Th></Th>
            <Th>#</Th>
            <Th>Name</Th>
            <Th>Last Price</Th>
            <Th>24h %</Th>
            <Th>Market Cap</Th>
            <Th>Last 7 Days</Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody color={headerColor}>
          <Tr className="show-Btn-Hover">
            <Td>
              <Icon as={FaStar} />
            </Td>
            <Td>1</Td>
            <Td>
              <Flex align="center">
                <Image
                  objectFit="cover"
                  h="20px"
                  src="/image/Bitcoin.png"
                  alt="Homebanner"
                />
                <Text pl="10px">Bitcoin</Text>
              </Flex>
            </Td>
            <Td>$56,623.54</Td>
            <Td>+1.45%</Td>
            <Td>$880,423,640,582</Td>
            <Td>
              <Image
                objectFit="cover"
                h="20px"
                src="/image/chart-bit.png"
                alt="Homebanner"
              />
            </Td>
            <Td>
              <Box
                border="2px solid"
                className="btn-hover"
                borderRadius="20px"
                px="20px"
                w="fit-content"
              >
                Trade
              </Box>
            </Td>
          </Tr>
          <Tr className="show-Btn-Hover">
            <Td>
              <Icon as={FaStar} />
            </Td>
            <Td>2</Td>
            <Td>
              <Flex align="center">
                <Image
                  objectFit="cover"
                  h="20px"
                  src="/image/Ether7.png"
                  alt="Homebanner"
                />
                <Text pl="10px">Etherium</Text>
              </Flex>
            </Td>
            <Td>$56,623.54</Td>
            <Td>-5.12%</Td>
            <Td>$880,423,640,582</Td>
            <Td>
              <Image
                objectFit="cover"
                h="20px"
                src="/image/downchart.png"
                alt="Homebanner"
              />
            </Td>
            <Td>
              <Box
                border="2px solid"
                className="btn-hover"
                borderRadius="20px"
                px="20px"
                w="fit-content"
              >
                Trade
              </Box>
            </Td>
          </Tr>
          <Tr className="show-Btn-Hover">
            <Td>
              <Icon as={FaStar} />
            </Td>
            <Td>3</Td>
            <Td>
              <Flex align="center">
                <Image
                  objectFit="cover"
                  h="20px"
                  src="/image/BNByy.png"
                  alt="Homebanner"
                />
                <Text pl="10px">Binance</Text>
              </Flex>
            </Td>
            <Td>$56,623.54</Td>
            <Td>-3.75%</Td>
            <Td>$880,423,640,582</Td>
            <Td>
              <Image
                objectFit="cover"
                h="20px"
                src="/image/downchart.png"
                alt="Homebanner"
              />
            </Td>
            <Td>
              <Box
                border="2px solid"
                className="btn-hover"
                borderRadius="20px"
                px="20px"
                w="fit-content"
              >
                Trade
              </Box>
            </Td>
          </Tr>
          <Tr className="show-Btn-Hover">
            <Td>
              <Icon as={FaStar} />
            </Td>
            <Td>4</Td>
            <Td>
              <Flex align="center">
                <Image
                  objectFit="cover"
                  h="20px"
                  src="/image/Teter.png"
                  alt="Homebanner"
                />
                <Text pl="10px">Tether</Text>
              </Flex>
            </Td>
            <Td>$56,623.54</Td>
            <Td>+1.45%</Td>
            <Td>$880,423,640,582</Td>
            <Td>
              <Image
                objectFit="cover"
                h="20px"
                src="/image/chart-bit.png"
                alt="Homebanner"
              />
            </Td>
            <Td>
              <Box
                border="2px solid"
                className="btn-hover"
                borderRadius="20px"
                px="20px"
                w="fit-content"
              >
                Trade
              </Box>
            </Td>
          </Tr>
          <Tr className="show-Btn-Hover">
            <Td>
              <Icon as={FaStar} />
            </Td>
            <Td>5</Td>
            <Td>
              <Flex align="center">
                <Image
                  objectFit="cover"
                  h="20px"
                  src="/image/Bitcoin.png"
                  alt="Homebanner"
                />
                <Text pl="10px">Bitcoin</Text>
              </Flex>
            </Td>
            <Td>$56,623.54</Td>
            <Td>+1.45%</Td>
            <Td>$880,423,640,582</Td>
            <Td>
              <Image
                objectFit="cover"
                h="20px"
                src="/image/chart-bit.png"
                alt="Homebanner"
              />
            </Td>
            <Td>
              <Box
                border="2px solid"
                className="btn-hover"
                borderRadius="20px"
                px="20px"
                w="fit-content"
              >
                Trade
              </Box>
            </Td>
          </Tr>
          <Tr className="show-Btn-Hover">
            <Td>
              <Icon as={FaStar} />
            </Td>
            <Td>6</Td>
            <Td>
              <Flex align="center">
                <Image
                  objectFit="cover"
                  h="20px"
                  src="/image/Bitcoin.png"
                  alt="Homebanner"
                />
                <Text pl="10px">Bitcoin</Text>
              </Flex>
            </Td>
            <Td>$56,623.54</Td>
            <Td>+1.45%</Td>
            <Td>$880,423,640,582</Td>
            <Td>
              <Image
                objectFit="cover"
                h="20px"
                src="/image/downchart.png"
                alt="Homebanner"
              />
            </Td>
            <Td>
              <Box
                border="2px solid"
                className="btn-hover"
                borderRadius="20px"
                px="20px"
                w="fit-content"
              >
                Trade
              </Box>
            </Td>
          </Tr>
          <Tr className="show-Btn-Hover">
            <Td>
              <Icon as={FaStar} />
            </Td>
            <Td>7</Td>
            <Td>
              <Flex align="center">
                <Image
                  objectFit="cover"
                  h="20px"
                  src="/image/Bitcoin.png"
                  alt="Homebanner"
                />
                <Text pl="10px">Bitcoin</Text>
              </Flex>
            </Td>
            <Td>$56,623.54</Td>
            <Td>+1.45%</Td>
            <Td>$880,423,640,582</Td>
            <Td>
              <Image
                objectFit="cover"
                h="20px"
                src="/image/chart-bit.png"
                alt="Homebanner"
              />
            </Td>
            <Td>
              <Box
                border="2px solid"
                className="btn-hover"
                borderRadius="20px"
                px="20px"
                w="fit-content"
              >
                Trade
              </Box>
            </Td>
          </Tr>
          <Tr className="show-Btn-Hover">
            <Td>
              <Icon as={FaStar} />
            </Td>
            <Td>8</Td>
            <Td>
              <Flex align="center">
                <Image
                  objectFit="cover"
                  h="20px"
                  src="/image/Bitcoin.png"
                  alt="Homebanner"
                />
                <Text pl="10px">Bitcoin</Text>
              </Flex>
            </Td>
            <Td>$56,623.54</Td>
            <Td>+1.45%</Td>
            <Td>$880,423,640,582</Td>
            <Td>
              <Image
                objectFit="cover"
                h="20px"
                src="/image/chart-bit.png"
                alt="Homebanner"
              />
            </Td>
            <Td>
              <Box
                border="2px solid"
                className="btn-hover"
                borderRadius="20px"
                px="20px"
                w="fit-content"
              >
                Trade
              </Box>
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default Tableer;

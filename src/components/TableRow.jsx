import React from "react";
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
  useColorMode,
  Button,
} from "@chakra-ui/react";
import { Sparklines, SparklinesLine } from "react-sparklines";
import { useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { BiStar } from "react-icons/bi";

export const TableRow = ({ data, indexM }) => {
  const TextColor = useColorModeValue("#FFFFFF", "#969BA9");

  return (
    <Tr className="show-Btn-Hover">
      <Td>
        <Icon as={BiStar} />
      </Td>
      <Td>{indexM}</Td>
      <Td>
        <Flex align="center">
          <Image objectFit="cover" h="20px" src={data.image} alt="Homebanner" />
          <Text pl="10px">{data.name}</Text>
        </Flex>
      </Td>
      <Td>$ {data.current_price}</Td>
      <Td>{data.market_cap_change_percentage_24h}%</Td>
      <Td>{data.market_cap}</Td>
      <Td>
        <Sparklines data={data.sparkline_in_7d.price}>
          <SparklinesLine color="#58BD7D" />
          {/* <SparklinesLine color="green" /> */}
        </Sparklines>
      </Td>
      <Td>
        <Button
          py="3"
          px="6"
          borderRadius={"full"}
          bg="transparent"
          className="btn-hover"
          border="2px"
          borderColor={"white"}
          fontSize={"1xl"}
          color={TextColor}
        >
          Trade
        </Button>
      </Td>
    </Tr>
  );
};

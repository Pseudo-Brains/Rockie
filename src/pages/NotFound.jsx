import React from "react";
import { Image, Box } from "@chakra-ui/react";

function NotFound() {
  return (
    <Box
      w="100%"
      display={"flex"}
      justifyContent="center"
      alignItems={"center"}
      maxH={{ base: "200px", md: "600px", lg: "1000px" }}
      h="100%"
    >
      <Image
        objectFit={"contain"}
        // w="100%"
        // h="100%"
        // maxH={"800px"}
        boxSize="100%"
        src="/image/404Error.png"
      />
    </Box>
  );
}

export default NotFound;

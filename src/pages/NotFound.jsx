import React from "react";
import { Image, Box } from "@chakra-ui/react";

function NotFound() {
  return (
    <Box>
      <Image w="100%" h="100%" maxH={"800px"} src="/image/404Error.png" />
    </Box>
  );
}

export default NotFound;

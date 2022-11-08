import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { theme } from "./util/config";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </ChakraProvider>
  </React.StrictMode>
);

/**
 *     --bg: #141416;
    --bg1: #222630;
    --onsurface: #fff;
    --surface: #18191d;
    --line: #23262f;
    --text: #b1b5c3;
    #777e90
    <html>
 <body>
  <iframe src="http://www.youtube.com/embed/W7qWa52k-nE"
   width="560" height="315" frameborder="0" allowfullscreen></iframe>
 </body>
</html>
 */
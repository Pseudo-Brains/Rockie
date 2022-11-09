import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { theme } from "./util/config";
import { Provider } from "react-redux";
// import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { store } from "./Redux/store";
// export const client = new ApolloClient({
//   uri: "http://localhost:4000/graphql",
//   cache: new InMemoryCache(),
// });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <ApolloProvider client={client}> */}
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <App />
      </Provider>
    </ChakraProvider>
    {/* </ApolloProvider> */}
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

import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: true,
  },
  styles: {
    global: (props) => ({
      body: {
        margin: 0,
        padding: 0,
        "box-sizing": "border-box",
        "font-family": "Montserrat",
        bg: mode(
          "linear-gradient(to right,  #b7b7fc, #d4d4fd)",
          "#020213"
        )(props),
      },
    }),
  },
});

// e extendTheme({ zIndices, ...})

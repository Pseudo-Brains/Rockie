import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

export const theme = extendTheme({
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
        bg: mode("#020213", "#fffff")(props),
      },
    }),
  },
});

// e extendTheme({ zIndices, ...})

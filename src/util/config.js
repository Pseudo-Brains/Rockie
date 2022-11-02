import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const brandPrimary = defineStyle({
  background: "#3772FF",
  color: "#FFFFFF",
  fontFamily: "serif",
  fontWeight: "normal",
  // let's also provide dark mode alternatives
  _dark: {
    background: "blue",
    color: "#FFFFFF",
  },
  _hover: {
    background: "transparent",
  },
});

export const buttonTheme = defineStyleConfig({
  variants: { brandPrimary },
  defaultProps: {
    variant: "brandPrimary",
  },
});

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
  components: { Button: buttonTheme },
});

// e extendTheme({ zIndices, ...})
/**
 * 
const no = 512364783;
const swap = (no) => {
  const noStrg = JSON.stringify(no);
  const type = noStrg.length % 2;
  let  replacedString = noStrg; //to prevent it using going back to the initail string
  let mainIndex = 0;

  if ((type )=== 0) {
    for (let index = 0; index < noStrg.length + 1; index += 2) {
      mainIndex = index;
      const mainStrng = noStrg.slice(mainIndex - 2, mainIndex); //slice them out
      const reversed = mainStrng.split("").reverse().join(""); //reverse
       replacedString = replacedString.replace(mainStrng,reversed)
    }
    return replacedString ; 
  } else {
    //  Odd No
    for (let index = 1; index < noStrg.length + 1; index += 2) {
      mainIndex = index;
      const mainStrng = noStrg.slice(mainIndex - 2, mainIndex); //slice them out
      const reversed = mainStrng.split("").reverse().join(""); //reverse
       replacedString = replacedString.replace(mainStrng,reversed)
      }
      return replacedString ; 
  }
};

console.log(swap(no));

 */

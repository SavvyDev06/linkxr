// 1. import `extendTheme` function
import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  fonts: {
    heading: `'Exo Black', sans-serif`,
    body: `'Exo Regular', sans-serif`,
  },
  styles: {
    global: (props) => ({
      body: {
        bg: mode("#FFFFFF", "#1E0D9A")(props),
      },
    }),
  },
});

export default theme;

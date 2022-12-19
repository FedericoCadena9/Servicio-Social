import { ThemeProvider } from "next-themes";
import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { ChakraProvider } from "@chakra-ui/react";

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider>
      <ThemeProvider enableSystem={true} attribute="class">
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      </ThemeProvider>
    </SessionProvider>
  );
}

export default MyApp;

import { ThemeProvider } from "next-themes";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
// import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react";

export default function App({ Component, pageProps }) {
  return (
    <SessionProvider>
      <ChakraProvider>
        <ThemeProvider enableSystem={true} attribute="class">
          <Component {...pageProps} />
        </ThemeProvider>
      </ChakraProvider>
    </SessionProvider>
  );
}

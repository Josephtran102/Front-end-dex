import { ACTIVE_CHAIN } from "@/const/details";
import "@/styles/globals.css";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        // background: '#AFC4D7',

        backgroundImage: `url('/background-3.jpg')`, // Thay đổi đường dẫn tới hình ảnh của bạn
        // backgroundSize: 'cover',
        backgroundSize: '100% 210%', 
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',

      },

      

    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      activeChain={ACTIVE_CHAIN}
      supportedChains={[ACTIVE_CHAIN]}
    >
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </ThirdwebProvider>
  );
}

import '../styles/globals.css';

import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import localFont from 'next/font/local';
import type { ReactElement, ReactNode } from 'react';

import { theme } from '../../chakra.theme';

const font = localFont({ src: '../fonts/Soehne/Sohne-Buch.otf' });

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const queryClient = new QueryClient();
export default function App({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <main className={font.className}>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider theme={theme}>
          {getLayout(<Component {...pageProps} />)}
        </ChakraProvider>
      </QueryClientProvider>
    </main>
  );
}

// import { S } from 'next/font/google';
import { Box } from '@chakra-ui/react';
import Head from 'next/head';
import { type ReactElement } from 'react';

import { Analytics, Header } from '@/components';
import DashboardLayout from '@/components/layout';
// const inter = Inter({ subsets: ['latin'] });

export default function Index() {
  return (
    <>
      <Head>
        <title>Mainstack Task</title>
        <meta charSet="UTF-8"></meta>
        <meta
          name="description"
          content="Mainstack frontend test - Joshua Okechukwu"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/ms-favicon.svg" />
      </Head>
      <Box w={'full'}>
        <Header />

        <Analytics />
      </Box>
    </>
  );
}

Index.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

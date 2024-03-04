import Head from "next/head";

import "@/globals.css";
import { Box } from "@mui/material";
import MainNavigation from "@/components/Layout/MainNavigation";

const MyApp = ({ Component, pageProps }: any) => (
  <>
    <MainNavigation />
    <Box>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </Box>
  </>
);

export default MyApp;

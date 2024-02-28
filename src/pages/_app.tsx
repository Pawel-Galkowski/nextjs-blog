import Head from "next/head";

import "@/globals.css";
import Layout from "@/components/Layout";

const MyApp = ({ Component, pageProps }: any) => (
  <Layout>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <Component {...pageProps} />
  </Layout>
);

export default MyApp;

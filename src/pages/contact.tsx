import Head from "next/head";

import ContactForm from "@/components/ContactForm"; 
import { Box } from "@mui/material";

export default () => (
  <Box sx={{ height: '100vh' }}>
    <Head>
      <title>Contact Me</title>
      <meta name="description" content="Send me your messages!" />
    </Head>
    <ContactForm />
  </Box>
);;

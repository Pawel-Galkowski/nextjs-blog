import { Box } from '@mui/material';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head />
        <body>
          <Main />
          <NextScript />
          <Box id="notifications" />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link
            href='https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap'
            rel='stylesheet'
          />
          <link
            rel='icon'
            href='/favicon-32x32.png?v=a07f423b8bbf4a50c2c449b96795fcb6'
            type='image/png'
          ></link>

          <meta
            name='description'
            content='Photosnap | The best platform for photographers and visual storytellers!'
          />
          <meta
            property='og:title'
            content='Photosnap | Tell people your photo stories'
          />
          <meta
            property='og:description'
            content='Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.'
          />

          <meta property='og:image' content='/images/thumbnail.png' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

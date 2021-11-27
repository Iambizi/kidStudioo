import React from 'react';
import NextDocument, { Head, Html, Main, NextScript } from 'next/document';
import Script from 'next/script';

class Document extends NextDocument {
    render(): JSX.Element {
        return (
            <Html lang="en">
                <Head>
                    <meta name="description" content="Generated by create next app" />
                    <link rel="icon" href="/favicon.ico" />
                    <link rel="stylesheet preload prefetch" href="/fonts/andalemo.ttf" as="style" type="font/woff2" crossOrigin="anonymous" />
                </Head>
                <body>
                    <Script />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default Document;
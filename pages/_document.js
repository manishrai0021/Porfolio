import { ColorModeScript } from '@chakra-ui/react'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import theme from '../lib/theme'

export default class Document extends NextDocument {
    render () {
        return (
            <Html lang="en">
                <Head/>
                <link rel="icon" href="http://www.w3.org/2000/svg" type="image/png" />
                <body>
                    <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
                    <Main/>
                    <NextScript />
                </body>
            </Html>
        )
    }
}
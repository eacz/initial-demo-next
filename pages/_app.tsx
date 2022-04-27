import { NextPage } from 'next'
import { AppProps } from 'next/app'
import { ReactElement } from 'react'
import '../styles/globals.css'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => JSX.Element
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps } : AppPropsWithLayout) {
  // if a getLayout is available, is used and the page is rendered with the layout
  // otherwise the page is rendered alone
  const getLayout = Component.getLayout || (page => page)
 
  return getLayout(<Component {...pageProps} />)
}

export default MyApp

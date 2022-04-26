import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  // if a getLayout is available, is used and the page is rendered with the layout
  // otherwise the page is rendered alone
  const getLayout = Component.getLayout || (page => page)
 
  return getLayout(<Component {...pageProps} />)
}

export default MyApp

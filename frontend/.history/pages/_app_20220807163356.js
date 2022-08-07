import '../styles/globals.css'
import {Provider, createClient} from "urql"

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp;

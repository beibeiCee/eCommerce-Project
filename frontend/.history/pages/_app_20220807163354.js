import '../styles/globals.css'
import {Provider, createClient} from "ur"

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp;

import '../styles/globals.css'
import {Provider, createClient} from "urql";

const client = createClient({ url})

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp;

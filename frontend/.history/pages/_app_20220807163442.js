import '../styles/globals.css'
import {Provider, createClient} from "urql";

const client = createClient({ url: "http://localhost:1337/graphql" });

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp;

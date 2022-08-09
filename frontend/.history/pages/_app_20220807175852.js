import '../styles/globals.css'
import {Provider, createClient} from "urql";

const client = createClient({ url: process.env.BAC });

function MyApp({ Component, pageProps }) {
  return (
    <Provider value={client}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;

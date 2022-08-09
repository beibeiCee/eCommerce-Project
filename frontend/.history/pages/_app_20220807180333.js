import '../styles/globals.css'
import {Provider, createClient} from "urql";
console.log(process.env.BACKEND_API);

const client = createClient({ url: process.env.BACKEND_API });

function MyApp({ Component, pageProps }) {
  return (
    <Provider value={client}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;

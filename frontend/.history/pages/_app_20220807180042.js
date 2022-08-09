import '../styles/globals.css'
import {Provider, createClient} from "urql";

const client = createClient({ url: process.env.BACKEND_API });

console.log(process.env.BACKEND_API);

function MyApp({ Component, pageProps }) {
  console.log(process.env.BACKEND_API);
  return (
    <Provider value={client}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;

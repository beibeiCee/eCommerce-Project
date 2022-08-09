import '../styles/globals.css'
import {Provider, createClient} from "urql";
console.log(process.env.BACKEND_API);

const client = createClient({ url: process.env.NEXT_PUBLIC_BACKEND_API });

//created en

function MyApp({ Component, pageProps }) {
  return (
    <Provider value={client}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;

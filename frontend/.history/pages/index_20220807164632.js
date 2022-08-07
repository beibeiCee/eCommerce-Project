import Head from 'next/head'
import { useQuery } from 'urql';
import { PRODUCT_QUERY } from '../lib/query';

export default function Home() {
  //Fetch products from strapi
  const [results] = useQuery({query: PRODUCT_QUERY});
  const { data, fetching, error } = results;

  //check

  return (
    <div>
      <Head>
        <title>Homepage</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Next JS</h1>
      </main>
    </div>
  );
}
 
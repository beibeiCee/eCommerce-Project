import Head from "next/head";
import { useQuery } from "urql";
import { PRODUCT_QUERY } from "../lib/query";
import Product from "../components/Products";
import { Gallery } from "../styles/Gallery";
import Nav from "../components/Nav";

export default function Home() {
  //Fetch products from strapi
  const [results] = useQuery({query: PRODUCT_QUERY});
  const { data, fetching, error } = results;

  //Check for the data coming in:
  if(fetching) return <p>Loading...</p>
  if (error) return <p>Uh-oh...{error.message}</p>
  const products = data.products.data;
  // console.log(products);

  return (
    <div>
      <Head>
        <title>Homepage</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        N
        <Gallery>
          {products.map((product) => (
            <Product key={product.attributes.slug} product={product} />
          ))}
        </Gallery>
      </main>
    </div>
  );
} 
 
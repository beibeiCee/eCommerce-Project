import Head from 'next/head'
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Homepage</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>hello world</h1>
        <Link href={"/about"}>About</Link>
      </main>
    </div>
  );
}

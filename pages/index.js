import Head from 'next/head';
import HomePage from '../layout/HomePage';

export default function Home() {
  return (
    <>
      <Head>
        <title>
          SharmaStore-India's Online Shopping Store for Clothes, Mobile
        </title>
        <meta
          name="google-site-verification"
          content="KZjKnipyW6qWKcNAYuWfXla_25IQmSSGD3zmJKrXzTk"
        />
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, target-densityDpi=device-dpi"
        />
        <meta
          name="description"
          content="Sharmastore is an Online shopping site in India: Shop online for Clothes, Mobiles, Books, watches, apparel, camera, laptop, Free Shipping, and COD available."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage />
    </>
  );
}

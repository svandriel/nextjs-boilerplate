import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.scss';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next.JS boilerplate</title>
        <meta name="description" content="Next.JS Boilerplate" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>main</main>

      <footer className={styles.footer}>footer</footer>
    </div>
  );
};

export default Home;

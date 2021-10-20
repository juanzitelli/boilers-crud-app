import Link from "next/link";
import Head from "next/head";
import { PropsWithChildren } from "react";
import styles from "./../../styles/DefaultLayout.module.css";

export const DefaultLayout = ({ children }: PropsWithChildren<{}>) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Boilers CRUD app</title>
        <meta name="description" content="Boilers CRUD app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/juanzitelli"
          target="_blank"
          rel="noopener noreferrer"
        >
          Developed by @juanzitelli
        </a>
      </footer>

      <Link href="/boilers">
        <a>Back to boilers list 👈</a>
      </Link>
    </div>
  );
};

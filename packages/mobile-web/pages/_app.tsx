import type { AppProps } from "next/app";

import "../styles/globals.css";
import styles from "./App.module.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={styles.wrapper}>
      <Component {...pageProps} />
    </div>
  );
}

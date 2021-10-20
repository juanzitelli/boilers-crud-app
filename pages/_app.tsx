import "../styles/globals.css";
import type { AppProps } from "next/app";
import { DefaultLayout } from "../components/layouts/DefaultLayout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DefaultLayout>
      <Component {...pageProps} />
    </DefaultLayout>
  );
}
export default MyApp;

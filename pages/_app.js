import GlobalStyle from "../styles";
import { SWRConfig } from "swr";
import useSWR from "swr";
import Layout from "@/components/Layout";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const { data, isLoading, error } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );

  if (!isLoading) {
    <p>Loading...</p>;
  }
  if (!error) {
    <p>404 error</p>;
  }

  return (
    <>
      <GlobalStyle />

      <SWRConfig value={{ fetcher }}>
        <Layout>
          {" "}
          <Component fetchPieces={data} {...pageProps} />
        </Layout>
      </SWRConfig>
    </>
  );
}

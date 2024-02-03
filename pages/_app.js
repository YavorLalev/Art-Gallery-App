import GlobalStyle from "../styles";
import { SWRConfig } from "swr";
import useSWR from "swr";
import Layout from "@/components/Layout";

const fetcher = async (url) => {
  const res = await fetch(url);

  if (!res.ok) {
    const error = new Error("An Error occurred while fetching !!!");
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  return res.json();
};
export default function App({ Component, pageProps }) {
  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );

  if (error) return <p>{error.message}</p>;
  if (isLoading) return <p>Loading.....</p>;
  return (
    <>
      <GlobalStyle />
      <SWRConfig value={fetcher}>
        <Layout>
          <Component pieces={data} {...pageProps} />
        </Layout>
      </SWRConfig>
    </>
  );
}

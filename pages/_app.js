import Layout from "@/components/Layout";
import GlobalStyle from "../styles";
import useSWR from "swr";
import { SWRConfig } from "swr";

const URL = "https://example-apis.vercel.app/api/art";

const fetcher = async (url) => {
  const res = await fetch(url);

  if (!res.ok) {
    const error = new Error("What are you doing?!");
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }
  return res.json();
};

export default function App({ Component, pageProps }) {
  const { data: pieces, error, isLoading, mutate } = useSWR(URL, fetcher);

  if (error) return <p>Failed to load</p>;
  if (isLoading) return <p>loading...</p>;

  return (
    <SWRConfig value={{ fetcher }}>
      <GlobalStyle />
      <Component {...pageProps} pieces={pieces} />
      <Layout />
    </SWRConfig>
  );
}

import useSWR from "swr";
import List from "@/components/List/List";

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

export default function HomePage() {
  const { data: artworks, error, isLoading, mutate } = useSWR(URL, fetcher);

  if (error) return <p>Failed to load</p>;
  if (isLoading) return <p>loading...</p>;

  console.log(artworks);

  return (
    <div>
      <h1>ART Gallery</h1>
      <List artworks={artworks}></List>
    </div>
  );
}

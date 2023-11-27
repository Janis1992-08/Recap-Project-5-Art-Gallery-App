import useSWR from "swr";
import ArtPieces from "@/components/ArtPieces/ArtPieces";
import ArtPiecePreview from "@/components/ArtPiecePreview/ArtPiecePreview";

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
  const { data: pieces, error, isLoading, mutate } = useSWR(URL, fetcher);

  if (error) return <p>Failed to load</p>;
  if (isLoading) return <p>loading...</p>;

  console.log(pieces);

  return (
    <div>
      <h1>ART Gallery</h1>
      <ArtPieces pieces={pieces}></ArtPieces>
      <ArtPiecePreview title={pieces.name}></ArtPiecePreview>
    </div>
  );
}

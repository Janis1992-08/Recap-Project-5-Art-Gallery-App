import useSWR from "swr";
import ArtPieces from "@/components/ArtPieces/ArtPieces";
import ArtPiecePreview from "@/components/ArtPiecePreview/ArtPiecePreview";
import Spotlight from "@/components/Spotlight";

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

  function getRandomElement(pieces) {
    const randomElement = Math.floor(Math.random() * pieces.length);

    return pieces[randomElement]
    
  }

  const randomPiece = getRandomElement(pieces);


  return (
    <main>
      <h1>ART Gallery</h1>
      <Spotlight image={randomPiece.imageSource} artist={randomPiece.artist}></Spotlight>
      <ArtPieces pieces={pieces}></ArtPieces>
    </main>
  );
}

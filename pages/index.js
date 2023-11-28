import ArtPieces from "@/components/ArtPieces/index";
import Spotlight from "@/components/Spotlight";

export default function HomePage({ pieces }) {
  function getRandomElement(pieces) {
    const randomElement = Math.floor(Math.random() * pieces.length);

    return pieces[randomElement];
  }

  const randomPiece = getRandomElement(pieces);

  return (
    <main>
      <h1>ART Gallery</h1>
      <Spotlight
        image={randomPiece.imageSource}
        artist={randomPiece.artist}
      ></Spotlight>
      <ArtPieces pieces={pieces}></ArtPieces>
    </main>
  );
}

import { useRouter } from "next/router";
import ArtPieceDetails from "@/components/ArtPieceDetails";

export default function detailPage({ pieces }) {
  const router = useRouter();
  const { slug } = router.query;

  const selectedPiece = pieces.find((piece) => piece.slug === slug);
  console.log(selectedPiece);

  if (!selectedPiece) {
    return <h2>Not Found!</h2>;
  }

  return (
    <>
      {selectedPiece && (
        <ArtPieceDetails
          image={selectedPiece.imageSource}
          title={selectedPiece.name}
          artist={selectedPiece.artist}
          year={selectedPiece.year}
          genre={selectedPiece.genre}
        />
      )}
    </>
  );
}

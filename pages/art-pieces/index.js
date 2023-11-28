import ArtPiecePreview from "../../components/ArtPiecePreview";
import Link from "next/link";

export default function ArtPieces({ pieces }) {
  return (
    <>
    <ul>
      {pieces.map((piece, index) => (
        <li key={index}>
          <Link href={`art-pieces/${piece.slug}`}>
          <ArtPiecePreview
            title={piece.name}
            artist={piece.artist}
            image={piece.imageSource}
          />
          </Link>
        </li>
      ))}
    </ul>
      </>
  );}


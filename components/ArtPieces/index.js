import ArtPiecePreview from "../ArtPiecePreview";

export default function ArtPieces({ pieces }) {
  return (
    <>
    <ul>
      {pieces.map((piece, index) => (
        <li key={index}>
          <ArtPiecePreview
            title={piece.name}
            artist={piece.artist}
            image={piece.imageSource}
          />
        </li>
      ))}
    </ul>
      </>
  );}


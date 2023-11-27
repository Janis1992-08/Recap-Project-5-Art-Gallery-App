import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";

export default function ArtPieces({ pieces }) {
  return (
    <>
      {pieces.map((piece) => {
        return (
          <ArtPiecePreview
            title={piece.name}
            artist={piece.artist}
            image={piece.imageSource}
          ></ArtPiecePreview>
        );
      })}
    </>
  );
  console.log(piece);
}

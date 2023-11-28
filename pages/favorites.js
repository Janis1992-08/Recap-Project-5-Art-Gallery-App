import React from "react";
import ArtPieces from "@/components/ArtPieces";
// import 'global state'

export default function FavoritesPage() {
  // const {artPiecesInfo} = globalstate
  const favoriteArtPieces = artPiecesInfo.filter(piece => piece.isFavorite);
  return (
    <>
      <h1>Favorites</h1>
      <ul>
        <li>
          <ArtPieces pieces={favoriteArtPieces} />
        </li>
      </ul>
    </>
  );
};

// TODO 
// enter favorites Link to Navigation: <Link href="/favorites">Favorites</Link>
// Implement favorite button to ArtPieces component

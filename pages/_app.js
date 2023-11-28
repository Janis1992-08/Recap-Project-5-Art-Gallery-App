import React, { useState } from 'react';
import useLocalStorageState from "use-local-storage-state";
import GlobalStyle from "../styles";

export default function App({ Component, pageProps }) {
  const [artPiecesInfo, setArtPiecesInfo] = useState([]);
  
  /*useLocalStorageState("art-piece-info", {
    defaultValue: [] }
  );*/

  function handleFavorite(slug) {

    const artPiece = artPiecesInfo.find((piece) => piece.slug === slug);
    if (artPiece) {
      setArtPiecesInfo(
        artPiecesInfo.map((pieceInfo) =>
          pieceInfo.slug === slug
            ? { slug, isFavorite: !pieceInfo.isFavorite }
            : pieceInfo
        )
      );
    } else {
      setArtPiecesInfo([...artPiecesInfo, { slug, isFavorite: true }]);
    }

  }
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} artPieceInfo={artPiecesInfo} onHandle={handleFavorite} />
    </>
  );
}

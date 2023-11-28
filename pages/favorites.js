import ArtPieces from "@/components/ArtPieces";

export default function FavoritesPage({ pieces }) {
  return (
    <>
      <h1>Favorites</h1>
      <ul>
        <li>
          <ArtPieces pieces={pieces}></ArtPieces>
        </li>
      </ul>
    </>
  )
}

import ArtPieceDetails from "../../components/ArtPieceDetails";
import {useRouter} from "next/router";
import Link from "next/link";

export default function ArtPiece({ pieces }) {
    const router = useRouter();
    const {slug} = router.query;


    const currentArtPiece = pieces.find((piece) => piece.slug === slug)

    if (!currentArtPiece) {
        return <p>Artpiece not found....</p>
    }


    /* function navigateToSlug(targetSlug) {
        router.push()
    } */

  return (
    <div>
    <h1>Art Piece Details</h1>
        <ArtPieceDetails
      image={pieces.image}
      title={pieces.title}
      artist={pieces.artist}
      year={pieces.year}
      genre={pieces.genre}
    />
    <Link href="/art-pieces">back to all Artpieces</Link>
  </div>
  );}


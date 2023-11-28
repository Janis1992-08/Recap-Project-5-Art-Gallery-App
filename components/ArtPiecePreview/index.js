import Image from "next/image";
import FavoriteButton from "../FavoriteButton/index.js";

export default function ArtPiecePreview({ image, title, artist, onHandleFavorite, isFavorite }) {
  return (
    <div>
      <h1>{title}</h1>
      <figure>
        <FavoriteButton
          onHandleFavorite={onHandleFavorite}
          isFavorite={isFavorite}
        />
        <Image
          src={image}
          alt={title}
          layout="responsive"
          height={1}
          width={400}
        />
        <figcaption>by {artist}</figcaption>
      </figure>
    </div>
  );
}

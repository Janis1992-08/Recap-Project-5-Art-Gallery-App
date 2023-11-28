import Image from "next/image";
import FavoriteButton from "../FavoriteButton/index.js";

export default function Spotlight({
  image,
  artist,
  onHandleFavorite,
  isFavorite,
}) {
  return (
    <div>
      <figure>
        <FavoriteButton
          onHandleFavorite={onHandleFavorite}
          isFavorite={isFavorite}
        />
        <Image
          src={image}
          alt={`Artwork by ${artist}`}
          layout="responsive"
          height={1}
          width={400}
        ></Image>
        <figcaption>by {artist}</figcaption>
      </figure>
    </div>
  );
}

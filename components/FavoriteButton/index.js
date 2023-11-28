import Image from "next/image.js";
import heartUrl from "../../assets/heart.svg?url";

export default function FavoriteButton({ isFavorite, onHandleFavorite }) {
  return (
    <button type="button" onClick={onHandleFavorite} isFavorite={isFavorite}>
      <Image src={heartUrl} alt="Heart Icon" width={30} height={30} />
    </button>
  );
}

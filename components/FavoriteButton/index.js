import YourSvgImage from "../../assets/heart.svg"
import Image from "next/image.js";
export default function FavoriteButton({ isFavorite, onHandleFavorite }) {
  return (
    <button type="button" onClick={onHandleFavorite} isFavorite={isFavorite}>
      <Image
        src={YourSvgImage}
        alt="Heart Icon"
        width={30}
        height={30}
      />
      
    </button>
  );
}

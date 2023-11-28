export default function FavoriteButton({ isFavorite, handleFavorite }) {
  return (
    <Button
      type="button"
      onClick={handleFavorite}
      isFavorite={isFavorite}
    ></Button>
  );
}

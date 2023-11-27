export default function List({ artworks }) {
  return (
    <>
      <ul>
        {artworks.map((artwork) => (
          <li key={artwork.slug}>
            {artwork.name}
            {artwork.artist}
            {artwork.imageSource}
          </li>
        ))}
      </ul>
    </>
  );
  console.log(data);
}

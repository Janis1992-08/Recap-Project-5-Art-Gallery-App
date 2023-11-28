import Image from "next/image";

export default function ArtPieceDetails({ image, title, artist, year, genre }) {
  return (
    <>
      <h1>{title}</h1>
      <Image
        src={image}
        alt={title}
        layout="responsive"
        height={1}
        width={400}
      />
      <ul>
        <li>
          {artist}: "{title}"
        </li>
        <li>Year: {year}</li>
        <li>Genre: {genre}</li>
      </ul>
    </>
  );
}

import Image from "next/image"

export default function ArtPieceDetails({image, title, artist, year, genre}) {
return (
    <main>
    <Image src={image} alt={title} layout="responsive" height={1} width={400}></Image>
    <h2>{title}</h2>
      <p>Artist: {artist}</p>
      <p>Year: {year}</p>
      <p>Genre: {genre}</p>
    </main>
)
}
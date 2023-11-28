import Image from "next/image";

export default function ArtPiecePreview({ image, title, artist }) {
  return (
    <div>
      <h1>{title}</h1>
      <figure>
        <Image src={image} alt={title} layout="responsive" height={1} width={400}/>
        <figcaption>by {artist}</figcaption>
      </figure>
    </div>
  );
}

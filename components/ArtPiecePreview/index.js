import Image from "next/image";
import Link from "next/link";

export default function ArtPiecePreview({ image, title, artist, slug }) {
  return (
    <>
      <h1>{title}</h1>
      <Link href={`/art-pieces/${slug}`}>
        <figure>
          <Image
            src={image}
            alt={title}
            layout="responsive"
            height={1}
            width={400}
          />
          <figcaption>by {artist}</figcaption>
        </figure>
      </Link>
    </>
  );
}

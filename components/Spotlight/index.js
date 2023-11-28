import Image from "next/image";

export default function Spotlight({ image, artist }) {
  return (
    <div>
      <figure>
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

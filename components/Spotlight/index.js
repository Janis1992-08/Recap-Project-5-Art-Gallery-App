import Image from "next/image";

export default function Spotlight({image, artist}) {


    function GetRandomElement(pieces) {
        const randomElement = Math.floor(Math.random() * pieces.length);
        return pieces[randomElement]
        
      }

    
return (
<div>
      <figure>
        <Image src={image} alt={`Artwork by ${artist}`} height={400} width={400}></Image>
        <figcaption>by {artist}</figcaption>
      </figure>
    </div>
)
}
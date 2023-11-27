export default function Spotlight({image, artist}) {

    function GetRandomElement(pieces) {
        const randomElement = Math.floor(Math.random() * pieces.length);
        return pieces[randomElement]
        
      }
      console.log(GetRandomElement(pieces))

return (
<div>
      <figure>
        <Image src={image} alt={title} height={400} width={400}></Image>
        <figcaption>by {artist}</figcaption>
      </figure>
    </div>
)
}
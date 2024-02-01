import Image from "next/image";

export default function ArtPieces({ image, name, artist }) {
  return (
    <>
      <li>
        <Image
          src={image}
          alt={name}
          width={200}
          height={200}
          priority={true}
        />
        <h3>{name}</h3>
        <p>{artist}</p>
      </li>
    </>
  );
}

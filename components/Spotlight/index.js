import Image from "next/image";

export default function Spotlight({ image, artist, name }) {
  return (
    <div>
      <Image src={image} alt={name} width={300} height={300}></Image>
      <h3>{artist}</h3>
    </div>
  );
}

// export default function Spotlight({ image, artist, name }) {
//     return (
//       <div style={{ width: "100px", height: "100px" }}>
//         <Image src={image} alt={name} fill style={{ objectFit: "cover" }}></Image>
//         <h3>{artist}</h3>
//       </div>
//     );
//   }

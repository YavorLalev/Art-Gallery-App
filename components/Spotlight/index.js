import Image from "next/image";
import { StyledDiv } from "@/components/Spotlight/styles";
import { StyledH3 } from "@/components/Spotlight/styles";

export default function Spotlight({ image, artist, name }) {
  return (
    <StyledDiv>
      <Image src={image} alt={name} layout="fill" objectFit="cover"></Image>
      <StyledH3>{artist}</StyledH3>
    </StyledDiv>
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

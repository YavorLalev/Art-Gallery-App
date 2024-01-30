import Image from "next/image";
import { StyledDiv, StyledH3 } from "@/components/Spotlight/styles";

export default function SpotlightPage({ image, artist, name }) {
  return (
    <StyledDiv>
      <Image src={image} alt={name} layout="fill" objectFit="cover"></Image>
      <StyledH3>{artist}</StyledH3>
    </StyledDiv>
  );
}

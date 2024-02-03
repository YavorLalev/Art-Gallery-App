import Image from "next/image";
import styled from "styled-components";

export const StyledDiv = styled.div`
  position: relative;
  width: 400px;
  height: 400px;
`;

export const StyledH3 = styled.h3`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  color: white;
  background-color: rgba(0, 0, 0, 0.4);
  padding: 10px;
  margin: 0;
`;

export default function Spotlight({ image, artist, title }) {
  return (
    <StyledDiv>
      <StyledH3>{artist}</StyledH3>
      <Image src={image} alt={title} width={400} height={400} />
    </StyledDiv>
  );
}

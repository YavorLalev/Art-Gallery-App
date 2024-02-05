import Image from "next/image";
import Button from "../Button";
import Link from "next/link";
import styled from "styled-components";

const StyledSection = styled.section`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export default function ArtPieceDetails({ image, title, artist, year, genre }) {
  return (
    <>
      <StyledSection>
        <h2>{title}</h2>
        <h3>{artist}</h3>
        <Image src={image} alt={title} width={400} height={400} />
        <p>
          {genre}
          {","} {year}
        </p>

        <Link
          style={{ textDecoration: "none", color: "white" }}
          href="/art-pieces"
        >
          <Button $backgroundcolor="salmon">Back to Index</Button>
        </Link>
      </StyledSection>
    </>
  );
}

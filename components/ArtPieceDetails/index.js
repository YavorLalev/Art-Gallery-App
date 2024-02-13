import Image from "next/image";
import Button from "../Button";
import Link from "next/link";
import styled from "styled-components";
import FavoriteButton from "../FavoriteButton";

const StyledSection = styled.section`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Container = styled.div`
  position: relative;
  width: 400px;
`;

export default function ArtPieceDetails({ image, title, artist, year, genre }) {
  return (
    <>
      <StyledSection>
        <h2>{title}</h2>
        <h3>
          <i>by {artist}</i>
        </h3>
        <Container>
          <Image src={image} alt={title} width={400} height={400} />
          <FavoriteButton />
        </Container>
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

import ArtPiecePreview from "../ArtPreview";
import styled from "styled-components";

const StyledList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  justify-content: center;
`;

export default function ArtPieces({ pieces }) {
  console.log("Check", pieces);

  return (
    <div>
      <StyledList>
        {pieces.map((piece) => (
          <li key={piece.slug}>
            <ArtPiecePreview
              artist={piece.artist}
              image={piece.imageSource}
              title={piece.name}
              piece={piece}
            />
            {/* <StyledLink href={`/art-pieces/${piece.slug}`}>
              view more
            </StyledLink> */}
          </li>
        ))}
      </StyledList>
    </div>
  );
}

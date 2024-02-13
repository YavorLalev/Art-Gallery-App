import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const StyledSection = styled.section`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const HoverContainer = styled.div`
  position: relative;
  width: 400px;
  height: 400px;

  &:hover .effect {
    width: 400px;
  }
  .img {
    display: block;
    width: 400px;
    height: 400px;
  }

  .effect {
    width: 0px;
    height: 400px;
    background: rgba(0, 0, 0, 0.4);
    position: absolute;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }
  .effect h3 {
    color: white;
    opacity: 0.8;
    font-size: 1rem;
    border: 1px solid white;
    padding: 8px 24px;
  }
`;

export default function ArtPiecePreview({ slug, image, title, artist }) {
  return (
    <StyledSection>
      <h2>{title}</h2>
      <h3>
        <i>by {artist}</i>
      </h3>
      <HoverContainer>
        <Link href={`/art-pieces/${slug}`}>
          <Image
            className="img"
            src={image}
            alt={title}
            width={400}
            height={400}
          />
          <div className="effect">
            {" "}
            <h3>view more</h3>
          </div>
        </Link>
      </HoverContainer>
    </StyledSection>
  );
}

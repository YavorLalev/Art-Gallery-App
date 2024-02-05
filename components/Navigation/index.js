import Link from "next/link";
import styled from "styled-components";

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 1.2rem;

  color: var(--primary-color);

  &:hover {
    color: var(--secondary-color);
  }
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;
  margin-top: 2rem;
`;
export default function Navigation() {
  return (
    <>
      <FlexContainer>
        <StyledLink href={"/"}>Spotlight</StyledLink>
        <StyledLink href={"/art-pieces"}>Art Pieces</StyledLink>
        <StyledLink href={"#"}>Favorites</StyledLink>
      </FlexContainer>
    </>
  );
}

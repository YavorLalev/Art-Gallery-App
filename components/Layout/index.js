import styled from "styled-components";
import Navigation from "../Navigation";

const StyledLayout = styled.div`
  width: min(100% - 32px, 352px);
  margin: 0 auto;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Layout({ children }) {
  return (
    <StyledLayout>
      <main>{children}</main>
      <Navigation />
    </StyledLayout>
  );
}

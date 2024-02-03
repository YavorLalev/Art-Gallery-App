import styled from "styled-components";
import Navigation from "../Navigation";
import Head from "next/head";

const StyledLayout = styled.div`
  width: min(100% - 32px, 352px);
  margin: 0 auto;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Headline = styled.h1`
  text-align: center;
`;

export default function Layout({ children }) {
  return (
    <StyledLayout>
      <Head>
        <title>Art Gallery</title>
      </Head>
      <Headline>Art Gallery</Headline>
      <main>{children}</main>
      <Navigation />
    </StyledLayout>
  );
}

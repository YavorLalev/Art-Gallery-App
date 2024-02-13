import styled from "styled-components";
import { useState } from "react";
import Heart from "@/utils/Heart";
import HeartFilled from "@/utils/HeartFilled";

const Button = styled.button`
  border: none;
  background-color: inherit;
  position: absolute;

  top: 10px;
  right: 10px;
`;
export default function FavoriteButton() {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <>
      <Button
        type="button"
        onClick={() => {
          setIsFavorite(!isFavorite);
        }}
      >
        {isFavorite ? <HeartFilled /> : <Heart />}
      </Button>
    </>
  );
}

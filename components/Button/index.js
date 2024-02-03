import styled from "styled-components";

export default styled.button`
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  color: white;
  border-radius: 4px;
  background-color: ${(props) =>
    props.$backgroundcolor === "salmon"
      ? "var(--primary-color)"
      : "var(--secondary-color)"};

  &:hover {
    background-color: var(--secondary-color);
  }
`;

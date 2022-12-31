import styled from "styled-components";

export const StyledFeatures = styled.section`
  /* background-color: green; */
  margin: 6rem 0;
  grid-column: col-start 2 / col-start 10;

  display: grid;
  grid-template-columns: repeat(auto-fit, 1fr);
  gap: 6rem;
`;

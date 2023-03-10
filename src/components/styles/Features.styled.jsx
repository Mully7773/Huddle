import styled from "styled-components";

export const StyledFeatures = styled.section`
  /* background-color: green; */
  margin: 6rem 0;
  grid-column: col-start 2 / col-start 10;

  display: grid;
  grid-template-columns: repeat(auto-fit, 1fr);
  gap: 6rem;
  padding-bottom: 5rem;
  @media only screen and (max-width: 59.375em) {
    grid-column: col-start 1 / center-end;
    padding-bottom: 0;
  }
`;

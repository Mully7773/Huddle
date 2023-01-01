import styled from "styled-components";

export const StyledFooter = styled.footer`
  grid-column: full-start / full-end;
  background-color: ${({ theme }) => theme.color.footer};
  color: #fff;

  display: grid;
  /* grid-template-columns: repeat(8, 1fr); */
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: min-content 1fr;
  column-gap: 13rem;
  row-gap: 2.8rem;
  padding-top: 10rem;
  padding-bottom: 6rem;
  padding-left: 15rem;
  padding-right: 2rem;
`;

import styled from "styled-components";

export const StyledHeader = styled.header`
  grid-column: full-start / full-end;
  background: linear-gradient(
      rgba(235, 251, 255, 0.3),
      rgba(235, 251, 255, 0.3)
    ),
    url(/bg-hero-desktop.svg);
  background-size: contain;
  background-position: center;
  padding: 4rem 8rem;
  display: grid;
  grid-template-rows: 6rem min-content;
  grid-template-columns: repeat(12, 1fr);
  row-gap: 2.8rem;
  @media only screen and (max-width: 36.875em) {
    padding: 4rem 2rem;
  }
  /* svg {
    height: 3.2rem;
    width: 3.2rem;
    margin-right: 0.5rem;
    fill: ${({ theme }) => theme.color.primary};
  } */

  /* & h1 {
    font-family: ${({ theme }) => theme.font.headings};
    color: ${({ theme }) => theme.color.footer};
    display: inline-block;
    font-size: 3.2rem;
  } */
`;

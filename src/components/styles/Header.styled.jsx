import styled from "styled-components";

export const StyledHeader = styled.header`
  grid-column: full-start / full-end;
  /* background-color: ${({ theme }) => theme.color.header}; */
  background: linear-gradient(
      rgba(235, 251, 255, 0.5),
      rgba(235, 251, 255, 0.5)
    ),
    url(public/bg-hero-desktop.svg);
  background-size: contain;
  background-position: center;
  padding: 4rem;
  display: grid;
  grid-template-rows: 6rem min-content;
  /* grid-template-columns: 40% 60%; */

  svg {
    height: 2.8rem;
    width: 2.8rem;
    margin-right: 0.5rem;
  }

  h1 {
    color: ${({ theme }) => theme.color.footer};
    display: inline-block;
    font-size: 2.8rem;
  }
`;

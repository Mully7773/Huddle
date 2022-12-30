import styled from "styled-components";

export const StyledHeader = styled.header`
  grid-column: full-start / full-end;
  background-color: ${({ theme }) => theme.color.header};
  background-color: lightblue;
  padding: 4rem 0;
  h1 {
    color: red;
  }
`;

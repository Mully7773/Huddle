import styled from "styled-components";

export const StyledFooter = styled.footer`
  grid-column: full-start / full-end;
  background-color: ${({ theme }) => theme.color.footer};
  color: #fff;

  display: grid;
  grid-template-columns: repeat(8, 1fr);
`;

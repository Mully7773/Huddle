import styled from "styled-components";

export const StyledButton = styled.a`
  display: inline-block;
  border-radius: 100rem;
  padding: 1rem 4.2rem;
  background: #fff;
  color: #000;
  font-size: 1.4rem;
  font-weight: 600;
  cursor: pointer;
  font-family: ${({ theme }) => theme.font.bodyCTA};
  /* box-shadow: 0 4rem 6rem rgba(0, 0, 0, 0.09); */
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0.4rem 1.2rem;
  transition: all 0.3s;

  &:hover,
  &:visited {
    color: #888;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0.2rem 0.6rem;
  }

  ${(props) =>
    props.primary &&
    `
      background: hsl(322, 100%, 66%);
      color: #fff;
      padding: 1rem 5.6rem;
      align-self: flex-start
    `}
`;

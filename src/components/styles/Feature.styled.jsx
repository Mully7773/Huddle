import styled from "styled-components";
import { css } from "styled-components";

export const StyledFeature = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  box-shadow: rgba(0, 0, 0, 0.13) 0px 0.4rem 1.2rem;
  padding: 4.5rem 3.6rem 4.5rem 4rem;
  border-radius: ${({ theme }) => theme.borderRadius.cards};
  transform: translateX(-100%);

  opacity: 0;
  transition: all 1.5s ease-out;

  ${(props) =>
    props.alternate &&
    css`
      transform: translateX(100%);
      opacity: ;
    `}

  ${(props) =>
    props.inView &&
    css`
      transform: translateX(0);
      opacity: 1;
    `}

  @media only screen and (max-width: 59.375em) {
    /* There may be a better solution for making all cards the same height */
    /* height: 75rem; */
    grid-auto-rows: auto;
  }
`;

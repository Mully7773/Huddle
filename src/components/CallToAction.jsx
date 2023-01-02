import styled from "styled-components";
import { StyledButton } from "./styles/Button.styled";

const StyledCTAContainer = styled.section`
  grid-column: col-start 3 / col-start 9;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  padding: 6rem;
  border-radius: ${({ theme }) => theme.borderRadius.cards};
  box-shadow: rgba(0, 0, 0, 0.15) 0px 0.4rem 1.2rem;
  transform: translateY(35%);
  z-index: 9999;
  position: relative;
  background-color: #fff;

  @media only screen and (max-width: 59.375em) {
    grid-column: col-start 1 / center-end;
    padding: 6rem 3rem;
  }

  @media only screen and (max-width: 36.875em) {
    padding: 3rem;
  }

  h2 {
    font-size: 3.2rem;
    font-family: ${({ theme }) => theme.font.headings};
    font-weight: 600;
    @media only screen and (max-width: 59.375em) {
      padding-bottom: 2rem;
      font-size: 3.4rem;
    }
    @media only screen and (max-width: 36.875em) {
      padding-bottom: 2rem;
      font-size: 2.2rem;
    }
    @media only screen and (max-width: 25.375em) {
      padding-bottom: 1rem;
      font-size: 1.6rem;
    }
  }
`;

const CallToAction = () => {
  return (
    <StyledCTAContainer>
      <h2>Ready To Build Your Community?</h2>
      <StyledButton cta>Get Started For Free</StyledButton>
    </StyledCTAContainer>
  );
};

export default CallToAction;

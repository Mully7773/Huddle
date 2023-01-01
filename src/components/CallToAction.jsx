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
  box-shadow: rgba(0, 0, 0, 0.15) 0px 0.4rem 1.2rem; ;
`;

const CallToAction = () => {
  return (
    <StyledCTAContainer>
      <h2>Ready To Build Your Community?</h2>
      <StyledButton primary>Get Started For Free</StyledButton>
    </StyledCTAContainer>
  );
};

export default CallToAction;

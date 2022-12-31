import styled from "styled-components";
import { StyledButton } from "./styles/Button.styled";
// import Button from "./Button";

import { StyledHeader } from "./styles/Header.styled";

const StyledToolbar = styled.div`
  grid-column: 1 / -1;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledHeroText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
  grid-column: 1 / 6;
  /* background-color: coral; */
  padding-right: 5rem;
  justify-content: center;
  h1 {
    font-weight: 600;
    color: #000;
    line-height: 1.4;
    font-size: 4rem;
  }

  p {
    font-size: 1.8rem;
    font-weight: 400;
  }
`;

const StyledHeroImages = styled.div`
  /* background-color: blue; */
  grid-column: 6 / -1;
  /* justify-content: flex-end; */

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <StyledToolbar>
        <div>
          <svg>
            <use href="/sprite.svg#icon-commenting-o"></use>
          </svg>
          <h1>Huddle</h1>
        </div>
        <div>
          <StyledButton>Try It Free</StyledButton>
        </div>
      </StyledToolbar>
      <StyledHeroText>
        <h1>Build The Community Your Fans Will Love</h1>
        <p>
          Huddle re-imagines the way we build communities. You have a voice, but
          so does your audience. Create connections with your users as you
          engage in genuine discussion.
        </p>
        <StyledButton primary>Get Started For Free</StyledButton>
      </StyledHeroText>
      <StyledHeroImages>
        <img src="/illustration-mockups.svg" />
      </StyledHeroImages>
    </StyledHeader>
  );
};

export default Header;

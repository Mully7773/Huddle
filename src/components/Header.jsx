import styled from "styled-components";
import Button from "./Button";
import { StyledHeader } from "./styles/Header.styled";

const StyledToolbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
          <Button></Button>
        </div>
      </StyledToolbar>
    </StyledHeader>
  );
};

export default Header;

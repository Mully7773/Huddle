import styled from "styled-components";
import { css } from "styled-components";

export const StyledLogoHeading = styled.h1`
  font-family: ${({ theme }) => theme.font.headings};
  /* color:  ${({ theme }) => theme.color.footer}; */
  color: ${(props) => props.inputColor || "#fff"};
  display: inline-block;
  font-size: ${(props) => props.inputSize || "3.2rem"};
`;

export const StyledLogoSVG = styled.svg`
  height: ${(props) => props.inputSize || "3.2rem"};
  width: ${(props) => props.inputSize || "3.2rem"};
  margin-right: 0.5rem;
  fill: ${(props) => props.inputColor || "#fff"};
`;

const Logo = () => {
  return (
    <div>
      <StyledLogoSVG inputColor={(props) => props.theme.color.primary}>
        <use href="/sprite.svg#icon-commenting-o"></use>
      </StyledLogoSVG>
      <StyledLogoHeading inputColor={(props) => props.theme.color.footer}>
        Huddle
      </StyledLogoHeading>
    </div>
  );
};

export default Logo;

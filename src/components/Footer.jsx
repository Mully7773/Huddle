import Logo, { StyledLogoHeading, StyledLogoSVG } from "./Logo";
import { StyledFooter } from "./styles/Footer.styled";

const Footer = () => {
  return (
    <StyledFooter>
      <div>
        {/* <Logo /> */}
        <StyledLogoSVG inputSize="2.8rem">
          {" "}
          <use href="/sprite.svg#icon-commenting-o"></use>
        </StyledLogoSVG>
        <StyledLogoHeading inputSize="2.8rem">Huddle</StyledLogoHeading>
      </div>
      <div>Contacts</div>
      <div>Links</div>
    </StyledFooter>
  );
};

export default Footer;

import styled from "styled-components";
import Logo, { StyledLogoHeading, StyledLogoSVG } from "./Logo";
import { StyledFooter } from "./styles/Footer.styled";

const FooterLogoContainer = styled.div`
  grid-column: 2 / 8;
`;

const ContactInfoGrid = styled.div`
  grid-column: 2 / 4;
  display: grid;
  row-gap: 1.5rem;
  align-items: center;
  align-content: center;
  grid-template-columns: min-content auto;
  column-gap: 1.7rem;

  & div {
    grid-column: 1 / -1;
  }
  & h1 {
    /* line-height: 1; */
  }

  .footer-svg {
    height: 1.7rem;
    width: 1.7rem;
    fill: #fff;
    align-self: flex-start;
    /* margin-right: 1rem; */
  }

  & a:link {
    text-decoration: none;
    color: #fff;
    transition: all 0.2s;
  }
  & a:visited {
    text-decoration: none;
    color: #fff;
  }
  & a:hover {
    text-decoration: underline;
    color: ${({ theme }) => theme.color.primary};
  }
`;

const NavigationLinks = styled.ul`
  grid-column: 4 / 6;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  & li {
    list-style: none;
  }
  & li a {
    text-decoration: none;
    color: #fff;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <FooterLogoContainer>
        <StyledLogoSVG inputSize="2.8rem">
          {" "}
          <use href="/sprite.svg#icon-commenting-o"></use>
        </StyledLogoSVG>
        <StyledLogoHeading inputSize="2.8rem">Huddle</StyledLogoHeading>
      </FooterLogoContainer>
      <ContactInfoGrid>
        <svg className="footer-svg">
          <use href="/sprite.svg#icon-location-pin"></use>
        </svg>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid totam
          quibusdam numquam aperiam natus sequi voluptas dolorem ducimus est.
        </p>
        <svg className="footer-svg">
          <use href="/sprite.svg#icon-phone"></use>
        </svg>
        <p>
          <a href="tel:+1-543-123-4567">+1-543-123-4567</a>
        </p>
        <svg className="footer-svg">
          <use href="/sprite.svg#icon-mail"></use>
        </svg>
        <p>
          <a href="mailto:example@huddle.com">example@huddle.com</a>
        </p>
      </ContactInfoGrid>
      <NavigationLinks>
        <li>
          <a href="#">About Us</a>
        </li>
        <li>
          <a href="#">Career</a>
        </li>
        <li>
          <a href="#">What We Do</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
        <li>
          <a href="#">FAQ</a>
        </li>
        <li>
          <a href="#">Contact Us</a>
        </li>
      </NavigationLinks>
      <div>Links</div>
    </StyledFooter>
  );
};

export default Footer;

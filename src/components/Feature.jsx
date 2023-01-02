import { StyledFeature } from "./styles/Feature.styled";
import { cardData } from "../cardData";
import styled from "styled-components";
import { css } from "styled-components";

const StyledFeatureText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  justify-content: center;
  grid-column: 1 / 7;
  padding: 0 0 0 5rem;

  @media only screen and (max-width: 59.375em) {
    grid-column: 1 / -1;
    padding: 2rem 2rem;
    text-align: center;
  }

  ${(props) =>
    props.alternate &&
    css`
      grid-column: 8 / -1;
      padding: 0;
    `}

  & h2 {
    font-family: ${({ theme }) => theme.font.headings};
    color: #000;
    font-size: 2.6rem;
    @media only screen and (max-width: 59.375em) {
      font-size: 3.2rem;
    }
    @media only screen and (max-width: 25.375em) {
      font-size: 2.4rem;
    }
  }

  & p {
    font-family: ${({ theme }) => theme.font.bodyCTA};
    font-size: 1.5rem;
    color: ${({ theme }) => theme.color.paragraphCard};
    @media only screen and (max-width: 59.375em) {
      font-size: 2rem;
    }
    @media only screen and (max-width: 25.375em) {
      font-size: 1.4rem;
    }
  }
`;

const StyledFeatureImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  grid-column: 8 / -1;
  padding: 2rem;

  @media only screen and (max-width: 59.375em) {
    grid-column: 1 / -1;
    grid-row: 1 / 2;
    object-fit: contain;
  }

  ${(props) =>
    props.alternate &&
    css`
      grid-column: 1 / 7;
      grid-row: 1 / 2;
      padding-left: 5rem;
      @media only screen and (max-width: 59.375em) {
        padding-left: 2rem;
        padding-bottom: 5rem;
        padding-top: 4rem;
      }
    `}
`;
const Feature = () => {
  const featureList = cardData.map((feature, index) => (
    <StyledFeature key={feature.id}>
      <StyledFeatureText alternate={index % 2 !== 0}>
        <h2>{feature.cardHeading}</h2>
        <p>{feature.cardText}</p>
      </StyledFeatureText>
      <StyledFeatureImage alternate={index % 2 !== 0} src={feature.cardImg} />
    </StyledFeature>
  ));

  return <>{featureList}</>;
};

export default Feature;

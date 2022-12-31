import { StyledFeature } from "./styles/Feature.styled";
import { cardData } from "../cardData";
import styled from "styled-components";

const StyledFeatureText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  justify-content: center;
  grid-column: 1 / 7;
  padding: 0 0 0 5rem;
  & h2 {
    font-family: ${({ theme }) => theme.font.headings};
    color: #000;
    font-size: 2.6rem;
  }

  & p {
    font-family: ${({ theme }) => theme.font.bodyCTA};
    font-size: 1.5rem;
    color: ${({ theme }) => theme.color.paragraphCard};
  }
`;

const StyledFeatureImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  grid-column: 8 / -1;
  padding: 2rem;
`;
const Feature = () => {
  const featureList = cardData.map((feature) => (
    <StyledFeature key={feature.id}>
      <StyledFeatureText>
        <h2>{feature.cardHeading}</h2>
        <p>{feature.cardText}</p>
      </StyledFeatureText>
      <StyledFeatureImage src={feature.cardImg} />
    </StyledFeature>
  ));

  return <>{featureList}</>;
};

export default Feature;

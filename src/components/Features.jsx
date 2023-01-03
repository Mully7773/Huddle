import Feature from "./Feature";
import { StyledFeatures } from "./styles/Features.styled";
import { useInView } from "react-intersection-observer";

const Features = () => {
  return (
    <StyledFeatures>
      <Feature />
    </StyledFeatures>
  );
};

export default Features;

import styled from "styled-components";

export const StyledGridContainer = styled.div`
  display: grid;
  grid-template-rows: 100vh min-content min-content min-content;
  grid-template-columns:
    [full-start] minmax(4rem, 1fr) [center-start] repeat(
      10,
      [col-start] minmax(min-content, 14rem) [col-end]
    )
    [center-end] minmax(4rem, 1fr) [full-end];
`;

import React from "react";
import styled from "styled-components";

const HowToCrew = ({ howToCrew }) => {
  return <Container ref={howToCrew} />;
};
const Container = styled.section`
  width: 100%;
  height: 600px;
  background-color: skyblue;
`;

export default HowToCrew;

import React from "react";
import styled from "styled-components";
import theme from "styles/theme";

const Banner = () => {
  return (
    <Container>
      <BannerTitle>
        코세구 크루가 <br />
        되어주세요
      </BannerTitle>
    </Container>
  );
};

const Container = styled.section`
  ${(props) => props.theme.variables.flexSet()};
  width: 100%;
  height: 450px;
  background-color: ${theme.mainColor};
`;

const BannerTitle = styled.p`
  font-size: 80px;
  font-weight: 800;
  text-align: center;
  color: white;
`;

export default Banner;

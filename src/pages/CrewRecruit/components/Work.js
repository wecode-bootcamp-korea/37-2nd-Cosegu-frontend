import React from "react";
import styled from "styled-components";
import theme from "styles/theme";
const Work = () => {
  return (
    <WorkContainer>
      <WorkInner>
        <WorkTitle>
          <span>코세구 크루</span>들은 <br />
          무슨일을 할까?
        </WorkTitle>
        <WorkImg src="https://career-cdn.woowayouths.com/resources/static/img/pc/bmart/img-crew_02@2x.png?ddcf6f4c76eb1c6ca3826b6ae55fe0da" />
      </WorkInner>
    </WorkContainer>
  );
};
const WorkContainer = styled.section`
  ${(props) => props.theme.variables.flexSet()};
  width: 100%;
  height: 500px;
  background-color: #f7f7f7;
`;
const WorkInner = styled.div``;
const WorkTitle = styled.p`
  margin-bottom: 50px;
  font-size: 60px;
  font-weight: 800;
  text-align: center;

  span {
    color: ${theme.mainColor};
  }
`;

const WorkImg = styled.img`
  width: 150px;
  height: 150px;
`;
export default Work;

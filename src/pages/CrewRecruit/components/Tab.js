import React from "react";
import styled from "styled-components";

const Tab = () => {
  return (
    <TabContainer>
      <TabUl>
        <TabLi>코세구는?</TabLi>
        <TabLi>코세구 크루 업무소개</TabLi>
        <TabLi>근무자 인터뷰</TabLi>
        <TabLi>코세구 크루가 되려면?</TabLi>
        <TabLi>진행중인 채용</TabLi>
      </TabUl>
    </TabContainer>
  );
};

const TabContainer = styled.section`
  ${(props) => props.theme.variables.flexSet()}
  width: 100%;
  background-color: white;
  border-bottom: 1px solid #ddd;
`;

const TabUl = styled.ul`
  ${(props) => props.theme.variables.flexSet("space-between", "center")}
  width: 1080px;
  height: 75px;
`;
const TabLi = styled.li`
  ${(props) => props.theme.variables.flexSet("space-between", "center")}
  height: 50px;
  font-weight: 800;
  font-size: 16px;
`;

export default Tab;

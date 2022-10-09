import React from "react";
import styled from "styled-components";
import theme from "styles/theme";

const Tab = ({
  moveSection,
  currentSection,
  intro,
  work,
  interview,
  howToCrew,
  recruit,
}) => {
  const TABS = [
    { id: "intro", content: "코세구는?", ref: intro },
    { id: "work", content: "코세구 크루 업무소개", ref: work },
    { id: "interview", content: "근무자 인터뷰", ref: interview },
    { id: "howToCrew", content: "코세구 크루가 되려면?", ref: howToCrew },
    { id: "recruit", content: "진행중인 채용", ref: recruit },
  ];
  return (
    <S.Container currentSection={currentSection}>
      <S.TabWrap>
        {TABS.map((tab) => {
          return (
            <S.TabBtn
              onClick={() => moveSection(tab.ref)}
              key={tab.id}
              active={
                tab.id === currentSection && {
                  background: `${theme.mainColor}`,
                  color: "white",
                }
              }
            >
              {tab.content}
            </S.TabBtn>
          );
        })}
      </S.TabWrap>
    </S.Container>
  );
};

const S = {
  Container: styled.section`
    ${(props) => props.theme.variables.flexSet()}
    position: sticky;
    top: 0;
    width: 100%;
    background-color: white;
    border-bottom: 1px solid #ddd;
    z-index: 95;
    opacity: ${(props) => (props.currentSection === "" ? 1 : 0.8)};
  `,

  TabWrap: styled.ul`
    ${(props) => props.theme.variables.flexSet("space-between", "center")}
    width: 1080px;
    height: 75px;
  `,

  TabBtn: styled.li`
    ${(props) => props.theme.variables.flexSet()}
    width: calc(100%/5);
    height: 50px;
    font-weight: 800;
    font-size: 16px;
    color: ${(props) => props.active.color};
    background-color: ${(props) => props.active.background};
    cursor: pointer;
  `,
};

export default Tab;

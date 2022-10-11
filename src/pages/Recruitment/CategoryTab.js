import React, { useState } from "react";
import styled from "styled-components";

const TAB_CATEGORIES = ["프론트엔드", "백엔드", "풀스택", "웹디자인", "QA"];

function CategoryTab() {
  const [currTab, setCurrentTab] = useState("프론트엔드");

  return (
    <S.Categories>
      {TAB_CATEGORIES.map((tab) => (
        <S.CateTab key={tab}>
          <S.TabLink
            // href="/recruitment"
            onClick={() => setCurrentTab(tab)}
            textColor={`${currTab === tab ? "#BF1010" : "#000"}`}
          >
            {tab}
          </S.TabLink>
          <S.Num bgColor={`${currTab === tab ? "#BF1010" : "#000"}`}>10</S.Num>
        </S.CateTab>
      ))}
    </S.Categories>
  );
}

const S = {
  Categories: styled.div`
    display: flex;
    justify-content: center;
    margin-top: 25px;
    padding: 25px 0;
  `,
  CateTab: styled.div`
    padding: 0 10px;
    text-align: center;
    cursor: pointer;
  `,
  Num: styled.span`
    display: inline-block;
    min-width: 35px;
    height: 24px;
    margin: -0.2em 7px 0 7px;
    padding: 0 8px;
    font-size: 15px;
    font-weight: 700;
    color: #ffff;
    text-align: center;
    line-height: 1.7em;
    background-color: ${(props) => props.bgColor};
    vertical-align: middle;
    border-radius: 12px;
  `,
  TabLink: styled.a`
    font-size: 17px;
    font-weight: 700;
    color: ${(props) => props.textColor};
    text-decoration: none;
  `,
};

export default CategoryTab;

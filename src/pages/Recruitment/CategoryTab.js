import React, { useState } from "react";
import styled from "styled-components";

const TAB_CATEGORIES = [
  { id: 1, title: "프론트엔드" },
  { id: 2, title: "백엔드" },
  { id: 3, title: "풀스택" },
  { id: 4, title: "웹디자이너" },
  { id: 5, title: "QA" },
];

function CategoryTab({ setCategoryId }) {
  const [currTab, setCurrentTab] = useState("프론트엔드");

  const onClick = (id, title) => {
    setCurrentTab(title);
    setCategoryId(id);
  };

  return (
    <S.Categories>
      {TAB_CATEGORIES.map((data) => (
        <S.CateTab key={data.id}>
          <S.TabLink
            onClick={() => onClick(data.id, data.title)}
            textColor={`${currTab === data.title ? "#BF1010" : "#000"}`}
          >
            {data.title}
            <S.Num bgColor={`${currTab === data.title ? "#BF1010" : "#000"}`}>
              10
            </S.Num>
          </S.TabLink>
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

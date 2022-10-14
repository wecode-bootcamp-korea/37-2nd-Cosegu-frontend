import React, { useState } from "react";
import styled from "styled-components";
import Search from "components/Search/Search";
import CategoryTab from "./CategoryTab";
import LeftFilter from "./LeftFilter";
import Recruit from "./Recruit";

const Recruitment = () => {
  return (
    <>
      <Search />
      <CategoryTab />
      <S.Content>
        <S.Wrap>
          <LeftFilter />
          <S.RecruitList>
            <Recruit />
          </S.RecruitList>
        </S.Wrap>
      </S.Content>
    </>
  );
};

const S = {
  Content: styled.div`
    background-color: #f5f5f5;
  `,
  Wrap: styled.div`
    display: flex;
    ${(props) => props.theme.style.contain};
    padding: 50px 0;
  `,
  RecruitList: styled.div`
    width: calc(100% - 277px);
    padding-left: 40px;
    border-left: 1px solid #e5e5e5;
  `,
};

export default Recruitment;

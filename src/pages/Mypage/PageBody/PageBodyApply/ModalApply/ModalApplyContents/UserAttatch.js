import React from "react";
import styled from "styled-components";

const UserAttatch = () => {
  return (
    <div>
      <S.InfoName>첨부자료</S.InfoName>
      <S.InfoListBox>
        <S.InfoList>
          <S.Info>포트폴리오</S.Info>
          <S.Line />
        </S.InfoList>
        <S.InfoList>
          <S.Info>Screen Shot 2022-10-11 at 6.19.55 PM.png</S.Info>
          <S.Line />
        </S.InfoList>
      </S.InfoListBox>
    </div>
  );
};

export default UserAttatch;

const S = {
  InfoName: styled.p`
    margin-bottom: 40px;
    padding-right: 20px;
    color: #222;
    font-size: 22px;
    font-weight: 800;
  `,
  InfoListBox: styled.ul`
    display: flex;
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  `,
  InfoList: styled.li`
    display: flex;
  `,
  Info: styled.span`
    padding-right: 20px;
    font-weight: 400;
  `,
  Line: styled.div`
    width: 1px;
    height: 13px;
    margin-right: 20px;
    background: #aaa;
  `,
};

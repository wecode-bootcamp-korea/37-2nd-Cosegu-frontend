import React from "react";
import styled from "styled-components";

const UserCareer = () => {
  return (
    <div>
      <S.InfoName>경력</S.InfoName>
      <S.InfoListBox>
        <S.InfoList>
          <S.Info>비욘드넥스트</S.Info>
          <S.Line />
        </S.InfoList>
        <S.InfoList>
          <S.Info>디자인팀</S.Info>
          <S.Line />
        </S.InfoList>
        <S.InfoList>
          <S.Info>팀장</S.Info>
          <S.Line />
        </S.InfoList>
        <S.InfoList>
          <S.Info>2022.01.01~2022.10.01</S.Info>
          <S.Line />
        </S.InfoList>
        <S.InfoList>
          <S.Info>계약직</S.Info>
          <S.Line />
        </S.InfoList>
        <S.InfoList>
          <S.Info>디자인</S.Info>
          <S.Line />
        </S.InfoList>
      </S.InfoListBox>
      <S.InfoListBox>
        <S.InfoList>
          <S.Info>비욘드넥스트</S.Info>
          <S.Line />
        </S.InfoList>
        <S.InfoList>
          <S.Info>디자인팀</S.Info>
          <S.Line />
        </S.InfoList>
        <S.InfoList>
          <S.Info>팀장</S.Info>
          <S.Line />
        </S.InfoList>
        <S.InfoList>
          <S.Info>2022.01.01~2022.10.01</S.Info>
          <S.Line />
        </S.InfoList>
        <S.InfoList>
          <S.Info>계약직</S.Info>
          <S.Line />
        </S.InfoList>
        <S.InfoList>
          <S.Info>디자인</S.Info>
          <S.Line />
        </S.InfoList>
      </S.InfoListBox>
    </div>
  );
};

export default UserCareer;

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

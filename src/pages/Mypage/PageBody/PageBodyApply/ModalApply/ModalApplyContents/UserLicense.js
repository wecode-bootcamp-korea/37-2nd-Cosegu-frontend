import React from "react";
import styled from "styled-components";

const UserLicense = () => {
  return (
    <div>
      <S.InfoName>자격증</S.InfoName>
      <S.InfoListBox>
        <S.InfoList>
          <S.Info>컴퓨터그래픽스운용기능사</S.Info>
          <S.Line />
        </S.InfoList>
        <S.InfoList>
          <S.Info>산업입력관리공단</S.Info>
          <S.Line />
        </S.InfoList>
        <S.InfoList>
          <S.Info>2020.10.28</S.Info>
          <S.Line />
        </S.InfoList>
        <S.InfoList>
          <S.Info>324234234234</S.Info>
          <S.Line />
        </S.InfoList>
      </S.InfoListBox>
      <S.InfoListBox>
        <S.InfoList>
          <S.Info>컴퓨터그래픽스운용기능사</S.Info>
          <S.Line />
        </S.InfoList>
        <S.InfoList>
          <S.Info>산업입력관리공단</S.Info>
          <S.Line />
        </S.InfoList>
        <S.InfoList>
          <S.Info>2020.10.28</S.Info>
          <S.Line />
        </S.InfoList>
        <S.InfoList>
          <S.Info>324234234234</S.Info>
          <S.Line />
        </S.InfoList>
      </S.InfoListBox>
    </div>
  );
};

export default UserLicense;

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

import React from "react";
import styled from "styled-components";
import variables from "styles/variables";

const UserInfo = () => {
  return (
    <div>
      <S.InfoNameBox>
        <S.InfoName>라용</S.InfoName>
        <S.InfoEngName>rayong</S.InfoEngName>
        <S.InfoAddress>경기도 남양주시 다산동 1020-234</S.InfoAddress>
      </S.InfoNameBox>
      <S.InfoListBox>
        <S.List>
          <S.Title>이메일</S.Title>
          <S.Info>skdyds@naver.com</S.Info>
        </S.List>
        <S.Line />
        <S.List>
          <S.Title>생년월일</S.Title>
          <S.Info>2022년 2월 22일</S.Info>
        </S.List>
        <S.Line />
        <S.List>
          <S.Title>휴대폰 번호</S.Title>
          <S.Info>010-3444-3333</S.Info>
        </S.List>
      </S.InfoListBox>
    </div>
  );
};

export default UserInfo;

const S = {
  InfoNameBox: styled.div`
    margin-bottom: 50px;
  `,
  InfoName: styled.span`
    padding-right: 20px;
    color: #222;
    font-size: 22px;
    font-weight: 800;
  `,
  InfoEngName: styled.span`
    padding-right: 20px;
    color: #888;
    font-weight: 400;
    font-size: 18px;
  `,
  InfoAddress: styled.span`
    color: #888;
    font-size: 14px;
  `,
  InfoListBox: styled.ul`
    ${variables.flexSet("space-between", "center")}
    padding: 0 80px;
  `,
  List: styled.li`
    text-align: center;
  `,
  Line: styled.div`
    width: 1.5px;
    height: 40px;
    background: #efefef;
  `,
  Title: styled.p`
    margin: 10px;
    font-size: 14px;
    color: gray;
  `,
  Info: styled.p`
    font-size: 16px;
    font-weight: 900;
  `,
};

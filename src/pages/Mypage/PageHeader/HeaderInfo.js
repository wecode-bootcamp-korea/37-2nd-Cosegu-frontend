import React from "react";
import styled from "styled-components";
import variables from "styles/variables";

const HeaderInfo = ({ userInfoArr }) => {
  return (
    <S.InfoWrap>
      <S.List>
        <S.Title>이메일</S.Title>
        <S.Info>
          {userInfoArr !== undefined && `${userInfoArr[0].email}`}
        </S.Info>
      </S.List>
      <S.Line />
      <S.List>
        <S.Title>생년월일</S.Title>
        <S.Info>
          {userInfoArr !== undefined && `${userInfoArr[0].birth}`}
        </S.Info>
      </S.List>
      <S.Line />
      <S.List>
        <S.Title>휴대폰 번호</S.Title>
        <S.Info>
          {userInfoArr !== undefined && `${userInfoArr[0].mobile}`}
        </S.Info>
      </S.List>
    </S.InfoWrap>
  );
};

export default HeaderInfo;

const S = {
  InfoWrap: styled.ul`
    ${variables.flexSet("space-between", "center")}
    padding: 0 145px;
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

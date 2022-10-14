import React from "react";
import styled from "styled-components";
import variables from "styles/variables";
import theme from "styles/theme";

const UserApply = ({ applyView }) => {
  return (
    <S.Wrap>
      <S.ApplyBtn onClick={applyView} color="black">
        닫기
      </S.ApplyBtn>
      <S.ApplyBtn color={theme.mainColor}>지원서 수정</S.ApplyBtn>
    </S.Wrap>
  );
};

export default UserApply;

const S = {
  Wrap: styled.div`
    ${variables.flexSet("space-between")};
    width: 630px;
    margin: 0 auto;
    padding: 40px 0 60px;
  `,
  ApplyBtn: styled.button`
    width: 300px;
    padding: 20px;
    font-size: 16px;
    font-weight: 700;
    color: white;
    background: ${(props) => props.color};
    border: none;
    cursor: pointer;
  `,
};

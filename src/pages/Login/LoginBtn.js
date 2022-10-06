import React from "react";
import styled from "styled-components";

const LoginBtn = () => {
  return (
    <S.BtnWrap>
      <S.Button>로그인</S.Button>
    </S.BtnWrap>
  );
};

export default LoginBtn;

const S = {
  BtnWrap: styled.div`
    padding: 20px 0 30px;
    border-bottom: 1px solid #aaa;
  `,
  Button: styled.button`
    width: 100%;
    padding: 20px 20px;
    color: white;
    background: #555;
    border: none;
    cursor: pointer;
  `,
};

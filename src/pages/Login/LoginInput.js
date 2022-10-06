import React from "react";
import styled from "styled-components";

const LoginInput = ({ text }) => {
  return <S.InputBox placeholder={text} />;
};

export default LoginInput;

const S = {
  InputBox: styled.input`
    width: 100%;
    padding: 15px 20px;
    margin-bottom: 10px;
    outline: none;
  `,
};

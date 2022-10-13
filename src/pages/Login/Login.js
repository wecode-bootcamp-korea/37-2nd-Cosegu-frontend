import React from "react";
import { useEffect } from "react";
import styled from "styled-components";
import LoginInput from "./LoginInput";
import LoginBtn from "./LoginBtn";
import SocialLogin from "./SocialLogin/SocialLogin";

const Login = () => {
  // 임시 토큰 생성, 로그인 이후 고려

  return (
    <S.LoginWrap>
      <S.LoginTitle>로그인</S.LoginTitle>
      <LoginInput text="이메일을 입력하세요." />
      <LoginInput text="비밀번호를 입력하세요." />
      <LoginBtn />
      <SocialLogin />
    </S.LoginWrap>
  );
};

export default Login;

const S = {
  LoginWrap: styled.div`
    width: 400px;
    margin: 100px auto 100px;
  `,
  LoginTitle: styled.p`
    padding: 30px;
    font-size: 35px;
    font-weight: 900;
    text-align: center;
  `,
};

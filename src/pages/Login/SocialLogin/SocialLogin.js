import React from "react";
import { SiNaver } from "react-icons/si";
import styled from "styled-components";
import variables from "styles/variables";

const SocialLogin = () => {
  const NAVER_AUTH_URI = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&state=cosegu`;

  const loginHandler = () => {
    window.location.href = NAVER_AUTH_URI;
  };

  return (
    <S.BtnWrap>
      <S.Button onClick={loginHandler}>
        <SiNaver size="18px" className="icon" />
        네이버로 로그인 하기
      </S.Button>
    </S.BtnWrap>
  );
};

export default SocialLogin;

const S = {
  BtnWrap: styled.div`
    padding: 30px 0;
  `,
  Button: styled.button`
    ${variables.flexSet("center", "center")};
    width: 100%;
    padding: 15px 20px;
    font-weight: 900;
    color: white;
    background: #04cf5c;
    border: none;
    cursor: pointer;
    .icon {
      margin-right: 10px;
    }
  `,
};

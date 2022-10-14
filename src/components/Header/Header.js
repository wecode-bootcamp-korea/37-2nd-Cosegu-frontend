import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import HeaderMenu from "./HeaderMenu";
import HeaderIcon from "./HeaderIcon/HeaderIcon";
import variables from "styles/variables";

const Header = () => {
  return (
    <S.Nav>
      <S.HeaderWrap>
        <LogoBox to="/">
          <S.LogoImg src="https://velog.velcdn.com/images/rayong/post/306bc917-89c3-4217-8d50-1c814c576f57/image.png" />
        </LogoBox>
        <HeaderMenu />
        <HeaderIcon />
      </S.HeaderWrap>
    </S.Nav>
  );
};

const LogoBox = styled(Link)`
  padding-top: 5px;
`;

const S = {
  Nav: styled.div`
    height: 85px;
    border-bottom: 1px solid #ddd;
  `,
  HeaderWrap: styled.div`
    ${variables.flexSet("space-between")};
    margin: 0 30px;
    height: 100%;
  `,
  LogoImg: styled.img`
    width: 180px;
  `,
};

export default Header;

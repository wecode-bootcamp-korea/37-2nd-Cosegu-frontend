import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderMenu = () => {
  return (
    <S.MenuWrap>
      <S.MenuList to="/recruitment">지원하기</S.MenuList>
      <S.MenuList to="/faq">자주묻는 질문</S.MenuList>
      <S.MenuList to="/crewrecruit">B마트 크루 지원하기</S.MenuList>
    </S.MenuWrap>
  );
};

export default HeaderMenu;

const S = {
  MenuWrap: styled.ul`
    display: flex;
  `,
  MenuList: styled(Link)`
    padding: 0 20px;
    color: #222;
    text-decoration: none;
    font-size: 20px;
    font-weight: bold;
  `,
};

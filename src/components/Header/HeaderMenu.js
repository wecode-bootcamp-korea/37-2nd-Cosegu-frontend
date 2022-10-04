import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderMenu = () => {
  return (
    <MenuWrap>
      <MenuList to="/recruitment">지원하기</MenuList>
      <MenuList to="/faq">자주묻는 질문</MenuList>
      <MenuList to="/crewrecruit">B마트 크루 지원하기</MenuList>
    </MenuWrap>
  );
};

export default HeaderMenu;

const MenuWrap = styled.ul`
  display: flex;
`;

const MenuList = styled(Link)`
  padding: 0 20px;
  color: #222;
  text-decoration: none;
  font-size: 20px;
  font-weight: bold;
`;

import React from "react";
import styled from "styled-components";
import variables from "styles/variables";

const LeftMenu = () => {
  return (
    <FooterMenu>
      <MenuList>이용약관</MenuList>
      <MenuList>개인정보처리방침</MenuList>
      <MenuList>소화물 배송대행서비스사업자</MenuList>
    </FooterMenu>
  );
};

export default LeftMenu;

const FooterMenu = styled.ul`
  ${variables.flexSet("left")}
  padding: 10px 0;
`;

const MenuList = styled.li`
  padding-right: 20px;
  font-weight: bold;
  cursor: pointer;
`;

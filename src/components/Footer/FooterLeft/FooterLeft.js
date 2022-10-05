import React from "react";
import styled from "styled-components";
import LeftMenu from "./LeftMenu";

const FooterLeft = () => {
  return (
    <LeftBox>
      <LeftMenu />
      <FooterCopy>서울특별시 강남구 테헤란로 427, 10층(삼성동)</FooterCopy>
      <FooterCopy>Copyright © 2019. Gracefulrain Co., Ltd.</FooterCopy>
    </LeftBox>
  );
};

export default FooterLeft;

const LeftBox = styled.div`
  width: 500px;
  font-size: 14px;
`;

const FooterCopy = styled.p`
  margin-top: 10px;
  font-weight: 400;
`;

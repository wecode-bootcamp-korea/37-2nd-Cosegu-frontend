import React from "react";
import FooterLeft from "./FooterLeft/FooterLeft";
import FooterRight from "../FooterRight/FooterRight";
import styled from "styled-components";
import variables from "styles/variables";

const Footer = () => {
  return (
    <FooterWrap>
      <FooterLeft />
      <FooterRight />
    </FooterWrap>
  );
};

export default Footer;

const FooterWrap = styled.div`
  ${variables.flexSet("space-between", "top")};
  width: 1200px;
  padding: 50px 0;
  margin: 0 auto;
`;

import React from "react";
import styled from "styled-components";
import { BiUpArrowAlt } from "react-icons/bi";
import variables from "styles/variables";

const LinkSite = () => {
  return (
    <SiteWrap>
      <Text>관련 사이트</Text>
      <BiUpArrowAlt size="20px" color="#222" />
    </SiteWrap>
  );
};

export default LinkSite;

const SiteWrap = styled.div`
  ${variables.flexSet("space-between", "center")};
  height: 50px;
  padding: 10px 20px;
  border: 1px solid #aaa;
  border-radius: 5px;
  cursor: pointer;
`;

const Text = styled.p`
  height: 20px;
  padding: 3px 25px 3px 5px;
`;

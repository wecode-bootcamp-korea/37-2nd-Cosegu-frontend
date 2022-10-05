import React from "react";
import styled from "styled-components";
import variables from "styles/variables";
import LinkSite from "./LinkSite";

const FooterRight = () => {
  return (
    <RightBox>
      <LinkSite />
      <LinkIcon src="https://velog.velcdn.com/images/rayong/post/e1858ec5-ad5e-4f8b-bed7-c6db5bd33b13/image.png" />
      <LinkIcon src="https://velog.velcdn.com/images/rayong/post/97b063a8-057d-4b49-ad4f-d80af1950a84/image.png" />
      <LogoIcon src="https://velog.velcdn.com/images/rayong/post/60a3c8f7-c7c4-4ebc-89ea-c5aadeb8a166/image.png" />
    </RightBox>
  );
};

export default FooterRight;

const RightBox = styled.div`
  ${variables.flexSet("space-between", "top")};
  width: 430px;
`;

const LinkIcon = styled.img`
  width: 40px;
  height: 40px;
  cursor: pointer;
`;

const LogoIcon = styled.img`
  width: 100px;
  height: 35px;
`;

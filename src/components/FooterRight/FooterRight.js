import React from "react";
import styled from "styled-components";
import variables from "styles/variables";
import LinkSite from "./LinkSite";

const FooterRight = () => {
  return (
    <S.RightBox>
      <LinkSite />
      <a
        target="_blank"
        href="https://wecode.notion.site/wecode-Premium-6590ef6ef3314ad790d98e87f72ae86c"
        rel="noreferrer"
      >
        <S.LinkIcon src="https://velog.velcdn.com/images/rayong/post/e1858ec5-ad5e-4f8b-bed7-c6db5bd33b13/image.png" />
      </a>
      <a target="_blank" href="https://kr.linkedin.com/" rel="noreferrer">
        <S.LinkIcon src="https://velog.velcdn.com/images/rayong/post/97b063a8-057d-4b49-ad4f-d80af1950a84/image.png" />
      </a>
      <S.LogoIcon src="https://velog.velcdn.com/images/rayong/post/60a3c8f7-c7c4-4ebc-89ea-c5aadeb8a166/image.png" />
    </S.RightBox>
  );
};

export default FooterRight;

const S = {
  RightBox: styled.div`
    ${variables.flexSet("space-between", "top")};
    width: 430px;
  `,
  LinkIcon: styled.img`
    width: 40px;
    height: 40px;
    cursor: pointer;
  `,
  LogoIcon: styled.img`
    width: 100px;
    height: 35px;
  `,
};

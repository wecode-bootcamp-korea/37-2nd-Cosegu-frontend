import React from "react";
import HeaderInfo from "./HeaderInfo";
import styled from "styled-components";
import variables from "styles/variables";

const PageHeader = () => {
  return (
    <>
      <S.HeaderName>
        <p>
          <S.Name>코세구</S.Name>님
        </p>
        <S.Line />
      </S.HeaderName>
      <HeaderInfo />
    </>
  );
};

export default PageHeader;

const S = {
  HeaderName: styled.p`
    ${variables.flexSet("space-between", "center")}
    margin-bottom: 60px;
  `,
  Name: styled.span`
    font-size: 24px;
    font-weight: bold;
  `,
  Line: styled.div`
    width: 900px;
    height: 1.5px;
    background: #efefef;
  `,
};

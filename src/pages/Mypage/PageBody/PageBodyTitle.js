import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import variables from "styles/variables";
import { AiOutlineArrowRight } from "react-icons/ai";

const PageBodyTitle = ({ title, btnText }) => {
  return (
    <S.Wrap>
      <S.ApplyTitle>{title}</S.ApplyTitle>
      <ApplyBtnLink>
        <S.ApplyBtn>{btnText}</S.ApplyBtn>
        <AiOutlineArrowRight />
      </ApplyBtnLink>
    </S.Wrap>
  );
};

export default PageBodyTitle;

const S = {
  Wrap: styled.div`
    ${variables.flexSet("space-between", "bottom")}
    margin-bottom: 20px;
  `,
  ApplyTitle: styled.p`
    font-size: 18px;
    font-weight: 900;
  `,
  ApplyBtn: styled.p`
    padding-top: 2px;
  `,
};

const ApplyBtnLink = styled(Link)`
  ${variables.flexSet("space-between", "cetner")}
  width: 65px;
  font-size: 13px;
  color: black;
  text-decoration: none;
  cursor: pointer;
`;

import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import variables from "styles/variables";

const MainApplyFloat = () => {
  return (
    <S.Wrap to="/recruitment">
      <S.ApplyFloat>지원하기</S.ApplyFloat>
    </S.Wrap>
  );
};

export default MainApplyFloat;

const S = {
  Wrap: styled(Link)`
    ${variables.flexSet()};
    position: fixed;
    bottom: 60px;
    right: 60px;
    width: 180px;
    height: 72px;
    background: #bf1010;
    border-radius: 10px;
    box-shadow: 8px 16px 30px rgba(0, 0, 0, 0.5);
    text-decoration: none;
  `,
  ApplyFloat: styled.p`
    color: white;
    font-size: 20px;
    font-weight: 800;
  `,
};

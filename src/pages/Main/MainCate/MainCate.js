import React from "react";
import styled from "styled-components";
import CategoryTab from "./CategoryTab";

const MainCate = () => {
  return (
    <S.Wrap>
      <CategoryTab />
    </S.Wrap>
  );
};

export default MainCate;

const S = {
  Wrap: styled.div`
    margin-bottom: 18px;
  `,
};

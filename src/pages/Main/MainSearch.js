import React from "react";
import Search from "components/Search/Search";
import styled from "styled-components";

const MainSearch = () => {
  return (
    <S.Wrap>
      <Search />;
    </S.Wrap>
  );
};

export default MainSearch;

const S = {
  Wrap: styled.div`
    margin-top: -215px;
    margin-bottom: 80px;
  `,
};

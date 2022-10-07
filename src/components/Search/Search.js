import React from "react";
import styled from "styled-components";
import SearchField from "components/Search/SearchField";

const S = {
  Wrapper: styled.div`
    position: relative;
    padding-top: 70px;
  `,
  KeyboardBox: styled.div`
    position: relative;
    width: 500px;
    margin: 0 auto;
  `,
  Label: styled.label`
    ${(props) => props.theme.style.hide}
  `,
  Button: styled.button`
    position: absolute;
    top: 50%;
    right: 12px;
    width: 25px;
    height: 25px;
    margin-top: -12px;
    background: url("./images/search_ico.png") 50% 50% no-repeat;
    background-size: cover;
    border: 0;
    text-indent: -9999px;
    overflow: hidden;
  `,
};

const Search = () => {
  return (
    <S.Wrapper>
      <S.KeyboardBox>
        <S.Label htmlFor="keywordSearch">공고검색</S.Label>
        <SearchField
          id="keywordSearch"
          type="text"
          placeholder="찾으시는 공고의 키워드를 입력하세요"
          autocomplete="off"
        />
        <S.Button type="button">검색</S.Button>
      </S.KeyboardBox>
    </S.Wrapper>
  );
};

export default Search;

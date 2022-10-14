import React from "react";
import styled from "styled-components";
import SearchField from "components/Search/SearchField";

const Search = ({ onChange, label, placeholder, value, onClick }) => {
  return (
    <S.Wrapper>
      <S.KeyboardBox>
        <S.Label htmlFor="keywordSearch">{label}</S.Label>
        <SearchField
          id="keywordSearch"
          type="text"
          placeholder={placeholder}
          autocomplete="off"
          onChange={onChange}
          value={value}
        />
        <S.Button type="button" onClick={onClick}>
          검색
        </S.Button>
      </S.KeyboardBox>
    </S.Wrapper>
  );
};

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

export default Search;

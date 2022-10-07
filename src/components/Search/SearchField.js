import React from "react";
import styled from "styled-components";

const S = {
  SearchField: styled.input`
    width: 500px;
    height: 60px;
    padding-left: 25px;
    padding-right: 50px;
    font-size: 16px;
    ${(props) => props.theme.style.input}
    border: 1px solid #000;
    ::placeholder {
      color: #ccc;
    }
  `,
};

const SearchField = (props) => <S.SearchField {...props} />;

export default SearchField;

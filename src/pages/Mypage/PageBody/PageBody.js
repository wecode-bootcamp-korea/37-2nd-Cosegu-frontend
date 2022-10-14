import React from "react";
import PageBodyTitle from "./PageBodyTitle";
import PageBodyQna from "./PageBodyQna";
import PageBodyApply from "./PageBodyApply/PageBodyApply";
import styled from "styled-components";

const PageBody = ({ userInfoArr, userQueArr }) => {
  return (
    <>
      <S.ApplyWrap>
        <PageBodyTitle title="나의 지원현황" btnText="지원하기" />
        <PageBodyApply userInfoArr={userInfoArr} />
      </S.ApplyWrap>
      <S.QnaWrap>
        <PageBodyTitle title="나의 문의 내역" btnText="1:1 문의" />
        <PageBodyQna userQueArr={userQueArr} />
      </S.QnaWrap>
    </>
  );
};

export default PageBody;

const S = {
  ApplyWrap: styled.div`
    margin-bottom: 70px;
  `,
  QnaWrap: styled.div`
    margin-bottom: 100px;
  `,
};

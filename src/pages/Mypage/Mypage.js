import React from "react";
import styled from "styled-components";
import PageBody from "./PageBody/PageBody";
import PageHeader from "./PageHeader/PageHeader";

const Mypage = () => {
  return (
    <>
      <S.MypageHeaderWrap>
        <S.MypageHeader>
          <PageHeader />
        </S.MypageHeader>
      </S.MypageHeaderWrap>
      <S.MypageBodyWrap>
        <S.MypageBody>
          <PageBody />
        </S.MypageBody>
      </S.MypageBodyWrap>
    </>
  );
};

export default Mypage;

const S = {
  MypageHeaderWrap: styled.div`
    padding-top: 10px;
  `,
  MypageBodyWrap: styled.div`
    background: #efefef;
  `,
  MypageHeader: styled.div`
    width: 1000px;
    padding: 70px 0;
    margin: 0 auto;
  `,
  MypageBody: styled.div`
    width: 1000px;
    margin: 0 auto;
    padding: 70px 0;
  `,
};

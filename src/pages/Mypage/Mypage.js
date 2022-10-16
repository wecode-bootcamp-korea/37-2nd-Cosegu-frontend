import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PageBody from "./PageBody/PageBody";
import PageHeader from "./PageHeader/PageHeader";
import { API } from "config";

const Mypage = () => {
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    fetch("./data/mypageinfo.json")
      // fetch(`${API.MYPAGE}`, {
      //   headers: {
      //     authorization: localStorage.getItem("TOKEN"),
      //     "Content-Type": "application/json;charset=utf-8",
      //   },
      // })
      .then((res) => res.json())
      .then((res) => setUserInfo(res.result));
  }, []);

  return (
    <>
      <S.MypageHeaderWrap>
        <S.MypageHeader>
          <PageHeader userInfoArr={userInfo.info} />
        </S.MypageHeader>
      </S.MypageHeaderWrap>
      <S.MypageBodyWrap>
        <S.MypageBody>
          <PageBody
            userInfoArr={userInfo.info}
            userQueArr={userInfo.question}
          />
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

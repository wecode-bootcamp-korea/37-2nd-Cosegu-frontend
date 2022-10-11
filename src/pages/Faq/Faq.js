import React, { useEffect, useState } from "react";
import styled from "styled-components";
import FaqModal from "./FaqModal";
import ballon from "asset/images/talk-ballon.png";
import Search from "components/Search/Search";
import variables from "styles/variables";
import { API } from "config";
import { useSearchParams } from "react-router-dom";

const Faq = () => {
  const [faqData, setFaqData] = useState([]);
  const [isModal, setIsModal] = useState(false);
  const [questionSearch, setQuestionSearch] = useState("");
  const [userInfo, setUserInfo] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("search");

  const getToken = localStorage.getItem("TOKEN");

  useEffect(() => {
    const makeUrl = questionSearch === "" ? "" : `${search}`;
    fetch(`${API.FAQ}?keyword=${makeUrl}`, {
      headers: {
        Authorization: getToken,
      },
    })
      .then((res) => res.json())
      .then((data) => setFaqData(data));
  }, [search]);

  const handleModal = () => {
    setIsModal((prev) => !prev);
    fetch(`${API.MYPAGE}`, {
      headers: {
        Authorization: getToken,
      },
    })
      .then((res) => res.json())
      .then((data) => setUserInfo(data.result.info[0]));
  };

  const handleSearch = (e) => {
    const { value } = e.target;
    setQuestionSearch(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    searchParams.set("search", questionSearch);
    setSearchParams(searchParams);
  };
  return (
    <>
      {isModal && <FaqModal handleModal={handleModal} userInfo={userInfo} />}
      <S.FaqContainer>
        <S.FaqTitle>
          자주묻는 질문<S.SubTilte> FAQ</S.SubTilte>
        </S.FaqTitle>
        <form onSubmit={handleSubmit}>
          <Search
            onChange={handleSearch}
            onClick={handleSubmit}
            label="문의 검색"
            placeholder="찾으시는 문의의 키워드를 검색해보세요."
            value={questionSearch}
          />
        </form>
        <S.FaqCount>
          <S.Strong>총 {faqData.length}건</S.Strong>의 FAQ가 있어요
        </S.FaqCount>
        <S.SideAskWrap>
          <S.SideAsk>
            <S.SideAskBallon>
              <p>무엇을 도와드릴까요?</p>
              <S.AskBtn onClick={handleModal}>
                <span>1:1 문의하기</span>
              </S.AskBtn>
            </S.SideAskBallon>
            <S.SideAskImg />
          </S.SideAsk>
        </S.SideAskWrap>
        <S.FaqCotentContainer>
          {faqData.map((content) => {
            return (
              <S.FaqCotent key={content.id}>
                <S.FaqQM>Q.</S.FaqQM>
                <S.FaqWrap>
                  <S.FaqQuestion>{content.question}</S.FaqQuestion>
                  <S.FaqAnswer>{content.answer}</S.FaqAnswer>
                </S.FaqWrap>
              </S.FaqCotent>
            );
          })}
        </S.FaqCotentContainer>
      </S.FaqContainer>
    </>
  );
};

const S = {
  FaqContainer: styled.section`
    display: static;
    position: relative;
    width: 1000px;
    height: 100%;
    margin: 0 auto;
    border-bottom: 1px solid #ddd;
  `,

  FaqTitle: styled.p`
    margin-top: 70px;
    font-size: 65px;
    font-weight: 800;
    text-align: center;
  `,

  SubTilte: styled.span`
    font-size: 25px;
    font-weight: 300;
    vertical-align: top;
  `,

  FaqCount: styled.p`
    margin-top: 50px;
    margin-bottom: 10px;
    font-size: 13px;
  `,

  FaqCotentContainer: styled.ul`
    height: 100%;
  `,

  FaqCotent: styled.li`
    display: flex;
    border-top: 1px solid #ddd;
    padding: 30px 0;

    &:last-child {
      border-bottom: 1px solid #ddd;
    }
  `,

  FaqQM: styled.div`
    display: inline-block;
    min-width: 50px;
    height: 50px;
    margin-left: 10px;
    font-weight: 600;
  `,

  FaqWrap: styled.div`
    width: calc(100%-50px);
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `,

  FaqQuestion: styled.p`
    font-weight: 600;
    margin-bottom: 10px;
  `,

  FaqAnswer: styled.p`
    opacity: 0.5;
  `,

  SideAskWrap: styled.div`
    position: absolute;
    width: 200px;
    height: 100%;
    top: 100px;
    right: -300px;
  `,

  SideAsk: styled.div`
    position: sticky;
    top: 50px;
  `,

  SideAskImg: styled.div`
    margin: 0 auto;
    width: 200px;
    height: 50px;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url("https://velog.velcdn.com/images/rayong/post/ada0cad8-d06a-43bf-b1d5-41fd182867a8/image.png");
  `,

  SideAskBallon: styled.div`
    ${variables.flexSet()}
    flex-direction: column;
    position: sticky;
    width: 200px;
    height: 110px;
    background-image: url(${ballon});
    background-size: contain;
    background-repeat: no-repeat;

    p {
      opacity: 0.5;
    }
  `,

  AskBtn: styled.button`
    margin-top: 10px;
    padding: 5px 20px;
    font-size: 16px;
    font-weight: 800;
    border: none;
    border-radius: 5px;
    color: white;
    background-color: black;
  `,

  Strong: styled.span`
    font-weight: 800;
  `,
};

export default Faq;

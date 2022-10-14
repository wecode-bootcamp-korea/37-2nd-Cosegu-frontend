import React, { useState } from "react";
import styled from "styled-components";
import theme from "styles/theme";
import { INTERVIEW, SLIDEBTN } from "./InterviewData";

const Interview = ({ interview }) => {
  const [currentTab, setCurrentTab] = useState(0);

  const handleSlide = (slideNumber) => {
    setCurrentTab(slideNumber);
  };

  return (
    <I.InterviewContainer ref={interview}>
      <I.SlildeContainer>
        <I.SlideContent>
          <I.DoubleQuote>"</I.DoubleQuote>
          <I.SlideContentTitle>
            {INTERVIEW[currentTab].title.strong}
            {INTERVIEW[currentTab].title.content}
          </I.SlideContentTitle>
          <I.SlideContentInfoTeam>
            {INTERVIEW[currentTab].team}
          </I.SlideContentInfoTeam>
          <I.SlideContentInfoName>
            {INTERVIEW[currentTab].name}
          </I.SlideContentInfoName>
          <I.SlideBtnContainer>
            {SLIDEBTN.map((btn) => {
              return (
                <I.SlideBtn
                  key={btn.id}
                  img={btn.img}
                  onClick={() => handleSlide(btn.id)}
                  active={currentTab === btn.id ? "1" : "0.2"}
                />
              );
            })}
          </I.SlideBtnContainer>
        </I.SlideContent>
        <I.SlideImgContainer>
          <I.SlideImg src={INTERVIEW[currentTab].img} />
          <I.SlideImgBg />
        </I.SlideImgContainer>
      </I.SlildeContainer>

      {INTERVIEW[currentTab].qna.map((question, i) => {
        return (
          <I.ContentContainer key={i}>
            <I.InterviewQM>Q</I.InterviewQM>
            <I.InterviewColumn>
              <I.ColumnQuestion>{question.question}</I.ColumnQuestion>
              <I.ColumnAnswer>{question.answer}</I.ColumnAnswer>
            </I.InterviewColumn>
          </I.ContentContainer>
        );
      })}
    </I.InterviewContainer>
  );
};

const I = {
  InterviewContainer: styled.section`
    ${(props) => props.theme.variables.flexSet()}
    flex-direction: column;
    width: 100%;
  `,

  SlildeContainer: styled.div`
    ${(props) => props.theme.variables.flexSet()}
    margin: 0 auto;
    height: 800px;
    border-bottom: 1px solid #ddd;
  `,

  SlideContent: styled.div`
    width: 50%;
    height: 450px;
  `,

  DoubleQuote: styled.p`
    font-size: 100px;
    font-weight: 800;
  `,

  SlideContentTitle: styled.p`
    margin-bottom: 20px;
    font-size: 50px;
    font-weight: 400;
    word-break: keep-all;

    span {
      font-weight: 800;
    }
  `,

  SlideContentInfoTeam: styled.p`
    font-size: 16px;
    margin-bottom: 5px;
  `,

  SlideContentInfoName: styled.p`
    font-size: 20px;
    font-weight: 800;
  `,

  SlideImgContainer: styled.div`
    position: relative;
  `,

  SlideImg: styled.img`
    position: absolute;
    right: 50px;
    bottom: 50px;
    width: 360px;
    height: 460px;
  `,

  SlideImgBg: styled.div`
    width: 360px;
    height: 460px;
    border: 1px solid black;
  `,

  SlideBtnContainer: styled.div`
    ${(props) => props.theme.variables.flexSet("space-around", "center")}
    width: inherit;
  `,

  SlideBtn: styled.button`
    width: 50px;
    height: 50px;
    margin-top: 30px;
    border-radius: 50%;
    border: 4px solid ${theme.mainColor};
    background-position: center;
    background-size: cover;
    background-image: url(${(props) => props.img});
    opacity: ${(props) => props.active};
    cursor: pointer;
  `,

  ContentContainer: styled.div`
    display: flex;
    width: 1000px;
    padding: 40px 0;
  `,

  InterviewQM: styled.span`
    display: block;
    color: ${theme.mainColor};
    font-size: 25px;
    font-weight: 800;
  `,

  InterviewColumn: styled.div`
    display: inline-block;
    margin-left: 15px;
  `,

  ColumnQuestion: styled.p`
    font-size: 20px;
    font-weight: 800;
    margin-bottom: 15px;
  `,

  ColumnAnswer: styled.p`
    font-size: 20px;
    font-weight: 400;
    line-height: 1.4em;
    word-break: keep-all;
  `,
};

export default Interview;

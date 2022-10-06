import React, { useState } from "react";
import styled from "styled-components";
import variables from "styles/variables";
import { AiOutlineArrowDown } from "react-icons/ai";
import { AiOutlineArrowUp } from "react-icons/ai";

const PageBodyQna = () => {
  const [isMore, setIsMore] = useState(false);

  const readMore = () => {
    setIsMore((cur) => !cur);
  };

  return (
    <ul>
      <S.List onClick={readMore}>
        <S.ListTitle>
          <div>
            <S.Title>개발자 채용 소식 문의합니다.</S.Title>
            <S.Time>2022.10.14 문의 접수</S.Time>
          </div>
          <S.TitleRight>
            <S.Text>답변 대기</S.Text>
            {isMore ? (
              <AiOutlineArrowDown size="18px" />
            ) : (
              <AiOutlineArrowUp size="18px" />
            )}
          </S.TitleRight>
        </S.ListTitle>
        {isMore && (
          <S.ListBody>개발자 채용공고는 어디서 볼 수 있나요?</S.ListBody>
        )}
      </S.List>
      <S.List onClick={readMore}>
        <S.ListTitle>
          <div>
            <S.Title>개발자 채용 소식 문의합니다.</S.Title>
            <S.Time>2022.10.14 문의 접수</S.Time>
          </div>
          <S.TitleRight>
            <S.Text>답변 대기</S.Text>
            {isMore ? (
              <AiOutlineArrowDown size="18px" />
            ) : (
              <AiOutlineArrowUp size="18px" />
            )}
          </S.TitleRight>
        </S.ListTitle>
        {isMore && (
          <S.ListBody>개발자 채용공고는 어디서 볼 수 있나요?</S.ListBody>
        )}
      </S.List>
    </ul>
  );
};

export default PageBodyQna;

const S = {
  List: styled.li`
    padding: 40px 30px;
    background: white;
    border-bottom: 1px solid #efefef;
  `,
  ListTitle: styled.p`
    ${variables.flexSet("space-between", "center")}
    cursor: pointer;
  `,
  Title: styled.span`
    padding-right: 20px;
    font-weight: 700;
  `,
  Time: styled.span`
    font-size: 14px;
    color: gray;
  `,
  TitleRight: styled.div`
    ${variables.flexSet("space-between", "center")}
    color: lightgray;
  `,
  Text: styled.span`
    padding-right: 5px;
    padding-top: 3px;
    font-size: 15;
    color: gray;
  `,
  ListBody: styled.div`
    padding-top: 30px;
  `,
};

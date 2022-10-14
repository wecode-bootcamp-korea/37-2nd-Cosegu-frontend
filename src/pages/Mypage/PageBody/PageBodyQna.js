import React, { useState } from "react";
import styled from "styled-components";
import variables from "styles/variables";
import { AiOutlineArrowDown } from "react-icons/ai";
import { AiOutlineArrowUp } from "react-icons/ai";

const PageBodyQna = ({ userQueArr }) => {
  const [isMore, setIsMore] = useState(false);
  const readMore = () => {
    setIsMore((cur) => !cur);
  };

  return (
    <ul>
      {userQueArr !== undefined &&
        userQueArr.map((Que) => {
          return (
            <S.List onClick={readMore} key={Que.id}>
              <S.ListTitle>
                <div>
                  <S.Title>{Que.title}</S.Title>
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
                <S.ListBody>
                  <S.ListText>{Que.content}</S.ListText>
                  <S.ListFile>{Que.fileUrl}</S.ListFile>
                </S.ListBody>
              )}
            </S.List>
          );
        })}
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
  ListText: styled.p`
    color: #222;
    margin-bottom: 12px;
  `,
  ListFile: styled.a`
    font-size: 13px;
    color: gray;
    cursor: pointer;
  `,
};

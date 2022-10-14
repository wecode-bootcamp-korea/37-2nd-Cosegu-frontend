import React from "react";
import styled from "styled-components";
const Intro = ({ intro }) => {
  return (
    <I.WorkContainer ref={intro}>
      <I.WorkTitle>코세구 크루는?</I.WorkTitle>
      <I.WorkContent>
        개발자들의 취업 및 이직을 위한 개발자 채용 사이트입니다.
      </I.WorkContent>
      <I.WorkContent>
        프론트엔드, 백엔드, 풀스택등 원하는 직군에서 해당되는 모집 공고를
        제공합니다.
      </I.WorkContent>
      <I.WorkContent>
        코딩이 세상을 구할 수 있게 함께 키워나갈{" "}
        <span>가족같은 크루를 모집합니다.</span>
      </I.WorkContent>
    </I.WorkContainer>
  );
};

const I = {
  WorkContainer: styled.section`
    ${(props) => props.theme.variables.flexSet()}
    flex-direction: column;
    width: 100%;
    padding: 100px 0;
    background-color: white;
  `,

  WorkTitle: styled.h1`
    font-size: 54px;
    font-weight: 800;
    text-align: center;
    margin-bottom: 50px;
  `,

  WorkContent: styled.span`
    font-size: 18px;
    margin-bottom: 10px;
    font-weight: 500;
    span {
      font-weight: 800;
    }
  `,
};

export default Intro;

import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { API } from "config";

const DetailRightItem = ({
  recruit,
  handleLikeClick,
  handleRecruit,
  isBtnType,
}) => {
  const {
    division,
    title,
    region,
    employmentType,
    mainBusiness,
    qualification,
    preferentialTreatment,
  } = recruit[0];

  return (
    <>
      <S.CareerFlag>{division}</S.CareerFlag>
      <S.TopTitle>{title}</S.TopTitle>
      <S.FlagType>{employmentType} | 영업 종료시</S.FlagType>
      <S.DetailView>
        <S.Ol>
          <S.Li>구분 : {division}</S.Li>
          <S.Li>모집지역 {region}:</S.Li>
          <S.Li>고용형태 : {employmentType}&#40;수습기간 3개월&#41;</S.Li>
        </S.Ol>
        <S.Ol>
          <S.Li>
            <S.SmTitle>&#91;주요업무&#93;</S.SmTitle>
          </S.Li>
          <S.Li>{mainBusiness}</S.Li>
        </S.Ol>
        <S.Ol>
          <S.Li>
            <S.SmTitle>&#91;지원자격&#93;</S.SmTitle>
          </S.Li>
          <S.Li>{preferentialTreatment}</S.Li>
        </S.Ol>
        <S.Ol>
          <S.Li>
            <S.SmTitle>&#91;우대사항&#93;</S.SmTitle>
          </S.Li>
          <S.Li>{qualification}</S.Li>
        </S.Ol>
      </S.DetailView>
      <S.LikeBtn
        onClick={handleLikeClick}
        bgHeart={`${
          isBtnType === true
            ? "./images/Detail/heart_on.png"
            : "./images/Detail/heart_off.png"
        }`}
      >
        하트
      </S.LikeBtn>
      <S.BtnWrap>
        <S.Button type="button" onClick={handleRecruit}>
          지원하기
        </S.Button>
      </S.BtnWrap>
    </>
  );
};

const LikeBtn = styled.button`
  position: absolute;
  width: 25px;
  height: 25px;
  background: url(${(props) => props.bgHeart}) 50% 50% no-repeat;
  background-size: cover;
  background-color: transparent;
  border: 0;
  cursor: pointer;
  outline: none;
  text-indent: -9999px;
  overflow: hidden;
`;

const S = {
  CareerFlag: styled.div`
    display: inline-block;
    min-width: 36px;
    height: 25px;
    padding: 0 5px;
    font-size: 12px;
    line-height: 1.9em;
    font-weight: 500;
    text-align: center;
    color: #777;
    border: 1px solid #ebebeb;
  `,
  TopTitle: styled.div`
    margin-top: 20px;
    font-size: 24px;
    line-height: 1.3em;
    font-weight: 700;
  `,
  FlagType: styled.span`
    display: block;
    margin-top: 25px;
    font-size: 13px;
    font-weight: 400;
  `,
  DetailView: styled.div`
    margin-top: 65px;
    font-size: 14px;
    line-height: 1.4em;
  `,
  Ol: styled.ol`
    margin-top: 2em;
  `,
  Li: styled.li``,
  SmTitle: styled.h3`
    margin-bottom: 10px;
    font-weight: 700;
  `,
  LikeBtn: styled(LikeBtn)`
    top: 45px;
    right: 50px;
  `,
  BtnWrap: styled.div`
    margin-top: 50px;
    text-align: center;
  `,
  Button: styled.button`
    width: 200px;
    height: 50px;
    font-size: 18px;
    ${(props) => props.theme.style.button};
  `,
};

export default DetailRightItem;

import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function RecItem({ rec, isBtnType, handleLikeClick }) {
  return (
    <S.RecGroup key={rec.recruitId} isBtn={isBtnType}>
      <S.RecLink to={`/recruitmentdetail/${rec.recruitId}`}>
        <S.RecTop isBtn={isBtnType}>
          <S.CareerFlag isBtn={isBtnType}>{rec.division}</S.CareerFlag>
          <S.Title>{rec.title}</S.Title>
        </S.RecTop>
        <S.FlagType isBtn={isBtnType}>
          {rec.employmentType} | 영업 종료시
        </S.FlagType>
      </S.RecLink>
      <S.RecLike>
        <S.heart
          onClick={handleLikeClick}
          bgHeart={`${
            isBtnType === true
              ? "./images/rec/heart_on.png"
              : "./images/rec/heart_off.png"
          }`}
        >
          {rec.heart}
        </S.heart>
      </S.RecLike>
    </S.RecGroup>
  );
}

const S = {
  RecGroup: styled.li`
    width: ${(props) => props.isBtn === true && "33.333%"};
    height: ${(props) => props.isBtn === true && "300px"};
    padding: ${(props) => props.isBtn === true && "0px 5px 0px 5px"};
    position: relative;
    margin-top: 10px;
  `,
  RecLink: styled(Link)`
    display: block;
    height: 100%;
    padding: 35px 25px;
    border: 1px solid #ebebeb;
    background: #fff;
    text-decoration: none;
  `,
  RecTop: styled.div`
    display: ${(props) => (props.isBtn === true ? "block" : "flex")};
    align-items: center;
    margin-bottom: 20px;
  `,
  CareerFlag: styled.span`
    display: inline-block;
    min-width: 36px;
    height: 24px;
    margin-right: 8px;
    margin-bottom: ${(props) => props.isBtn === true && "20px"};
    padding: 0 7px;
    font-size: 12px;
    font-weight: 400;
    line-height: 1.8em;
    color: #777;
    text-align: center;
    border: 1px solid #ebebeb;
    vertical-align: middle;
  `,
  Title: styled.p`
    font-size: 18px;
    font-weight: 700;
    color: #000;
  `,
  FlagType: styled.div`
    margin-top: ${(props) => props.isBtn === true && "50px"};
    font-size: 13px;
    font-weight: 400;
    color: #777;
  `,
  RecLike: styled.div`
    position: absolute;
    top: 35px;
    right: 25px;
    z-index: 100;
  `,
  heart: styled.button`
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
  `,
};

export default RecItem;

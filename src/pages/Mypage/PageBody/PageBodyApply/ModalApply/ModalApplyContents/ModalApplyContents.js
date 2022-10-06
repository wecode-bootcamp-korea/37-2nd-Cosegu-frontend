import React from "react";
import UserAttatch from "./UserAttatch";
import UserCareer from "./UserCareer";
import UserInfo from "./UserInfo";
import UserLicense from "./UserLicense";
import UserText from "./UserText";
import styled from "styled-components";
import { ImCancelCircle } from "react-icons/im";
import UserApply from "./UserApply";

const ModalApplyContents = ({ applyView }) => {
  return (
    <S.Wrap>
      <ImCancelCircle onClick={applyView} size="20px" className="icon" />
      <S.ApplyTitle>위코드 프론트엔드 개발자 모집 (신입/경력)</S.ApplyTitle>
      <S.ApplyBody>
        <UserInfo />
      </S.ApplyBody>
      <S.ApplyBody>
        <UserCareer />
      </S.ApplyBody>
      <S.ApplyBody>
        <UserLicense />
      </S.ApplyBody>
      <S.ApplyBody>
        <UserAttatch />
      </S.ApplyBody>
      <S.ApplyBody>
        <UserText />
      </S.ApplyBody>
      <UserApply applyView={applyView} />
    </S.Wrap>
  );
};

export default ModalApplyContents;

const S = {
  Wrap: styled.div`
    position: relative;
    .icon {
      position: absolute;
      top: -75px;
      right: -40px;
      color: #555;
      cursor: pointer;
    }
  `,
  ApplyTitle: styled.h1`
    margin: 70px 0 60px;
    font-size: 28px;
    font-weight: 700;
    text-align: center;
    color: #222;
    overflow: hidden;
  `,
  ApplyBody: styled.div`
    padding: 50px;
    margin-bottom: 15px;
    background: white;
    border: 0.5px solid #ccc;
  `,
};

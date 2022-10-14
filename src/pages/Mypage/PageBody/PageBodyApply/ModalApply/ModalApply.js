import React from "react";
import styled from "styled-components";
import useLockBodyScroll from "hooks/useLockBodyScroll";
import ModalApplyContents from "./ModalApplyContents/ModalApplyContents";

const ModalApply = ({ applyView }) => {
  useLockBodyScroll();
  return (
    <>
      <S.ModalBack onClick={applyView} />
      <S.ModalBox>
        <ModalApplyContents applyView={applyView} />
      </S.ModalBox>
    </>
  );
};

export default ModalApply;

const S = {
  ModalBack: styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: black;
    opacity: 0.5;
    z-index: 2;
  `,
  ModalBox: styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 1100px;
    height: 700px;
    padding: 30px 60px 30px;
    background-color: #efefef;
    z-index: 5;
    overflow: auto;
  `,
};

import React from "react";
import styled from "styled-components";

const Popup = ({ handleCancel }) => {
  return (
    <S.PopWrap>
      <S.PopCont>
        선택하신 공고를 삭제할까요?
        <S.PopBtnBox>
          <S.BtnCancel onClick={handleCancel}>취소</S.BtnCancel>
          <S.BtnConfirm>삭제</S.BtnConfirm>
        </S.PopBtnBox>
      </S.PopCont>
    </S.PopWrap>
  );
};

export default Popup;

const Btns = styled.button`
  width: 150px;
  height: 50px;
  margin: 0 5px;
  font-size: 14px;
  border: 0;
  color: #fff;
  cursor: pointer;
`;

const S = {
  PopWrap: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 1;
  `,
  PopCont: styled.div`
    position: relative;
    width: 450px;
    padding: 50px 30px;
    text-align: center;
    background-color: #fff;
    z-index: 3;
  `,

  PopBtnBox: styled.div`
    margin-top: 30px;
  `,

  BtnCancel: styled(Btns)`
    background-color: #000;
  `,
  BtnConfirm: styled(Btns)`
    background-color: ${(props) => props.theme.style.mainColor};
  `,
};

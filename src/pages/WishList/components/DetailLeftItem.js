import React from "react";
import styled from "styled-components";

const DetailItem = ({ item, count, setCount, handleLikeClick }) => {
  return (
    <S.DetailListBox
      onClick={() => {
        setCount(item.id);
      }}
      bdColor={count === item.id ? "#BF1010" : "#e5e5e5"}
    >
      <S.DetilListTitle>{item.title}</S.DetilListTitle>
      <S.LikeBtn
        onClick={handleLikeClick}
        bgHeart="./images/detail/heart_on.png"
      >
        하트
      </S.LikeBtn>
    </S.DetailListBox>
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
  DetailListBox: styled.li`
    position: relative;
    width: 100%;
    height: 120px;
    padding: 29px 62px 27px 19px;
    background-color: #fff;
    border: 1px solid ${(props) => props.bdColor};
    margin-bottom: 20px;
    cursor: pointer;
  `,

  DetilListTitle: styled.h2`
    font-size: 15px;
    font-weight: 700;
    line-height: 1.3em;
    color: #000;
  `,
  LikeBtn: styled(LikeBtn)`
    top: 25px;
    right: 19px;
  `,
};

export default DetailItem;

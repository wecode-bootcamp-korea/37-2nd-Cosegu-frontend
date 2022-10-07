import React, { useState, useEffect } from "react";
import styled from "styled-components";
import DetailLeftItem from "./components/DetailLeftItem";
import DetailRightItem from "./DetailRightItem";
import Popup from "./components/Popup";

const WishList = () => {
  const [detail, setDetail] = useState([]);
  const [count, setCount] = useState(1);
  const [detailForRight, setDetailForRight] = useState([]);
  const [popup, setPopup] = useState(false);

  const handleLikeClick = () => {
    setPopup((prev) => !prev);
  };

  const handleCancel = () => {
    setPopup((prev) => !prev);
  };

  useEffect(() => {
    fetch("/data/detail.json")
      .then((res) => res.json())
      .then((data) => {
        setDetail(data);
      });
  }, []);

  useEffect(() => {
    detail.map((detail) => {
      if (detail.id === count) {
        const detailForCopy = { ...detail };
        setDetailForRight(detailForCopy);
      }
    });
  }, [detail, count]);

  if (Object.keys(detail).length === 0) return <>loading...</>;

  return (
    <>
      <S.SubTitle>
        <S.Title>찜한공고</S.Title>
      </S.SubTitle>
      <S.Wrapper>
        <S.Contain>
          <S.LeftMenu>
            <S.LeftMenuWrap>
              <S.PageBack>
                <S.BackBtn href="#">뒤로가기</S.BackBtn>
              </S.PageBack>
              <S.DetailListWrap>
                {detail.map((item) => {
                  return (
                    <DetailLeftItem
                      key={item.id}
                      item={item}
                      count={count}
                      setCount={setCount}
                      handleLikeClick={handleLikeClick}
                      handleCancel={handleCancel}
                    />
                  );
                })}
              </S.DetailListWrap>
            </S.LeftMenuWrap>
          </S.LeftMenu>
          <S.DetailWrap>
            <S.DetailCont>
              <DetailRightItem
                detailForRight={detailForRight}
                handleLikeClick={handleLikeClick}
              />
            </S.DetailCont>
          </S.DetailWrap>
        </S.Contain>
      </S.Wrapper>
      {popup && <Popup handleCancel={handleCancel} />}
    </>
  );
};

const S = {
  SubTitle: styled.div`
    width: 1000px;
    margin: 0 auto;
    padding: 95px 0 47px;
    text-align: center;
  `,
  Title: styled.div`
    font-size: 46px;
    font-weight: 800;
  `,
  Wrapper: styled.div`
    background-color: #f5f5f5;
  `,
  Contain: styled.div`
    display: flex;
    ${(props) => props.theme.style.contain};
    padding: 50px 0;
  `,
  LeftMenu: styled.div`
    width: 277px;
    padding-right: 39px;
  `,
  LeftMenuWrap: styled.div`
    position: sticky;
    top: 20px;
  `,
  DetailWrap: styled.div`
    width: calc(100% - 277px);
    padding-left: 40px;
    border-left: 1px solid #e5e5e5;
  `,
  DetailCont: styled.div`
    position: relative;
    padding: 45px 50px;
    background-color: #fff;
  `,
  PageBack: styled.div`
    margin-bottom: 20px;
    padding-bottom: 15px;
    border-bottom: 1px solid #e5e5e5;
  `,
  BackBtn: styled.a`
    display: block;
    font-size: 16px;
    font-weight: 700;
    color: #000;
    text-decoration: none;

    &:before {
      content: "";
      display: inline-block;
      width: 20px;
      height: 15px;
      margin: -0.2em 5px 0 0;
      background: url("./images/detail/back_arrow.png") 50% 50% no-repeat;
      background-size: cover;
      vertical-align: middle;
    }
  `,
  DetailListWrap: styled.ul``,
};

export default WishList;

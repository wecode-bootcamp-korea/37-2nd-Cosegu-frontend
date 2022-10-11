import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Search from "components/Search/Search";
import CategoryTab from "./CategoryTab";
import DetailLeftItem from "./components/DetailLeftItem";
import DetailRightItem from "./components/DetailRightItem";

const RecruitmentDetail = () => {
  const [detail, setDetail] = useState([]);
  const [count, setCount] = useState(1);
  const [detailForRight, setDetailForRight] = useState([]);

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
      <Search />
      <CategoryTab />
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
                    />
                  );
                })}
              </S.DetailListWrap>
            </S.LeftMenuWrap>
          </S.LeftMenu>
          <S.DetailWrap>
            <S.DetailCont>
              <DetailRightItem detailForRight={detailForRight} />
            </S.DetailCont>
          </S.DetailWrap>
        </S.Contain>
      </S.Wrapper>
    </>
  );
};

const S = {
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

export default RecruitmentDetail;

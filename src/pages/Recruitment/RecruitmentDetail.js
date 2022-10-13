import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Search from "components/Search/Search";
import CategoryTab from "./CategoryTab";
import DetailLeftItem from "./components/DetailLeftItem";
import DetailRightItem from "./components/DetailRightItem";
import { API } from "config";

const RecruitmentDetail = () => {
  // const [detail, setDetail] = useState([]);

  // const [detailForRight, setDetailForRight] = useState([]);

  // useEffect(() => {
  //   fetch("/data/detail.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setDetail(data);
  //     });
  // }, []);

  // useEffect(() => {
  //   detail.forEach((detail) => {
  //     if (detail.id === count) {
  //       const detailForCopy = { ...detail };
  //       setDetailForRight(detailForCopy);
  //     }
  //   });
  // }, [detail, count]);
  const [isBtnType, setIsBtnType] = useState({
    isListType: false,
    isTileType: false,
  });
  const [recruit, setRecruit] = useState([{}]);

  const { id } = useParams();

  const navigate = useNavigate();

  const handleRecruit = () => {
    navigate("/recform", { state: { recruitId: id } });
  };

  useEffect(() => {
    fetch(`${API.RECRUITMENT}/${id}`, {
      method: "GET",
      headers: {
        authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjY1NTQ4MTQxLCJleHAiOjE2NjYzMjU3NDF9.9IJlPFXBHyLhvPlgi2tqMiYT-b9UXKm2Ep3GZwb-T8c",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setRecruit(data.recruitDetail);
      });
  }, []);

  const handleLikeClick = (e) => {
    e.preventDefault();

    fetch(`${API.LIKES}`, {
      method: "POST",
      headers: {
        authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjY1NTQ4MTQxLCJleHAiOjE2NjYzMjU3NDF9.9IJlPFXBHyLhvPlgi2tqMiYT-b9UXKm2Ep3GZwb-T8c",
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        recruitId: id,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        if (data.message === "INVALID_LIKES") {
          // localStorage.setItem(data.userName, data.accessToken);
          // navigate("/main-Rubi");
          // alert("로그인 성공");
          setIsBtnType(false);
          alert("실패");
        }
        //  else if (data.message === "INVALID_LIKES") {
        //   alert("로그인 실패");
        // }
      });
  };

  return (
    <>
      <Search />
      <CategoryTab />
      <S.Wrapper>
        <S.Contain>
          <S.LeftMenu>
            <S.LeftMenuWrap>
              {/* <S.PageBack>
                <S.BackBtn href="#">뒤로가기</S.BackBtn>
              </S.PageBack> */}
              <S.DetailListWrap>
                <DetailLeftItem
                  recruit={recruit}
                  id={id}
                  handleLikeClick={handleLikeClick}
                  isBtnType={isBtnType}
                />
              </S.DetailListWrap>
            </S.LeftMenuWrap>
          </S.LeftMenu>
          <S.DetailWrap>
            <S.DetailCont>
              <DetailRightItem
                recruit={recruit}
                handleLikeClick={handleLikeClick}
                handleRecruit={handleRecruit}
                isBtnType={isBtnType}
              />
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

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import RecItem from "./components/RecItem";
import { API } from "config";

const Recruit = ({ recruit }) => {
  const [isBtnType, setIsBtnType] = useState({
    isListType: false,
    isTileType: false,
  });

  const { id } = useParams();

  console.log("gg", id);

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
    <S.RecruitCont>
      <S.ListType>
        <S.TypeListBtn
          onClick={() => setIsBtnType((prev) => !prev)}
          ListBgImg={
            isBtnType === true
              ? "./images/rec/listType_ico_off.png"
              : "./images/rec/listType_ico_on.png"
          }
        >
          타입1
        </S.TypeListBtn>
        <S.TypeTilBtn
          onClick={() => setIsBtnType((prev) => !prev)}
          TileBgImg={
            isBtnType === true
              ? "./images/rec/tileType_ico_on.png"
              : "./images/rec/tileType_ico_off.png"
          }
        >
          타입2
        </S.TypeTilBtn>
      </S.ListType>
      <S.RecListCont>
        <S.RecList isBtn={isBtnType}>
          {recruit.map((rec) => {
            return (
              <RecItem
                key={rec.id}
                rec={rec}
                isBtnType={isBtnType}
                handleLikeClick={handleLikeClick}
              />
            );
          })}
        </S.RecList>
      </S.RecListCont>
    </S.RecruitCont>
  );
};

const BtnType = styled.button`
  width: 25px;
  height: 25px;
  margin-left: 8px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  background-color: transparent;
  border: 0;
  cursor: pointer;
  text-indent: -9999px;
  overflow: hidden;
`;

const S = {
  RecruitCont: styled.div``,
  ListType: styled.div`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 15px;
  `,
  TypeListBtn: styled(BtnType)`
    background-image: url(${(props) => props.ListBgImg});
  `,
  TypeTilBtn: styled(BtnType)`
    background-image: url(${(props) => props.TileBgImg});
  `,
  RecListCont: styled.div``,
  RecList: styled.ul`
    display: ${(props) => props.isBtn === true && "flex"};
    flex-wrap: wrap;
    margin: ${(props) => props.isBtn === true && "-10px -5px 0 -5px"};
  `,
};

export default Recruit;

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import RecItem from "./components/RecItem";

const Recruit = () => {
  const [recruit, setRecruit] = useState([]);
  const [isBtnType, setIsBtnType] = useState({
    isListType: false,
    isTileType: false,
  });

  // useEffect(() => {
  //   fetch("http://127.0.0.1:3000/recruit?categoryId=6&limit=20&offset=0")
  //     .then((res) => res.json())
  //     .then((data) => setRecruit(data));
  // }, []);

  // useEffect(() => {
  //   // fetch('/data/all2.json')
  //   // fetch(`https://reqres.in/api/users/${userId}`)
  //   // fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
  //   fetch(`http://10.58.52.67:3000/products/showproduct/${userId}`, {
  //     method: "GET",
  //     headers: {
  //       authorization:
  //         "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo2LCJpYXQiOjE2NjQwMDk3ODR9.nvQGE9HLe8n-JCgqqRk3O-2dGEujzQhWIgm0WyCKN60",
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setPrdData(data.message);
  //     });
  // }, []);

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
            return <RecItem key={rec.id} rec={rec} isBtnType={isBtnType} />;
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

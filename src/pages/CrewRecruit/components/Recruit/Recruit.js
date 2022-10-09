import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import theme from "styles/theme";
import JobOpening from "./JobOpening";
import { API } from "config";
const Recruit = ({ recruit }) => {
  const [recruitData, setRecruitData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryId = searchParams.getAll("categoryid");

  const makeURL = categoryId?.map((url) => `categoryid=${url}`);
  const makeParams =
    categoryId.length === 0
      ? "?limit=20&offset=0"
      : `?${makeURL.join("&")}&limit=20&offset=0`;

  useEffect(() => {
    fetch(`${API.CREWRECRUIT}${makeParams}`)
      .then((res) => res.json())
      .then((data) => setRecruitData(data));
  }, [categoryId]);

  const handleParams = (category) => {
    if (categoryId.includes(category.toString())) {
      const filterParams = categoryId.filter(
        (el) => el !== category.toString()
      );
      searchParams.delete("categoryid");
      setSearchParams(searchParams);
      filterParams.map((params) => searchParams.append("categoryid", params));
      setSearchParams(searchParams);
    } else {
      searchParams.append("categoryid", category);
    }
    setSearchParams(searchParams);
  };
  return (
    <S.Container ref={recruit}>
      <S.RecruitTitle>진행중인 채용</S.RecruitTitle>
      <S.RecruitTab>
        <S.RecruitTotal>
          <span>{recruitData !== undefined && recruitData.length}개</span>의
          채용이 있습니다.
        </S.RecruitTotal>
        <S.RecruitCategories>
          {CATEGORIES.map((category) => {
            return (
              <S.CategoriesBtn
                key={category.id}
                onClick={() => handleParams(category.id)}
                categoryId={categoryId}
                btnId={category.id}
                // active={{ background: theme.mainColor, color: "white" }}
              >
                {category.category}
              </S.CategoriesBtn>
            );
          })}
        </S.RecruitCategories>
      </S.RecruitTab>
      {recruitData !== undefined &&
        recruitData.map((recruit) => {
          return <JobOpening key={recruit.reruitId} recruit={recruit} />;
        })}
    </S.Container>
  );
};

const S = {
  Container: styled.section`
    ${(props) => props.theme.variables.flexSet()}
    flex-direction: column;
    width: 100%;
    padding: 40px 0;
    background-color: #f5f5f5;
  `,

  RecruitTitle: styled.p`
    font-size: 50px;
    font-weight: 800;
    padding: 20px 0;
  `,

  RecruitTab: styled.div`
    ${(props) => props.theme.variables.flexSet("space-between", "flex-end")}
    width: 1200px;
    margin-bottom: 20px;
  `,

  RecruitTotal: styled.p`
    span {
      font-weight: 800;
    }
  `,

  RecruitCategories: styled.div``,

  CategoriesBtn: styled.button`
    width: 100px;
    height: 40px;
    padding: 10px;
    margin-left: 15px;
    font-weight: 600;
    border: none;
    color: ${(props) =>
      props.categoryId.includes(props.btnId.toString()) ? "white" : "black"};
    background-color: ${(props) =>
      props.categoryId.includes(props.btnId.toString())
        ? theme.mainColor
        : "white"};
    cursor: pointer;
  `,
};

export default Recruit;

const CATEGORIES = [
  { id: 6, category: "인사" },
  { id: 7, category: "경영지원" },
  { id: 8, category: "홍보/마케팅" },
];

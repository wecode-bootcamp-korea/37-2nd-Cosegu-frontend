import React, { useEffect, useState } from "react";
import styled from "styled-components";
import theme from "styles/theme";
import CrewRecruits from "./CrewRecruits";
const Recruit = () => {
  const [recruitData, setRecruitData] = useState([{}]);

  useEffect(() => {
    fetch("data/recruit.json")
      .then((res) => res.json())
      .then((data) => setRecruitData(data));
  }, []);

  return (
    <Container>
      <RecruitTitle>진행중인 채용</RecruitTitle>
      <RecruitTab>
        <RecruitTotal>
          <span>40개</span>의 채용이 있습니다.
        </RecruitTotal>
        <RecruitCategories>
          {CATEGORIES.map((categorie) => {
            return (
              <CategoriesBtn key={categorie.id}>
                {categorie.categorie}
              </CategoriesBtn>
            );
          })}
        </RecruitCategories>
      </RecruitTab>
      {recruitData.map((recruit) => {
        return <CrewRecruits key={recruit.id} recruit={recruit} />;
      })}
    </Container>
  );
};
const Container = styled.section`
  ${(props) => props.theme.variables.flexSet()}
  flex-direction: column;
  width: 100%;
  padding: 40px 0;
`;

const RecruitTitle = styled.p`
  font-size: 50px;
  font-weight: 800;
  padding: 20px 0;
`;
const RecruitTab = styled.div`
  ${(props) => props.theme.variables.flexSet("space-between", "flex-end")}
  width: 1200px;
  margin-bottom: 20px;
`;
const RecruitTotal = styled.p`
  span {
    font-weight: 800;
  }
`;
const RecruitCategories = styled.div``;
const CategoriesBtn = styled.button`
  width: 100px;
  height: 40px;
  padding: 10px;
  margin-left: 15px;
  font-weight: 600;
  background-color: ${theme.mainColor};
`;
export default Recruit;

const CATEGORIES = [
  { id: 1, categorie: "프론트엔드" },
  { id: 2, categorie: "백엔드" },
  { id: 3, categorie: "풀스택" },
  { id: 4, categorie: "웹 디자이너" },
];

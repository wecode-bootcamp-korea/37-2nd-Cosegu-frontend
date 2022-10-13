import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Search from "components/Search/Search";
import CategoryTab from "./CategoryTab";
import LeftFilter from "./LeftFilter";
import Recruit from "./Recruit";
import { API } from "../../config";

const Recruitment = () => {
  const [recruit, setRecruit] = useState([]);
  const [categoryId, setCategoryId] = useState(1);
  const [skillList, setSkillList] = useState([]);

  console.log(categoryId);

  useEffect(() => {
    fetch(`${API.RECRUITMENT}?categoryId=${categoryId}&limit=20&offset=0`, {
      method: "GET",
      headers: {
        authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjY1NTQ4MTQxLCJleHAiOjE2NjYzMjU3NDF9.9IJlPFXBHyLhvPlgi2tqMiYT-b9UXKm2Ep3GZwb-T8c",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setRecruit(data.recruits);
        //console.log(data.recruits[0].tagName);
      });
  }, [categoryId, skillList]);

  return (
    <>
      <Search />
      <CategoryTab setCategoryId={setCategoryId} />
      <S.Content>
        <S.Wrap>
          <LeftFilter recruit={recruit} setSkillList={setSkillList} />
          <S.RecruitList>
            <Recruit recruit={recruit} />
          </S.RecruitList>
        </S.Wrap>
      </S.Content>
    </>
  );
};

const S = {
  Content: styled.div`
    background-color: #f5f5f5;
  `,
  Wrap: styled.div`
    display: flex;
    ${(props) => props.theme.style.contain};
    padding: 50px 0;
  `,
  RecruitList: styled.div`
    width: calc(100% - 277px);
    padding-left: 40px;
    border-left: 1px solid #e5e5e5;
  `,
};

export default Recruitment;

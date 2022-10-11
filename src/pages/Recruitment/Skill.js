import React, { useState, useEffect } from "react";

const Skill = ({ S }) => {
  const [skill, setSkill] = useState([]);

  useEffect(() => {
    fetch("/data/rec/skill.json")
      .then((res) => res.json())
      .then((data) => setSkill(data));
  }, []);

  return (
    <>
      {skill.map((item) => {
        return (
          <S.CheckChoice key={item.id}>
            <S.SkillInput type="checkbox" id={item.id} />
            <S.SkillLabel htmlFor={item.id}>{item.skill}</S.SkillLabel>
          </S.CheckChoice>
        );
      })}
    </>
  );
};

export default Skill;

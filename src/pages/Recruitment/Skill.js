import React, { useState, useEffect } from "react";

const SKILL_LIST = [
  { id: 1, title: "React" },
  { id: 2, title: "Vue" },
  { id: 3, title: "Typescript" },
  { id: 4, title: "Next.js" },
  { id: 5, title: "python" },
];

const Skill = ({ S, setSkillList }) => {
  const onClick = (id) => {
    setSkillList(id);
  };

  return (
    <>
      {SKILL_LIST.map((item) => {
        return (
          <S.CheckChoice key={item.id}>
            <S.SkillInput type="checkbox" id={item.id} value={item.title} />
            <S.SkillLabel htmlFor={item.id} onClick={() => onClick(item.id)}>
              {item.title}
            </S.SkillLabel>
          </S.CheckChoice>
        );
      })}
    </>
  );
};

export default Skill;

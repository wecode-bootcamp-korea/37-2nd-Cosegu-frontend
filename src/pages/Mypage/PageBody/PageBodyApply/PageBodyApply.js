import React, { useState } from "react";
import ModalApply from "./ModalApply/ModalApply";
import styled from "styled-components";
import variables from "styles/variables";
import { BiEditAlt } from "react-icons/bi";
import { BiTrash } from "react-icons/bi";
import { AiOutlineFileSearch } from "react-icons/ai";

const PageBodyApply = () => {
  const [isModal, setIsModal] = useState(false);

  const applyView = (e) => {
    setIsModal((cur) => !cur);
  };

  return (
    <ul>
      <S.ListItem>
        <S.ListItemLeft>
          <S.LeftTag>임시저장</S.LeftTag>
          <S.LeftTitle>B마트 지점운영 Captain 모집(신입/경력)</S.LeftTitle>
          <S.LeftTime>작성일 2022.10.06</S.LeftTime>
        </S.ListItemLeft>
        <S.ListItemRight>
          <AiOutlineFileSearch
            onClick={applyView}
            size="24px"
            className="icon"
          />
          <BiEditAlt size="24px" className="icon" />
          <BiTrash size="24px" className="icon" />
        </S.ListItemRight>
        {isModal && <ModalApply applyView={applyView} />}
      </S.ListItem>
      <S.ListItem>
        <S.ListItemLeft>
          <S.LeftTag>임시저장</S.LeftTag>
          <S.LeftTitle>B마트 지점운영 Captain 모집(신입/경력)</S.LeftTitle>
          <S.LeftTime>작성일 2022.10.06</S.LeftTime>
        </S.ListItemLeft>
        <S.ListItemRight>
          <AiOutlineFileSearch
            onClick={applyView}
            size="24px"
            className="icon"
          />
          <BiEditAlt size="24px" className="icon" />
          <BiTrash size="24px" className="icon" />
        </S.ListItemRight>
        {isModal && <ModalApply applyView={applyView} />}
      </S.ListItem>
    </ul>
  );
};

export default PageBodyApply;

const S = {
  ListItem: styled.li`
    ${variables.flexSet("space-between", "center")}
    padding: 40px 30px;
    margin-bottom: 20px;
    background: white;
  `,
  ListItemLeft: styled.div``,
  LeftTag: styled.p`
    margin-bottom: 15px;
    color: gray;
    font-size: 14px;
  `,
  LeftTitle: styled.p`
    margin-bottom: 15px;
    font-size: 18px;
    font-weight: bold;
  `,
  LeftTime: styled.p`
    color: gray;
    font-size: 13px;
  `,
  ListItemRight: styled.div`
    ${variables.flexSet("space-between", "center")}
    width: 120px;
    color: lightgray;
    .icon {
      cursor: pointer;
    }
  `,
};

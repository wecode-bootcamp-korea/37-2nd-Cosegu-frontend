import React from "react";
import styled from "styled-components";
import Skill from "./Skill";

const LeftFilter = ({ setSkillList }) => {
  return (
    <S.FilterCont>
      <S.FilterWrap>
        <S.Title>스킬</S.Title>
        <S.FilterCoice>
          <S.CheckboxForm>
            <Skill S={S} setSkillList={setSkillList} />
          </S.CheckboxForm>
        </S.FilterCoice>
        <S.Title>경력</S.Title>
        <S.FilterCoice>
          <S.CheckboxForm>
            <S.CheckChoice>
              <S.CheckInput type="checkbox" id="careerCode0" />
              <S.CheckLabel htmlFor="careerCode0">신입</S.CheckLabel>
            </S.CheckChoice>
            <S.CheckChoice>
              <S.CheckInput type="checkbox" id="careerCode1" />
              <S.CheckLabel htmlFor="careerCode1">경력</S.CheckLabel>
            </S.CheckChoice>
          </S.CheckboxForm>
        </S.FilterCoice>
        <S.Title>고용형태</S.Title>
        <S.FilterCoice>
          <S.CheckboxForm>
            <S.CheckChoice>
              <S.CheckInput type="checkbox" id="employmentTypeCode0" />
              <S.CheckLabel htmlFor="employmentTypeCode0">정규직</S.CheckLabel>
            </S.CheckChoice>
            <S.CheckChoice>
              <S.CheckInput type="checkbox" id="employmentTypeCode1" />
              <S.CheckLabel htmlFor="employmentTypeCode1">기간제</S.CheckLabel>
            </S.CheckChoice>
          </S.CheckboxForm>
        </S.FilterCoice>
      </S.FilterWrap>
    </S.FilterCont>
  );
};

const S = {
  FilterCont: styled.div`
    width: 277px;
    padding-right: 39px;
  `,
  FilterWrap: styled.div`
    position: sticky;
    top: 25px;
    height: 350px;
  `,
  Title: styled.h2`
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 15px;
  `,
  FilterCoice: styled.div`
    margin-bottom: 25px;
    padding-bottom: 25px;
    border-bottom: 1px solid #e5e5e5;
  `,
  CheckboxForm: styled.ul``,
  CheckChoice: styled.li`
    display: inline-block;
    margin: 0 3px 3px 0;
  `,
  SkillInput: styled.input`
    ${(props) => props.theme.style.hide};
    appearance: none;

    &:checked + label {
      background-color: ${(props) => props.theme.style.mainColor};
      border-color: ${(props) => props.theme.style.mainColor};
      color: #fff;
    }
  `,
  SkillLabel: styled.label`
    display: block;
    min-width: 45px;
    height: 30px;
    padding: 5px 10px;
    font-size: 13px;
    font-weight: 400;
    line-height: 1.4em;
    background-color: #fff;
    border: 1px solid #ebebeb;
    cursor: pointer;
  `,
  CheckInput: styled.input`
    width: 20px;
    height: 20px;
    margin: -0.2em 5px 0 0;
    vertical-align: middle;
  `,
  CheckLabel: styled.label``,
};

export default LeftFilter;

import React, { useState, useRef } from "react";
import styled from "styled-components";

const SELECT_LIST = ["근무형태", "정규직", "계약직"];

const RecForm = () => {
  const [inputs, setInputs] = useState({
    name: "",
    address: "",
    company: "",
    department: "",
    rank: "",
    workType: "",
    dateStart: "",
    dateEnd: "",
    work: "",
    certificate: "",
    file: "",
    content: "",
  });

  const {
    name,
    address,
    company,
    department,
    rank,
    workType,
    dateStart,
    dateEnd,
    work,
    certificate,
    file,
    content,
  } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  return (
    <>
      <S.SubmitTitleCont>
        <S.SmTitle>지원서 작성</S.SmTitle>
        <S.Title>프론트엔드 개발자 모집</S.Title>
        <S.SubTitle>정규직 | 영업 종료시</S.SubTitle>
      </S.SubmitTitleCont>
      <S.Wrapper>
        <S.Contain>
          <form>
            <S.SubmitWrap>
              <S.TitleTop>
                강루비 님 <S.Require>필수</S.Require>
              </S.TitleTop>
              <S.group>
                <S.UserInfo>
                  <S.UserInfoList>
                    <S.InfoTitle>이메일</S.InfoTitle>
                    <S.InfoTxt>rkdfnql22@gmail.com</S.InfoTxt>
                  </S.UserInfoList>
                  <S.UserInfoList>
                    <S.InfoTitle>생년월일</S.InfoTitle>
                    <S.InfoTxt>1994.06.24 (여)</S.InfoTxt>
                  </S.UserInfoList>
                  <S.UserInfoList>
                    <S.InfoTitle>휴대폰번호</S.InfoTitle>
                    <S.InfoTxt>010-3633-0633</S.InfoTxt>
                  </S.UserInfoList>
                </S.UserInfo>
              </S.group>
              <S.group>
                <S.Row>
                  <S.NameInput
                    type="text"
                    name="name"
                    value={name}
                    onChange={onChange}
                    placeholder="영문이름 (예: Baedal Dokgo)"
                  />
                </S.Row>
                <S.Row>
                  <Input
                    type="text"
                    name="address"
                    value={address}
                    onChange={onChange}
                    placeholder="주소"
                  />
                </S.Row>
              </S.group>
            </S.SubmitWrap>
            <S.SubmitWrap>
              <S.TitleTop>
                경력 <S.Require>필수</S.Require>
              </S.TitleTop>
              <S.group>
                <S.Row>
                  <S.Col3>
                    <Input
                      type="text"
                      name="company"
                      value={company}
                      onChange={onChange}
                      placeholder="회사명"
                    />
                  </S.Col3>
                  <S.Col3>
                    <Input
                      type="text"
                      name="department"
                      value={department}
                      onChange={onChange}
                      placeholder="근무부서"
                    />
                  </S.Col3>
                  <S.Col3>
                    <Input
                      type="text"
                      name="rank"
                      value={rank}
                      onChange={onChange}
                      placeholder="직급/직책"
                    />
                  </S.Col3>
                </S.Row>
                <S.Row>
                  <S.Col3>
                    <S.CareerSelect
                      name="workType"
                      value={workType}
                      onChange={onChange}
                    >
                      {SELECT_LIST.map((item) => {
                        return (
                          <option key={item} value={item}>
                            {item}
                          </option>
                        );
                      })}
                    </S.CareerSelect>
                  </S.Col3>
                  <S.CareerTxt>근무시작일</S.CareerTxt>
                  <S.Col3>
                    <Input
                      type="date"
                      name="dateStart"
                      value={dateStart}
                      onChange={onChange}
                    />
                  </S.Col3>
                  <S.CareerTxt>근무종료일</S.CareerTxt>
                  <S.Col3>
                    <Input
                      type="date"
                      name="dateEnd"
                      value={dateEnd}
                      onChange={onChange}
                    />
                  </S.Col3>
                </S.Row>
                <S.Row>
                  <Input
                    type="text"
                    name="work"
                    value={work}
                    onChange={onChange}
                    placeholder="담당업무"
                  />
                </S.Row>
              </S.group>
            </S.SubmitWrap>
            <S.SubmitWrap>
              <S.TitleTop>
                자격증 <S.Require>필수</S.Require>
              </S.TitleTop>
              <S.group>
                <S.Row>
                  <Input
                    type="text"
                    name="certificate"
                    value={certificate}
                    onChange={onChange}
                    placeholder="자격증명"
                  />
                </S.Row>
              </S.group>
            </S.SubmitWrap>
            <S.SubmitWrap>
              <S.TitleTop>
                포트폴리오 첨부자료 <S.Require>필수</S.Require>
              </S.TitleTop>
              <S.group>
                <S.Row>
                  <S.FileInput
                    type="file"
                    name="file"
                    value={file}
                    onChange={onChange}
                  />
                </S.Row>
              </S.group>
            </S.SubmitWrap>
            <S.SubmitWrap>
              <S.TitleTop>
                자기소개서 <S.Require>필수</S.Require>
              </S.TitleTop>
              <S.group>
                <S.Row>
                  <S.Textarea
                    name="content"
                    value={content}
                    onChange={onChange}
                    placeholder="지원동기/이직사유, 장/단점 등을 자유롭게 기술하여 주십시오"
                  />
                </S.Row>
              </S.group>
            </S.SubmitWrap>
            <S.BtnBox>
              <S.SubmitBtn>지원서 제출</S.SubmitBtn>
            </S.BtnBox>
          </form>
        </S.Contain>
      </S.Wrapper>
    </>
  );
};

const Input = styled.input`
  width: 100%;
  height: 44px;
  padding: 13px 15px;
  font-size: 13px;
  border: 1px solid #ebebeb;
  background-color: #fff;
  vertical-align: top;
  outline: none;
  line-height: normal;

  &::placeholder {
    color: #ccc;
  }
`;

const Col = styled.div`
  margin-right: 10px;
`;

const S = {
  SubmitTitleCont: styled.div`
    width: 1000px;
    margin: 77px auto 40px;
    text-align: center;
  `,
  SmTitle: styled.span`
    display: block;
    font-size: 18px;
    margin-bottom: 20px;
    line-height: 1.3em;
  `,
  Title: styled.div`
    margin-bottom: 7px;
    font-size: 32px;
    font-weight: 500;
    line-height: 1.3em;
  `,
  SubTitle: styled.div`
    font-size: 14px;
    line-height: 1.3em;
    color: #777;
  `,
  Submitwrap: styled.div``,
  Wrapper: styled.div`
    background-color: #f5f5f5;
  `,
  Contain: styled.div`
    ${(props) => props.theme.style.contain};
    padding: 50px 0;
  `,
  SubmitWrap: styled.div`
    margin-top: 12px;
    padding: 40px 50px;
    border: 1px solid #ebebeb;
    background-color: #fff;
  `,
  group: styled.div`
    margin-top: 30px;
  `,
  TitleTop: styled.h3`
    margin-bottom: 15px;
    font-size: 18px;
    font-weight: 700;
  `,
  Require: styled.span`
    display: inline-block;
    position: relative;
    margin-left: 5px;
    font-size: 14px;
    font-weight: 700;
    color: ${(props) => props.theme.style.mainColor};

    &:before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background-color: ${(props) => props.theme.style.mainColor};
      opacity: 0.5;
    }
  `,
  UserInfo: styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
  `,
  UserInfoList: styled.li`
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
    height: 66px;
    border-left: 1px solid #ebebeb;

    &:first-child {
      border-left: 0;
    }
  `,
  InfoTitle: styled.span`
    display: block;
    margin-bottom: 7px;
    font-size: 14px;
    line-height: 1.3em;
    color: #777;
  `,
  InfoTxt: styled.strong`
    font-size: 16px;
    line-height: 1.3em;
    font-weight: 700;
  `,
  Row: styled.div`
    display: flex;
    align-items: center;
    margin-top: 10px;
  `,

  Col3: styled(Col)`
    width: 227px;
  `,
  NameInput: styled(Input)`
    width: 303px;
  `,
  CareerSelect: styled.select`
    width: 100%;
    height: 44px;
    padding: 13px 15px;
    font-size: 13px;
    border: 1px solid #ebebeb;
    background-color: #fff;
    vertical-align: top;
    outline: none;
    line-height: normal;
  `,
  CareerTxt: styled.div`
    margin-right: 10px;
    font-size: 14px;
    color: #777;
  `,

  FileButton: styled.button``,
  FileInput: styled.input`
    width: 100%;
  `,
  Textarea: styled.textarea`
    width: 100%;
    height: 105px;
    padding: 13px 15px;
    font-size: 13px;
    border: 1px solid #ebebeb;
    background-color: #fff;
    vertical-align: top;
    outline: none;
    line-height: normal;
    resize: none;
    overflow: auto;

    &::placeholder {
      color: #ccc;
    }
  `,

  BtnBox: styled.div`
    margin-top: 50px;
    text-align: center;
  `,
  SubmitBtn: styled.button`
    width: 200px;
    height: 60px;
    background-color: ${(props) => props.theme.style.mainColor};
    border: 0;
    font-size: 18px;
    font-weight: 500;
    color: #fff;
    cursor: pointer;
  `,
};

export default RecForm;

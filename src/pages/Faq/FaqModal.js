import React, { useState } from "react";
import styled from "styled-components";
import { API } from "config";
import { RiDeleteBin5Line } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import theme from "styles/theme";

const FaqModal = ({ handleModal, userInfo }) => {
  const [files, setFiles] = useState([]);
  const [inputValue, setInputValue] = useState({
    title: "",
    content: "",
    email: "",
    phoneNumber: "",
    check: false,
  });
  const formData = new FormData();

  const getToken = localStorage.getItem("TOKEN");
  const { title, content, email, phoneNumber, check } = inputValue;

  const validate =
    title === "" ||
    content === "" ||
    email === "" ||
    phoneNumber === "" ||
    check === false;

  const handleForm = (e) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({ ...prev, [name]: value }));
  };

  // const handlePhone = (e) => {
  //   let phone = e.target.value;
  //   phone = phone
  //     .replace(/[^0-9]/g, "")
  //     .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, "$1-$2-$3")
  //     .replace(/(-{1,2})$/g, "");

  //   setInputValue((prev) => ({ ...prev, phoneNumber: phone }));
  // };

  const handleFile = (e) => {
    setFiles([...files, e.target.files[0]]);
    e.target.value = "";
  };

  const removeFile = (idx) => {
    const copy = [...files];
    copy.splice(idx, 1);
    setFiles(copy);
  };

  const handleChecked = (e) => {
    setInputValue((prev) => ({ ...prev, check: e.target.checked }));
  };

  const createForm = () => {
    formData.append("file", files[0]);
    formData.append("title", title);
    formData.append("content", content);
  };

  const handleSubmit = () => {
    createForm();
    fetch(`${API.FAQ}/question`, {
      method: "POST",
      headers: {
        enctype: "multipart/form-data",
        Authorization: getToken,
      },
      body: formData,
    }).then((res) => res.json());
  };

  return (
    <>
      <S.ModalBack />
      <S.ModalContainer>
        <S.ModalClose onClick={handleModal} />
        <S.Modal>
          <S.Title>코세구 크루 1:1 문의하기</S.Title>
          <S.SubTitle>
            코세구 크루 관련 1:1문의는 여기를 클릭해주세요
          </S.SubTitle>
          <S.Form>
            <S.InputWrap>
              <S.UserInfoContianer>
                <div>
                  <S.FormTitle>이름</S.FormTitle>
                  <S.UserInfo>{userInfo.name}</S.UserInfo>
                </div>
                <div>
                  <S.FormTitle>이메일</S.FormTitle>
                  <S.UserInfo>{userInfo.email}</S.UserInfo>
                </div>
                <div>
                  <S.FormTitle>휴대폰 번호</S.FormTitle>
                  <S.UserInfo>{userInfo.mobile}</S.UserInfo>
                </div>
              </S.UserInfoContianer>
              <S.FormTitle>문의제목</S.FormTitle>
              <S.Textarea
                placeholder="제목을 입력하여 주세요"
                onChange={handleForm}
                name="title"
                value={title}
              />
            </S.InputWrap>
            <S.InputWrap>
              <S.FormTitle>문의내용</S.FormTitle>
              <S.Textarea
                placeholder="문의내용을 입력해주세요"
                onChange={handleForm}
                name="content"
                value={content}
              />
            </S.InputWrap>

            <S.InputWrap>
              <S.FormTitle>첨부파일</S.FormTitle>
              <p>.png 파일만 가능합니다.</p>
              <S.FileLabel htmlFor="pdfFile">파일 추가하기</S.FileLabel>
              <S.FileUpload
                type="file"
                id="pdfFile"
                placeholder="파일추가"
                accept=".png"
                onChange={handleFile}
              />
              <S.UploadList>
                {files.map((file, idx) => {
                  return (
                    <S.UploadFile key={idx}>
                      <S.UploadFileName>{file.name}</S.UploadFileName>
                      <S.UploadFileDelete onClick={() => removeFile(idx)} />
                    </S.UploadFile>
                  );
                })}
              </S.UploadList>
            </S.InputWrap>
            <S.AgreeContainer>
              <S.AgreeBox
                id="isAgree"
                type="checkbox"
                onChange={handleChecked}
                value={check}
              />
              <S.AgreeCheck htmlFor="isAgree">
                개인정보 수집 및 이용동의
              </S.AgreeCheck>

              <S.AgreeContent>
                주)코딩에 세상을 구한다(이하 ‘코세구’)은 아래와 같이 개인정보를
                수집 및 이용합니다. <br />
                1. 수집 · 이용 항목 문의 등록 시 다음정보를 수집 및 이용합니다.
                - 이메일주소, 휴대전화번호 <br />
                2. 수집 · 이용 목적 수집한 개인정보는 아래 목적으로 이용됩니다.
                - 문의 확인 및 처리, 처리결과 전달, 문의 처리 시 필요에 따른
                추가 안내 <br />
                3. 보유 및 이용기간 지원자 계정 삭제 시 즉시 파기합니다.
                (로그인하지 않고 접수한 문의는 문의처리 완료 후 6개월 뒤 자동
                파기합니다.) <br />
                개인정보 수집 이용에 동의하지 않으실 수 있으며, 동의하지 않는
                경우 문의하기가 제한됩니다.
              </S.AgreeContent>
            </S.AgreeContainer>
          </S.Form>
          <S.BtnWrap>
            <S.SubmitBtn onClick={handleSubmit} disabled={validate}>
              등록하기
            </S.SubmitBtn>
          </S.BtnWrap>
        </S.Modal>
      </S.ModalContainer>
    </>
  );
};

const S = {
  ModalBack: styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    top: 0;
    left: 0;
    z-index: 90;
  `,
  ModalContainer: styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 99;
  `,

  ModalClose: styled(AiOutlineClose)`
    position: absolute;
    right: 20px;
    top: 15px;
    font-size: 30px;
  `,

  Modal: styled.div`
    width: 50vw;
    height: 80vh;
    padding: 50px;
    margin: auto;
    background-color: white;
    overflow: auto;
  `,

  Form: styled.form``,

  Title: styled.p`
    font-size: 30px;
    font-weight: 700;
    padding-left: 5px;
    margin-bottom: 20px;
  `,

  SubTitle: styled.p`
    padding-left: 5px;
    margin: 20px 0;
    font-size: 14px;
    font-weight: 600;
  `,

  InputWrap: styled.div`
    ${(props) =>
      props.theme.variables.flexSet("space-between", "space-between")}
    flex-direction: column;
    width: 100%;
    margin-bottom: 30px;
    padding: 0 5px;
  `,

  Textarea: styled.textarea`
    width: 100%;
    height: ${(props) => props.height};
    padding: 13px 15px 16px;
    border: 1px solid #ddd;
    vertical-align: top;
    resize: none;
    overflow: auto;
  `,

  FormTitle: styled.p`
    font-weight: 600;
    margin-bottom: 10px;
  `,

  UserInfoContianer: styled.div`
    ${(props) => props.theme.variables.flexSet()}
    width: 100%;
    margin-bottom: 30px;

    & :last-child {
      border-right: none;
    }

    div {
      width: calc(100% / 3);
      text-align: center;
      border-right: 1px solid #ddd;
    }
  `,

  Input: styled.input.attrs({ type: `${(props) => props.type}` })`
    width: 100%;
    padding: 13px 15px 16px;
    margin-bottom: 15px;
    border: 1px solid #ddd;
    vertical-align: top;
    overflow: auto;
  `,

  UserInfo: styled.p``,

  FileLabel: styled.label`
    width: 100px;
    height: 100%;
    padding: 15px 0;
    margin: 15px 0;
    font-size: 14px;
    font-weight: 700;
    text-align: center;
    vertical-align: center;
    color: white;
    background-color: ${theme.mainColor};
    cursor: pointer;
  `,

  FileUpload: styled.input`
    width: 1px;
    height: 1px;
  `,

  UploadList: styled.ul`
    border: 1px solid #ddd;
  `,

  UploadFile: styled.li`
    ${(props) => props.theme.variables.flexSet("space-between", "center")}
    padding: 15px;
    vertical-align: center;
  `,

  UploadFileName: styled.span`
    font-weight: 600;
  `,

  UploadFileDelete: styled(RiDeleteBin5Line)`
    font-size: 18px;
    margin-left: 30px;
    cursor: pointer;
  `,

  AgreeContainer: styled.div`
    width: 100%;
  `,

  AgreeCheck: styled.label`
    font-weight: 600;
    text-align: center;
  `,

  AgreeBox: styled.input`
    vertical-align: middle;
    margin: -0.2em 5px 0 0;
  `,

  AgreeContent: styled.div`
    height: 100px;
    margin-top: 30px;
    padding: 20px;
    line-height: 1.3;
    border: 1px solid #ddd;
    overflow: auto;
  `,

  BtnWrap: styled.div`
    ${(props) => props.theme.variables.flexSet()}
  `,

  SubmitBtn: styled.button`
    width: 300px;
    height: 50px;
    border: none;
    margin-top: 25px;
    font-size: 18px;
    font-weight: 600;
    vertical-align: center;
    text-align: center;
    color: white;
    background-color: ${(props) => (props.disabled ? "gray" : theme.mainColor)};
    cursor: ${(props) => (props.disabled ? "default" : "pointer")};
  `,
};

export default FaqModal;

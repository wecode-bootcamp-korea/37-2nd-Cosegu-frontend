import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { API } from "config";
import styled from "styled-components";
import variables from "styles/variables";

const OAuth = () => {
  const navigate = useNavigate();
  const code = new URL(window.location.href).searchParams.get("code");

  useEffect(() => {
    fetch(`${API.LOGIN}?code=${code}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;",
      },
    })
      .then((response) => {
        if (response.ok) return response.json();
        throw new Error("에러 발생!");
      })
      .catch((error) => alert(error))
      .then((data) => {
        if (data.token) {
          localStorage.setItem("TOKEN", data.token);
          alert("로그인 성공");
          navigate("/");
          window.location.reload();
        } else {
          alert("로그인 실패");
        }
      });
  }, []);

  return <S.Box>조금만 기다려주세요!</S.Box>;
};

export default OAuth;

const S = {
  Box: styled.div`
    ${variables.flexSet()}
    height: 600px;
    font-size: 30px;
    font-weight: 900;
    color: #999;
    background: #efefef;
  `,
};

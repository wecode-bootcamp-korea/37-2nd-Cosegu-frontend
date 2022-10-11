import React, { useState } from "react";
import styled from "styled-components";
import { BiUpArrowAlt } from "react-icons/bi";
import variables from "styles/variables";

const LinkSite = () => {
  const [isListOpen, setIsListOpen] = useState(false);

  const menuHandle = () => {
    setIsListOpen(!isListOpen);
  };

  return (
    <S.Wrap>
      <S.SiteWrap onClick={menuHandle}>
        <S.Text>관련 사이트</S.Text>
        <BiUpArrowAlt
          size="20px"
          color="#222"
          className={isListOpen ? "arrow-down" : "arrow-up"}
        />
      </S.SiteWrap>
      {isListOpen && (
        <S.SiteListWrap>
          <S.Link
            target="_blank"
            href="https://www.wanted.co.kr/wdlist/518?country=kr&job_sort=company.response_rate_order&years=0&locations=all"
            rel="noreferrer"
          >
            <S.List>원티드</S.List>
          </S.Link>
          <S.Link
            target="_blank"
            href="https://www.rocketpunch.com/jobs"
            rel="noreferrer"
          >
            <S.List>로켓펀치</S.List>
          </S.Link>
          <S.Link target="_blank" href="https://groupby.kr/" rel="noreferrer">
            <S.List>그룹바이</S.List>
          </S.Link>
        </S.SiteListWrap>
      )}
    </S.Wrap>
  );
};

export default LinkSite;

const S = {
  Wrap: styled.div`
    position: relative;
  `,
  SiteWrap: styled.div`
    ${variables.flexSet("space-between", "center")};
    height: 50px;
    padding: 10px 20px;
    border: 1px solid #aaa;
    border-radius: 5px;
    cursor: pointer;
    .arrow-down {
      transition: all ease-in-out 0.2s;
      transform: rotate(180deg);
    }
    .arrow-up {
      transition: all ease-in-out 0.2s;
      transform: rotate(0deg);
    }
  `,
  Text: styled.p`
    height: 20px;
    padding: 3px 25px 3px 5px;
  `,
  SiteListWrap: styled.ul`
    position: absolute;
    top: -160px;
    right: 0;
    left: 0;
    border: 1px solid #aaa;
    border-radius: 5px;
    box-shadow: 3px 3px 30px rgba(0, 0, 0, 0.1);
  `,
  List: styled.li`
    ${variables.flexSet("", "center")};
    height: 50px;
    padding: 10px 20px;
    border-bottom: 0.5px solid gray;
  `,
  Link: styled.a`
    color: #222;
    text-decoration: none;
  `,
};

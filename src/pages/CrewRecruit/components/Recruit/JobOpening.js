import React, { useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import styled from "styled-components";
import theme from "styles/theme";
import { useNavigate } from "react-router-dom";

const JobOpening = ({ recruit }) => {
  const { recruitId, location, title, link, categoryName } = recruit;
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const openContent = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = () => {
    navigate(`/rectform`, { state: { recruitId: recruitId } });
  };
  return (
    <S.Container
      key={recruitId}
      isOpen={isOpen}
      active={{
        boxShadow: "0px 0px 10px -3px black;",
        height: "auto",
        fontWeight: "800",
      }}
    >
      <S.CrewRecruitBtn onClick={openContent}>
        <S.Qualification isOpen={isOpen} active={{ fontWeight: "800" }}>
          {categoryName}
        </S.Qualification>
        <S.Title isOpen={isOpen} active={{ fontWeight: "800" }}>
          {title}
        </S.Title>
        <S.OpenBtn>{isOpen ? <AiOutlineUp /> : <AiOutlineDown />}</S.OpenBtn>
      </S.CrewRecruitBtn>
      <S.Content>
        <S.Detail>
          <S.DetailContent>
            <S.DetailImg
              src="https://career-cdn.woowayouths.com/public/editor/bmart/recruit/2021/12/0/2ed6f1db-0557-4de9-8bc9-5230c8639468.jpg"
              alt="채용 이미지"
            />
          </S.DetailContent>
          <S.Side>
            <S.SideMap>
              <Map
                center={{ lat: 37.50632752039098, lng: 127.05367403450762 }}
                style={{ width: "100%", height: "250px" }}
              >
                <MapMarker
                  position={{
                    lat: 37.50632752039098,
                    lng: 127.05367403450762,
                  }}
                />
              </Map>
            </S.SideMap>
            <S.SideMapInfo>
              <S.SideMapInfoTitle>{location}</S.SideMapInfoTitle>
              <S.SideMapInfoLink>{link}</S.SideMapInfoLink>
            </S.SideMapInfo>
            <S.RecruitBtn onClick={handleSubmit}>지원하기</S.RecruitBtn>
          </S.Side>
        </S.Detail>
      </S.Content>
    </S.Container>
  );
};

const S = {
  Container: styled.div`
    width: 1200px;
    max-height: ${(props) => (!props.isOpen ? "80px" : "auto")};
    border: 1px solid #ddd;
    border-bottom: none;
    background-color: white;
    box-shadow: ${(props) => (props.isOpen ? props.active.boxShadow : "none")};
    overflow: hidden;
    transition: all 0.2s;

    &:last-child {
      border-bottom: 1px solid #ddd;
    }
  `,

  CrewRecruitBtn: styled.button`
    ${(props) => props.theme.variables.flexSet("flex-start")}
    width: 100%;
    height: 80px;
    color: black;
    background-color: white;
    border: none;
    border-bottom: 1px solid #ddd;
    cursor: pointer;
  `,

  Qualification: styled.span`
    width: 15%;
    padding: 0 30px;
    font-weight: ${(props) => props.isOpen && props.active.fontWeight};
  `,

  Title: styled.span`
    padding: 0 30px;
    font-size: 16px;
    font-weight: ${(props) => props.isOpen && props.active.fontWeight};
  `,

  OpenBtn: styled.span`
    margin-left: auto;
    margin-right: 30px;
  `,

  Content: styled.div``,

  Detail: styled.div`
    ${(props) => props.theme.variables.flexSet("flex-start", "flex-start")}
  `,

  DetailContent: styled.div`
    width: 60%;
    height: 100vh;
    overflow: auto;
    padding: 0 50px;
  `,

  DetailImg: styled.img`
    width: 100%;
  `,

  Side: styled.div`
    ${(props) => props.theme.variables.flexSet()}
    flex-direction: column;
    width: 30%;
    margin: 0 auto;
    padding: 20px 40px;
  `,

  SideMap: styled.div`
    width: 100%;
  `,

  SideMapInfo: styled.div`
    width: 100%;
    margin: 20px 0;
  `,

  SideMapInfoTitle: styled.p`
    font-weight: 600;
  `,

  SideMapInfoLink: styled.p`
    opacity: 0.3;
    margin: 10px 0;
  `,

  RecruitBtn: styled.button`
    width: 100%;
    height: 50px;
    border: none;
    color: white;
    font-size: 18px;
    font-weight: 600;
    background-color: ${theme.mainColor};
  `,
};

export default JobOpening;

import React from "react";
import styled from "styled-components";

const CrewRecruits = ({ recruit }) => {
  const { id, location, title, link, qualification } = recruit;
  return (
    <CrewRecruitItem key={id}>
      <CrewRecruitBtn>
        <CrewRecruitLocation>{qualification}</CrewRecruitLocation>
        <CrewRecruitTitle>{`${title}(${qualification})`}</CrewRecruitTitle>
        <DownBtn>n</DownBtn>
      </CrewRecruitBtn>
      <CrewRecruitContent>
        <CrewRecruitDetail>
          {/* <DetailImg
            src="https://career-cdn.woowayouths.com/public/editor/bmart/recruit/2021/12/0/2ed6f1db-0557-4de9-8bc9-5230c8639468.jpg"
            alt="채용 이미지"
          /> */}
          <DetailSide>
            <SideMap />
            <SideMapInfo>
              <SideMapInfoTitle>{location}</SideMapInfoTitle>
              <SideMapInfoLink>{link}</SideMapInfoLink>
            </SideMapInfo>
            <RecruitBtn>지원하기</RecruitBtn>
          </DetailSide>
        </CrewRecruitDetail>
      </CrewRecruitContent>
    </CrewRecruitItem>
  );
};
const CrewRecruitItem = styled.div`
  width: 1200px;
  border: 1px solid #ddd;
  border-bottom: none;
  &:last-child {
    border-bottom: 1px solid #ddd;
  }
`;
const CrewRecruitBtn = styled.button`
  ${(props) => props.theme.variables.flexSet("flex-start")}
  width: 100%;
  height: 80px;
  color: black;
  background-color: white;
`;
const CrewRecruitLocation = styled.span`
  padding: 0 30px;
`;
const CrewRecruitTitle = styled.span`
  padding: 0 30px;
  font-size: 18px;
  font-weight: 700;
`;
const DownBtn = styled.span`
  margin-left: auto;
  margin-right: 30px;
`;
const CrewRecruitContent = styled.div``;

const CrewRecruitDetail = styled.div`
  ${(props) => props.theme.variables.flexSet("flex-start", "flex-start")}
  border: 1px solid #ddd;
`;
const DetailImg = styled.img``;
const DetailSide = styled.div`
  ${(props) => props.theme.variables.flexSet()}
  flex-direction: column;
  padding: 20px 40px;
  width: 100%;
`;
const SideMap = styled.div`
  width: 100%;
  height: 300px;
  background-color: yellow;
`;
const SideMapInfo = styled.div`
  width: 100%;
  margin: 20px 0;
`;
const SideMapInfoTitle = styled.p`
  font-weight: 600;
`;
const SideMapInfoLink = styled.p`
  opacity: 0.3;
  margin: 10px 0;
`;

const RecruitBtn = styled.button`
  width: 100%;
  height: 50px;
`;
export default CrewRecruits;

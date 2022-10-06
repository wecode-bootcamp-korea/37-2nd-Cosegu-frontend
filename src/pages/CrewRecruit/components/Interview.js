import React, { startTransition } from "react";
import styled from "styled-components";
import theme from "styles/theme";

const Interview = () => {
  return (
    <InterviewContainer>
      <SlildeContainer>
        <SlideContent>
          <DoubleQuote>"</DoubleQuote>
          <SlideContentTitle>
            <span>빠르고 크게 성장하는 코세구 서비스</span>를 함께 만들어가는
            것, 자부심과 보람이 됩니다.
          </SlideContentTitle>
          <SlideContentInfoTeam>코세구 크루 / 프론트엔드</SlideContentInfoTeam>
          <SlideContentInfoName>신주안</SlideContentInfoName>
          <SlideBtnContainer>
            <SlideBtn />
            <SlideBtn />
            <SlideBtn />
            <SlideBtn />
            <SlideBtn />
          </SlideBtnContainer>
        </SlideContent>
        <SlideImgContainer>
          <SlideImg src="https://career-cdn.woowayouths.com/resources/static/img/pc/bmart/interview/interview_01.jpg?e0f1ec7ba322443ab2400e018e908eee" />
          <SlideImgBg />
        </SlideImgContainer>
      </SlildeContainer>

      <ContentContainer>
        <InterviewQM>Q</InterviewQM>
        <InterviewColumn>
          <ColumnQuestion>dasdas</ColumnQuestion>
          <ColumnAnswer>dasdasdas</ColumnAnswer>
        </InterviewColumn>
      </ContentContainer>
      <ContentContainer>
        <InterviewQM>Q</InterviewQM>
        <InterviewColumn>
          <ColumnQuestion>dasdas</ColumnQuestion>
          <ColumnAnswer>dasdasdas</ColumnAnswer>
        </InterviewColumn>
      </ContentContainer>
      <ContentContainer>
        <InterviewQM>Q</InterviewQM>
        <InterviewColumn>
          <ColumnQuestion>
            d마트 안에는 어떤 구성원 분들이 함께 하고 계신지, 또 어떤 역량을
            필요로 하시는지 궁금합니다.
          </ColumnQuestion>
          <ColumnAnswer>
            현재 서울 전역과 경기 일부 지역(분당, 일산, 수원)에 서비스를 제공
            중이며, 대형마트에 준하는 상품 가짓수를 취급하고 있어요. 취급 상품은
            지속적으로 증가할 계획인데요, 그만큼 B마트를 찾는 고객들께 불편함
            없이 더 좋은 서비스를 제공할 수 있을 것이라 생각합니다. 제
            개인적으로는 B마트에서 제공하고 있는 퀵 커머스 사업은 증가하는 1인
            가구 및 비대면 서비스의 성장에 따라 향후 더 크게 발전할 가능성을
            품고 있다고 생각되네요.
          </ColumnAnswer>
        </InterviewColumn>
      </ContentContainer>
    </InterviewContainer>
  );
};

const InterviewContainer = styled.section`
  ${(props) => props.theme.variables.flexSet()}
  flex-direction: column;
  width: 100%;
`;

const SlildeContainer = styled.div`
  ${(props) => props.theme.variables.flexSet()}
  margin: 0 auto;
  height: 800px;
  border-bottom: 1px solid #ddd;
`;
const SlideContent = styled.div`
  width: 50%;
  height: 450px;
`;
const DoubleQuote = styled.p`
  font-size: 100px;
  font-weight: 800;
`;
const SlideContentTitle = styled.p`
  margin-bottom: 20px;
  font-size: 50px;
  font-weight: 400;
  word-break: keep-all;

  span {
    font-weight: 800;
  }
`;
const SlideContentInfoTeam = styled.p`
  font-size: 16px;
  margin-bottom: 5px;
`;
const SlideContentInfoName = styled.p`
  font-size: 20px;
  font-weight: 800;
`;

const SlideImgContainer = styled.div`
  position: relative;
`;
const SlideImg = styled.img`
  position: absolute;
  right: 50px;
  bottom: 50px;
  width: 360px;
  height: 460px;
`;
const SlideImgBg = styled.div`
  width: 360px;
  height: 460px;
  border: 1px solid black;
`;

const SlideBtnContainer = styled.div`
  ${(props) => props.theme.variables.flexSet("space-around", "center")}
  width: inherit;
`;
const SlideBtn = styled.button`
  width: 50px;
  height: 50px;
  margin-top: 30px;
  border-radius: 50%;
  border: 4px solid ${theme.mainColor};
`;
const ContentContainer = styled.div`
  display: flex;
  width: 1000px;
  padding: 40px 0;
`;
const InterviewQM = styled.span`
  display: block;
  color: ${theme.mainColor};
  font-size: 25px;
  font-weight: 800;
`;
const InterviewColumn = styled.div`
  display: inline-block;
  margin-left: 15px;
`;
const ColumnQuestion = styled.p`
  font-size: 20px;
  font-weight: 800;
  margin-bottom: 15px;
`;
const ColumnAnswer = styled.p`
  font-size: 20px;
  font-weight: 400;
  line-height: 1.4em;
  word-break: keep-all;
`;
export default Interview;

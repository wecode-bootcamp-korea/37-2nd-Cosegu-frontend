import React from "react";
import styled from "styled-components";
import variables from "styles/variables";

const MainProcess = () => {
  return (
    <S.Wrap>
      <S.Title>채용 프로세스 안내</S.Title>
      <S.ProcessBox>
        <S.Process>서류</S.Process>
        <S.Process>코딩테스트</S.Process>
        <S.Process>1차 면접</S.Process>
        <S.Process>최종 면점</S.Process>
      </S.ProcessBox>
      <S.InfoBox>
        <S.InfoTitle>유의사항</S.InfoTitle>
        <ul>
          {INFO_LIST.map((info) => {
            return <S.InfoList key={info.id}>{info.text}</S.InfoList>;
          })}
        </ul>
      </S.InfoBox>
    </S.Wrap>
  );
};

export default MainProcess;

const S = {
  Wrap: styled.div`
    height: 1000px;
    background: #efefef;
  `,
  Title: styled.p`
    padding-top: 150px;
    color: #333;
    font-size: 35px;
    font-weight: 900;
    text-align: center;
  `,
  ProcessBox: styled.div`
    ${variables.flexSet("space-between")}
    width: 950px;
    margin: 60px auto;
  `,
  Process: styled.p`
    ${variables.flexSet()}
    width: 200px;
    height: 200px;
    font-weight: 800;
    font-size: 20px;
    color: white;
    background: #222;
    border-radius: 50%;
  `,
  InfoBox: styled.div`
    width: 800px;
    margin: 50px auto;
  `,
  InfoTitle: styled.p`
    margin-bottom: 25px;
    font-size: 22px;
    font-weight: 800;
    color: #222;
  `,
  InfoList: styled.li`
    margin: 0 0 15px 15px;
    color: #555;
    font-size: 14px;
    line-height: 1.4;
    list-style-type: square;
  `,
};

const INFO_LIST = [
  {
    id: 1,
    text: "국가유공자 및 장애인 등 취업보호 대상자는 관계법령에 따라 우대합니다.",
  },
  {
    id: 2,
    text: "입사지원시 본인의 성명, 연락처, 이메일 주소 등을 정확하게 기입해 주세요.",
  },
  {
    id: 3,
    text: "면접대상과 일정은 서류전형 합격자에 한해 개별 안내할 예정입니다.",
  },
  {
    id: 4,
    text: "면접은 1차 실무진 면접, 2차는 임원 면접으로 진행하며 종합적인 결과를 바탕으로 인재영입 절차가 진행됩니다. (기간제의 경우, 1차 면접만 진행됩니다)",
  },
  {
    id: 5,
    text: "최종 심사를 거친 결과를 합격자에게 개별통보 합니다.",
  },
  {
    id: 6,
    text: "이력서에 기재된 학력 및 경력사항 등 기재사항이 허위임이 판명될 경우, 합격이 취소될 수 있습니다.",
  },
  {
    id: 7,
    text: "이메일, 홈페이지를 통해 제출된 서류 및 지원자가 자발적으로 제출한 서류는 채용절차공정화에 관한 법률 제 11조에 의거 반환의무가 없음을 안내드립니다.",
  },
  {
    id: 8,
    text: "온라인으로 작성한 지원서는 지원자 개인의 정보보호를 위하여 모집이 종료된 이후 180일 후 자동 삭제됩니다.",
  },
];

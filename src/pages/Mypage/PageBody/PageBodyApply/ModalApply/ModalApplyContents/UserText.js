import React from "react";
import styled from "styled-components";

const UserText = () => {
  return (
    <div>
      <S.InfoName>자기소개서</S.InfoName>
      <div>
        <S.InfoQ>
          지원동기, 성격의 장/단점, 학교/사회경험 등 지원자 님의 이야기를
          자유롭게 기술해주세요
        </S.InfoQ>
        <S.InfoA>
          3년간 40기 이상, 1,470명의 개발자를 배출한 위코드는 몰입할 수 있는
          오프라인 공간에서 진행됩니다. 집중하여 공부할 수 있는 공간에서 멘토와
          커뮤니케이션 중심의 프론트엔드, 백엔드 커리큘럼을 경험하실 수
          있습니다. 모든 기수는 소수 정예로 구성되며, 커뮤니티와 코칭을 통해서
          수료 후 취업까지 완성하실 수 있습니다.
        </S.InfoA>
      </div>
    </div>
  );
};

export default UserText;

const S = {
  InfoName: styled.p`
    margin-bottom: 40px;
    padding-right: 20px;
    color: #222;
    font-size: 22px;
    font-weight: 800;
  `,
  InfoQ: styled.p`
    margin-bottom: 20px;
    padding-right: 20px;
    font-weight: 600;
  `,
  InfoA: styled.p`
    padding-right: 20px;
    font-weight: 400;
    line-height: 1.6;
  `,
};

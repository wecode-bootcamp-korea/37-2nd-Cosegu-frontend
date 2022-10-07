import React from "react";
import styled from "styled-components";

const DetailRightItem = ({ detailForRight, handleLikeClick }) => {
  const { career, title, employment } = detailForRight;

  return (
    <>
      <S.CareerFlag>{career}</S.CareerFlag>
      <S.TopTitle>{title}</S.TopTitle>
      <S.FlagType>{employment} | 영업 종료시</S.FlagType>
      <S.DetailView>
        <S.Ol>
          <S.Li>구분 : {career}</S.Li>
          <S.Li>모집지역 :</S.Li>
          <S.Li>고용형태 : {employment}&#40;수습기간 3개월&#41;</S.Li>
        </S.Ol>
        <S.Ol>
          <S.Li>
            <S.SmTitle>&#91;주요업무&#93;</S.SmTitle>
          </S.Li>
          <S.Li>- 대외 커뮤니케이션 및 홍보를 위한 전략 수립, 실행</S.Li>
          <S.Li>- 내부 조직과 대외기관의 협업 조율</S.Li>
          <S.Li>- 언론 매체 및 정부 기관과의 커뮤니케이션</S.Li>
          <S.Li>- 대내외 이슈 및 리스크 관리, 대응 전략 수립 및 실행</S.Li>
          <S.Li>- 서비스 관련 규제 및 법적 요인 개선 활동</S.Li>
        </S.Ol>
        <S.Ol>
          <S.Li>
            <S.SmTitle>&#91;지원자격&#93;</S.SmTitle>
          </S.Li>
          <S.Li>- 3년 이상의 홍보, 대외협력 등 유관 업무 경력이 있으신 분</S.Li>
          <S.Li>- 유연한 사고와 원활한 커뮤니케이션 역량을 갖추신 분</S.Li>
          <S.Li>
            - 문제해결 역량을 기반으로 위기관리 및 이슈 대응 경험이 있으신 분
          </S.Li>
          <S.Li>
            - 보도자료 작성, 데이터 및 사실관계 분석을 통한 의견 작성 등 문서
            작업에 능하신 분
          </S.Li>
        </S.Ol>
        <S.Ol>
          <S.Li>
            <S.SmTitle>&#91;우대사항&#93;</S.SmTitle>
          </S.Li>
          <S.Li>- 업무상 언론/정부기관 등 기관 커뮤니케이션에 익숙하신 분</S.Li>
          <S.Li>- 이슈에 대한 정무적 판단 능력이 우수하신 분</S.Li>
          <S.Li>- 협업을 통해 시너지를 낼 수 있는 분</S.Li>
          <S.Li>
            - 코세구의 기업문화를 이해하고, 업무에 잘 녹여낼 수 있는 분
          </S.Li>
          <S.Li>
            - 배달 플랫폼, 물류/유통, IT 등 유관 업종에 대한 경험과 이해가
            있으신 분
          </S.Li>
        </S.Ol>
      </S.DetailView>
      <S.LikeBtn
        onClick={handleLikeClick}
        bgHeart="./images/detail/heart_on.png"
      >
        하트
      </S.LikeBtn>
      <S.BtnWrap>
        <S.Button type="button">지원하기</S.Button>
      </S.BtnWrap>
    </>
  );
};

const LikeBtn = styled.button`
  position: absolute;
  width: 25px;
  height: 25px;
  background: url(${(props) => props.bgHeart}) 50% 50% no-repeat;
  background-size: cover;
  background-color: transparent;
  border: 0;
  cursor: pointer;
  outline: none;
  text-indent: -9999px;
  overflow: hidden;
`;

const S = {
  CareerFlag: styled.div`
    display: inline-block;
    min-width: 36px;
    height: 25px;
    padding: 0 5px;
    font-size: 12px;
    line-height: 1.9em;
    font-weight: 500;
    text-align: center;
    color: #777;
    border: 1px solid #ebebeb;
  `,
  TopTitle: styled.div`
    margin-top: 20px;
    font-size: 24px;
    line-height: 1.3em;
    font-weight: 700;
  `,
  FlagType: styled.span`
    display: block;
    margin-top: 25px;
    font-size: 13px;
    font-weight: 400;
  `,
  DetailView: styled.div`
    margin-top: 65px;
    font-size: 14px;
    line-height: 1.4em;
  `,
  Ol: styled.ol`
    margin-top: 2em;
  `,
  Li: styled.li``,
  SmTitle: styled.h3`
    margin-bottom: 10px;
    font-weight: 700;
  `,
  LikeBtn: styled(LikeBtn)`
    top: 45px;
    right: 50px;
  `,
  BtnWrap: styled.div`
    margin-top: 50px;
    text-align: center;
  `,
  Button: styled.button`
    width: 200px;
    height: 50px;
    font-size: 18px;
    ${(props) => props.theme.style.button};
  `,
};

export default DetailRightItem;

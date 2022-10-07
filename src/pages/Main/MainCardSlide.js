import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MainCardSlide = () => {
  const [cardSlideData, setCardSlideData] = useState([]);

  useEffect(() => {
    fetch("/data/cardslide.json")
      .then((res) => res.json())
      .then((res) => setCardSlideData(res));
  }, []);

  const settings = {
    dots: false,
    centerMode: true,
    draggable: true,
    infinite: true,
    centerPadding: "100px",
    slidesToShow: 3,
    speed: 500,
  };

  return (
    <S.Wrap>
      <S.Title>이렇게 일하는 사람을 찾습니다!</S.Title>
      <S.StyledSlider {...settings}>
        {cardSlideData.map(({ id, text }) => {
          return (
            <S.CardBox key={id}>
              <S.Card>
                <p className="num">{id}</p>
                {text}
              </S.Card>
            </S.CardBox>
          );
        })}
      </S.StyledSlider>
    </S.Wrap>
  );
};

export default MainCardSlide;

const S = {
  Wrap: styled.div`
    height: 700px;
    overflow: hidden;
  `,
  Title: styled.p`
    padding-top: 30px;
    color: #333;
    font-size: 35px;
    font-weight: 900;
    text-align: center;
  `,
  CardBox: styled.div`
    height: 500px;
    width: 100px;
    padding: 50px 20px;
  `,
  Card: styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 60px;
    color: #eee;
    background: #111;
    font-size: 20px;
    font-weight: 800;
    line-height: 1.7;
    text-align: center;
    .num {
      color: white;
      margin-bottom: 20px;
    }
  `,
  StyledSlider: styled(Slider)`
    .slick-prev {
      width: 500px;
      height: 1200px;
      z-index: 1;
      background: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0)
      );
    }
    .slick-next {
      width: 500px;
      height: 1200px;
      background: linear-gradient(
        270deg,
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0)
      );
    }
    .slick-prev:before,
    .slick-next:before {
      opacity: 0;
    }
  `,
};

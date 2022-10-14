import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MainSlider = () => {
  const [mainSlideData, setMainSlideData] = useState([]);

  useEffect(() => {
    fetch("/data/mainslide.json")
      .then((res) => res.json())
      .then((res) => setMainSlideData(res));
  }, []);

  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <S.Wrap>
      <S.StyledSlider {...settings}>
        {mainSlideData.map(({ id, imgUrl }) => {
          return (
            <S.SliderBox key={id}>
              <S.SliderImg src={imgUrl} />
            </S.SliderBox>
          );
        })}
      </S.StyledSlider>
    </S.Wrap>
  );
};

export default MainSlider;

const S = {
  Wrap: styled.div`
    min-width: 1200px;
    height: 600px;
    margin: 0 auto;
    background: white;
    overflow: hidden;
  `,
  SliderBox: styled.div`
    height: 600px;
  `,
  SliderImg: styled.img`
    width: 100%;
    height: 600px;
    object-fit: cover;
  `,
  StyledSlider: styled(Slider)`
    .slick-prev {
      width: 500px;
      height: 600px;
      z-index: 1;
    }
    .slick-next {
      width: 500px;
      height: 600px;
    }
    .slick-prev:before,
    .slick-next:before {
      opacity: 0;
    }
    .slick-dots {
      display: flex;
      justify-content: center;
      bottom: 30px;
      color: white;
      li button:before {
        color: white;
      }
      li.slick-active button:before {
        font-size: 8px;
        color: white;
      }
    }
  `,
};

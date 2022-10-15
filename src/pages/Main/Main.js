import React, { useEffect, useState } from "react";
import MainCardSlide from "./MainCardSlide";
import MainCate from "./MainCate/MainCate";
import MainProcess from "./MainProcess";
import MainPhotoGrid from "./MainPhotoGrid";
import MainSearch from "./MainSearch";
import MainSlider from "./MainSlide";
import MainApplyFloat from "./MainApplyFloat";

const Main = () => {
  const [isFloat, setIsFloat] = useState(false);

  // 이 부분 블로그 정리

  const handleScroll = () => {
    if (window.scrollY > 700) setIsFloat(true);
    if (window.scrollY > 3030) setIsFloat(false);
    if (window.scrollY < 700) setIsFloat(false);
  };

  useEffect(() => {
    const addWindowScroll = () => {
      window.addEventListener("scroll", handleScroll);
    };
    addWindowScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <>
      <MainSlider />
      <MainSearch />
      <MainCate />
      <MainPhotoGrid />
      <MainCardSlide />
      <MainProcess />
      {isFloat && <MainApplyFloat />}
    </>
  );
};

export default Main;

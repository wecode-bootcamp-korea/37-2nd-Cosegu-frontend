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

  const handleScroll = () => {
    if (window.scrollY > 700) setIsFloat(true);
    if (window.scrollY > 3030) setIsFloat(false);
    if (window.scrollY < 700) setIsFloat(false);
  };

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     window.addEventListener("scroll", handleScroll);
  //   }, 1000);
  //   return () => {
  //     clearInterval(timer);
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // });

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
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

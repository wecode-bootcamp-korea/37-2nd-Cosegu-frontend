import React from "react";
import Banner from "./components/Banner";
import HowToCrew from "./components/HowToCrew";
import Interview from "./components/Interview";
import Intro from "./components/Intro";
import Recruit from "./components/Recruit/Recruit";
import Tab from "./components/Tab";
import Work from "./components/Work";
const CrewRecruit = () => {
  return (
    <>
      <Banner />
      <Tab />
      <Intro />
      <Work />
      <Interview />
      <HowToCrew />
      <Recruit />
    </>
  );
};

export default CrewRecruit;

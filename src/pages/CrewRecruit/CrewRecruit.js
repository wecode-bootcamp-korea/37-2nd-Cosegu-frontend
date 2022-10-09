import React, { useEffect, useRef, useState } from "react";
import Banner from "./components/Banner";
import HowToCrew from "./components/HowToCrew";
import Interview from "./components/Interview";
import Intro from "./components/Intro";
import Recruit from "./components/Recruit/Recruit";
import Tab from "./components/Tab";
import Work from "./components/Work";

const CrewRecruit = () => {
  const [currentSection, setCurrentSection] = useState("");
  const intro = useRef();
  const work = useRef();
  const interview = useRef();
  const howToCrew = useRef();
  const recruit = useRef();

  const handleScroll = () => {
    const scrollY = window.scrollY;

    const introTop = intro.current?.offsetTop - 75;
    const workTop = work.current?.offsetTop - 75;
    const interviewTop = interview.current?.offsetTop - 75;
    const howToCrewTop = howToCrew.current?.offsetTop - 75;
    const recruitTop = recruit.current?.offsetTop - 75;

    if (scrollY >= introTop && scrollY < workTop) {
      setCurrentSection("intro");
    } else if (scrollY >= workTop && scrollY < interviewTop) {
      setCurrentSection("work");
    } else if (scrollY >= interviewTop && scrollY < howToCrewTop) {
      setCurrentSection("interview");
    } else if (scrollY >= howToCrewTop && scrollY < recruitTop) {
      setCurrentSection("howToCrew");
    } else if (scrollY >= recruitTop) {
      setCurrentSection("recruit");
    } else {
      setCurrentSection("");
    }
  };

  const moveSection = (tab) => {
    tab.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    setCurrentSection(tab);
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
      <Banner />
      <Tab
        moveSection={moveSection}
        currentSection={currentSection}
        intro={intro}
        work={work}
        interview={interview}
        howToCrew={howToCrew}
        recruit={recruit}
      />
      <Intro intro={intro} />
      <Work work={work} />
      <Interview interview={interview} />
      <HowToCrew howToCrew={howToCrew} />
      <Recruit recruit={recruit} />
    </>
  );
};

export default CrewRecruit;

import { Container } from "@mui/material";
import "./App.scss";
import Header from "./components/Header";
import ParticlesBG from "./components/Particles";
import About from "./components/About";
import Infor from "./components/Infor";
import Project from "./components/Project";
import { useEffect, useRef } from "react";
import Skill from "./components/Skill";
import Experience from "./components/Experience";
import More from "./components/More";

function App() {
  const inforRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const skillRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const moreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const target = window.location.href.split("#")[1];

    switch (target) {
      case undefined:
        inforRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "home":
        inforRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "about":
        aboutRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "projects":
        projectRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "skills":
        skillRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "experiences":
        experienceRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "more":
        moreRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      default:
        break;
    }
  }, []);

  const handleScroll = (item: string) => {
    switch (item) {
      case "Infor":
        inforRef.current?.scrollIntoView({ behavior: "smooth" });
        window.location.href = "#home";
        break;
      case "About":
        aboutRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "Projects":
        projectRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "Skills":
        skillRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "Experiences":
        experienceRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "More":
        moreRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "Resume":
        window.open(
          "https://dinhnhutan.notion.site/DINH-NHU-TAN-fbaf5cec35b2471c8a24922572f5cbbf?pvs=4",
          "_blank",
        );
      default:
        break;
    }
  };

  return (
    <div className="App main-bg">
      <ParticlesBG />
      <Header handleScroll={handleScroll} />
      <Container maxWidth="xl">
        <Infor ref={inforRef} handleScroll={handleScroll} />
        <About ref={aboutRef} />
        <Project ref={projectRef} />
        <Skill ref={skillRef} />
        <Experience ref={experienceRef} />
        <More ref={moreRef} />
      </Container>
    </div>
  );
}

export default App;

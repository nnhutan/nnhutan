import { lazy, Suspense, useEffect, useRef } from "react";
import {
  Container,
  Fab,
  LinearProgress,
  Toolbar,
  useColorScheme,
} from "@mui/material";
import Infor from "./components/Infor";
import Header from "./components/Header";

const ParticlesBG = lazy(() => import("./components/Particles"));
const About = lazy(() => import("./components/About"));
const Project = lazy(() => import("./components/Project"));
const Skill = lazy(() => import("./components/Skill"));
const Experience = lazy(() => import("./components/Experience"));
const More = lazy(() => import("./components/More"));
import ScrollTop from "./components/ScrollTop";
import { KeyboardArrowUp } from "@mui/icons-material";
import { HelmetProvider } from "react-helmet-async";
import SEO from "./components/SEO";
import { useTranslation } from "react-i18next";

function App() {
  const inforRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const skillRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const moreRef = useRef<HTMLDivElement>(null);
  const { mode } = useColorScheme();
  const { t } = useTranslation("core");

  useEffect(() => {
    setTimeout(() => {
      const target = window.location.href.split("#")[1];

      switch (target) {
        case "about":
          console.log(aboutRef.current);
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
    }, 500);
  }, []);

  const handleScroll = (item: string) => {
    switch (item.toLowerCase()) {
      case "infor":
        inforRef.current?.scrollIntoView({ behavior: "smooth" });
        window.location.href = "#home";
        break;
      case "about":
        console.log("about");
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
      case "resume":
        window.open(
          "https://dinhnhutan.notion.site/DINH-NHU-TAN-fbaf5cec35b2471c8a24922572f5cbbf?pvs=4",
          "_blank",
        );
      default:
        break;
    }
  };

  return (
    <HelmetProvider>
      <SEO
        title={t("title")}
        description={t("description")}
        keywords={t("keywords")}
        name={t("author")}
        type="website"
        image="https://images.unsplash.com/photo-1580927752452-89d86da3fa0a"
      />
      <Suspense fallback={<LinearProgress color="secondary" />}>
        <ParticlesBG />
      </Suspense>
      <div
        className={mode === "light"
          ? "bg-light-mode min-vh-100"
          : "bg-dark-mode min-vh-100"}
      >
        <Header handleScroll={handleScroll} />
        <Toolbar id="back-to-top-anchor" />
        <Container maxWidth="xl">
          <Infor ref={inforRef} handleScroll={handleScroll} />
          <Suspense fallback={<LinearProgress color="secondary" />}>
            <About ref={aboutRef} />
          </Suspense>
          <Suspense fallback={<LinearProgress color="secondary" />}>
            <Project ref={projectRef} />
          </Suspense>
          <Suspense fallback={<LinearProgress color="secondary" />}>
            <Skill ref={skillRef} />
          </Suspense>
          <Suspense fallback={<LinearProgress color="secondary" />}>
            <Experience ref={experienceRef} />
          </Suspense>
          <Suspense fallback={<LinearProgress color="secondary" />}>
            <More ref={moreRef} />
          </Suspense>
        </Container>
        <ScrollTop>
          <Fab size="small" aria-label="scroll back to top">
            <KeyboardArrowUp />
          </Fab>
        </ScrollTop>
      </div>
    </HelmetProvider>
  );
}

export default App;

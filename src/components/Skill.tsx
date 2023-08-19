import {
  Box,
  Card,
  CardContent,
  SvgIcon,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import { useEffect, useState } from "react";
import { forwardRef } from "react";
import {
  BashOriginal,
  BootstrapPlain,
  CplusplusLine,
  DockerOriginal,
  GitOriginal,
  GoOriginal,
  Html5Original,
  JavascriptOriginal,
  LatexOriginal,
  MaterialuiOriginal,
  MysqlOriginal,
  PythonPlainWordmark,
  RailsPlainWordmark,
  ReactOriginal,
  ReduxOriginal,
  RubyOriginal,
  SassOriginal,
  TypescriptOriginal,
  VimOriginal,
} from "devicons-react";
import {
  Check,
  Construction,
  CoPresent,
  GroupWork,
  PendingActions,
  Science,
  SportsSoccer,
  Translate,
} from "@mui/icons-material";

interface SkillProps {
  ref: React.RefObject<HTMLDivElement>;
}

const programmings = [
  {
    name: "Ruby",
    description: "Currently using Ruby on Rails for backend development",
    icon: <RubyOriginal size={32} />,
  },
  {
    name: "TypeScript",
    description: "While working on my graduation thesis project",
    icon: <TypescriptOriginal size={32} />,
  },
  {
    name: "JavaScript",
    description:
      "My first programming language when I started learning web development",
    icon: <JavascriptOriginal size={32} />,
  },
  {
    name: "C/C++",
    description: "I used C/C++ in my first/second year at university",
    icon: <CplusplusLine size={32} />,
  },
  {
    name: "Python",
    description: "When I started learning Principles of Programming Languages",
    icon: <PythonPlainWordmark size={32} />,
  },
  {
    name: "HTML",
    description: "I use HTML a lot",
    icon: <Html5Original size={32} />,
  },
  {
    name: "CSS/SCSS",
    description: "As a web developer, I use CSS/SCSS a lot",
    icon: <SassOriginal size={32} />,
  },
  {
    name: "Go",
    description: "I'm currently learning Go",
    icon: <GoOriginal size={32} />,
  },
];

const miscellaneous = [
  {
    name: "Git",
    color: "#f34f29",
    icon: <GitOriginal size={32} />,
  },
  {
    name: "Vim/NeoVim",
    color: "#019733",
    icon: <VimOriginal size={32} />,
  },
  {
    name: "Shell/Bash",
    color: "#4eaa25",
    icon: <BashOriginal size={32} />,
  },
  {
    name: "LaTeX",
    color: "#008080",
    icon: <LatexOriginal size={32} />,
  },
];

const technologies = [
  {
    name: "Ruby on Rails",
    description: "My main backend framework",
    icon: <RailsPlainWordmark size={32} />,
  },
  {
    name: "React",
    description: "My main frontend framework",
    icon: <ReactOriginal size={32} />,
  },
  {
    name: "Redux/Redux Toolkit",
    description: "I use Redux to manage state in my React projects",
    icon: <ReduxOriginal size={32} />,
  },
  {
    name: "Bootstrap",
    description: "I have used Bootstrap in some of my projects",
    icon: <BootstrapPlain size={32} />,
  },
  {
    name: "Ant Design",
    description: "Main UI library for my Graduation Thesis Project",
    icon: (
      <SvgIcon>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 256 256"
        >
          <defs>
            <linearGradient
              id="logosAntDesign0"
              x1="62.102%"
              x2="108.197%"
              y1="0%"
              y2="37.864%"
            >
              <stop offset="0%" stop-color="#4285EB" />
              <stop offset="100%" stop-color="#2EC7FF" />
            </linearGradient>
            <linearGradient
              id="logosAntDesign1"
              x1="69.644%"
              x2="54.043%"
              y1="0%"
              y2="108.457%"
            >
              <stop offset="0%" stop-color="#29CDFF" />
              <stop offset="37.86%" stop-color="#148EFF" />
              <stop offset="100%" stop-color="#0A60FF" />
            </linearGradient>
            <linearGradient
              id="logosAntDesign2"
              x1="69.691%"
              x2="16.723%"
              y1="-12.974%"
              y2="117.391%"
            >
              <stop offset="0%" stop-color="#FA816E" />
              <stop offset="41.473%" stop-color="#F74A5C" />
              <stop offset="100%" stop-color="#F51D2C" />
            </linearGradient>
            <linearGradient
              id="logosAntDesign3"
              x1="68.128%"
              x2="30.44%"
              y1="-35.691%"
              y2="114.943%"
            >
              <stop offset="0%" stop-color="#FA8E7D" />
              <stop offset="51.264%" stop-color="#F74A5C" />
              <stop offset="100%" stop-color="#F51D2C" />
            </linearGradient>
          </defs>
          <g fill="none">
            <path
              fill="url(#logosAntDesign0)"
              d="M116.85 4.545L4.53 116.775a15.396 15.396 0 0 0 0 21.812l112.32 112.229c6.039 6.033 15.792 6.033 21.83 0l47.095-47.056c5.408-5.404 5.408-14.165 0-19.568c-5.408-5.404-14.176-5.404-19.584 0l-35.702 35.672c-1.503 1.502-3.784 1.502-5.287 0l-89.696-89.622c-1.503-1.502-1.503-3.781 0-5.283l89.696-89.623c1.503-1.501 3.784-1.501 5.287 0l35.702 35.673c5.408 5.404 14.176 5.404 19.584 0c5.408-5.404 5.408-14.164 0-19.568l-47.09-47.05c-6.063-5.904-15.82-5.856-21.835.154Z"
            />
            <path
              fill="url(#logosAntDesign1)"
              d="M116.85 4.545L4.53 116.775a15.396 15.396 0 0 0 0 21.812l112.32 112.229c6.039 6.033 15.792 6.033 21.83 0l47.095-47.056c5.408-5.404 5.408-14.165 0-19.568c-5.408-5.404-14.176-5.404-19.584 0l-35.702 35.672c-1.503 1.502-3.784 1.502-5.287 0l-89.696-89.622c-1.503-1.502-1.503-3.781 0-5.283l89.696-89.623c3.742-3.226 9.849-9.76 18.815-11.29c6.664-1.135 13.95 1.365 21.857 7.5L138.686 4.39c-6.064-5.903-15.82-5.855-21.836.155Z"
            />
            <path
              fill="url(#logosAntDesign2)"
              d="M196.647 173.754c5.408 5.404 14.176 5.404 19.584 0l34.739-34.71a15.396 15.396 0 0 0 0-21.812l-35.041-34.89c-5.421-5.397-14.192-5.389-19.603.018c-5.408 5.404-5.408 14.164 0 19.568l23.667 23.648c1.503 1.502 1.503 3.781 0 5.283l-23.346 23.327c-5.408 5.404-5.408 14.165 0 19.568Z"
            />
            <ellipse
              cx="128.327"
              cy="128.242"
              fill="url(#logosAntDesign3)"
              rx="30.327"
              ry="30.302"
            />
          </g>
        </svg>
      </SvgIcon>
    ),
  },
  {
    name: "Material UI",
    description: "Main UI library for this Portfolio",
    icon: <MaterialuiOriginal size={24} />,
  },
  {
    name: "Docker",
    description: "I use Docker for my work",
    icon: <DockerOriginal size={32} />,
  },
  {
    name: "MySQL",
    description: "I use MySQL for my work",
    icon: <MysqlOriginal size={32} />,
  },
];

const softSkills = [
  {
    name: "Teamwork",
    icon: <GroupWork sx={{ color: "#f34f29" }} />,
  },
  {
    name: "Time management",
    icon: <PendingActions sx={{ color: "#f4a261" }} />,
  },
  {
    name: "Problem solving",
    icon: <Construction sx={{ color: "#e9c46a" }} />,
  },
  {
    name: "Adaptability",
    icon: <Check sx={{ color: "#2a9d8f" }} />,
  },
  {
    name: "Self-study",
    icon: <Science sx={{ color: "#264653" }} />,
  },
  {
    name: "Presentation",
    icon: <CoPresent sx={{ color: "#e76f51" }} />,
  },
  {
    name: "English 800 TOEIC",
    icon: <Translate sx={{ color: "#e63946" }} />,
  },
  {
    name: "Can play a lot of sports",
    icon: <SportsSoccer sx={{ color: "#c77dff" }} />,
  },
];
interface TabPanelProps {
  index: number;
  value: number;
  data: Record<string, any>[];
}
function TabPanel(props: TabPanelProps) {
  const { data, index, value } = props;

  return (
    <Grid
      container
      spacing={2}
      alignItems="top"
      sx={{
        display: value === index ? "flex" : "none",
      }}
    >
      {data.map((item, index) => (
        <Grid xs={12} sm={6} md={3} key={index}>
          <Card sx={{ height: "100%" }}>
            <CardContent>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                gap={1}
              >
                {item.icon}
                <Typography fontSize={16} align="center">
                  {item.name}
                </Typography>
                <Typography
                  variant="caption"
                  align="center"
                  color="text.secondary"
                >
                  {item?.description}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

const Skill = forwardRef<HTMLDivElement, SkillProps>((_, ref) => {
  const [value, setValue] = useState(2);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  useEffect(() => {
    setValue(0);
  }, []);

  return (
    <Box
      className="min-vh-100"
      ref={ref}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      paddingBottom={8}
    >
      <Typography
        variant="h3"
        align="center"
        sx={{ color: "#f8f9fa" }}
        marginBottom={2}
      >
        Skills
      </Typography>
      <Grid container width="100%" spacing={2} minHeight="50vh">
        <Grid xs={12} sm={3} md={2}>
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            textColor="inherit"
            sx={{ bgcolor: "rgba(0,0,0,0.3)", borderRadius: "8px" }}
          >
            <Tab label="Programming" sx={{ color: "#f8f9fa" }} />
            <Tab label="Technologies" sx={{ color: "#f8f9fa" }} />
            <Tab label="Miscellaneous" sx={{ color: "#f8f9fa" }} />
            <Tab label="Soft skills" sx={{ color: "#f8f9fa" }} />
          </Tabs>
        </Grid>

        <Grid xs={12} sm={9} md={10}>
          <TabPanel index={0} value={value} data={programmings} />
          <TabPanel index={1} value={value} data={technologies} />
          <TabPanel index={2} value={value} data={miscellaneous} />
          <TabPanel index={3} value={value} data={softSkills} />
        </Grid>
      </Grid>
    </Box>
  );
});
export default Skill;

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
      <img
        src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
        height="32"
        width="32"
        alt="antd"
      />
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

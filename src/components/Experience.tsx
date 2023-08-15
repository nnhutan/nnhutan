import { Box, Typography } from "@mui/material";
import { forwardRef } from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import { School } from "@mui/icons-material";

interface ExperienceProps {
  ref: React.RefObject<HTMLDivElement>;
}

const Experience = forwardRef<HTMLDivElement, ExperienceProps>((_, ref) => {
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
        variant="h2"
        align="center"
        sx={{ color: "#f8f9fa" }}
        marginBottom={2}
      >
        Experiences
      </Typography>
      <Timeline
        position="alternate"
        sx={{ width: "100%", flexGrow: 0, py: 4 }}
      >
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="text.secondary"
          >
            2022 -- Current
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: "primary.main" }} />
            <TimelineDot color="primary" sx={{ mx: 1 }}>
              <LaptopMacIcon />
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: "primary.main" }} />
          </TimelineSeparator>
          <TimelineContent
            sx={{
              py: "12px",
              px: 2,
              bgcolor: "rgba(255, 255, 255, 0.08)",
              borderRadius: "8px",
            }}
          >
            <Typography variant="h6" component="span">
              Work at Lixibox
            </Typography>
            <Typography>Backend developer</Typography>
            <Typography>
              I'm working on projects the are related to the e-commerce field.
              Building RESTful APIs, microservices, and other backend-related
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="text.secondary"
          >
            2019 -- 2023
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
            <TimelineDot color="secondary" sx={{ mx: 1 }}>
              <School />
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
          </TimelineSeparator>
          <TimelineContent
            sx={{
              py: "12px",
              px: 2,
              bgcolor: "rgba(255, 255, 255, 0.08)",
              borderRadius: "8px",
            }}
          >
            <Typography variant="h6" component="span">
              Study at Ho Chi Minh University of Technology
            </Typography>
            <Typography>Computer Science - Software Engineering</Typography>
            <Typography>GPA: 3.4/4 -- TOEIC: 800</Typography>
            <Typography>I gain a lot of knowledge here!</Typography>
            <Typography>
              Best favorite subject: Principle of Programming Language
            </Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Box>
  );
});
export default Experience;

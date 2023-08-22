import {
  Box,
  Chip,
  Divider,
  Hidden,
  List,
  ListItem,
  ListItemIcon,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { forwardRef } from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import { ControlCamera, School } from "@mui/icons-material";
import { useTranslation } from "react-i18next";

interface ExperienceProps {
  ref: React.RefObject<HTMLDivElement>;
}

const Experience = forwardRef<HTMLDivElement, ExperienceProps>((_, ref) => {
  const { t } = useTranslation(["core", "experiences"]);
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
        {t("experiences.title")}
      </Typography>
      <Hidden smUp>
        <Stack sx={{ width: "100%" }} direction="column" spacing={2}>
          <Chip
            label={t("lixibox.time", { ns: "experiences" })}
            color="primary"
            icon={<LaptopMacIcon />}
          />
          <Paper
            sx={{
              py: "12px",
              px: 2,
              borderRadius: "8px",
            }}
          >
            <Typography variant="h6" component="span">
              {t("lixibox.title", { ns: "experiences" })}
            </Typography>
            <Typography>
              {t("lixibox.position", { ns: "experiences" })}
            </Typography>
            <Typography fontSize={14} color="text.secondary">
              {t("lixibox.description", { ns: "experiences" })}
            </Typography>
          </Paper>
          <Chip
            label={t("hcmut.time", { ns: "experiences" })}
            color="secondary"
            icon={<School />}
          />
          <Paper
            sx={{
              py: "12px",
              px: 2,
              borderRadius: "8px",
            }}
          >
            <Typography variant="h6" component="span">
              {t("hcmut.title", { ns: "experiences" })}
            </Typography>
            <Typography>
              {t("hcmut.major", { ns: "experiences" })}
            </Typography>
            <Typography gutterBottom>
              {t("hcmut.score", { ns: "experiences" })}
            </Typography>
            <Divider />
            <Typography
              fontWeight={500}
              color="text.secondary"
              marginTop={1}
            >
              {t("hcmut.top_subject", { ns: "experiences" })}
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <ControlCamera />
                </ListItemIcon>
                <Typography>
                  {t("hcmut.ppl", { ns: "experiences" })}
                </Typography>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <ControlCamera />
                </ListItemIcon>
                <Typography>
                  {t("hcmut.algo", { ns: "experiences" })}
                </Typography>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <ControlCamera />
                </ListItemIcon>
                <Typography>
                  {t("hcmut.sa", { ns: "experiences" })}
                </Typography>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <ControlCamera />
                </ListItemIcon>
                <Typography>
                  {t("hcmut.se", { ns: "experiences" })}
                </Typography>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <ControlCamera />
                </ListItemIcon>
                <Typography>
                  {t("hcmut.cn", { ns: "experiences" })}
                </Typography>
              </ListItem>
            </List>
          </Paper>
        </Stack>
      </Hidden>
      <Hidden only="xs">
        <Timeline
          position="alternate-reverse"
          sx={{ width: "100%", flexGrow: 0, py: 4 }}
        >
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              variant="body2"
              color="text.secondary"
            >
              {t("lixibox.time", { ns: "experiences" })}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector sx={{ bgcolor: "primary.main" }} />
              <TimelineDot color="primary" sx={{ mx: 1 }}>
                <LaptopMacIcon />
              </TimelineDot>
              <TimelineConnector sx={{ bgcolor: "primary.main" }} />
            </TimelineSeparator>
            <TimelineContent>
              <Paper
                sx={{
                  py: "12px",
                  px: 2,
                  borderRadius: "8px",
                }}
              >
                <Typography variant="h6" component="span">
                  {t("lixibox.title", { ns: "experiences" })}
                </Typography>
                <Typography>
                  {t("lixibox.position", { ns: "experiences" })}
                </Typography>
                <Typography>
                  {t("lixibox.description", { ns: "experiences" })}
                </Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              variant="body2"
              color="text.secondary"
            >
              {t("hcmut.time", { ns: "experiences" })}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
              <TimelineDot color="secondary" sx={{ mx: 1 }}>
                <School />
              </TimelineDot>
              <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
            </TimelineSeparator>
            <TimelineContent>
              <Paper
                sx={{
                  py: "12px",
                  px: 2,
                  borderRadius: "8px",
                }}
              >
                <Typography variant="h6" component="span">
                  {t("hcmut.title", { ns: "experiences" })}
                </Typography>
                <Typography>
                  {t("hcmut.major", { ns: "experiences" })}
                </Typography>
                <Typography gutterBottom>
                  {t("hcmut.score", { ns: "experiences" })}
                </Typography>
                <Divider />
                <Typography
                  fontWeight={500}
                  color="text.secondary"
                  marginTop={1}
                >
                  {t("hcmut.top_subject", { ns: "experiences" })}
                </Typography>
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <ControlCamera />
                    </ListItemIcon>
                    <Typography>
                      {t("hcmut.ppl", { ns: "experiences" })}
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <ControlCamera />
                    </ListItemIcon>
                    <Typography>
                      {t("hcmut.algo", { ns: "experiences" })}
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <ControlCamera />
                    </ListItemIcon>
                    <Typography>
                      {t("hcmut.sa", { ns: "experiences" })}
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <ControlCamera />
                    </ListItemIcon>
                    <Typography>
                      {t("hcmut.se", { ns: "experiences" })}
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <ControlCamera />
                    </ListItemIcon>
                    <Typography>
                      {t("hcmut.cn", { ns: "experiences" })}
                    </Typography>
                  </ListItem>
                </List>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </Hidden>
    </Box>
  );
});
export default Experience;

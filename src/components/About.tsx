import { House, LocationOn } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Divider,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import { forwardRef, lazy, useEffect, useRef, useState } from "react";
import ImageAvt from "../../avatar.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import useIsInViewport from "../hooks/viewportHook";
const Typed = lazy(() => import("react-typed"));

interface AboutProps {
  ref: React.RefObject<HTMLDivElement>;
}

const About = forwardRef<HTMLDivElement, AboutProps>((_, ref) => {
  const [show, setShow] = useState(false);
  const helloRef = useRef<HTMLDivElement>(null);
  const inViewport = useIsInViewport(helloRef);

  useEffect(() => {
    if (show) return;
    if (inViewport) {
      setShow(true);
    }
  }, [inViewport]);

  return (
    <Box
      className="min-vh-100"
      ref={ref}
      display="flex"
      alignItems="center"
      flexDirection="column"
      justifyContent="center"
      paddingBottom={8}
    >
      <Typography
        variant="h3"
        align="center"
        sx={{ color: "#f8f9fa" }}
        marginBottom={2}
      >
        About me
      </Typography>
      <Paper sx={{ paddingY: 5 }}>
        <Box padding={2}>
          <Grid container spacing={2} alignItems="center">
            <Grid
              xs={12}
              md={6}
              alignItems="center"
              display="flex"
              flexDirection="column"
              gap={2}
            >
              <Avatar
                alt="avatar"
                src={ImageAvt}
                sx={{
                  aspectRatio: "1/1",
                  width: "clamp(200px, 30vw, 300px)",
                  height: "auto",
                  border: "2px solid #f1f3f5",
                }}
              />
              <Stack
                spacing={{ xs: 0.5, md: 2 }}
                direction={{ xs: "column", md: "row" }}
                divider={<Divider orientation="vertical" flexItem />}
                justifyContent="center"
              >
                <Box display="flex" alignItems="center" gap={2}>
                  <House />
                  <Typography variant="body1">Le Thuy, Quang Binh</Typography>
                </Box>
                <Box display="flex" alignItems="center" gap={2}>
                  <LocationOn />
                  <Typography variant="body1">Go Vap, Ho Chi Minh</Typography>
                </Box>
              </Stack>
            </Grid>
            <Grid xs={12} md={6}>
              <Typography
                variant="body1"
                fontSize={20}
                align="center"
                paddingBottom={5}
                ref={helloRef}
              >
                {show
                  ? (
                    <Typed
                      typeSpeed={40}
                      strings={[
                        `Hello world, I'm <span style="font-weight: 600;">Tan!</span>`,
                      ]}
                    />
                  )
                  : (
                    null
                  )}
              </Typography>
              <Typography
                variant="body1"
                fontSize={20}
                align="center"
                paddingBottom={5}
              >
                I graduated from{" "}
                <span style={{ fontWeight: 600 }}>
                  Ho Chi Minh University of Technology
                </span>{" "}
                <LazyLoadImage
                  effect="blur"
                  src="https://e-learning.hcmut.edu.vn/pluginfile.php/1/core_admin/logo/0x200/1685588876/logoBK.png"
                  width={18}
                  height={18}
                  style={{ verticalAlign: "baseline" }}
                  alt="BKU logo"
                />{" "}
                in 2023 with a bachelor's degree in{" "}
                <span style={{ fontWeight: 600 }}>
                  Computer Science - Software Engineering.
                </span>
              </Typography>
              <Typography
                variant="body1"
                fontSize={20}
                align="center"
                paddingBottom={5}
              >
                I'm currently living and working in Ho Chi Minh city as a{" "}
                <span style={{ fontWeight: 600 }}>Software Engineer</span>
                .I'm passionate about programming and I love to learn new
                things.
              </Typography>
              <Box textAlign="center">
                <Button
                  variant="outlined"
                  sx={{ marginX: "auto" }}
                  color="inherit"
                  size="large"
                  href="https://dinhnhutan.notion.site/DINH-NHU-TAN-fbaf5cec35b2471c8a24922572f5cbbf?pvs=4"
                  target="_blank"
                >
                  Resume
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Box>
  );
});

export default About;

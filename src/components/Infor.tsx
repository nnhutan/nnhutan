import {
  Facebook,
  GitHub,
  Instagram,
  LinkedIn,
  Twitter,
} from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";
import { forwardRef } from "react";
import Typed from "react-typed";

interface InforProps {
  ref: React.RefObject<HTMLDivElement>;
  handleScroll: (item: string) => void;
}

const Infor = forwardRef<HTMLDivElement, InforProps>(
  ({ handleScroll }, ref) => {
    return (
      <Stack
        className="min-vh-100"
        justifyContent="center"
        ref={ref}
        paddingBottom={8}
      >
        <Typography
          variant="h2"
          align="center"
          sx={{
            color: "#f8f9fa",
          }}
          marginBottom={2}
        >
          Dinh Nhu Tan
        </Typography>
        <Typography
          variant="body1"
          align="center"
          sx={{
            color: "#f8f9fa",
          }}
        >
          Software Engineer
        </Typography>
        <Typography
          fontSize={24}
          fontWeight={300}
          align="center"
          sx={{
            color: "#f8f9fa",
          }}
        >
          <Typed
            strings={[
              "Code... where logic becomes magic!",
            ]}
            typeSpeed={80}
          />
        </Typography>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={1}
          sx={{
            color: "#f8f9fa",
          }}
          paddingY={6}
        >
          <Button
            color="custom"
            href="https://github.com/nnhutan"
            target="_blank"
            aria-label="GitHub"
          >
            <GitHub fontSize="large" />
          </Button>
          <Button
            color="custom"
            href="https://facebook.com/dinhnhutan"
            target="_blank"
            aria-label="Facebook"
          >
            <Facebook fontSize="large" />
          </Button>
          <Button
            color="custom"
            href="https://instagram.com/dinhnhutan"
            target="_blank"
            aria-label="Instagram"
          >
            <Instagram fontSize="large" />
          </Button>
          <Button
            color="custom"
            href="https://www.linkedin.com/in/dinhnhutan/"
            target="_blank"
            aria-label="LinkedIn"
          >
            <LinkedIn fontSize="large" />
          </Button>
          <Button
            color="custom"
            href="https://twitter.com/nnhutan"
            target="_blank"
            aria-label="Twitter"
          >
            <Twitter fontSize="large" />
          </Button>
        </Stack>
        <div>
          <Box textAlign="center">
            <Button
              variant="outlined"
              color="custom"
              size="large"
              onClick={() => handleScroll("About")}
              href="#about"
            >
              More about me
            </Button>
          </Box>
        </div>
      </Stack>
    );
  },
);

export default Infor;

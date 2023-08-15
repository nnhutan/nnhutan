import {
  Facebook,
  GitHub,
  Instagram,
  LinkedIn,
  Twitter,
} from "@mui/icons-material";
import { Button, Stack, Typography } from "@mui/material";
import { forwardRef } from "react";

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
          >
            <GitHub fontSize="large" />
          </Button>
          <Button
            color="custom"
            href="https://facebook.com/dinhnhutan"
            target="_blank"
          >
            <Facebook fontSize="large" />
          </Button>
          <Button
            color="custom"
            href="https://instagram.com/dinhnhutan"
            target="_blank"
          >
            <Instagram fontSize="large" />
          </Button>
          <Button
            color="custom"
            href="https://www.linkedin.com/in/dinhnhutan/"
            target="_blank"
          >
            <LinkedIn fontSize="large" />
          </Button>
          <Button
            color="custom"
            href="https://twitter.com/nnhutan"
            target="_blank"
          >
            <Twitter fontSize="large" />
          </Button>
        </Stack>
        <div>
          <Button
            variant="outlined"
            sx={{ marginX: "auto", display: "block" }}
            color="custom"
            size="large"
            onClick={() => handleScroll("About")}
          >
            More about me
          </Button>
        </div>
      </Stack>
    );
  },
);

export default Infor;
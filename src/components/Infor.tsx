import {
  Facebook,
  GitHub,
  Instagram,
  LinkedIn,
  Twitter,
} from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";
import { forwardRef, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import Typed from "react-typed";

interface InforProps {
  ref: React.RefObject<HTMLDivElement>;
  handleScroll: (item: string) => void;
}

const Infor = forwardRef<HTMLDivElement, InforProps>(
  ({ handleScroll }, ref) => {
    const { t } = useTranslation("core");
    const sloganRef = useRef(null);

    useEffect(() => {
      if (sloganRef.current) {
        const current = sloganRef.current as any;
        current.typed.reset();
      }
    }, [t]);
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
          {t("author")}
        </Typography>
        <Typography
          variant="body1"
          align="center"
          sx={{
            color: "#f8f9fa",
          }}
        >
          {t("info.job")}
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
            strings={[t("info.slogan")]}
            typeSpeed={80}
            ref={sloganRef}
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
              {t("info.button")}
            </Button>
          </Box>
        </div>
      </Stack>
    );
  },
);

export default Infor;

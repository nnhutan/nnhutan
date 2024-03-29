import {
  Box,
  Button,
  Chip,
  Divider,
  Paper,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2"; // Grid version 2
import {
  Repos,
  useGetReposLanguagesQuery,
  useGetReposOrgLanguagesQuery,
} from "../api/reposApi";
import { useEffect, useState } from "react";
import { GitHub } from "@mui/icons-material";
import { useTranslation } from "react-i18next";

interface ReposCardProps {
  repo: Repos;
}

interface Language {
  name: string;
  percent: number;
}

const ReposCard: React.FC<ReposCardProps> = ({ repo }) => {
  const { t } = useTranslation("core");
  const [languages, setLanguages] = useState<Language[]>([]);
  const { data, isLoading } = useGetReposLanguagesQuery(repo.name, {
    skip: repo.owner.login !== "nnhutan",
  });
  const { data: orgData, isLoading: isOrgLoading } =
    useGetReposOrgLanguagesQuery(repo.name, {
      skip: repo.owner.login === "nnhutan",
    });

  if (repo.private) return null;

  useEffect(() => {
    const target = data || orgData;
    if (target) {
      const total = Object.values(target).reduce((a, b) => a + b, 0); // sum of all values
      const result = Object.keys(target).map((key) => ({
        name: key,
        percent: Math.round((target[key] / total) * 100),
      }));
      setLanguages(result);
    }
  }, [data, isLoading, orgData, isOrgLoading]);

  return (
    <Grid xs={12} md={6} sm={6}>
      <Paper sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
        <Box
          padding={2}
          display="flex"
          flexDirection="column"
          flex={1}
        >
          <Typography
            variant="body1"
            fontSize={24}
            gutterBottom
          >
            {repo.name}
          </Typography>
          <Typography color="text.secondary" marginBottom={1} flex={1}>
            {repo.description || repo.full_name}
          </Typography>
          <Divider />
          <Stack direction="row" flexWrap="wrap" gap={1} marginTop={1}>
            <Typography color="text.secondary">
              {t("projects.languages")}:
            </Typography>
            {isLoading
              ? (
                <Skeleton
                  variant="text"
                  sx={{ fontSize: "14px" }}
                  width="80%"
                  animation="wave"
                />
              )
              : (
                languages?.map((language) => (
                  <Chip
                    size="small"
                    key={language.name}
                    label={
                      <Typography variant="caption" fontWeight="bold">
                        {language.name}: {language.percent}%
                      </Typography>
                    }
                  />
                ))
              )}
          </Stack>
        </Box>
        <Box
          padding={2}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Button
            variant="outlined"
            startIcon={<GitHub />}
            color="inherit"
            href={repo.html_url}
            target="_blank"
            sx={{ minWidth: "fit-content" }}
          >
            {t("projects.repository")}
          </Button>
          <Typography
            color="text.secondary"
            sx={{ marginLeft: "auto" }}
            variant="caption"
            textAlign="right"
          >
            {t("projects.update")}{" "}
            {new Date(repo.updated_at).toLocaleDateString()}
          </Typography>
        </Box>
      </Paper>
    </Grid>
  );
};

export default ReposCard;

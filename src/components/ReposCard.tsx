import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Divider,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import { Repos, useGetReposLanguagesQuery } from "../api/reposApi";
import { useEffect, useState } from "react";
import { GitHub } from "@mui/icons-material";

interface ReposCardProps {
  repo: Repos;
}

interface Language {
  name: string;
  percent: number;
}

const ReposCard: React.FC<ReposCardProps> = ({ repo }) => {
  const [languages, setLanguages] = useState<Language[]>([]);
  const { data, isLoading } = useGetReposLanguagesQuery(repo.name);

  if (repo.private) return null;

  useEffect(() => {
    if (data) {
      const total = Object.values(data).reduce((a, b) => a + b, 0); // sum of all values
      const result = Object.keys(data).map((key) => ({
        name: key,
        percent: Math.round((data[key] / total) * 100),
      }));
      setLanguages(result);
    }
  }, [data, isLoading]);

  return (
    <Grid xs={6}>
      <Card>
        <CardContent>
          <Typography variant="h5" gutterBottom>{repo.name}</Typography>
          <Typography color="text.secondary" marginBottom={2}>
            {repo.description || repo.full_name}
          </Typography>
          <Divider />
          <Stack direction="row" flexWrap="wrap" gap={1} marginTop={2}>
            <Typography color="text.secondary">
              Languages:
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
        </CardContent>
        <CardActions sx={{ padding: "16px" }}>
          <Button
            variant="outlined"
            startIcon={<GitHub />}
            color="inherit"
            href={repo.html_url}
            target="_blank"
          >
            Repository
          </Button>
          <Typography
            color="text.secondary"
            sx={{ marginLeft: "auto" }}
            variant="caption"
          >
            Updated on {new Date(repo.updated_at).toLocaleDateString()}
          </Typography>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ReposCard;

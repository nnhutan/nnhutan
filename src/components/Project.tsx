import { Box, Pagination, Skeleton, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import { useEffect, useState } from "react";
import { Repos, useGetOrgReposQuery, useGetReposQuery } from "../api/reposApi";
import ReposCard from "./ReposCard";
import { forwardRef } from "react";

interface ProjectProps {
  ref: React.RefObject<HTMLDivElement>;
}
const perPage = 4;

const Project = forwardRef<HTMLDivElement, ProjectProps>((_, ref) => {
  const { data, isLoading } = useGetReposQuery(undefined);
  const { data: orgRepos, isLoading: isLoadingOrgRepos } = useGetOrgReposQuery(
    undefined,
  );
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [displayData, setDisplayData] = useState<Repos[]>([]);
  const [totalData, setTotalData] = useState<Repos[]>([]);

  useEffect(() => {
    if (data && orgRepos) {
      const totalData = [...data, ...orgRepos].sort(
        (a, b) =>
          new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime(),
      );

      const start = (page - 1) * perPage;
      const end = page * perPage;

      setTotalPage(Math.ceil(totalData.length / perPage));
      setPage(1);
      setDisplayData(totalData.slice(start, end));
      setTotalData(totalData);
    }
  }, [isLoading, isLoadingOrgRepos]);

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
        Projects
      </Typography>
      {!isLoading && totalPage > 1 && (
        <Pagination
          count={totalPage}
          page={page}
          onChange={(_, value) => {
            const start = (value - 1) * perPage;
            const end = value * perPage;
            setDisplayData(totalData?.slice(start, end) || []);
            setPage(value);
          }}
          sx={{ display: "flex", justifyContent: "center", marginBottom: 2 }}
        />
      )}

      <Grid container spacing={2} sx={{ width: "100%" }}>
        {isLoading
          ? (
            Array.from(Array(4).keys()).map((_, index) => (
              <Grid md={6} sm={6} xs={12} key={index}>
                <Skeleton
                  variant="rectangular"
                  width={400}
                  height={240}
                  animation="wave"
                  sx={{ minWidth: "100%" }}
                />
              </Grid>
            ))
          )
          : (
            displayData?.map((repo) => <ReposCard key={repo.id} repo={repo} />)
          )}
      </Grid>
    </Box>
  );
});
export default Project;

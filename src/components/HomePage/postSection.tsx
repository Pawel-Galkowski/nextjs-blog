import { Box, SxProps, Typography } from "@mui/material";
import PostsGrid from "@/components/posts/PostsGrid";
import { Theme } from "@mui/system";

const HomePage: React.FC<{ posts: any }> = ({ posts }) => ( //sekcja postow
  <Box sx={homePageSectionStyles}>
    <Typography variant="h4">Featured Posts</Typography>
    <PostsGrid posts={posts} />
  </Box>
);

export default HomePage;

const homePageSectionStyles: SxProps<Theme> = (theme) => ({
  width: "90%",
  maxWidth: "80rem",
  margin: "var(--size-8) auto",
  "& h4": {
    fontSize: "var(--size-8)",
    color: "var(--color-grey-800)",
    textAlign: "center",
    [theme.breakpoints.up("md")]: {
      fontSize: "var(--size-16)",
    },
  },
});

import { Box, SxProps, Typography } from "@mui/material";
import PostsGrid from "@/components/posts/PostsGrid";
import { Theme } from "@mui/system";
import { PostDataProps } from "@/pages/posts/utils";

export const featuredPostsTestID = "featuredPostsTestID";
const FeaturedPosts: React.FC<{ posts: PostDataProps[] | undefined }> = (
  { posts } //sekcja postow
) =>
  posts && (
    <Box sx={featuredPostsStyles} data-testid={featuredPostsTestID}>
      <Typography variant="h4">Featured Posts</Typography>
      <PostsGrid posts={posts} />
    </Box>
  );

export default FeaturedPosts;

const featuredPostsStyles: SxProps<Theme> = (theme) => ({
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

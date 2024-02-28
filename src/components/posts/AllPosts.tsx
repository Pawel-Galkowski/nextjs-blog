import { Box, SxProps, Theme, Typography } from "@mui/material";
import PostsGrid from "@/components/posts/PostsGrid";
import React from "react";

const AllPosts: React.FC<{ posts: any }> = ({ posts }) => (
  <Box sx={allPostsStyles}>
    <Typography variant="h2">All Posts</Typography>
    <PostsGrid posts={posts} />
  </Box>
);

export default AllPosts;

const allPostsStyles: SxProps<Theme> = (theme) => ({
  width: "90%",
  maxWidth: "60rem",
  margin: "var(--size-8) auto",
  "& h1": {
    fontSize: "var(--size-8)",
    color: "var(--color-grey-800)",
    textAlign: "center",
    [theme.breakpoints.up("md")]: {
      fontSize: "var(--size-16)",
    },
  },
});

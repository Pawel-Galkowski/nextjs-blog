import { Box } from "@mui/material";
import PostItem from "./PostItem";
import { v4 as uuidv4 } from "uuid";

const PostsGrid: React.FC<{ posts: any }> = ({ posts }) => (
  <Box sx={gridStyles}>
    {posts.map((post: any) => (
      <PostItem key={uuidv4() as string} post={post} />
    ))}
  </Box>
);

export default PostsGrid;

const gridStyles = {
  listStyle: "none",
  margin: 0,
  padding: 0,
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(20rem, 1fr))",
  gap: "1.5rem",
  alignContent: "center",
};

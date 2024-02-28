import { Box, SxProps, Theme, Typography } from "@mui/material";
import Image from "next/image";

const PostHeader: React.FC<{ title: any; image: any }> = ({ title, image }) => (
  <Box sx={headerStyles}>
    <Typography variant="h1">{title}</Typography>
    <Image src={image} alt={title} width={200} height={150} />
  </Box>
);

export default PostHeader;

const headerStyles: SxProps<Theme> = (theme) => ({
  paddingBottom: "var(--size-8)",
  borderBottom: "8px solid var(--color-primary-100)",
  margin: "var(--size-4) 0",
  display: "flex",
  flexDirection: "column-reverse",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "1rem",
  "& h1": {
    fontSize: "var(--size-8)",
    color: "var(--color-primary-500)",
    margin: 0,
    lineHeight: "initial",
    textAlign: "center",
  },
  "& img": {
    objectFit: "cover",
    width: "200px",
    height: "120px",
  },
  [theme.breakpoints.up("md")]: {
    margin: "var(--size-8) 0",
    flexDirection: "row",
    alignItems: "flex-end",
    "& h1": {
      fontSize: "var(--size-16)",
      textAlign: "left",
    },
  },
});

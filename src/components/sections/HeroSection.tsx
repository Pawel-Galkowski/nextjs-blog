import { Box, SxProps, Typography } from "@mui/material";
import Image from "next/image";

const HeroSection = () => (
  <Box sx={heroStyles}>
    <Box sx={imageStyles}>
      <Image
        src="/images/site/pawel.png"
        alt="Pawel's image"
        width={300}
        height={300}
      />
    </Box>
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Typography variant="h2">Hi, I'm Pawel</Typography>
      <Typography variant="body2">
        Example blog about web development - especially React.
      </Typography>
    </Box>
  </Box>
);

export default HeroSection;

const heroStyles: SxProps = {
  textAlign: "center",
  backgroundImage:
    "linear-gradient(to bottom, var(--color-grey-900), var(--color-grey-800))",
  display: "flex",
  flexDirection: "row",
  gap: 5,
  padding: [2, 5],
  "& h2": {
    fontSize: "var(--size-16)",
    margin: "var(--size-4) 0",
    color: "var(--color-grey-300)",
  },
  "& p": {
    fontSize: "var(--size-6)",
    color: "var(--color-grey-200)",
    width: "90%",
    maxWidth: "40rem",
    margin: "auto",
  },
};

const imageStyles = {
  width: "300px",
  height: "300px",
  boxShadow: "0 1px 8px rgba(0, 0, 0, 0.2)",
  borderRadius: "50%",
  overflow: "hidden",
  backgroundColor: "var(--color-grey-700)",
  margin: "auto",
};

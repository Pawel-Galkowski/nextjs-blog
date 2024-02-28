import { Box, SxProps, Theme } from "@mui/material";

const Logo = () => <Box sx={logoStyles}>Blog Logo</Box>;

export default Logo;

const logoStyles: SxProps<Theme> = (theme) => ({
  textTransform: "uppercase",
  fontSize: "var(--size-5)",
  fontWeight: "bold",
  fontFamily: '"Oswald", sans-serif',
  color: "var(--color-grey-50)",
  [theme.breakpoints.up("md")]: {
    fontSize: "var(--size-8)",
  },
});

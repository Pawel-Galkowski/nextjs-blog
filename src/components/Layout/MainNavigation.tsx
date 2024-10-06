import Link from "next/link";

import Logo from "./Logo";
import {
  AppBar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  SxProps,
  Theme,
  Toolbar,
  Typography,
} from "@mui/material";
import { useCallback, useState } from "react";
import { Menu as MenuIcon } from "@mui/icons-material";
import { SearchComponent } from "../utils/SearchComponent";

export const mobileMenuTestId = "mobileMenuTestID";

export default function MainNavigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const onMenuClose = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  const onMenuOpen = useCallback(() => {
    setIsMobileMenuOpen(true);
  }, []);

  const MenuLinks = () => (
    <>
      <Link href="/">
        <MenuItem>Home</MenuItem>
      </Link>
      <Link href="/posts">
        <MenuItem>Posts</MenuItem>
      </Link>
      <Link href="/contact">
        <MenuItem>Contact</MenuItem>
      </Link>
    </>
  );

  const RenderMobileMenu = () => (
    <Menu
      id={mobileMenuTestId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={onMenuClose}
      onClick={onMenuOpen}
      sx={mobileMenuStyles}
    >
      <MenuLinks />
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={burgerIconStyles}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={logoStyles}>
            <Link href="/">
              <Logo />
            </Link>
          </Typography>
          <SearchComponent />
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={standardMenuStyles}>
            <MenuLinks />
          </Box>
        </Toolbar>
      </AppBar>
      <RenderMobileMenu />
    </Box>
  );
}

const burgerIconStyles: SxProps<Theme> = (theme) => ({
  mr: 2,
  display: "block",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
});

const logoStyles: SxProps<Theme> = (theme) => ({
  display: "none",
  [theme.breakpoints.up("md")]: {
    display: "block",
  },
});

const standardMenuStyles: SxProps<Theme> = (theme) => ({
  display: "none",
  flexDirection: "row",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
});

const mobileMenuStyles: SxProps<Theme> = (theme) => ({
  display: "none",
  [theme.breakpoints.down("sm")]: {
    display: "block",
  },
});

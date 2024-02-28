import { Fragment } from "react";

import MainNavigation from "./MainNavigation";
import { Box } from "@mui/material";

const Layout = (props: any) => (
  <Fragment>
    <MainNavigation />
    <Box>{props.children}</Box>
  </Fragment>
);

export default Layout;

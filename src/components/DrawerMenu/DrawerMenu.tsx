import React, { useState } from "react";
import { Box, IconButton, Toolbar, Typography, styled } from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import { RamenDining, Menu, Close } from "@mui/icons-material";
import { DRAWER_WIDTH } from "../../constants/constants";

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

interface DrawerMenuProps {
  menuList: React.ReactNode;
  themeIcon: React.ReactNode;
  pageTitle: string;
  children?: React.ReactNode;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer)(() => ({
  width: DRAWER_WIDTH,
  flexShrink: 0,
  whiteSpace: "nowrap",
  "& .MuiDrawer-paper": {
    width: DRAWER_WIDTH,
  },
}));

const DrawerMenu = (props: DrawerMenuProps) => {
  const { pageTitle, menuList, children } = props;

  const [mobileOpen, setMobileOpen] = useState(false);

  const container =
    window !== undefined ? () => window.document.body : undefined;

  const handleDrawerToggle = (state?: boolean) => {
    setMobileOpen(typeof state === "boolean" ? state : !mobileOpen);
  };

  const toolBar = (
    <Toolbar
      sx={{
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          display: "flex",
        }}
      >
        <RamenDining sx={{ display: { md: "flex" }, mr: 1 }} />
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            display: { md: "flex" },
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          LUNCH
        </Typography>
      </div>
      <IconButton
        color="inherit"
        aria-label="close drawer"
        edge="end"
        onClick={() => handleDrawerToggle(false)}
        sx={{ display: { md: "none" } }}
      >
        <Close />
      </IconButton>
    </Toolbar>
  );

  // Todo: Try to create seperate AppBar component
  // Todo: Reduce duplicate drawer element
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="fixed"
        sx={{
          width: { md: `calc(100% - ${DRAWER_WIDTH}px)` },
          ml: { md: `${DRAWER_WIDTH}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={() => handleDrawerToggle()}
            sx={{ mr: 2, display: { md: "none" } }}
          >
            <Menu />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            {pageTitle}
          </Typography>

          {props.themeIcon}
        </Toolbar>
      </AppBar>
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={() => handleDrawerToggle()}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", md: "none" },
          zIndex: "1301",
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: DRAWER_WIDTH,
          },
        }}
      >
        {toolBar}
        {menuList}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", md: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: DRAWER_WIDTH,
          },
        }}
        open
      >
        {toolBar}
        {menuList}
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />

        {children}
      </Box>
    </Box>
  );
};

export default DrawerMenu;

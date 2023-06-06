import { useContext } from "react";
import { useTheme } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import { Brightness4, Brightness7 } from "@mui/icons-material";

import "./App.css";
import { ColorModeContext } from "./components/ColorMode/ColorMode";

import DrawerMenu from "./components/DrawerMenu/DrawerMenu";
import LunchListPage from "./views/LunchListPage/LunchListPage";
import NavMenuList from "./components/MenuList/NavMenuList";

function App() {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  return (
    <DrawerMenu
      menuList={<NavMenuList />}
      themeIcon={
        <IconButton
          sx={{ ml: 1 }}
          onClick={colorMode.toggleColorMode}
          color="inherit"
        >
          {theme.palette.mode === "dark" ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
      }
      pageTitle="Lunch Menu"
    >
      <LunchListPage></LunchListPage>
    </DrawerMenu>
  );
}

export default App;

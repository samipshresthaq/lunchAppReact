import { useContext } from "react";
import { useTheme } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

import "./App.css";
import DrawerMenu from "./components/DrawerMenu/DrawerMenu";
import MenuList from "./components/MenuList/MenuList";
import { ColorModeContext } from "./components/ColorMode/ColorMode";
import LunchListPage from "./views/LunchListPage/LunchListPage";

function App() {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  return (
    <DrawerMenu
      menuList={<MenuList />}
      themeIcon={
        <IconButton
          sx={{ ml: 1 }}
          onClick={colorMode.toggleColorMode}
          color="inherit"
        >
          {theme.palette.mode === "dark" ? (
            <Brightness7Icon />
          ) : (
            <Brightness4Icon />
          )}
        </IconButton>
      }
      pageTitle="Lunch Menu"
    >
      <LunchListPage></LunchListPage>
    </DrawerMenu>
  );
}

export default App;

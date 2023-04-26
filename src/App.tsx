import { useState } from "react";
import "./App.css";
import DrawerMenu from "./components/DrawerMenu/DrawerMenu";
import HomePage from "./views/HomePage/HomePage";
import MenuList from "./components/MenuList/MenuList";

function App() {
  const [drawerState, setDrawerState] = useState(false);

  return (
    <DrawerMenu
      menuList={<MenuList drawerState={drawerState} />}
      drawerState={drawerState}
      setDrawerState={setDrawerState}
    >
      <HomePage></HomePage>
    </DrawerMenu>
  );
}

export default App;

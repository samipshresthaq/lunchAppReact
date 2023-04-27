import { useState } from "react";
import "./App.css";
import DrawerMenu from "./components/DrawerMenu/DrawerMenu";
import HomePage from "./views/HomePage/HomePage";
import MenuList from "./components/MenuList/MenuList";

function App() {
  return (
    <DrawerMenu menuList={<MenuList />} pageTitle="Lunch Menu">
      <HomePage></HomePage>
    </DrawerMenu>
  );
}

export default App;

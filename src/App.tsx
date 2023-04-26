import "./App.css";
import DrawerMenu from "./components/DrawerMenu/DrawerMenu";
import HomePage from "./views/HomePage/HomePage";

function App() {
  return (
    <DrawerMenu>
      <HomePage></HomePage>
    </DrawerMenu>
  );
}

export default App;

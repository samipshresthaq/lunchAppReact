import { useState } from "react";

import ListGroup from "./components/ListGroup";
import AlertComponent from "./components/Alert";
import Button from "@mui/material/Button";

import "./App.css";
import DrawerMenu from "./components/DrawerMenu/DrawerMenu";

function App() {
  const items = ["Pizza", "Burger", "Pasta", "Salad", "Sandwich"];

  const onSelected = (item: string) => {
    console.log(item, "From parent");
  };

  const [showAlert, setShow] = useState(false);

  return (
    <div>
      <ListGroup items={items} heading="Lunch Menu" onSelected={onSelected} />
      {showAlert && <AlertComponent
        show={showAlert}
        type="success"
        close={() => setShow(false)}
      >
        Simple Alert
      </AlertComponent>}

      <Button variant="outlined" onClick={() => setShow(true)}>Alert Me</Button>
      <DrawerMenu></DrawerMenu>
    </div>
  );
}

export default App;

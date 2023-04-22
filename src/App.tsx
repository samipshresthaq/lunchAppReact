import { useState } from "react";

import ListGroup from "./components/ListGroup";
import AlertComponent from "./components/alert";

import "./App.css";

function App() {
  const items = ["Pizza", "Burger", "Pasta", "Salad", "Sandwich"];

  const onSelected = (item: string) => {
    console.log(item, "From parent");
  };

  const [showAlert, setShow] = useState(false);

  return (
    <div>
      <ListGroup items={items} heading="Lunch Menu" onSelected={onSelected} />
      <AlertComponent
        show={showAlert}
        type="info"
        close={(visibility) => setShow(visibility)}
      >
        <h6>Simple Alert</h6>
      </AlertComponent>
      <button onClick={() => setShow(true)}>Show Alert</button>
    </div>
  );
}

export default App;

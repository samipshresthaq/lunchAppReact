import ListGroup from "./components/ListGroup"

import "./App.css";

function App() {
  const items = ["Pizza", "Burger", "Pasta", "Salad", "Sandwich"];
  const heading = "Lunch Menu";
  const onSelected = (item: string) => {
    console.log(item, 'From parent');
  };
  return <div>
    <ListGroup  items={items} heading={heading} onSelected={onSelected}/>
  </div>
}

export default App

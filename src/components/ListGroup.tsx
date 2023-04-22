import { useState } from "react";

interface LunchProps {
  heading: string;
  items: Array<string>;
  onSelected: (item: string) => void;
}

export default function ListGroup({ items, heading, onSelected }: LunchProps) {
  const getItems = () => {
    const [selectedIndex, updateIndex] = useState(-1);
    if (items.length === 0) {
      return <p>No items found</p>;
    }
    return (
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              index === selectedIndex
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              updateIndex(index);
              onSelected(item);
            }}
            key={item}
          >
            {item}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <>
      <h1>{heading}</h1>
      {getItems()}
    </>
  );
}

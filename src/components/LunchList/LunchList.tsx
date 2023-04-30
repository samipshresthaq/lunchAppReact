import { useState } from "react";
import LunchCard from "../CardComponent/LunchCard";

interface LunchProps {
  heading: string;
  items: Array<string>;
  onSelected: (item: string) => void;
}

export default function LunchList({ items, heading, onSelected }: LunchProps) {
  const getItems = () => {
    if (items.length === 0) {
      return <p>No items found</p>;
    }
    return (
      <>
        {items.map((item, index) => (
          <LunchCard></LunchCard>
          // <li
          //   className={
          //     index === selectedIndex
          //       ? "list-group-item active"
          //       : "list-group-item"
          //   }
          //   onClick={() => {
          //     updateIndex(index);
          //     onSelected(item);
          //   }}
          //   key={item}
          // >
          //   {item}
          // </li>
        ))}
      </>
    );
  };

  return (
    <>
      <h1>{heading}</h1>
      {getItems()}
    </>
  );
}

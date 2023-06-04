import LunchCard from "../CardComponent/LunchCard";

interface LunchProps {
  items: Array<string>;
  onSelected: (item: string) => void;
}

export default function LunchList({ items }: LunchProps) {
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

  return getItems();
}

import Grid from "@mui/material/Unstable_Grid2";

import LunchCard from "../CardComponent/LunchCard";
import { Fragment } from "react";

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
      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2 }}>
        {items.map((item, index) => (
          <Fragment key={item}>
            <Grid xs={12} sm={6} md={4} lg={3}>
              <LunchCard></LunchCard>
            </Grid>
          </Fragment>
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
      </Grid>
    );
  };

  return getItems();
}

import { Box } from "@mui/material";

import LunchList from "../../components/LunchList/LunchList";

const LunchListPage = () => {
  const items = ["Pizza", "Burger", "Pasta", "Salad", "Sandwich"];

  const onSelected = (item: string) => {
    console.log(item, "From parent");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <LunchList items={items} onSelected={onSelected} />
    </Box>
  );
};

export default LunchListPage;

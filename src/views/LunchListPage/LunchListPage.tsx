import { Box } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

import LunchList from "../../components/LunchList/LunchList";

const LunchListPage = () => {
  const items = ["Pizza", "Burger", "Pasta", "Salad", "Sandwich"];

  const onSelected = (item: string) => {
    console.log(item, "From parent");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid2 container spacing={2}>
        <LunchList items={items} onSelected={onSelected} />
      </Grid2>
    </Box>
  );
};

export default LunchListPage;

import LunchList from "../../components/LunchList/LunchList";

const LunchListPage = () => {
  const items = ["Pizza", "Burger", "Pasta", "Salad", "Sandwich"];

  const onSelected = (item: string) => {
    console.log(item, "From parent");
  };

  return (
    <>
      <LunchList items={items} heading="Lunch Menu" onSelected={onSelected} />
    </>
  );
};

export default LunchListPage;

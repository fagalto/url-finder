import Box from "@mui/material/Box/Box";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography/Typography";
import NoItems from "./NoItems";
import SearchItem from "./SearchItem";

const SearchList = <T,>(props: { list?: T[],itemClick:(value: string) => void }) => {
  const { list } = props
  const listItems =
    list !== undefined && list.length > 0 ? (
      list.map((item, i) => <SearchItem item={item} key={i} itemClick={props.itemClick} />)
    ) : (
      <NoItems />
    );

  const displayedList = (
    <Box sx={{ height: "100vh" }}>
      <Typography variant="h6" color="text.secondary">
        Your Search History
      </Typography>
      <List>{listItems}</List>
    </Box>
  );

  return displayedList;
};
export default SearchList;

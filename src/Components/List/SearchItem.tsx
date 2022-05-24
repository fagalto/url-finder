import ListItem from "@mui/material/ListItem/ListItem";
import ListItemText from "@mui/material/ListItemText/ListItemText";

const SearchItem = <T,>(props: { item: T }) => {
  const displayedData =
    typeof props.item === "number" || typeof props.item === "string" ? props.item : "invalid data";

  return (
    <ListItem sx={[
        {
          "&:hover": {
            cursor: "pointer",
            color: "primary.main",
          },
        },
        { display: "flex", alignItems: "flex-start", textDecoration: "none" },
      ]}>
      <ListItemText primary={displayedData} />
    </ListItem>
  );
};
export default SearchItem;

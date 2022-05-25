import ListItem from "@mui/material/ListItem/ListItem";
import ListItemButton from "@mui/material/ListItemButton/ListItemButton";
import ListItemText from "@mui/material/ListItemText/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import LinkIcon from "@mui/icons-material/Link";

const SearchItem = <T,>(props: { item: T; itemClick: (value: string) => void }) => {
  const displayedData =
    typeof props.item === "number" || typeof props.item === "string" ? props.item : "invalid data";

  return (
    <ListItemButton
      onClick={() => props.itemClick(displayedData.toString())}
      sx={[
        {
          "&:hover": {
            cursor: "pointer",
            color: "primary.main",
          },
        },
        { display: "flex", alignItems: "flex-start", textDecoration: "none" },
      ]}>
      <ListItemIcon>
        <LinkIcon />
      </ListItemIcon>
      <ListItemText primary={displayedData} />
    </ListItemButton>
  );
};
export default SearchItem;

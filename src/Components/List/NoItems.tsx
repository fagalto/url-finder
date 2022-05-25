import ListItem from "@mui/material/ListItem/ListItem";
import ListItemText from "@mui/material/ListItemText/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";

const NoItems = () => {
  return (
    <ListItem sx={{ color: "text.secondary" }}>
      <ListItemIcon>
        <SentimentDissatisfiedIcon />
      </ListItemIcon>
      <ListItemText primary="no items yet" />
    </ListItem>
  );
};
export default NoItems;

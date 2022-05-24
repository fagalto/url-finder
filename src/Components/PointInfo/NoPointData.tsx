import Avatar from "@mui/material/Avatar/Avatar";
import Card from "@mui/material/Card/Card";
import CardHeader from "@mui/material/CardHeader/CardHeader";
import CardMedia from "@mui/material/CardMedia/CardMedia";
import { red } from "@mui/material/colors";
import { pointInfo } from ".";
const NoPointData = (props: { title:string, subtitle:string }) => { 

  const info = (
    <Card>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {"##"}
          </Avatar>
        }
        title={props.title}
        subheader={props.title}
      />
      <CardMedia component="img" height="194" />
    </Card>
  );

  return info;
};

export default NoPointData;
import Avatar from "@mui/material/Avatar/Avatar";
import Card from "@mui/material/Card/Card";
import CardHeader from "@mui/material/CardHeader/CardHeader";
import CardMedia from "@mui/material/CardMedia/CardMedia";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import { pointInfo } from ".";
import { error } from "../../State/Loadables/factory";
const PointDetails = (props: { info: pointInfo }) => {
  const { lat, lng, city, region, country, flag, country_code } = props.info;
  const info = (
    <Card sx={{height:"100%"}}>
      <CardHeader
        avatar={
          <Avatar
            sx={{ bgcolor: red[500], width: "60px", height: "60px" }}
            aria-label="country-flag"
            src={flag}>
            {country_code}
          </Avatar>
        }
        title={`Country: ${country}`}
      />
      <CardContent>
        <Typography variant="subtitle2">{`Lattitude: ${lat}, Longtitude: ${lng}`}</Typography>
        <Typography variant="subtitle2" color="text.secondary" gutterBottom>
          {`Region: ${region}`}
        </Typography>
        <Typography variant="subtitle2" color="text.secondary">
          {`City: ${city}`}
        </Typography>
        <Typography variant="subtitle2" color="text.secondary">
          {`Country Code: ${country_code}`}
        </Typography>
      </CardContent>
    </Card>
  );

  return info;
};

export default PointDetails;

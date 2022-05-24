import Avatar from "@mui/material/Avatar/Avatar";
import Card from "@mui/material/Card/Card";
import CardHeader from "@mui/material/CardHeader/CardHeader";
import CardMedia from "@mui/material/CardMedia/CardMedia";
import { red } from "@mui/material/colors";
import { pointInfo } from ".";
const PointDetails = (props: { info: pointInfo }) => {

    const { lat, lng, city, region, country, flag,country_code } = props.info
    
    const info = (
      <Card>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {country_code}
            </Avatar>
          }
          title={country}
          subheader={`${region},-${city}`}
        />
        <CardMedia component="img" height="194" image={flag.svg} alt={`flag of ${country}`} />
      </Card>
    );

return info

}

export default PointDetails;
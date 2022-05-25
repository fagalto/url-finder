import Avatar from "@mui/material/Avatar/Avatar";
import Card from "@mui/material/Card/Card";
import CardHeader from "@mui/material/CardHeader/CardHeader";
import CardMedia from "@mui/material/CardMedia/CardMedia";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box/Box";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";

const NoPointData = (props: { loading: boolean }) => {
  const info = (
    <Card>
      <CardHeader
        avatar={
          <Avatar
            sx={{ bgcolor: red[500], width: "60px", height: "60px" }}
            aria-label="country-flag">
            UN
          </Avatar>
        }
        title={`Country: Unknown`}
      />
      <CardContent>
        <Typography variant="subtitle2">{`Coordinates unknown`}</Typography>
        <Typography variant="subtitle2" color="text.secondary" gutterBottom>
          {`Region:`}
        </Typography>
        <Typography variant="subtitle2" color="text.secondary">
          {`City:`}
        </Typography>
        <Typography variant="subtitle2" color="text.secondary">
          {`Country Code: `}
        </Typography>
      </CardContent>
    </Card>
  );

  return info;
};

export default NoPointData;

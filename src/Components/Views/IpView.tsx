import Box from "@mui/material/Box/Box";
import Stack from "@mui/material/Stack";

import Map, { gpsCoords } from "../Map";
import PointInfo, { pointInfo } from "../PointInfo";
import { error } from "../../State/Loadables/factory";
import Typography from "@mui/material/Typography/Typography";

const IpView = (props: {
  position?: gpsCoords;
  info?: pointInfo;
  loading?: boolean;
  error?: error;
  title: string;
}) => {
  //use User State and info
  const { position, info, title, loading, error } = props;
  const pos = position ? [position] : undefined;
  const load = loading ? "loading" : "";

  return (
    <Stack direction="column">
      <Typography variant="h6" color="text.secondary">
        {title}
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "row", width: "100%" }}>
        <Box sx={{ width: "50%" }}>
          <Map positions={pos} />
        </Box>
        <Box sx={{ width: "50%" }}>
          <PointInfo info={info} error={error} />
        </Box>
      </Box>
    </Stack>
  );
};

export default IpView;

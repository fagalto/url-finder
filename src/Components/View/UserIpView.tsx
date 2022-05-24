import Box from "@mui/material/Box/Box";
import Map, { gpsCoords } from "../Map";
import PointInfo, { pointInfo } from "../PointInfo";

const IpView = (props: { position?: gpsCoords; info?: pointInfo }) => {
  //use User State and info
  const { position, info } = props;
  const pos = position ? [position] : undefined;
  return (
    <Box sx={{ display: "flex", flexDirection: "row", width: "100%" }}>
      <Box sx={{ width: "40%" }}>
        <Map positions={pos} />
      </Box>
      <Box sx={{ width: "40%" }}>
        <PointInfo info={info} />
      </Box>
    </Box>
  );
};

export default IpView;

import Box from "@mui/material/Box/Box";
import Stack from "@mui/material/Stack";

import Map, { gpsCoords } from "../Map";
import PointInfo, { pointInfo } from "../PointInfo";
import { error } from "../../State/Loadables/factory";
import Typography from "@mui/material/Typography/Typography";
import { useRecoilState } from "recoil";
import { errorMessage } from "../../State/error";
import { useEffect } from "react";
import Loading from "../Loading";
const IpView = (props: {
  position?: gpsCoords;
  info?: pointInfo;
  loading: boolean;
  error: error;
  title: string;
  height: string;
}) => {
  //use User State and info
  const { position, info, title, error, loading,height } = props;
  const pos = position ? [position] : undefined;
  const [_error, setError] = useRecoilState(errorMessage);
  useEffect(() => {
    error.message.length > 0 && setError(error.message);
  }, [error]);
  const load = loading ? (
    <Box sx={{ width: "15px", height: "15px"}}>
      <Loading />
    </Box>
  ) : (
    <></>
  );
  return (
    <Stack direction="column" sx={{ height: { height } }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          alignItems: "center",
          gap: "10px",
        }}>
        <Typography variant="h6" color="text.secondary">
          {title}
        </Typography>

        {load}
      </Box>
      <Box sx={{ display: "flex", flexDirection: "row", width: "100%", height: "100%" }}>
        <Box sx={{ width: "50%" }}>
          <Map positions={pos} />
        </Box>
        <Box sx={{ width: "50%" }}>
          <PointInfo info={info} loading />
        </Box>
      </Box>
    </Stack>
  );
};

export default IpView;

import { userIP } from "../../State/userIp";
import { searchedIP } from "../../State/searchedIP";
import IpView from "./IpView";
import Loadable from "../../State/Loadables/factory";
import { userGeoDetails } from "../../State/userGeoDetails";
import { gpsCoords } from "../Map";


const UserIpView = (props:{height:string}) => {
  const _userIp = Loadable(userIP);
  const _userDetails = Loadable(userGeoDetails);

  const gpsCoords: gpsCoords = _userDetails.content
    ? { lat: _userDetails.content.lat, lng: _userDetails.content.lng }
    : { lat: 0, lng: 0 };
  return (
    <IpView
      position={gpsCoords}
      info={_userDetails.content}
      title="Your IP Location"
      key={1}
      loading={_userDetails.isLoading}
      error={_userDetails.error}
      height={props.height}
    />
  );
};

export default UserIpView;

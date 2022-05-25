import { userIP } from "../../State/userIp";
import { searchedIP } from "../../State/searchedIP";
import IpView from "./IpView";
import Loadable from "../../State/Loadables/factory";
import { searchedGeoDetails } from "../../State/searchedGeoDetails";
import { useRecoilState } from "recoil";
import { gpsCoords } from "../Map";

const SearchedIpView = () => {
  const [_searchedIP, setSearchedIP] = useRecoilState(searchedIP);
  const _searchedGeoDetails = Loadable(searchedGeoDetails);
  const gpsCoords: gpsCoords = _searchedGeoDetails.content
    ? { lat: _searchedGeoDetails.content.lat, lng: _searchedGeoDetails.content.lng }
    : { lat: 0, lng: 0 };

  return (
    <IpView
      position={gpsCoords}
      info={_searchedGeoDetails.content}
      title={`Result for: ${_searchedIP}`}
      key={1}
      loading={_searchedGeoDetails.isLoading}
      error={_searchedGeoDetails.error}
    />
  );
};

export default SearchedIpView;

import SimpleMap from "./SimpleMap";
//https://app.abstractapi.com/api/ip-geolocation/documentation

export interface gpsCoords {
    lat: number;
    lng: number;
}

const Map = (props?: { positions?: gpsCoords[] }) => {

 return <SimpleMap coords={props?.positions} />
}

export default Map

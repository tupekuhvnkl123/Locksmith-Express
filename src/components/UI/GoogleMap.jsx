import classes from "../../style/UI/GoogleMap.module.css";
import { googleMapData } from "../../utils/consts";
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";

const GoogleMap = () => {
  return (
    <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <Map
        className={classes.mapContainer}
        center={googleMapData.center}
        zoom={10}
      >
        <Marker position={googleMapData.center} />
      </Map>
    </APIProvider>
  );
};

export default GoogleMap;

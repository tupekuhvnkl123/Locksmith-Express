import GoogleMapReact from "google-map-react";

import classes from "../../style/UI/GoogleMap.module.css";
import { googleMapData } from "../../utils/consts";
import { IoLocationSharp } from "react-icons/io5";

const LocationMark = () => <IoLocationSharp className={classes.locationMark} />;

const GoogleMap = () => {
  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        yesIWantToUseGoogleMapApiInternals
        bootstrapURLKeys={{ key: import.meta.env.VITE_GOOGLE_MAPS_API_KEY }}
        defaultCenter={googleMapData.center}
        defaultZoom={googleMapData.zoom}
        draggable={false}
      >
        <LocationMark
          lat={googleMapData.center.lat}
          lng={googleMapData.center.lng}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
};

export default GoogleMap;

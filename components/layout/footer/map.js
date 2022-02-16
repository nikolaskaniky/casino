import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const Map = (props) => {
  const { height } = props;

  const containerStyle = {
    width: "100%",
    height: height ? height : '100%',
    borderRadius: "15px",
  };

  const position = {
    lat: 44.31752145306112,
    lng: 26.182558074518848,
  };

  return (
    <LoadScript googleMapsApiKey={process.env.MAP_API_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} center={position} zoom={18}>
        <Marker position={position} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;

// import { latLng } from 'leaflet';
import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "./Mapbox.css";
import "leaflet/dist/leaflet.css";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { Icon } from "leaflet";
import {showDataOnMap} from '../util';

function Mapbox({ countries, casesType, center, zoom }) {
 
  return (
    <div className="Map">
      <MapContainer center={center} zoom={2} maxZoom={18}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker
          position={center}
          icon={
            new Icon({
              iconUrl: markerIconPng,
              iconSize: [25, 41],
              iconAnchor: [12, 41],
            })
          }
        ></Marker>
        {showDataOnMap(countries, casesType)}
      </MapContainer>
    </div>
  );
}

export default Mapbox;

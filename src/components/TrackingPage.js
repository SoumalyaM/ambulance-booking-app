import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { motion } from "framer-motion";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const TrackingPage = () => {
  const kolkataCenter = [22.5726, 88.3639];
  const userLocation = [22.5726, 88.3639];
  const ambulanceLocation = [22.5826, 88.3739];

  return (
    <div className="h-screen flex flex-col p-4">
      <motion.div
        className="p-4 bg-white shadow-md rounded-lg mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold mb-2 text-primary">
          Ambulance Tracking
        </h2>
        <p className="text-text">
          Your ambulance is on the way. ETA: 10 minutes
        </p>
      </motion.div>
      <motion.div
        className="flex-grow border-4 border-primary rounded-lg overflow-hidden"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <MapContainer
          center={kolkataCenter}
          zoom={12}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={userLocation}>
            <Popup>Your location</Popup>
          </Marker>
          <Marker position={ambulanceLocation}>
            <Popup>Ambulance location</Popup>
          </Marker>
        </MapContainer>
      </motion.div>
    </div>
  );
};

export default TrackingPage;

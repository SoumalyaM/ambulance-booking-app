import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const hospitals = [
  {
    id: 1,
    name: "Ruby Hospital",
    distance: "2.5 km",
    availableBeds: 15,
  },
  {
    id: 2,
    name: "Apollo Hospital",
    distance: "3.8 km",
    availableBeds: 8,
  },
  {
    id: 3,
    name: "R.G. Kaur",
    distance: "5.2 km",
    availableBeds: 22,
  },
];

const HospitalSelectionPage = () => {
  const [selectedHospital, setSelectedHospital] = useState(null);
  const navigate = useNavigate();

  const handleSelect = (id) => {
    setSelectedHospital(id);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedHospital) {
      navigate(`/hospital-details/${selectedHospital}`);
    }
  };

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <motion.h2
        className="text-3xl font-bold mb-6 text-center text-primary"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Select a Hospital
      </motion.h2>
      <form onSubmit={handleSubmit}>
        <div className="space-y-4 mb-8">
          {hospitals.map((hospital, index) => (
            <HospitalCard
              key={hospital.id}
              hospital={hospital}
              isSelected={selectedHospital === hospital.id}
              onSelect={() => handleSelect(hospital.id)}
              index={index}
            />
          ))}
        </div>
        <div className="text-center">
          <motion.button
            type="submit"
            className="bg-primary text-white px-8 py-3 rounded-full text-lg hover:bg-opacity-90 transition-colors duration-300 disabled:bg-gray-400 shadow-lg"
            disabled={!selectedHospital}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Confirm Hospital Selection
          </motion.button>
        </div>
      </form>
    </div>
  );
};

const HospitalCard = ({ hospital, isSelected, onSelect, index }) => (
  <motion.div
    className={`border p-4 rounded-lg cursor-pointer transition-all duration-300 ${
      isSelected
        ? "border-primary shadow-lg bg-primary bg-opacity-10"
        : "hover:shadow-md"
    }`}
    onClick={onSelect}
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
    whileHover={{ scale: 1.02 }}
  >
    <div className="flex justify-between items-center">
      <div>
        <h3 className="text-xl font-semibold">{hospital.name}</h3>
        <p className="text-text">Distance: {hospital.distance}</p>
        <p className="text-text">Available Beds: {hospital.availableBeds}</p>
      </div>
      <input
        type="radio"
        id={`hospital-${hospital.id}`}
        name="hospital"
        value={hospital.id}
        checked={isSelected}
        onChange={onSelect}
        className="mr-2"
      />
    </div>
  </motion.div>
);

export default HospitalSelectionPage;

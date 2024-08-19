import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const ambulanceTypes = [
  {
    id: "bls",
    name: "Basic Life Support",
    description: "For non-emergency transport",
    icon: "🚑",
  },
  {
    id: "als",
    name: "Advanced Life Support",
    description: "For critical care patients",
    icon: "🏥",
  },
  {
    id: "ptr",
    name: "Patient Transport",
    description: "For scheduled medical appointments",
    icon: "🚐",
  },
];

const BookingPage = () => {
  const [selectedType, setSelectedType] = useState(null);
  const navigate = useNavigate();

  const handleSelect = (id) => {
    setSelectedType(id);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedType) {
      navigate("/hospitals");
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
        Choose Ambulance Type
      </motion.h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {ambulanceTypes.map((type, index) => (
            <AmbulanceTypeCard
              key={type.id}
              type={type}
              isSelected={selectedType === type.id}
              onSelect={() => handleSelect(type.id)}
              index={index}
            />
          ))}
        </div>
        <div className="text-center">
          <motion.button
            type="submit"
            className="bg-primary text-white px-8 py-3 rounded-full text-lg hover:bg-opacity-90 transition-colors duration-300 disabled:bg-gray-400 shadow-lg"
            disabled={!selectedType}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Continue to Hospital Selection
          </motion.button>
        </div>
      </form>
    </div>
  );
};

const AmbulanceTypeCard = ({ type, isSelected, onSelect, index }) => (
  <motion.div
    className={`border p-6 rounded-lg cursor-pointer transition-all duration-300 ${
      isSelected
        ? "border-primary shadow-lg bg-primary bg-opacity-10"
        : "hover:shadow-md"
    }`}
    onClick={onSelect}
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
    whileHover={{ scale: 1.05 }}
  >
    <div className="text-4xl mb-4">{type.icon}</div>
    <h3 className="text-xl font-semibold mb-2">{type.name}</h3>
    <p className="text-text mb-4">{type.description}</p>
    <div className="flex items-center">
      <input
        type="radio"
        id={type.id}
        name="ambulanceType"
        value={type.id}
        checked={isSelected}
        onChange={onSelect}
        className="mr-2"
      />
      <label htmlFor={type.id}>Select</label>
    </div>
  </motion.div>
);

export default BookingPage;

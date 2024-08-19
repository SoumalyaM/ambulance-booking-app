import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const hospitalDetails = {
  1: {
    name: "Ruby Hospital",
    address: "Ruby More",
    phone: "+910123456789",
    facilities: ["Emergency Room", "ICU", "Surgery", "Pediatrics"],
    bedAvailability: {
      total: 200,
      available: 15,
    },
  },

  2: {
    name: "Apollo Hospital",
    address: "Ruby More",
    phone: "+910123456789",
    facilities: ["Emergency Room", "ICU", "Surgery", "Pediatrics"],
    bedAvailability: {
      total: 160,
      available: 8,
    },
  },

  3: {
    name: "R.G. Kaur",
    address: "Ruby More",
    phone: "+910123456789",
    facilities: ["Emergency Room", "ICU", "Surgery", "Pediatrics"],
    bedAvailability: {
      total: 110,
      available: 22,
    },
  },
};

const HospitalDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const hospital = hospitalDetails[id];

  if (!hospital) {
    return <div>Hospital not found</div>;
  }

  const handleConfirm = () => {
    navigate("/patient-info");
  };

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <motion.h2
        className="text-3xl font-bold mb-6 text-primary"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {hospital.name}
      </motion.h2>
      <motion.div
        className="bg-white shadow-md rounded-lg p-6 mb-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <p className="mb-2">
          <strong>Address:</strong> {hospital.address}
        </p>
        <p className="mb-4">
          <strong>Phone:</strong> {hospital.phone}
        </p>

        <h3 className="text-xl font-semibold mb-2 text-primary">Facilities</h3>
        <ul className="list-disc list-inside mb-4">
          {hospital.facilities.map((facility, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.3 }}
            >
              {facility}
            </motion.li>
          ))}
        </ul>

        <h3 className="text-xl font-semibold mb-2 text-primary">
          Bed Availability
        </h3>
        <motion.div
          className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 mb-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.3 }}
        >
          <p>Available: {hospital.bedAvailability.available}</p>
          <p>Total: {hospital.bedAvailability.total}</p>
        </motion.div>
      </motion.div>

      <div className="text-center">
        <motion.button
          onClick={handleConfirm}
          className="bg-primary text-white px-8 py-3 rounded-full text-lg hover:bg-opacity-90 transition-colors duration-300 shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Confirm and Request Ambulance
        </motion.button>
      </div>
    </div>
  );
};

export default HospitalDetailsPage;

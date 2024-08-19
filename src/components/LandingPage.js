import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Logo from "./Logo";

const LandingPage = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-background p-4 text-center">
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center"
    >
      <motion.div
        whileHover={{ scale: 1.1, rotate: 360 }}
        transition={{ duration: 0.5 }}
      >
        <Logo className="w-32 h-32 mb-8" />
      </motion.div>
      <h1 className="text-5xl font-bold mb-4 text-primary">RescueRide</h1>
      <p className="text-xl mb-8 text-text">
        Fast, Reliable, Life-saving Ambulance Service
      </p>
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Link
          to="/book"
          className="bg-primary text-white px-8 py-3 rounded-full text-lg hover:bg-opacity-90 transition-colors duration-300 shadow-lg inline-block"
        >
          Book Now
        </Link>
      </motion.div>
    </motion.div>
    <motion.div
      className="mt-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      <h2 className="text-2xl font-semibold mb-8 text-text">
        Why Choose EmergencyRide?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <FeatureCard
          title="Quick Response"
          description="Our ambulances reach you in minutes"
          icon="🚑"
        />
        <FeatureCard
          title="Expert Care"
          description="Highly trained medical professionals"
          icon="👨‍⚕️"
        />
        <FeatureCard
          title="Hospital Selection"
          description="Choose from nearby hospitals"
          icon="🏥"
        />
      </div>
    </motion.div>
  </div>
);

const FeatureCard = ({ title, description, icon }) => (
  <motion.div
    className="bg-white p-6 rounded-lg shadow-lg"
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2 text-primary">{title}</h3>
    <p>{description}</p>
  </motion.div>
);

export default LandingPage;

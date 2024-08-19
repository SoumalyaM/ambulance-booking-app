import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Logo from "./Logo";

const Navbar = () => (
  <motion.nav
    className="bg-primary text-white p-4 shadow-lg"
    initial={{ y: -100 }}
    animate={{ y: 0 }}
    transition={{ type: "spring", stiffness: 120 }}
  >
    <div className="container mx-auto flex justify-between items-center">
      <Link to="/" className="flex items-center">
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Logo className="w-10 h-10 mr-2" />
        </motion.div>
        <span className="text-2xl font-bold">RescueRide</span>
      </Link>
    </div>
  </motion.nav>
);

export default Navbar;

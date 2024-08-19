import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import BookingPage from "./components/BookingPage";
import HospitalSelectionPage from "./components/HospitalSelectionPage";
import PatientInfoPage from "./components/PatientInfoPage";
import TrackingPage from "./components/TrackingPage";
import HospitalDetailsPage from "./components/HospitalDetailsPage";
import Navbar from "./components/Navbar";

const App = () => (
  <Router>
    <div className="min-h-screen bg-background text-text font-montserrat">
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/book" element={<BookingPage />} />
        <Route path="/hospitals" element={<HospitalSelectionPage />} />
        <Route path="/hospital-details/:id" element={<HospitalDetailsPage />} />
        <Route path="/patient-info" element={<PatientInfoPage />} />
        <Route path="/track" element={<TrackingPage />} />
      </Routes>
    </div>
  </Router>
);

export default App;

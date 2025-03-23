import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Component Imports
import Homebutton from "../components/Home";
import AboutUs from "../components/AboutUs"; // Fixed capitalization
import TeamPage from "../components/TeamPage";
import Events from "../components/Events";
import ContactUs from "../components/ContactUs";

// Icon Imports
import { Home } from "lucide-react";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homebutton />} />
        <Route path="/home" element={<Homebutton />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;
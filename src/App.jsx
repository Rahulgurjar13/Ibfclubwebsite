import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Component Imports
import LandingPage from "../components/LandingPage";
import Footer from "../components/Footer";
import CryptoGraphs from "../components/CryptoGraphs";
import TeamPage from "../components/TeamPage";
import Events from "../components/Events";
import Homebutton from "../components/Home";
import AboutUs from "../components/Aboutus";
import ContactUs from "../components/Contactus";

// Icon Imports
import { Home } from "lucide-react";

function App() {
  return (
    <Router>
      <Routes>
        {/* Root Route */}
        <Route
          path="/"
          element={
            <>
              <Homebutton />
            </>
          }
        />
        
        {/* Main Navigation Routes */}
        <Route path="/home" element={<Homebutton />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/events" element={<Events />} />
        
        {/* Contact Routes */}
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/contact" element={<ContactUs />} /> {/* Alias for contact-us */}
      </Routes>
    </Router>
  );
}

export default App;
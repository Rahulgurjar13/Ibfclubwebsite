import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "../components/LandingPage";
import Footer from "../components/Footer";
import CryptoGraphs from "../components/CryptoGraphs";
import TeamPage from "../components/TeamPage";
import Events from "../components/Events";
import { Home } from "lucide-react";
import Homebutton from "../components/Home";
import AboutUs from "../components/Aboutus";
import ContactUs from "../components/Contactus";


function App() {
  return (
    <Router>
      <Routes>
        {/* Define routes for each page */}
        <Route 
          path="/" 
          element={
            <>
            <Homebutton></Homebutton>
            </>
          } 
        />
        {/* Add additional routes as needed */}
        contact-us
        <Route path="/home" element={<Homebutton />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/Events" element={<Events />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/contact" element={<ContactUs />} />
        
        
      </Routes>
    </Router>
  );
}

export default App;
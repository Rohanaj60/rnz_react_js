import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
// import AboutPage from "../pages/AboutPage";
// import ContactPage from "../pages/ContactPage";
// import Navbar from "../layouts/Navbar";
import PrivateRouteLoggedIn from './PrivateRouteLoggedIn'; // For normal logged-in users

const HomepageRoutes = () => {
  return (
    <div className="homepage">
      {/* <Router> */}
        <Routes>
          <Route path="/" element={
              <PrivateRouteLoggedIn> <HomePage /></PrivateRouteLoggedIn>
           } />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      {/* </Router> */}
    </div>
  );
};

export default HomepageRoutes;

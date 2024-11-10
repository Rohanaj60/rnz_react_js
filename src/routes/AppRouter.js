import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandlordRoutes from "./LandlordRoutes";
import AdminRoutes from "./AdminRoutes";
import HomepageRoutes from "./HomepageRoutes";
import NotFoundPage from "../pages/NotFoundPage"; // Optional
import PrivateRoute from "./PrivateRoute"; // Role-based route protection

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/*" element={<HomepageRoutes />} />

        {/* Landlord routes */}
        <Route
          path="/landlord/*"
          element={
            // <LandlordRoutes />

            <PrivateRoute allowedRoles={["landlord"]}>
              <LandlordRoutes />
            </PrivateRoute>
          }
        />

        {/* Admin routes */}
        {/* <Route path="/admin/*" element={<AdminRoutes />} /> */}

        {/* Fallback for 404 */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;

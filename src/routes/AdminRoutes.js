import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import AdminDashboard from '../pages/admin/AdminDashboard';
// import ManageUsers from '../pages/admin/ManageUsers';
// import SystemSettings from '../pages/admin/SystemSettings';
// import Navbar from '../layouts/Navbar';
// import Sidebar from '../layouts/Sidebar';

const AdminRoutes = () => {
  return (
    <div className="admin-dashboard">
      {/* <Navbar />
      <Sidebar /> */}
      <div className="content">
        <Routes>
          {/* <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/manage-users" element={<ManageUsers />} />
          <Route path="/admin/settings" element={<SystemSettings />} /> */}
          {/* Add more admin-specific routes here */}
        </Routes>
      </div>
    </div>
  );
};

export default AdminRoutes;

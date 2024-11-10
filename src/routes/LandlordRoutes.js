import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProfilePage from '../pages/landlord/ProfilePage';
// import MyProperties from '../pages/landlord/MyProperties';
// import TenantList from '../pages/landlord/TenantList';
// import ApplicationsList from '../pages/landlord/ApplicationsList';
// import PaymentsOverview from '../pages/landlord/PaymentsOverview';
import LandlordLayout from '../layouts/LandlordLayout';
import DashboardPage from '../pages/landlord/DashboardPage';
import PropertyPage from '../pages/landlord/PropertyPage';

const LandlordRoutes = () => {
  return (
    <LandlordLayout>
        <Routes>
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/property" element={<PropertyPage />} />


         
        </Routes>
    </LandlordLayout>
  );
};

export default LandlordRoutes;
//  {/* <Route path="/landlord/my-properties" element={<MyProperties />} /> */}
//           {/* <Route path="/landlord/tenants" element={<TenantList />} /> */}
//           {/* <Route path="/landlord/applications" element={<ApplicationsList />} /> */}
//           {/* <Route path="/landlord/payments" element={<PaymentsOverview />} /> */}
//           {/* Add more landlord-specific routes here */}
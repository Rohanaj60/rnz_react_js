import React from 'react';
import Header from '../components/common/Header'; // Ensure you create this
import Footer from '../components/common/Footer'; // Ensure you create this

const MainLayout = ({ children }) => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;

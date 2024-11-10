import React from 'react';

const Dashboard = () => {
  return (
    <div className="flex flex-col p-6">
      <h1 className="text-2xl font-semibold">Welcome to Your Landlord Dashboard</h1>

      {/* Statistics Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-6">
        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-xl font-medium">Total Properties</h2>
          <p className="text-3xl font-bold">10</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-xl font-medium">Active Tenants</h2>
          <p className="text-3xl font-bold">5</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-xl font-medium">Total Revenue</h2>
          <p className="text-3xl font-bold">$25,000</p>
        </div>
      </div>

      {/* Recent Activity Section */}
      <div className="bg-white rounded-lg shadow-md p-4">
        <h2 className="text-xl font-medium">Recent Activity</h2>
        <ul className="mt-2">
          <li className="border-b py-2">Tenant John Doe paid rent for October.</li>
          <li className="border-b py-2">New property added: 123 Main St.</li>
          <li className="border-b py-2">Tenant Jane Smith applied for rental.</li>
          <li className="border-b py-2">Maintenance request from Tenant John Doe.</li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;

import React from 'react';
import MainLayout from '../layouts/MainLayout';
import RentalList from '../components/rentals/RentalList'; // Adjust as needed
import Button from '../components/common/Button';
import InputField from '../components/common/InputField';
import "../Banner.css"

const HomePage = () => {
  return (
    <MainLayout>
{/* <div className="container banner_section">
        <div className="banner_content text-center py-10">
          <h6 className="text-gray-700">#1 for property search in Tricity</h6>
          <h1 className="property_type_tag_line text-4xl font-bold mt-2">Apna Ghar Apni Choice</h1>
          <div className="searchType mt-5">
            <ul className="list-unstyled flex justify-center space-x-4 mb-4">
              <li><Button className="Flats active">Flats/House</Button></li>
              <li><Button className="PG">PG</Button></li>
              <li><Button className="Room">Room</Button></li>
              <li><Button className="Commercial">Commercial</Button></li>
            </ul>
            <div className="outerSearch flex justify-center">
              <InputField type="text" placeholder="Search by locality" className="form-control ui-widget autocomplete-google w-2/3" />
              <Button className="btn_search_homepage ml-2">Search</Button>
            </div>
            <a href="https://www.letsrentz.com/propertysearchwithpid" className="searforPId mt-4 text-blue-500 hover:underline" target="_blank">
              Search for PID <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div> */}

<section
  className="relative bg-cover bg-center h-screen"
  style={{ backgroundImage: `url('https://images.unsplash.com/photo-1590986201364-ce95ab280ca2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')` }}
>
  <div className="absolute inset-0 bg-black bg-opacity-40"></div>
  <div className="relative container mx-auto flex flex-col justify-center items-center h-full text-center text-white p-6">
    <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">Find Your Dream Rental</h1>
    <p className="text-lg md:text-xl mb-8 drop-shadow-md">Explore unique spaces and make them your own.</p>
    <form className="w-full max-w-lg">
      <div className="flex items-center border border-gray-300 rounded-full overflow-hidden shadow-lg">
        <input
          type="text"
          placeholder="Search by place"
          className="flex-grow py-3 px-4 bg-transparent text-white placeholder-gray-400 focus:outline-none"
        />
        <button
          type="submit"
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-full transition duration-300"
        >
          Search
        </button>
      </div>
    </form>
  </div>
</section>


    
      <section className="container mx-auto p-6">
      <div className="container mx-auto p-6 bg-gray-100 flex">
      {/* Filters Section */}
      <div className="w-1/4 p-4 bg-white rounded-lg shadow-lg mr-6">
        <h2 className="text-xl font-semibold mb-4">Filters</h2>

        <div className="mb-4">
          <input type="text" placeholder="Search by locality" className="border border-gray-300 rounded-md p-2 w-full mb-2" />
          <input type="text" placeholder="Search by PID" className="border border-gray-300 rounded-md p-2 w-full" />
        </div>

        <div className="mb-4">
          <h3 className="font-semibold mb-2">Category</h3>
          <select className="border border-gray-300 rounded-md p-2 w-full mb-2">
            <option>1BHK</option>
            <option>2BHK</option>
            <option>3BHK</option>
            <option>4+ BHK</option>
            <option>Annexy</option>
            <option>Studio Apartment</option>
          </select>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold mb-2">Price Range</h3>
          <input type="range" min="0" max="500000" className="w-full" />
          <div className="flex justify-between text-sm text-gray-600">
            <span>0</span>
            <span>500000</span>
          </div>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold mb-2">Preferred Tenant</h3>
          <select className="border border-gray-300 rounded-md p-2 w-full mb-2">
            <option>All</option>
            <option>Boys</option>
            <option>Boys & Girls</option>
            <option>Company</option>
            <option>Family</option>
            <option>Family & Boys</option>
            <option>Family & Girls</option>
            <option>Girls</option>
          </select>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold mb-2">Furnished Type</h3>
          <select className="border border-gray-300 rounded-md p-2 w-full mb-2">
            <option>Fully Furnished</option>
            <option>Semi Furnished</option>
            <option>Unfurnished</option>
          </select>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold mb-2">Popular Searches</h3>
          <ul className="list-disc list-inside text-gray-600">
            <li>Flats in Phase 7, Mohali</li>
            <li>Flats in Phase 3B2, Mohali</li>
            <li>Flats for rent in Phase 8B</li>
            <li>Flats for living couple</li>
            <li>Flats for rent in Sector 43</li>
            <li>House in Sunny Enclave</li>
          </ul>
        </div>

        <div className="text-center mb-4">
          <h3 className="font-semibold mb-2">One Membership, Many Privileges</h3>
          <p className="mb-4">Try 0% Brokerage</p>
          <button className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition">Download Lets Rentz now</button>
        </div>
      </div>

      {/* Rental Cards Section */}
      <div className="w-3/4 p-4">
        <h2 className="text-xl font-semibold mb-4">Recommended Properties</h2>

        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"> */}
        <RentalList />
        {/* </div> */}

        <div className="text-center mt-6">
          <p className="text-gray-600">1062 results</p>
          {/* <button className="mt-2 bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition">Download Lets Rentz Today</button> */}
        </div>
      </div>
    </div>
        {/* <h2 className="text-3xl font-semibold mb-6 text-center">Available Rentals</h2>
        <RentalList /> */}
      </section>

        {/* <section className="bg-gradient-to-r from-green-500 to-green-600 text-white py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-extrabold">Discover Your Dream Room</h2>
          <p className="mt-4 text-lg">Explore the best rental options tailored just for you.</p>
        </div>
      </section> */}
    </MainLayout>
  );
};

export default HomePage;

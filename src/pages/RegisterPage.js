import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { register } from '../features/auth/authSlice';
import { Link } from 'react-router-dom';
import InputField from '../components/common/InputField';
import SelectField from '../components/common/SelectField';
import Button from '../components/common/Button';
import { registerUser } from '../features/auth/authThunks';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);
  const error = useSelector((state) => state.auth.error);

  // const [userData, setUserData] = useState({
  //   username: '',
  //   email: '',
  //   firstName: '',
  //   lastName: '',
  //   gender: 'female',
  //   password: '',
  //   image: 'https://dummyjson.com/icon/emilys/128', // Default image
  // });

  const [userData, setUserData] = useState({
   name:'',
   email:'',
   password:'',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(userData));
  };

  return (
    <div className="container mx-auto p-6 bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-slate-800 mb-8 drop-shadow-md">Register</h2>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form onSubmit={handleSubmit}>
          {/* <InputField
            label="Username"
            name="username"
            type="text"
            placeholder="Enter your username"
            value={userData.username}
            onChange={handleChange}
            required
          /> */}
             <InputField
            label="Full Name"
            name="name"
            type="text"
            placeholder="Enter your fullname"
            value={userData.name}
            onChange={handleChange}
            required
          />
          <InputField
            label="Email"
            name="email"
            type="email"
            placeholder="Enter your email"
            value={userData.email}
            onChange={handleChange}
            required
          />
          {/* <InputField
            label="First Name"
            name="firstName"
            type="text"
            placeholder="Enter your first name"
            value={userData.firstName}
            onChange={handleChange}
            required
          /> */}
          {/* <InputField
            label="Last Name"
            name="lastName"
            type="text"
            placeholder="Enter your last name"
            value={userData.lastName}
            onChange={handleChange}
            required
          /> */}
          {/* <SelectField
            label="Gender"
            name="gender"
            value={userData.gender}
            onChange={handleChange}
            options={[
              { value: 'female', label: 'Female' },
              { value: 'male', label: 'Male' },
              { value: 'other', label: 'Other' },
            ]}
          /> */}
          <InputField
            label="Password"
            name="password"
            type="password"
            placeholder="Enter your password"
            value={userData.password}
            onChange={handleChange}
            required
          />
          <Button
            type="submit"
            disabled={loading}
            className="w-full mt-6 bg-indigo-600 text-white font-semibold py-2 rounded-md hover:bg-indigo-700 transition duration-300"
          >
            {loading ? 'Registering...' : 'Register'}
          </Button>
        </form>

        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-500 hover:underline">
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;

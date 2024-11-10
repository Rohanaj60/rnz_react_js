import React from 'react';
import InputField from '../../components/common/InputField';
import Button from '../../components/common/Button';

const ProfilePage = () => {
    return (
        <div className="profile-page flex flex-col md:flex-row p-6 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
            {/* Left Side: User Details */}
            <div className="w-full md:w-1/3 mr-0 md:mr-6 mb-6 md:mb-0">
                <div className="flex items-center mb-6">
                    <img 
                        className="w-24 h-24 rounded-full border-2 border-indigo-600 dark:border-indigo-400" 
                        src="https://picsum.photos/200/300" 
                        alt="Profile" 
                    />
                    <div className="ml-6">
                        <h1 className="text-2xl font-semibold">John Doe</h1>
                        <p className="text-gray-600 dark:text-gray-400">Landlord</p>
                        <Button className="mt-2" label="Edit Profile">Save Changes</Button>
                    </div>
                </div>

                {/* User Information */}
                <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
                    <h2 className="text-xl font-bold mb-4">Profile Information</h2>
                    <div className="space-y-4">
                        <div className="flex justify-between">
                            <span className="font-medium">Full Name:</span>
                            <span>John Doe</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-medium">Email:</span>
                            <span>johndoe@example.com</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-medium">Phone Number:</span>
                            <span>+123456789</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Side: Edit Profile Form */}
            <div className="w-full md:w-2/3">
                <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
                    <h2 className="text-xl font-bold mb-4">Edit Profile</h2>
                    <form className="space-y-4">
                        <InputField label="Full Name" defaultValue="John Doe" />
                        <InputField label="Email" type="email" defaultValue="johndoe@example.com" />
                        <InputField label="Phone Number" type="tel" defaultValue="+123456789" />
                        <InputField label="New Password" type="password" />
                        <InputField label="Confirm Password" type="password" />
                        <Button label="Save Changes" className="mt-4">Save Changes</Button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;


// https://www.material-tailwind.com/docs/html/button
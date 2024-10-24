// 'use client'
// import AuthContext from '@/app/AuthContext';
// import React, { useContext, useState } from 'react';

// const Dashboard = () => {
//     const { user } = useContext(AuthContext);

//     // User details
//     const [userDetails, setUserDetails] = useState({
//         email: user?.email || 'demo@123', // Sample email
//         profilePicture: 'https://via.placeholder.com/150', // Placeholder profile picture
//     });

//     // Form state for changing password
//     const [password, setPassword] = useState('');
//     const [confirmPassword, setConfirmPassword] = useState('');
//     const [showChangePassword, setShowChangePassword] = useState(false); // State to toggle password change form
//     const [showWarning, setShowWarning] = useState(false); // State to show warning modal
//     const [passwordSaved, setPasswordSaved] = useState(false); // Track if password was saved

//     // Handle password change
//     const handleChangePassword = (e) => {
//         e.preventDefault();
//         // Trigger the warning modal before actually saving the password
//         setShowWarning(true);
//     };

//     const handleConfirmSavePassword = () => {
//         if (password !== confirmPassword) {
//             alert('Passwords do not match');
//         } else {
//             // API call to change password
//             alert('Password changed successfully!');
//             setPassword('');
//             setConfirmPassword('');
//             setShowChangePassword(false);
//         }
//         setShowWarning(false);
//     };

//     const handleCancelSavePassword = () => {
//         setShowWarning(false); // Close the warning modal without saving
//     };

//     // Handle profile picture change
//     const handleProfilePictureChange = (e) => {
//         const file = e.target.files[0];
//         if (file) {
//             const imageUrl = URL.createObjectURL(file);
//             setUserDetails((prevState) => ({
//                 ...prevState,
//                 profilePicture: imageUrl,
//             }));
//         }
//     };

//     return (
//         <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
//             <h1>Dashboard</h1>

//             <div style={{ textAlign: 'center', marginBottom: '20px' }}>
//                 <img
//                     src={userDetails.profilePicture}
//                     alt="Profile"
//                     style={{ width: '150px', height: '150px', borderRadius: '50%', objectFit: 'cover' }}
//                 />
//                 <br />
//                 <input type="file" onChange={handleProfilePictureChange} style={{ marginTop: '10px' }} />
//             </div>

//             <div>
//                 <h2>User Details</h2>
//                 <p><strong>Email:</strong> {userDetails.email}</p>
//             </div>

//             {!showChangePassword && (
//                 <button onClick={() => setShowChangePassword(true)}>Change Password</button>
//             )}

//             {showChangePassword && (
//                 <form onSubmit={handleChangePassword}>
//                     <h2>Change Password</h2>
//                     <div>
//                         <label htmlFor="password">New Password:</label>
//                         <input
//                             type="password"
//                             id="password"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                             required
//                             style={{ marginLeft: '10px', marginBottom: '10px' }}
//                         />
//                     </div>
//                     <div>
//                         <label htmlFor="confirmPassword">Confirm Password:</label>
//                         <input
//                             type="password"
//                             id="confirmPassword"
//                             value={confirmPassword}
//                             onChange={(e) => setConfirmPassword(e.target.value)}
//                             required
//                             style={{ marginLeft: '10px', marginBottom: '20px' }}
//                         />
//                     </div>
//                     <button type="submit">Save Password</button>
//                     <button type="button" onClick={() => setShowChangePassword(false)} style={{ marginLeft: '10px' }}>
//                         Cancel
//                     </button>
//                 </form>
//             )}

//             {showWarning && (
//                 <div style={{ border: '1px solid red', padding: '10px', marginBottom: '20px' }}>
//                     <p><strong>Warning:</strong> Are you sure you want to save the new password?</p>
//                     <button onClick={handleConfirmSavePassword} style={{ marginRight: '10px' }}>OK</button>
//                     <button onClick={handleCancelSavePassword}>Cancel</button>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Dashboard;










// 'use client'
// import AuthContext from '@/app/AuthContext';
// import React, { useContext, useState } from 'react';

// const Dashboard = () => {
//     const { user } = useContext(AuthContext);

//     // User details
//     const [userDetails, setUserDetails] = useState({
//         email: user?.email || 'demo@123', // Sample email
//         profilePicture: 'https://via.placeholder.com/150', // Placeholder profile picture
//     });

//     // Form state for changing password
//     const [password, setPassword] = useState('');
//     const [confirmPassword, setConfirmPassword] = useState('');
//     const [showChangePassword, setShowChangePassword] = useState(false); // Toggle password change form
//     const [showWarning, setShowWarning] = useState(false); // Show warning modal

//     // Handle password change
//     const handleChangePassword = (e) => {
//         e.preventDefault();
//         setShowWarning(true);  // Show warning modal before saving password
//     };

//     const handleConfirmSavePassword = () => {
//         if (password !== confirmPassword) {
//             alert('Passwords do not match');
//         } else {
//             alert('Password changed successfully!');
//             setPassword('');
//             setConfirmPassword('');
//             setShowChangePassword(false);  // Close the password change form
//         }
//         setShowWarning(false);  // Close the warning modal
//     };

//     const handleCancelSavePassword = () => {
//         setShowWarning(false);  // Close the warning modal
//     };

//     // Handle profile picture change
//     const handleProfilePictureChange = (e) => {
//         const file = e.target.files[0];
//         if (file) {
//             const imageUrl = URL.createObjectURL(file);
//             setUserDetails((prevState) => ({
//                 ...prevState,
//                 profilePicture: imageUrl,
//             }));
//         }
//     };

//     return (
//         <div className="container mx-auto p-8 max-w-xl bg-white shadow-lg rounded-lg">
//             <h1 className="text-3xl font-bold text-center mb-8 text-blue-600">Dashboard</h1>

//             <div className="flex flex-col items-center mb-8">
//                 <img
//                     src={userDetails.profilePicture}
//                     alt="Profile"
//                     className="w-36 h-36 rounded-full object-cover shadow-md mb-4"
//                 />
//                 <label className="cursor-pointer bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
//                     Upload New Picture
//                     <input type="file" onChange={handleProfilePictureChange} className="hidden" />
//                 </label>
//             </div>

//             <div className="text-center mb-8">
//                 <h2 className="text-xl font-semibold">User Details</h2>
//                 <p className="text-gray-600"><strong>Email:</strong> {userDetails.email}</p>
//             </div>

//             {!showChangePassword && (
//                 <div className="text-center">
//                     <button
//                         className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition"
//                         onClick={() => setShowChangePassword(true)}
//                     >
//                         Change Password
//                     </button>
//                 </div>
//             )}

//             {showChangePassword && (
//                 <form onSubmit={handleChangePassword} className="space-y-4">
//                     <h2 className="text-xl font-semibold text-gray-700">Change Password</h2>
//                     <div className="flex flex-col">
//                         <label htmlFor="password" className="text-gray-600">New Password:</label>
//                         <input
//                             type="password"
//                             id="password"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                             required
//                             className="border rounded p-2 mt-1"
//                         />
//                     </div>
//                     <div className="flex flex-col">
//                         <label htmlFor="confirmPassword" className="text-gray-600">Confirm Password:</label>
//                         <input
//                             type="password"
//                             id="confirmPassword"
//                             value={confirmPassword}
//                             onChange={(e) => setConfirmPassword(e.target.value)}
//                             required
//                             className="border rounded p-2 mt-1"
//                         />
//                     </div>
//                     <div className="flex justify-between items-center mt-4">
//                         <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition">
//                             Save Password
//                         </button>
//                         <button
//                             type="button"
//                             className="bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400 transition"
//                             onClick={() => setShowChangePassword(false)}
//                         >
//                             Cancel
//                         </button>
//                     </div>
//                 </form>
//             )}

//             {showWarning && (
//                 <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
//                     <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm text-center">
//                         <h3 className="text-xl font-semibold text-red-600 mb-4">Warning</h3>
//                         <p className="text-gray-700 mb-6">Are you sure you want to change your password?</p>
//                         <div className="flex justify-around">
//                             <button
//                                 onClick={handleConfirmSavePassword}
//                                 className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition"
//                             >
//                                 OK
//                             </button>
//                             <button
//                                 onClick={handleCancelSavePassword}
//                                 className="bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400 transition"
//                             >
//                                 Cancel
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Dashboard;












// 'use client'
// import AuthContext from '@/app/AuthContext';
// import React, { useContext, useState } from 'react';

// const Dashboard = () => {
//     const { user } = useContext(AuthContext);

//     // User details
//     const [userDetails, setUserDetails] = useState({
//         email: user?.email || 'demo@123', // Sample email
//         profilePicture: 'https://via.placeholder.com/150', // Placeholder profile picture
//     });

//     // Form state for changing password
//     const [password, setPassword] = useState('');
//     const [confirmPassword, setConfirmPassword] = useState('');
//     const [showChangePassword, setShowChangePassword] = useState(false); // Toggle password change form
//     const [showWarning, setShowWarning] = useState(false); // Show warning modal

//     // Handle password change
//     const handleChangePassword = (e) => {
//         e.preventDefault();
//         setShowWarning(true);  // Show warning modal before saving password
//     };

//     const handleConfirmSavePassword = () => {
//         if (password !== confirmPassword) {
//             alert('Passwords do not match');
//         } else {
//             alert('Password changed successfully!');
//             setPassword('');
//             setConfirmPassword('');
//             setShowChangePassword(false);  // Close the password change form
//         }
//         setShowWarning(false);  // Close the warning modal
//     };

//     const handleCancelSavePassword = () => {
//         setShowWarning(false);  // Close the warning modal
//     };

//     // Handle profile picture change
//     const handleProfilePictureChange = (e) => {
//         const file = e.target.files[0];
//         if (file) {
//             const imageUrl = URL.createObjectURL(file);
//             setUserDetails((prevState) => ({
//                 ...prevState,
//                 profilePicture: imageUrl,
//             }));
//         }
//     };

//     return (
//         <div className="container mx-auto p-8 max-w-xl bg-white shadow-lg rounded-lg">
//             <h1 className="text-3xl font-bold text-center mb-8 text-blue-600">Dashboard</h1>

//             {/* Profile Picture Area */}
//             <div className="flex flex-col items-center mb-8">
//                 <div className="relative w-36 h-36 rounded-full bg-gray-100 border border-gray-300 shadow-md mb-4 flex items-center justify-center">
//                     <img
//                         src={userDetails.profilePicture}
//                         alt="Profile"
//                         className="w-full h-full rounded-full object-cover"
//                     />
//                 </div>
//                 <label className="cursor-pointer bg-blue-400 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
//                     Upload New Picture
//                     <input type="file" onChange={handleProfilePictureChange} className="hidden" />
//                 </label>
//             </div>

//             <div className="text-center mb-8">
//                 <h2 className="text-xl font-semibold">User Details</h2>
//                 <p className="text-gray-600"><strong>Email:</strong> {userDetails.email}</p>
//             </div>

//             {!showChangePassword && (
//                 <div className="text-center">
//                     <button
//                         className="bg-green-400 text-white py-2 px-4 rounded hover:bg-green-600 transition"
//                         onClick={() => setShowChangePassword(true)}
//                     >
//                         Change Password
//                     </button>
//                 </div>
//             )}

//             {showChangePassword && (
//                 <form onSubmit={handleChangePassword} className="space-y-4">
//                     <h2 className="text-xl font-semibold text-gray-700">Change Password</h2>
//                     <div className="flex flex-col">
//                         <label htmlFor="password" className="text-gray-600">New Password:</label>
//                         <input
//                             type="password"
//                             id="password"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                             required
//                             className="border rounded p-2 mt-1"
//                         />
//                     </div>
//                     <div className="flex flex-col">
//                         <label htmlFor="confirmPassword" className="text-gray-600">Confirm Password:</label>
//                         <input
//                             type="password"
//                             id="confirmPassword"
//                             value={confirmPassword}
//                             onChange={(e) => setConfirmPassword(e.target.value)}
//                             required
//                             className="border rounded p-2 mt-1"
//                         />
//                     </div>
//                     <div className="flex justify-between items-center mt-4">
//                         <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition">
//                             Save Password
//                         </button>
//                         <button
//                             type="button"
//                             className="bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400 transition"
//                             onClick={() => setShowChangePassword(false)}
//                         >
//                             Cancel
//                         </button>
//                     </div>
//                 </form>
//             )}

//             {showWarning && (
//                 <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
//                     <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm text-center">
//                         <h3 className="text-xl font-semibold text-red-600 mb-4">Warning</h3>
//                         <p className="text-gray-700 mb-6">Are you sure you want to change your password?</p>
//                         <div className="flex justify-around">
//                             <button
//                                 onClick={handleConfirmSavePassword}
//                                 className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition"
//                             >
//                                 OK
//                             </button>
//                             <button
//                                 onClick={handleCancelSavePassword}
//                                 className="bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400 transition"
//                             >
//                                 Cancel
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Dashboard;













'use client'
import AuthContext from '@/app/AuthContext';
import React, { useContext, useState } from 'react';
import { updateUserPassword } from '@/app/api/utils/updatePassword'; // Import the update password API
import Cookies from 'js-cookie';

const Dashboard = () => {
    const { user } = useContext(AuthContext);
    console.log(user)
    // User details
    const [userDetails, setUserDetails] = useState({
        email: user?.email || 'demo@123', // Sample email
        profilePicture: 'https://via.placeholder.com/150', // Placeholder profile picture
    });

    // Form state for changing password
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [currentPassword, setCurrentPassword] = useState(''); // Added for current password validation
    const [showChangePassword, setShowChangePassword] = useState(false); // Toggle password change form
    const [showWarning, setShowWarning] = useState(false); // Show warning modal
    const [errorMessage, setErrorMessage] = useState(''); // For error handling
    const [successMessage, setSuccessMessage] = useState(''); // For success message

    // Handle password change
    const handleChangePassword = async (e) => {
        e.preventDefault();
        setShowWarning(true);  // Show warning modal before saving password
    };

    // Handle Confirm Save Password with API call
    const handleConfirmSavePassword = async () => {
        setErrorMessage('');
        setSuccessMessage('');
        if (password !== confirmPassword) {
            setErrorMessage('Passwords do not match');
            setShowWarning(false);
        } else {
            try {
                // Call the update password API
                console.log({
                  email: userDetails.email,
                  currentPassword,
                  newPassword: password,
                });
                
                const response = await updateUserPassword({
                    email: userDetails.email,
                    currentPassword,
                    newPassword: password,
                });

                if (response.status === 200) {
                    setSuccessMessage('Password updated successfully!');
                    setPassword('');
                    setConfirmPassword('');
                    setCurrentPassword('');
                    setShowChangePassword(false); // Close the password change form
                } else {
                    setErrorMessage(response?.data?.message || 'Error updating password');
                }
            } catch (error) {
                setErrorMessage('Failed to update password. Please try again.');
            }
        }
        setShowWarning(false);  // Close the warning modal
    };

    const handleCancelSavePassword = () => {
        setShowWarning(false);  // Close the warning modal
    };

    // Handle profile picture change
    const handleProfilePictureChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setUserDetails((prevState) => ({
                ...prevState,
                profilePicture: imageUrl,
            }));
        }
    };

    return (
        <div className="container mx-auto p-8 max-w-xl bg-white shadow-lg rounded-lg ">
            <h1 className="text-3xl font-bold text-center mb-8 text-blue-600">Dashboard</h1>

            {/* Profile Picture Area */}
            <div className="flex flex-col items-center mb-8">
                <div className="relative w-36 h-36 rounded-full bg-gray-100 border border-gray-300 shadow-md mb-4 flex items-center justify-center">
                    <img
                        src={userDetails.profilePicture}
                        alt="Profile"
                        className="w-full h-full rounded-full object-cover"
                    />
                </div>
                <label className="cursor-pointer bg-blue-400 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
                    Upload New Picture
                    <input type="file" onChange={handleProfilePictureChange} className="hidden" />
                </label>
            </div>

            <div className="text-center mb-8">
                <h2 className="text-xl font-semibold">User Details</h2>
                <p className="text-gray-600"><strong>Email:</strong> {userDetails.email}</p>
            </div>

            {/* Error/Success Message */}
            {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}
            {successMessage && <p className="text-green-500 text-center">{successMessage}</p>}

            {/* Password Change Form */}
            {!showChangePassword && (
                <div className="text-center">
                    <button
                        className="bg-green-400 text-white py-2 px-4 rounded hover:bg-green-600 transition"
                        onClick={() => setShowChangePassword(true)}
                    >
                        Change Password
                    </button>
                </div>
            )}

            {showChangePassword && (
                <form onSubmit={handleChangePassword} className="space-y-4">
                    <h2 className="text-xl font-semibold text-gray-700">Change Password</h2>
                    <div className="flex flex-col">
                        <label htmlFor="currentPassword" className="text-gray-600">Current Password:</label>
                        <input
                            type="password"
                            id="currentPassword"
                            value={currentPassword}
                            onChange={(e) => setCurrentPassword(e.target.value)}
                            required
                            className="border rounded p-2 mt-1"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="password" className="text-gray-600">New Password:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="border rounded p-2 mt-1"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="confirmPassword" className="text-gray-600">Confirm Password:</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                            className="border rounded p-2 mt-1"
                        />
                    </div>
                    <div className="flex justify-between items-center mt-4">
                        <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition">
                            Save Password
                        </button>
                        <button
                            type="button"
                            className="bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400 transition"
                            onClick={() => setShowChangePassword(false)}
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            )}

            {/* Warning Modal */}
            {showWarning && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm text-center">
                        <h3 className="text-xl font-semibold text-red-600 mb-4">Warning</h3>
                        <p className="text-gray-700 mb-6">Are you sure you want to change your password?</p>
                        <div className="flex justify-around">
                            <button
                                onClick={handleConfirmSavePassword}
                                className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition"
                            >
                                OK
                            </button>
                            <button
                                onClick={handleCancelSavePassword}
                                className="bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400 transition"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dashboard;

'use client'
import AuthContext from '@/app/AuthContext';
import React, { useContext, useState } from 'react';

const Dashboard = () => {
    const { user } = useContext(AuthContext);
  // Sample user details (this would typically come from your backend or auth system)
  const [userDetails, setUserDetails] = useState({
    email: user?.email||'demo@123', // Sample email
    profilePicture: 'https://via.placeholder.com/150', // Placeholder profile picture
  });

  // Form state for changing password
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  // Handle password change (In a real app, you would submit this to an API)
  const handleChangePassword = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
    } else {
      // API call to change password
      alert('Password changed successfully!');
    }
  };

  // Handle profile picture change (In a real app, this would be handled with file upload to the server)
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
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <h1>Dashboard</h1>

      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <img
          src={userDetails.profilePicture}
          alt="Profile"
          style={{ width: '150px', height: '150px', borderRadius: '50%', objectFit: 'cover' }}
        />
        <br />
        <input type="file" onChange={handleProfilePictureChange} style={{ marginTop: '10px' }} />
      </div>

      <div>
        <h2>User Details</h2>
        <p><strong>Email:</strong> {userDetails.email}</p>
      </div>

      <form onSubmit={handleChangePassword}>
        <h2>Change Password</h2>
        <div>
          <label htmlFor="password">New Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ marginLeft: '10px', marginBottom: '10px' }}
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            style={{ marginLeft: '10px', marginBottom: '20px' }}
          />
        </div>
        <button type="submit">Change Password</button>
      </form>
    </div>
  );
};

export default Dashboard;

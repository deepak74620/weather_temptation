'use client'
import { createContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie'; // Assuming you're using js-cookie
import { getUser } from './api/utils/getUser';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const fetchUser = async ()=>{
    try {
        const user = await getUser();
      setUser(user); 
    } catch (error) {
        console.log(error)
    }
  }
  useEffect(() => {
    // Check for existing token (e.g., in cookies) on mount
    const token = Cookies.get('accessToken');
    if (token) {
      fetchUser()
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
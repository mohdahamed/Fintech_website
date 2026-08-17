import React, { createContext, useState, useContext, useEffect } from 'react';

// Create the context
const AuthContext = createContext(null);

// Provider Component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Load user from local storage on mount
  useEffect(() => {
    const savedUser = localStorage.getItem('hype_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  // Simulate login
  const login = (email) => {
    // Extract a name from the email (e.g., john.doe@company.com -> John Doe)
    const namePart = email.split('@')[0];
    const formattedName = namePart
      .split('.')
      .map(part => part.charAt(0).toUpperCase() + part.slice(1))
      .join(' ');

    const newUser = {
      name: formattedName || 'User',
      email,
      id: `usr_${Math.random().toString(36).substr(2, 9)}`,
    };
    
    setUser(newUser);
    localStorage.setItem('hype_user', JSON.stringify(newUser));
    return true;
  };

  // Simulate signup
  const signup = (name, email) => {
    const newUser = {
      name,
      email,
      id: `usr_${Math.random().toString(36).substr(2, 9)}`,
    };
    
    setUser(newUser);
    localStorage.setItem('hype_user', JSON.stringify(newUser));
    return true;
  };

  // Logout
  const logout = () => {
    setUser(null);
    localStorage.removeItem('hype_user');
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook for using the context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

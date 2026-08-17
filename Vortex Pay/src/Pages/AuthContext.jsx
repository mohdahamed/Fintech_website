import React, { createContext, useContext, useState, useCallback } from 'react';
import { emailService } from './emailService';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const signup = useCallback(async (formData) => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Send verification email
      const emailResult = await emailService.sendVerificationEmail(formData.email);
      
      const newUser = {
        id: Math.random().toString(36).substr(2, 9),
        email: formData.email,
        fullName: formData.fullName,
        phone: formData.phone || '+1 (555) 123-4567',
        country: formData.country || 'United States',
        accountType: formData.accountType || 'personal',
        createdAt: new Date().toISOString(),
        verified: false,
        kyc: {
          status: 'pending',
          documentType: null,
          submittedAt: null
        },
        balance: {
          usd: 0,
          eur: 0,
          gbp: 0
        },
        transactions: [],
        settings: {
          twoFactorEnabled: false,
          emailNotifications: true,
          pushNotifications: true
        }
      };
      
      setUser(newUser);
      localStorage.setItem('vortexuser', JSON.stringify(newUser));
      setShowSignup(false);
      return { success: true, user: newUser, emailSent: true };
    } catch (error) {
      return { success: false, error: error.message };
    } finally {
      setIsLoading(false);
    }
  }, []);

  const login = useCallback(async (email, password) => {
    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1200));
      
      const mockUser = {
        id: 'user123',
        email: email,
        fullName: 'Default User',
        verified: true,
        accountType: 'personal',
        createdAt: new Date().toISOString(),
        balance: {
          usd: 5250.75,
          eur: 2100.00,
          gbp: 1500.50
        }
      };
      
      setUser(mockUser);
      localStorage.setItem('vortexuser', JSON.stringify(mockUser));
      setShowSignup(false);
      return { success: true, user: mockUser };
    } catch (error) {
      return { success: false, error: error.message };
    } finally {
      setIsLoading(false);
    }
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    localStorage.removeItem('vortexuser');
    setShowSignup(false);
  }, []);

  const initializeUser = useCallback(() => {
    const stored = localStorage.getItem('vortexuser');
    if (stored) {
      try {
        setUser(JSON.parse(stored));
      } catch (e) {
        console.error('Failed to parse stored user:', e);
      }
    }
  }, []);

  return (
    <AuthContext.Provider value={{
      user,
      isLoading,
      signup,
      login,
      logout,
      initializeUser,
      showSignup,
      setShowSignup
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

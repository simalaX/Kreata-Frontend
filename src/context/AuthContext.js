import React, { createContext, useContext, useEffect, useState } from 'react';
import { getCurrentAdmin, loginAdmin } from '../api/endpoints';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(() => localStorage.getItem('kreata-admin-token'));
  const [admin, setAdmin] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verify = async () => {
      if (token) {
        try {
          const res = await getCurrentAdmin();
          setAdmin(res.data);
        } catch (err) {
          setToken(null);
          localStorage.removeItem('kreata-admin-token');
        }
      }
      setLoading(false);
    };
    verify();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  const login = async (username, password) => {
    const res = await loginAdmin(username, password);
    setToken(res.data.access_token);
    localStorage.setItem('kreata-admin-token', res.data.access_token);
    return res.data;
  };

  const logout = () => {
    setToken(null);
    setAdmin(null);
    localStorage.removeItem('kreata-admin-token');
  };

  return (
    <AuthContext.Provider
      value={{ token, admin, loading, login, logout, isAuthenticated: !!token }}
    >
      {children}
    </AuthContext.Provider>
  );
};

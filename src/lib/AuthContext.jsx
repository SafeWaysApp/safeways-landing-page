import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoadingAuth, setIsLoadingAuth] = useState(false);
  const [isLoadingPublicSettings, setIsLoadingPublicSettings] = useState(false);
  const [authError, setAuthError] = useState(null);
  const [appPublicSettings, setAppPublicSettings] = useState(null);
  const [authChecked, setAuthChecked] = useState(true);

  const checkAppState = useCallback(async () => {
    setIsLoadingPublicSettings(false);
    setIsLoadingAuth(false);
    setAuthChecked(true);
    setAuthError(null);
    setAppPublicSettings(null);
  }, []);

  const checkUserAuth = useCallback(async () => {
    setIsLoadingAuth(false);
    setIsAuthenticated(false);
    setUser(null);
    setAuthChecked(true);
  }, []);

  const logout = useCallback((shouldRedirect = true) => {
    setUser(null);
    setIsAuthenticated(false);
    if (shouldRedirect) {
      window.location.href = '/';
    }
  }, []);

  const navigateToLogin = useCallback(() => {
    window.location.href = '/';
  }, []);

  const value = useMemo(() => ({
    user,
    isAuthenticated,
    isLoadingAuth,
    isLoadingPublicSettings,
    authError,
    appPublicSettings,
    authChecked,
    logout,
    navigateToLogin,
    checkAppState,
    checkUserAuth,
  }), [user, isAuthenticated, isLoadingAuth, isLoadingPublicSettings, authError, appPublicSettings, authChecked, logout, navigateToLogin, checkAppState, checkUserAuth]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');

  const logIn = (userEmail) => {
    setIsLoggedIn(true);
    setEmail(userEmail);
  };

  const logOut = () => {
    setIsLoggedIn(false);
    setEmail('');
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, logIn, logOut,email }}>
      {children}
    </AuthContext.Provider>
  );
};

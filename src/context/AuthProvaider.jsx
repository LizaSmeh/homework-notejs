import { createContext, use, useState } from "react";

const AuthContext = createContext(null);

export const useAuth = () => {
  return use(AuthContext);
};

export const AuthProvaider = ({ children }) => {
  const [user, setUser] = useState(() => localStorage.getItem("user") || null);

  const singin = (newUser, callback) => {
    setUser(newUser);
    localStorage.setItem("user", newUser);
    callback();
  };

  const singout = (callback) => {
    setUser(null);
    localStorage.removeItem("user");
    callback();
  };

  const value = {
    user,
    singin,
    singout,
  };

  return <AuthContext value={value}>{children}</AuthContext>;
};

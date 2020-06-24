import React, { createContext, useState } from "react";
import * as auth from "../services/auth";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [width, setWidth] = useState(window.innerWidth);
  const [open, setOpen] = useState(true);

  async function signIn() {
    const response = await auth.SignIn();

    setUser(response.user);
    localStorage.setItem("user", response.user.name);
  }

  function isOpen() {
    setOpen(!open);
  }

  function resizeWidth() {
    setWidth(window.innerWidth);
  }

  return (
    <AuthContext.Provider
      value={{ signed: !!user, signIn, user, open, isOpen, resizeWidth, width }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

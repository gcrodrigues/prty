import React, { createContext, useState } from "react";
import * as auth from "../services/auth";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  async function signIn() {
    const response = await auth.SignIn();

    setUser(response.user);
    localStorage.setItem("user", response.user.name);
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, signIn, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

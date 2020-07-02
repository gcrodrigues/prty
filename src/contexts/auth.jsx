import React, { createContext, useState, useEffect } from "react";
// import * as auth from "../services/auth";
import api from "../services/api";
import { useHistory } from "react-router-dom";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const history = useHistory();
  const [user, setUser] = useState(null);
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    handleUsuarios();
  }, []);

  async function handleUsuarios() {
    await api.get("usuarios").then((response) => setUsuarios(response.data));
  }

  function signIn(email, senha) {
    const usuario = usuarios
      .filter((usuario) => usuario.email === email && usuario.senha === senha)
      .map((name) => name.nome);
    setUser(usuario);
    localStorage.setItem("user", usuario);
  }

  function signOut() {
    localStorage.removeItem("user");
    setUser(null);
    history.push("/");
  }
  return (
    <AuthContext.Provider value={{ signed: !!user, signIn, user, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

/* async function signIn() {
  const response = await auth.SignIn();

  setUser(response.user);
  localStorage.setItem("user", response.user.name);
} */

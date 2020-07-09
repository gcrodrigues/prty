import React, { createContext } from "react";

import api from "../services/api";
// import auth from "../services/auth";
import { useHistory } from "react-router-dom";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const history = useHistory();
  // const [user, setUser] = useState(null);

  async function signIn(loginEmail, loginSenha) {
    await api
      .post("login", {
        login: loginEmail,
        senha: loginSenha,
      })
      .then((res) => {
        localStorage.setItem("user", res.data.nome);
        localStorage.setItem("email", res.data.email);
        localStorage.setItem("id", res.data.id);
        localStorage.setItem("token", res.data.token);
      })
      .catch((err) => console.log(err));
  }

  function signOut() {
    localStorage.removeItem("user");
    localStorage.removeItem("id");
    localStorage.removeItem("email");
    localStorage.removeItem("token");

    history.push("/");
  }
  return (
    <AuthContext.Provider value={{ signIn, signOut }}>
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

/* function signIn(loginEmail, loginSenha) {
  try {
    const data = usuarios.find(
      (usuario) =>
        usuario.email === loginEmail && usuario.senha === loginSenha
    );

    setUser(data);
    localStorage.setItem("user", data.nome);
    localStorage.setItem("email", data.email);
    localStorage.setItem("id", data.id);
  } catch (error) {
    alert("Usuário não encontrado ou senha incorreta");
  }
} */

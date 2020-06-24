import React, { useContext } from "react";
import { Link } from "react-router-dom";

import AuthContext from "../../contexts/auth";

import styles from "./SignForm.module.css";

const SignForm = ({ cadastro }) => {
  const { signIn } = useContext(AuthContext);

  async function handleSignIn(e) {
    e.preventDefault();
    signIn();
  }

  return (
    <form onSubmit={handleSignIn} className={styles.form}>
      <h1 className={styles.formTitle}>
        {cadastro ? "Faça seu cadastro!" : "Seja bem-vindo!"}
      </h1>
      {cadastro && (
        <>
          <span>E-MAIL</span>
          <input
            className={styles.input}
            type="email"
            name="email"
            id="email"
          />
        </>
      )}
      <span>USERNAME</span>
      <input className={styles.input} type="text" name="name" id="name" />
      <span>SENHA</span>
      <input
        className={styles.input}
        type="password"
        name="password"
        id="password"
      />
      <button className={styles.btn}>
        {cadastro ? "Cadastrar" : "Entrar"}
      </button>

      {cadastro ? (
        <p>
          Ja possui um cadastro? <Link to="/login">Faça o login!</Link>
        </p>
      ) : (
        <p>
          Não é cadastrado? <Link to="/signup">Cadastre-se aqui!</Link>
        </p>
      )}
    </form>
  );
};

export default SignForm;

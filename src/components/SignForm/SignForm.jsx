import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import api from "../../services/api";

import AuthContext from "../../contexts/auth";

import styles from "./SignForm.module.css";

const SignForm = ({ cadastro }) => {
  const history = useHistory();
  const { signIn } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmSenha, setConfirmSenha] = useState("");

  function handleSignIn(e) {
    e.preventDefault();
    signIn(email, senha);
  }

  async function handleSignUp(e) {
    e.preventDefault();
    if (senha !== confirmSenha) {
      alert("Senhas não correspondem");
      return;
    }
    await api
      .post(
        "usuarios",
        {
          nome,
          email,
          senha,
        },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      )
      .then((response) => {
        alert("Usuário criado com sucesso!");
        history.push("login");
      })
      .catch((err) => {
        alert("Usúario já existente");
      });
  }

  return (
    <form
      onSubmit={cadastro ? handleSignUp : handleSignIn}
      className={styles.form}
    >
      <h1 className={styles.formTitle}>
        {cadastro ? "Faça seu cadastro!" : "Seja bem-vindo!"}
      </h1>
      {cadastro && (
        <>
          <span>NOME</span>
          <input
            className={styles.input}
            type="text"
            name="name"
            id="name"
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </>
      )}
      <span>E-MAIL</span>
      <input
        className={styles.input}
        type="email"
        name="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <span>SENHA</span>
      <input
        className={styles.input}
        type="password"
        name="password"
        id="password"
        onChange={(e) => setSenha(e.target.value)}
        required
        minLength={4}
      />
      {cadastro && (
        <>
          <span>CONFIRME A SENHA</span>
          <input
            className={styles.input}
            type="password"
            name="repeatPass"
            id="repeatPass"
            onChange={(e) => setConfirmSenha(e.target.value)}
            required
            minLength={4}
          />
        </>
      )}

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

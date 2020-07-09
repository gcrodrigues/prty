import React, { useContext, useState } from "react";
// import AuthContext from "../../contexts/auth";
import LayoutContext from "../../contexts/layout";
import { FaTimes } from "react-icons/fa";
import api from "../../services/api";

import styles from "./Password.module.css";

function Usuario({ password }) {
  // const { user } = useContext(AuthContext);
  const { handleModal } = useContext(LayoutContext);
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  async function handleEditUsuario(e) {
    e.preventDefault();
    if (pass !== confirmPass) {
      alert("Senhas não correspondem");
      return;
    }
    await api.put(
      "usuarios",
      {
        senha: pass,
        id: Number(localStorage.getItem("id")),
      },
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    );
    handleModal();
  }

  return (
    <div className={styles.container}>
      <button className={styles.close} onClick={handleModal}>
        <FaTimes size={20} />
      </button>
      <h1 className={styles.formTitle}>Troque sua senha</h1>
      <form onSubmit={handleEditUsuario} className={styles.form}>
        <span>Nova Senha</span>
        <input
          className={styles.input}
          type="password"
          name="password"
          id="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          required
        />
        <span>Confirme sua senha</span>
        <input
          className={styles.input}
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          value={confirmPass}
          onChange={(e) => setConfirmPass(e.target.value)}
          required
        />
        <input className={styles.submit} type="submit" value="Editar" />
      </form>
    </div>
  );
}

export default Usuario;

import React, { useContext, useState } from "react";
// import AuthContext from "../../contexts/auth";
import LayoutContext from "../../contexts/layout";
import { FaTimes } from "react-icons/fa";
import api from "../../services/api";

import styles from "./Usuario.module.css";

function Usuario({ password }) {
  // const { user } = useContext(AuthContext);
  const { handleModal } = useContext(LayoutContext);
  const [nome, setNome] = useState(localStorage.getItem("user"));
  const [email, setEmail] = useState(localStorage.getItem("email"));

  async function handleEditUsuario(e) {
    e.preventDefault();
    await api.put(
      "usuarios",
      {
        nome,
        email,
        id: Number(localStorage.getItem("id")),
      },
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    );
  }

  return (
    <div className={styles.container}>
      <button className={styles.close} onClick={handleModal}>
        <FaTimes size={20} />
      </button>
      <h1 className={styles.formTitle}>Edite seu perfil</h1>
      <form onSubmit={handleEditUsuario} className={styles.form}>
        <span>NOME</span>
        <input
          className={styles.input}
          type="text"
          name="name"
          id="name"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
        <span>EMAIL</span>
        <input
          className={styles.input}
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input className={styles.submit} type="submit" value="Editar" />
      </form>
    </div>
  );
}

export default Usuario;
